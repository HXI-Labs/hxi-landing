import Link from 'next/link';
import { PAGE_PADDING } from '@/lib/constants';

export default function Header() {
  return (
    <header className={`${PAGE_PADDING} pt-16 fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-50`}>
      <div className="flex justify-between items-start">
        <Link href="/" className="text-xl font-bold text-gray-900">
          <img src="/logo3.svg" alt="HXI Labs" width={50}/>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors font-semibold">
            Blog
          </Link>
           <Link href="/plan" className="text-gray-600 hover:text-gray-900 transition-colors font-semibold">
            Plan
          </Link>
          <a href="mailto:hello@hxilabs.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-semibold">
            hello@hxilabs.com
          </a>
        </div>
      </div>
    </header>
  );
}
