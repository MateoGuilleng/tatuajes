export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-[var(--primary-color)] mb-8">Blog de Tatuajes</h1>
        <p className="text-lg mb-12">Artículos sobre la cultura del tatuaje japonés y otras tradiciones.</p>
        {/* Future blog posts will be listed here */}
      </div>
    </div>
  );
}
