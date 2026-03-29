import { Link } from 'react-router-dom';

export default function Manufacturing() {
  return (
    <div className="pt-24">
      <section className="relative min-h-[819px] flex items-center overflow-hidden px-8 md:px-20 py-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 z-10">
            <span className="inline-block label-md uppercase tracking-[0.3em] text-secondary mb-6 font-semibold">Industrial Excellence</span>
            <h1 className="font-headline text-5xl md:text-7xl leading-tight text-primary mb-8 -tracking-[0.02em]">
              Precision in Every Pour: Our Manufacturing Process
            </h1>
            <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Part of the Peekey Candles &amp; Trading Infrastructure</p>
            <p className="text-on-surface-variant text-lg max-w-lg mb-10 leading-relaxed">
              Combining artisanal heritage with industrial-scale precision. We transform high-grade wax into luminous quality for global wholesale demands.
            </p>
            <div className="flex items-center gap-8">
              <div className="h-[1px] w-12 bg-outline-variant"></div>
              <span className="font-serif italic text-xl">The Gold Standard in Candle Production</span>
            </div>
          </div>
          <div className="lg:col-span-6 relative h-[600px] lg:h-[700px] w-full">
            <img alt="Close-up of molten white wax being poured into glass jars" className="w-full h-full object-cover shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCl0yQJh7-Pgs0NI5OAiCSlUVChuKyM8U5THvao-QJXqsB8W2QJNPs_1aqUqVaB8OWNzrq3pRmSbZ8hmuU3vPSzuL1-8n5cLTFmqYgOkDb5JUbIFjvJO9_Vg7Kodx06FFIQpk01NLwkYreeFAiCOBeouu3ZRK3IVjp0GqsfdM-LtTP9tsTDo2ANPLSozIywt-6Yigbm7nnPdcZlfGhzA7PLWJw19mkI-7REdS8dTffEnDup_OhTRAzgPz1sPduGmdiEwM-fzRJBqw"/>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-10 shadow-xl max-w-xs hidden md:block">
              <span className="block font-headline text-4xl text-primary mb-2">1.5 Tons</span>
              <span className="label-md uppercase tracking-widest text-on-surface-variant">Daily Output Capacity</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-headline text-4xl text-primary mb-4">Production Strength</h2>
            <p className="text-on-surface-variant max-w-2xl mb-4">Leveraging the extensive industrial heritage of Peekey Candles &amp; Trading, our facility is engineered for relentless consistency and high-volume wholesale fulfillment.</p>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-sm">verified_user</span>
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest">Designed to handle consistent bulk demand without delays.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-lowest p-12 flex flex-col justify-between min-h-[400px]">
              <div>
                <span className="material-symbols-outlined text-4xl text-secondary mb-6">factory</span>
                <h3 className="font-headline text-3xl mb-4">40+ Precision Machines</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-md">Built on decades of Peekey Candles &amp; Trading expertise, our floor features state-of-the-art automated pouring and cooling systems that ensure every candle maintains identical structural integrity.</p>
              </div>
              <div className="mt-8 flex gap-4">
                <span className="bg-surface-container px-4 py-2 text-xs uppercase tracking-widest font-bold">Semi-Automated</span>
                <span className="bg-surface-container px-4 py-2 text-xs uppercase tracking-widest font-bold">24/7 Monitoring</span>
              </div>
            </div>
            <div className="bg-primary p-12 text-on-primary flex flex-col justify-center">
              <h4 className="label-md uppercase tracking-[0.2em] opacity-60 mb-8 font-bold">Capacity Metric</h4>
              <div className="text-6xl font-headline mb-4">1500<span className="text-2xl ml-2">kg</span></div>
              <p className="text-primary-fixed-dim font-light italic">Raw material processed daily to meet expanding market demands across South India.</p>
            </div>
            <div className="md:col-span-3 h-[400px] overflow-hidden">
              <img alt="Historical candle manufacturing factory" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNTMn8R6fTqcKdHGvqUAxldbVw0sWqEoBUklYJ9gGLkvGL7XSm9QmnOqjCb5rnoeTaIr71UuPYhRTX4rFFfbFxE7ASdiammnDcNbV1KyHn6h6saTcXFE78S84s07YwXTtMhbXlaTAdUizD3EyPM0A_fwPg7AF2z4uMHUniWp0bnmEp38qjbTx7-s94fjH2O9qRVo6aX_iLSfC3dR-ajjP0dQN0mQzUp2PlmebWRXL0AcMG8JstDOqNO3WcRtx1WB1sGpw74Wfkjb8"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 md:px-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="label-md uppercase tracking-[0.3em] text-secondary mb-4 font-semibold block">Execution</span>
            <h2 className="font-headline text-4xl text-primary">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[10%] left-0 w-full h-[1px] bg-outline-variant/30 -z-10"></div>
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center font-headline text-xl mb-6">1</div>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-3">Order Confirmation</h3>
              <p className="text-on-surface-variant text-xs leading-relaxed">Swift administrative processing and verification of bulk requirements.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center font-headline text-xl mb-6">2</div>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-3">Production Planning</h3>
              <p className="text-on-surface-variant text-xs leading-relaxed">Strategic batch scheduling aligned with industrial capacity limits.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center font-headline text-xl mb-6">3</div>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-3">Quality Check</h3>
              <p className="text-on-surface-variant text-xs leading-relaxed">Stringent multi-point inspections following the Zero-Defect Protocol.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center font-headline text-xl mb-6">4</div>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-3">Dispatch &amp; Delivery</h3>
              <p className="text-on-surface-variant text-xs leading-relaxed">Secure temperature-controlled transport through our regional network.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <img alt="Premium candle quality control process" className="w-full h-[600px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCvuIn3BpdRNy51FrcckZVxqJJnuRuFM_hg6XqvXiYmRRRwQLRlCx6LGbmvXnijfqg8utNqYkviTgZgaDc8kUJ-PMK2MJWdOCDdHQk9NnsY_r42FIOUHUjbSBeVafWl5-BgDKa_qXncopE9DpP1DgY53MacD_fypC9wOoEyiy8o3DHMQVp5LRK0XkAOdk-OP7jEEEMWZxTlTNBNWEkf6lk3kzfpsY4VovWi-69rpUcWEoE0h2lzZbQO2YyNONJrQhEnx-uQYQjoSg"/>
            <div className="absolute bottom-0 right-0 translate-x-12 translate-y-12 bg-surface-container-lowest p-12 shadow-2xl w-3/4 border-l-4 border-secondary hidden sm:block">
              <h3 className="font-headline text-2xl mb-6">The Zero-Defect Protocol</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">verified</span>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider mb-1">Batch Testing</p>
                    <p className="text-xs text-on-surface-variant">Every 50th unit undergoes destructive burn testing for safety and longevity.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">opacity</span>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider mb-1">Purity Analysis</p>
                    <p className="text-xs text-on-surface-variant">Proprietary blend of paraffin and vegetable waxes, tested for smoke emission and scent clarity.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:pl-20">
            <span className="label-md uppercase tracking-[0.3em] text-secondary mb-6 font-semibold block">Quality Assurance</span>
            <h2 className="font-headline text-5xl text-primary mb-8 leading-tight">Mastery in Consistency</h2>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              Our quality control isn't just a final step; it's the foundation of our factory floor. From raw material inspection to the final cooling period, we maintain a climate-controlled environment to prevent sweating and ensure a perfect finish.
            </p>
            <div className="grid grid-cols-2 gap-8 py-8 border-t border-outline-variant/20">
              <div>
                <p className="text-3xl font-headline text-primary">100%</p>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Traceable Sourcing</p>
              </div>
              <div>
                <p className="text-3xl font-headline text-primary">0.02%</p>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Defect Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-32 px-8 md:px-20 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="label-md uppercase tracking-[0.3em] text-secondary mb-6 font-semibold">Distribution Authority</span>
          <h2 className="font-headline text-5xl text-primary mb-12">Manufacturing &amp; Supply Network</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-1 bg-outline-variant/20 mb-20 bg-gray-200">
            <div className="bg-surface p-12 text-left h-full border border-outline-variant/10">
              <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-4 text-primary">Kerala</h4>
              <p className="text-on-surface-variant text-sm mb-6">Strategic distribution centers in Kochi and Kozhikode for same-day dispatch.</p>
              <div className="h-1 w-8 bg-secondary"></div>
            </div>
            <div className="bg-surface p-12 text-left h-full border border-outline-variant/10">
              <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-4 text-primary">Karnataka</h4>
              <p className="text-on-surface-variant text-sm mb-6">Optimized logistics for Bangalore and Mysore retail clusters.</p>
              <div className="h-1 w-8 bg-secondary"></div>
            </div>
            <div className="bg-surface p-12 text-left h-full border border-outline-variant/10">
              <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-4 text-primary">Tamil Nadu</h4>
              <p className="text-on-surface-variant text-sm mb-6">Full-fleet coverage from Chennai to Coimbatore with temperature control.</p>
              <div className="h-1 w-8 bg-secondary"></div>
            </div>
          </div>
          <div className="relative w-full h-[500px] bg-surface-container rounded-lg overflow-hidden group">
            <div className="absolute inset-0 grayscale opacity-40 hover:opacity-60 transition-opacity duration-700 bg-[url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center bg-no-repeat"></div>
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="glass-panel p-12 text-center max-w-lg shadow-2xl rounded-xl">
                <span className="material-symbols-outlined text-5xl text-primary mb-6">local_shipping</span>
                <h3 className="font-headline text-3xl mb-4">Swift Wholesale Fulfillment</h3>
                <p className="text-on-surface-variant">We bridge the gap between production and your storefront with dedicated transport partners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 md:px-20 text-center bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl md:text-6xl text-primary mb-10 leading-tight">Secure your inventory with a reliable manufacturer.</h2>
          <Link to="/enquiry" className="bg-primary text-on-primary px-12 py-5 text-sm uppercase tracking-[0.2em] font-bold shadow-2xl hover:bg-secondary transition-all duration-500 group flex items-center justify-center w-max mx-auto">
            Request Bulk Enquiry
            <span className="material-symbols-outlined align-middle ml-3 group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
