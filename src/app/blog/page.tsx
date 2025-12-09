import { getSortedPostsData } from '@/lib/mdx';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { PAGE_PADDING } from '@/lib/constants';

export const metadata = {
  title: 'Blog | HXI Labs',
  description: 'Thoughts on technology, design, and human connection.',
};

export default function BlogIndex() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className={`${PAGE_PADDING} pt-32 pb-20 flex-grow`}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-nineties text-gray-900 mb-16">Blog</h1>
          <div className="space-y-16">
            {posts.map((post) => (
              <article key={post.slug} className="group cursor-pointer">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex flex-col space-y-3">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                          <h2 className="text-2xl font-normal text-gray-900 group-hover:text-gray-600 transition-colors font-nineties">
                              {post.title}
                          </h2>
                          <span className="text-sm text-gray-400 font-mono shrink-0">
                              {new Date(post.date).toLocaleDateString("en", {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                          </span>
                      </div>
                    
                    <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                      {post.description}
                    </p>
                    
                    <div className="pt-2">
                        <span className="text-sm text-gray-900 border-b border-gray-900 pb-0.5 group-hover:border-gray-600 group-hover:text-gray-600 transition-all">Read more</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
            {posts.length === 0 && (
                <p className="text-gray-500 italic">No blog posts found.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
