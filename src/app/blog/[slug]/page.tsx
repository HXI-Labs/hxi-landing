import { getPostBySlug, getSortedPostsData } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.title} | HXI Labs`,
    description: post.description,
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className={`pt-32 pb-20 flex-grow`}>
         <div className="max-w-3xl mx-auto">
            <header className="mb-2 border-b border-gray-100 pb-0">
                <div className="text-sm text-gray-500 font-mono mb-4">{new Date(post.date).toLocaleDateString("en", {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}</div>
            </header>
            
            <article className="prose prose-gray prose-lg max-w-none 
                prose-headings:font-nineties prose-headings:font-normal prose-headings:text-gray-900
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-gray-900 prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-gray-600
                prose-blockquote:border-l-gray-900 prose-blockquote:text-gray-600 prose-blockquote:font-light prose-blockquote:italic
                prose-strong:font-medium prose-strong:text-gray-900
                prose-img:rounded-xl prose-img:shadow-sm
                ">
                <MDXRemote source={post.content} components={{
                    h1: (props) => <h1 {...props} className="text-4xl md:text-5xl font-nineties text-gray-900 mb-6 leading-tight" />,
                }}
                 />
            </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
