import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';

interface EmailCaptureFormProps {
  source?: string;
  onSuccess?: () => void;
  buttonText?: string;
  placeholder?: string;
  className?: string;
}

export default function EmailCaptureForm({
  source = 'homepage',
  onSuccess,
  buttonText = 'Join the waitlist',
  placeholder = 'your@email.com',
  className = '',
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const signupMutation = trpc.waitlist.signup.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setLoading(true);
    try {
      const result = await signupMutation.mutateAsync({
        email,
        source,
      });

      if (result.success) {
        toast.success('Thanks for joining! We\'ll be in touch soon.');
        setEmail('');
        onSuccess?.();
      } else {
        toast.info(result.message || 'You\'re already on our waitlist');
      }
    } catch (error) {
      toast.error('Failed to join waitlist. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex gap-4 ${className}`}>
      <input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-6 py-3 rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
        disabled={loading}
      />
      <Button
        type="submit"
        disabled={loading}
        className="btn-primary whitespace-nowrap"
      >
        {loading ? 'Joining...' : buttonText}
      </Button>
    </form>
  );
}
