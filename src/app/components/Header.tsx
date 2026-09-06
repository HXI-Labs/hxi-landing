import Link from 'next/link';
import { PAGE_PADDING } from '@/lib/constants';

export default function Header() {
  return (
    <header className={`${PAGE_PADDING} pt-10 sm:pt-12`}>
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="HXI Labs home" className="block">
          <img src="/logo3.svg" alt="HXI Labs" width={44} height={34} />
        </Link>
        <nav className="flex items-center gap-5 text-[15px]">
          <Link href="/blog" className="link">Blog</Link>
          <Link href="/plan" className="link">Plan</Link>
        </nav>
      </div>
    </header>
  );
}
