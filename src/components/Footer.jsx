import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-neutral-950 w-full py-20 px-12 tonal-shift-bg-only">
      <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-16 max-w-7xl mx-auto">
        <div>
          <div className="font-serif italic text-xl text-stone-800 dark:text-stone-100 mb-8">Dizsfar Candles</div>
          <p className="text-neutral-500 dark:text-stone-500 font-sans text-xs uppercase tracking-[0.2em] leading-relaxed max-w-xs">
            Leading the industry in large-scale candle manufacturing with a focus on purity and performance.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h5 className="text-neutral-900 dark:text-stone-200 font-sans text-xs uppercase tracking-[0.2em] font-bold mb-6">Explore</h5>
            <Link className="block text-neutral-500 dark:text-stone-500 font-sans text-xs uppercase tracking-[0.2em] hover:text-neutral-900 dark:hover:text-stone-100 transition-opacity opacity-80 hover:opacity-100" to="/products">Wholesale</Link>
            <Link className="block text-neutral-500 dark:text-stone-500 font-sans text-xs uppercase tracking-[0.2em] hover:text-neutral-900 dark:hover:text-stone-100 transition-opacity opacity-80 hover:opacity-100" to="/manufacturing">Process</Link>
            <Link className="block text-neutral-500 dark:text-stone-500 font-sans text-xs uppercase tracking-[0.2em] hover:text-neutral-900 dark:hover:text-stone-100 transition-opacity opacity-80 hover:opacity-100" to="/about">About Us</Link>
          </div>
          <div className="space-y-4">
            <h5 className="text-neutral-900 dark:text-stone-200 font-sans text-xs uppercase tracking-[0.2em] font-bold mb-6">Legal</h5>
            <Link className="block text-neutral-500 dark:text-stone-500 font-sans text-xs uppercase tracking-[0.2em] hover:text-neutral-900 dark:hover:text-stone-100 transition-opacity opacity-80 hover:opacity-100" to="/">Terms</Link>
            <Link className="block text-neutral-500 dark:text-stone-500 font-sans text-xs uppercase tracking-[0.2em] hover:text-neutral-900 dark:hover:text-stone-100 transition-opacity opacity-80 hover:opacity-100" to="/enquiry">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end">
          <p className="text-neutral-900 dark:text-stone-200 font-sans text-xs uppercase tracking-[0.2em] mb-4">Newsletter</p>
          <div className="flex w-full max-w-sm border-b border-outline-variant/30 pb-2">
            <input className="bg-transparent border-none text-xs tracking-widest focus:ring-0 w-full p-0 outline-none" placeholder="YOUR EMAIL" type="email" />
            <button className="material-symbols-outlined text-neutral-400 hover:text-primary transition-colors">east</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-outline-variant/10 text-center">
        <p className="text-neutral-500 dark:text-stone-500 font-sans text-[10px] uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} PEE KEY CANDLES AND WORKS AND TRADING. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
