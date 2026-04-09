export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Understanding Peptide Therapy: A Beginner\'s Guide',
      excerpt: 'An introduction to peptide therapy, how it works, and why it\'s gaining traction among health-conscious professionals.',
      date: 'Coming soon',
      category: 'Education',
    },
    {
      id: 2,
      title: 'The Science of Longevity: Measuring What Matters',
      excerpt: 'A deep dive into the biomarkers that matter for longevity, and how to interpret your blood work.',
      date: 'Coming soon',
      category: 'Science',
    },
    {
      id: 3,
      title: 'Peptides vs TRT: When to Consider Each',
      excerpt: 'Understanding the differences between peptide therapy and testosterone replacement therapy, and how to choose.',
      date: 'Coming soon',
      category: 'Comparison',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-section-heading text-foreground mb-4">
            Blog
          </h1>
          <p className="text-subheading text-foreground/70 max-w-2xl mx-auto">
            Insights on health optimisation, longevity science, and clinical best practices.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-card rounded-lg p-8 border border-border card-hover opacity-50 cursor-not-allowed"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-muted text-foreground/70 text-xs font-sans font-semibold">
                    {post.category}
                  </span>
                  <span className="text-small text-foreground/50">{post.date}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                  {post.title}
                </h3>
                <p className="text-body text-foreground/70 mb-6">
                  {post.excerpt}
                </p>
                <button className="text-accent font-sans font-semibold hover:opacity-70 transition-opacity cursor-not-allowed">
                  Read more →
                </button>
              </div>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-16 text-center">
            <div className="bg-muted rounded-lg p-12 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                More content coming soon
              </h2>
              <p className="text-body text-foreground/70 max-w-2xl mx-auto">
                We're building a comprehensive library of articles on peptide therapy, longevity science, and clinical best practices. Subscribe to our newsletter to be notified when new posts are published.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-section-heading text-background mb-4">
            Stay updated
          </h2>
          <p className="text-subheading text-background/80 mb-8">
            Get insights on health optimisation delivered to your inbox.
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="px-8 py-3 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity font-sans font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
