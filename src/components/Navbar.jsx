import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] no-border tonal-shift-bottom">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-[1440px] mx-auto">
        <Link to="/" className="font-serif text-2xl font-light tracking-tighter text-neutral-900 dark:text-stone-50 block">
          Dizsfar Candles
          <span className="block text-[10px] uppercase tracking-[0.2em] font-sans font-semibold opacity-60 mt-1">
            A unit of Peekey Candles &amp; Trading
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          <Link className="text-neutral-500 dark:text-stone-400 font-medium font-serif text-lg tracking-tight hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors duration-300" to="/">Home</Link>
          <Link className="text-neutral-500 dark:text-stone-400 font-medium font-serif text-lg tracking-tight hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors duration-300" to="/products">Products</Link>
          <Link className="text-neutral-500 dark:text-stone-400 font-medium font-serif text-lg tracking-tight hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors duration-300" to="/manufacturing">Manufacturing</Link>
          <Link className="text-neutral-500 dark:text-stone-400 font-medium font-serif text-lg tracking-tight hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors duration-300" to="/about">About</Link>
          <Link className="text-neutral-500 dark:text-stone-400 font-medium font-serif text-lg tracking-tight hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors duration-300" to="/enquiry">Contact</Link>
        </div>
        <Link to="/enquiry" className="bg-primary text-on-primary px-6 py-2.5 text-sm uppercase tracking-widest font-bold scale-100 hover:scale-[1.01] transition-transform hidden md:inline-block">
          Bulk Enquiry
        </Link>
      </div>
    </nav>
  );
}
