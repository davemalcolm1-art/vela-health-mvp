import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

export default function Quiz() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  type QuizStep = {
    title: string;
    subtitle?: string;
    type: 'intro' | 'goal' | 'baseline' | 'text' | 'email';
    options?: Array<{ id: string; label: string; icon?: string; desc?: string }>;
    placeholder?: string;
    field?: string;
  };

  const [responses, setResponses] = useState({
    primaryGoal: '',
    healthBaseline: '',
    symptoms: '',
    medications: '',
    bloodWorkHistory: '',
    sportStatus: '',
    lifestyleFactors: '',
  });

  const submitQuizMutation = trpc.quiz.submitQuiz.useMutation();

  const quizSteps: QuizStep[] = [
    {
      title: "Let's find out if our program is right for you.",
      subtitle: 'This assessment takes 3–5 minutes. It\'s reviewed by our clinical team before any recommendation is made.',
      type: 'intro',
    },
    {
      title: "What's your primary health goal right now?",
      type: 'goal',
      options: [
        { id: 'body-composition', label: 'Body composition', icon: '🏋️', desc: 'Building muscle, reducing fat' },
        { id: 'energy-cognition', label: 'Energy & cognition', icon: '⚡', desc: 'Sustained energy, mental clarity' },
        { id: 'recovery-repair', label: 'Recovery & repair', icon: '🔄', desc: 'Injury recovery, inflammation' },
        { id: 'skin-collagen', label: 'Skin & collagen', icon: '✨', desc: 'Skin quality, anti-ageing' },
        { id: 'immune-resilience', label: 'Immune resilience', icon: '🛡️', desc: 'Immune function, longevity' },
        { id: 'comprehensive', label: 'Comprehensive', icon: '📊', desc: 'Multiple goals, full program' },
        { id: 'not-sure', label: 'Not sure', icon: '❓', desc: 'I\'d like guidance from a doctor' },
      ],
    },
    {
      title: 'How would you describe your current situation?',
      type: 'baseline',
      options: [
        { id: 'plateau', label: 'I\'m active and generally healthy, but I\'ve plateaued' },
        { id: 'decline', label: 'I\'ve noticed a significant decline over 12–24 months' },
        { id: 'recovery', label: 'I\'m recovering from injury or managing a specific condition' },
        { id: 'bloodwork', label: 'I\'ve had blood panels done and want to act on results' },
      ],
    },
    {
      title: 'Any specific symptoms or concerns?',
      type: 'text',
      placeholder: 'E.g., fatigue, brain fog, joint pain, skin issues...',
      field: 'symptoms',
    },
    {
      title: 'Current medications or supplements?',
      type: 'text',
      placeholder: 'List any medications, supplements, or nootropics you\'re currently taking',
      field: 'medications',
    },
    {
      title: 'Have you had blood work done recently?',
      type: 'baseline',
      options: [
        { id: 'yes-recent', label: 'Yes, within the last 6 months' },
        { id: 'yes-old', label: 'Yes, but more than 6 months ago' },
        { id: 'never', label: 'No, never had comprehensive blood work' },
      ],
    },
    {
      title: 'Do you compete in WADA-tested sport?',
      type: 'baseline',
      options: [
        { id: 'yes', label: 'Yes, I compete in WADA-tested sport' },
        { id: 'no', label: 'No' },
      ],
    },
    {
      title: 'What\'s your email?',
      type: 'email',
    },
  ];

  const currentStep = quizSteps[step];

  const handleNext = () => {
    if (step === 0) {
      setStep(1);
    } else if (step === quizSteps.length - 1) {
      handleSubmit();
    } else {
      setStep(step + 1);
    }
  };

  const handleOptionSelect = (value: string) => {
    if (step === 1) {
      setResponses({ ...responses, primaryGoal: value });
    } else if (step === 2) {
      setResponses({ ...responses, healthBaseline: value });
    } else if (step === 5) {
      setResponses({ ...responses, bloodWorkHistory: value });
    } else if (step === 6) {
      setResponses({ ...responses, sportStatus: value });
    }
    setTimeout(() => handleNext(), 300);
  };

  const handleTextInput = (value: string) => {
    if (step === 3) {
      setResponses({ ...responses, symptoms: value });
    } else if (step === 4) {
      setResponses({ ...responses, medications: value });
    }
  };

  const handleSubmit = async () => {
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setLoading(true);
    try {
      const result = await submitQuizMutation.mutateAsync({
        email,
        primaryGoal: responses.primaryGoal,
        healthBaseline: responses.healthBaseline,
        symptoms: responses.symptoms,
        medications: responses.medications,
        bloodWorkHistory: responses.bloodWorkHistory,
        sportStatus: responses.sportStatus,
        eligible: 1,
      });

      setLocation(`/quiz/results/${result.quizResponseId}`);
    } catch (error) {
      toast.error('Failed to submit quiz. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-foreground text-background flex items-center justify-center py-12">
      <div className="w-full max-w-2xl px-4">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-small">Step {step + 1} of {quizSteps.length}</span>
            <span className="text-small">{Math.round(((step + 1) / quizSteps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-background/20 rounded-full h-2">
            <div
              className="bg-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / quizSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-background mb-4">
            {currentStep.title}
          </h1>
          {currentStep.subtitle && (
            <p className="text-subheading text-background/80">
              {currentStep.subtitle}
            </p>
          )}
        </div>

        {/* Intro Step */}
        {currentStep.type === 'intro' && (
          <div className="space-y-6">
            <p className="text-body text-background/70">
              No commitment required. Your data is handled under Australia's Privacy Act.
            </p>
          </div>
        )}

        {/* Goal Selection */}
        {currentStep.type === 'goal' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentStep.options?.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className="p-6 rounded-lg border-2 border-background/30 hover:border-accent hover:bg-accent/10 transition-all text-left"
              >
                {option.icon && <div className="text-3xl mb-3">{option.icon}</div>}
                <h3 className="font-sans font-semibold text-background mb-1">
                  {option.label}
                </h3>
                {option.desc && <p className="text-small text-background/70">{option.desc}</p>}
              </button>
            ))}
          </div>
        )}

        {/* Baseline/Option Selection */}
        {currentStep.type === 'baseline' && (
          <div className="space-y-4">
            {currentStep.options?.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className="w-full p-4 rounded-lg border-2 border-background/30 hover:border-accent hover:bg-accent/10 transition-all text-left font-sans"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {/* Text Input */}
        {currentStep.type === 'text' && (
          <div>
            <textarea
              placeholder={currentStep.placeholder}
              value={step === 3 ? responses.symptoms : responses.medications}
              onChange={(e) => handleTextInput(e.target.value)}
              className="w-full p-4 rounded-lg bg-background/10 border border-background/30 text-background placeholder-background/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50"
              rows={4}
            />
          </div>
        )}

        {/* Email Input */}
        {currentStep.type === 'email' && (
          <div>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-lg bg-background/10 border border-background/30 text-background placeholder-background/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50"
            />
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-4 mt-12">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 px-6 py-3 rounded-lg border-2 border-background/30 hover:border-background transition-colors font-sans font-semibold"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={loading}
            className="flex-1 px-6 py-3 rounded-lg bg-accent text-accent-foreground hover:opacity-90 disabled:opacity-50 transition-opacity font-sans font-semibold"
          >
            {loading ? 'Submitting...' : step === quizSteps.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
