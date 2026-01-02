import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/10 border-b border-white/10 px-6 py-4 flex items-center justify-between transition-all duration-300">
      <div className="flex items-center gap-2">
        <Link href="/" className={`${playfair.className} text-xl font-bold tracking-tight text-white/90 hover:text-white transition-colors`}>
          The Tiled Archive
        </Link>
      </div>
      
      <div className="flex items-center gap-6">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-sm font-medium text-white/70 hover:text-white hover:scale-105 transition-all duration-200"
    >
      {children}
    </Link>
  );
}
