import Link from 'next/link';
import { blogPosts } from '../components/data/blog';

export default function BlogPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const category = searchParams?.category;

  // FILTER BERDASARKAN ID YANG KAMU MAU
  const filteredPosts = blogPosts.filter((post) => {
    if (!category) return true;

    if (category === "Next.js") {
      return post.id === 1 || post.id === 3;
    }

    if (category === "CSS") {
      return post.id === 2 || post.id === 4;
    }

    return true;
  });

  return (
    <main className="mx-auto bg-emerald-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-screen">
        <h1 className="text-3xl font-bold mb-8 text-soft-brown">Blog Posts</h1>

        {/* Category Filter */}
        <div className="mt-4 mb-6 flex justify-center space-x-4">
          <Link href="/blog" className={`text-soft-brown ${!category ? 'font-bold' : ''}`}>
            All
          </Link>
          <Link href="/blog?category=Next.js" className={`text-soft-brown ${category === 'Next.js' ? 'font-bold' : ''}`}>
            Next.js
          </Link>
          <Link href="/blog?category=CSS" className={`text-soft-brown ${category === 'CSS' ? 'font-bold' : ''}`}>
            CSS
          </Link>
        </div>

        {/* Blog List */}
        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="border border-gray-200 p-4 rounded-lg">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold mb-2 text-soft-brown hover:underline">
                  {post.title}
                </h2>
              </Link>
              <p className="text-white text-sm font-semibold mb-2">{post.date}</p>
              <p>{post.excerpt}</p>
            </div>
          ))}

          {filteredPosts.length === 0 && (
            <p className="text-center text-white mt-8">
              Tidak ada blog di kategori ini.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
