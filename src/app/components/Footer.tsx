import Link from 'next/link';
import { PAGE_PADDING } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className={`${PAGE_PADDING} pb-16`}>
      <hr className="border-0 border-t border-rule mb-8" />
      <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[17px]">
        <Link href="/blog" className="link">Blog</Link>
        <Link href="/plan" className="link">Plan</Link>
        <a href="https://github.com/HXI-Labs" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
      </nav>
      <p className="mt-5 text-[17px]">
        <a href="mailto:hello@hxilabs.com" className="hover:text-muted transition-colors">hello@hxilabs.com</a>
      </p>
    </footer>
  );
}
