import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-32">
      <section className="px-8 md:px-20 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <span className="label-md uppercase tracking-[0.2em] text-secondary font-bold mb-6 block">Industrial Legacy</span>
            <h1 className="font-headline text-5xl md:text-7xl leading-[1.1] tracking-tight text-primary max-w-4xl">
              Precision Manufacturing Since 1994
            </h1>
          </div>
          <div className="md:col-span-4 flex justify-end">
            <p className="font-body text-lg text-on-surface-variant border-l-2 border-secondary pl-6 py-2 uppercase tracking-wide text-sm font-bold">
              Serving wholesalers and retailers across Kerala, Karnataka &amp; Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-20 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full h-[500px] overflow-hidden">
                <img alt="Industrial candle manufacturing" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida/ADBb0uhelVO4Sw_dhvxfklaUu69DKmlWF-c5dhuJ3S2YjL8mDcgLbUHEZxqyXlHGZ72fgHf_iI22B3_p1mYcsxfp4vm4SMTVnNLOQ2Tg3TAFl6prVPmfqlyvHRAh2TERDB4Zv895oUp8lPi4GUBfhiKIibjluXqzZM07JOfInaI0FaKeqGzM7nGIr9Qts25oZkmvW-1JkVqm3sJwEsMc6WMuuGz3SswzDiJ9pZwLjMzrIqsuxJaQbf8zKJ3tXznUIh0i_keLyZhDJPFgHg"/>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-on-primary p-8 hidden md:block">
                <div className="text-4xl font-headline mb-1">30+</div>
                <div className="text-xs uppercase tracking-widest font-bold">Years of Trust</div>
              </div>
            </div>
            <div>
              <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-4 block">Operational Excellence</span>
              <h2 className="font-headline text-4xl mb-12 text-primary">Our Strength</h2>
              <div className="space-y-10">
                <div className="flex items-start gap-6 border-b border-outline-variant pb-8">
                  <span className="material-symbols-outlined text-3xl text-primary">factory</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1">40+ Manufacturing Machines</h3>
                    <p className="text-on-surface-variant text-sm">Industrial-grade infrastructure designed for precision and repetitive quality at scale.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 border-b border-outline-variant pb-8">
                  <span className="material-symbols-outlined text-3xl text-primary">weight</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1">1–1.5 Ton Daily Production</h3>
                    <p className="text-on-surface-variant text-sm">Consistent daily output to meet the high demands of regional distribution networks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <span className="material-symbols-outlined text-3xl text-primary">speed</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Seasonal High-Volume Handling</h3>
                    <p className="text-on-surface-variant text-sm">Robust logistics and surge capacity management for peak festive and retail seasons.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 bg-surface-container-lowest border-t-4 border-primary">
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">Quality Controls</h4>
              <p className="text-on-surface-variant leading-relaxed">Stringent industrial testing for burn time consistency, flame stability, and thermal resistance in tropical climates.</p>
            </div>
            <div className="p-10 bg-surface-container-lowest border-t-4 border-primary">
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">Bulk Logistics</h4>
              <p className="text-on-surface-variant leading-relaxed">Integrated supply chain with Peekey Candles &amp; Trading, ensuring reliable delivery schedules across South India.</p>
            </div>
            <div className="p-10 bg-surface-container-lowest border-t-4 border-primary">
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">Wholesale Capacity</h4>
              <p className="text-on-surface-variant leading-relaxed">Optimized production lines for large-scale orders with tiered pricing structures for retail partners.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-20 py-40">
        <div className="max-w-7xl mx-auto bg-primary py-32 px-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img alt="Industrial Texture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAjsXEUv3nTkVyxbj7B2-GQJjpurX2-hYDf2vs_xuEtb6hs7sV8X41hizHzfqyZU643i1a96EXL6bpXNvbW92shj0t6puKHG8zhigyySC4sKfxa-xGcjVM9_tJfqSEsAJSyU-XDze4DNm-DcR-ZpNpj3U5-fQIax67_HGuKFPy13rIfKUG3zBsczIJN7wvIcwCXizGWSuldD4Tq6Vp94yXKAq7hlyK6HdKJqo3hCSmU8UHbby6pHq7Wc3hYack9TgEZQIwG4UOJYg"/>
          </div>
          <div className="relative z-10">
            <h2 className="font-headline text-4xl text-on-primary mb-8">Scale Your Wholesale Inventory</h2>
            <p className="text-on-primary-container max-w-xl mx-auto mb-12 font-body font-medium uppercase tracking-widest text-xs">
              Reliable supply. Industrial scale. South India's trusted candle partner.
            </p>
            <Link to="/enquiry" className="bg-secondary text-on-secondary px-10 py-4 text-sm tracking-widest uppercase font-bold transition-all hover:scale-[1.05] hover:shadow-xl inline-block">
              Request Wholesale Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
