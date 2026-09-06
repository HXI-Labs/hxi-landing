import { getSortedPostsData } from '@/lib/mdx';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { PAGE_PADDING } from '@/lib/constants';

export const metadata = {
  title: 'Blog | HXI Labs',
  description: 'Thoughts on technology, design, and human connection.',
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogIndex() {
  const [featured, ...rest] = getSortedPostsData();

  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <Header />
      <main className={`${PAGE_PADDING} pt-16 sm:pt-20 pb-20 flex-grow`}>
        {!featured && <p className="text-muted italic">No blog posts found.</p>}

        {featured && (
          <article className="group">
            <Link href={`/blog/${featured.slug}`} className="block">
              <p className="text-xs uppercase tracking-[0.18em] text-muted mb-4">Latest</p>
              <h1 className="text-4xl md:text-5xl font-nineties leading-[1.05] group-hover:text-muted transition-colors mb-3">
                {featured.title}
              </h1>
              <p className="text-sm text-muted font-mono mb-6">{formatDate(featured.date)}</p>
              <p className="text-[18px] leading-[1.6] mb-6">{featured.description}</p>
              <span className="link">Read the essay</span>
            </Link>
          </article>
        )}

        {rest.length > 0 && (
          <>
            <hr className="border-0 border-t border-rule my-14" />
            <div className="space-y-12">
              {rest.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                      <h2 className="text-2xl font-nineties group-hover:text-muted transition-colors">{post.title}</h2>
                      <span className="text-sm text-muted font-mono shrink-0">{formatDate(post.date)}</span>
                    </div>
                    <p className="text-[17px] leading-[1.6] text-muted mb-3">{post.description}</p>
                    <span className="link text-[15px]">Read more</span>
                  </Link>
                </article>
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
