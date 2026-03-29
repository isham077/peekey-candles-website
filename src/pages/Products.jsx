import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div className="pt-32 pb-24">
      <header className="max-w-7xl mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="block font-label text-sm uppercase tracking-[0.2em] text-secondary mb-4 font-bold">Industrial Grade Production</span>
            <h1 className="font-headline text-6xl md:text-8xl font-light tracking-tighter leading-tight text-primary">
              Product <br/><span className="italic">Catalog</span>
            </h1>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="text-on-surface-variant font-body leading-relaxed max-w-sm">
              Discover our manufacturing capabilities across core essentials and specialized festive ranges, engineered for consistency and aesthetic excellence.
            </p>
          </div>
        </div>
      </header>

      <section className="mb-32">
        <div className="max-w-7xl mx-auto px-8 mb-16">
          <p className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-4 font-bold">Available for bulk orders across South India.</p>
          <h2 className="font-headline text-4xl font-light tracking-tight text-primary flex items-center gap-4">
            AVAILABLE PRODUCTS
            <span className="h-px bg-outline-variant flex-grow"></span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <div className="group flex flex-col">
              <div className="aspect-[3/4] bg-surface-container-low overflow-hidden mb-6 relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="minimalist white pillar candles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX_6t2GoFR5dAqjwlsw_LPHseTQdiTXnc917NdnsP0HZtEJUbE9I2wT6CVvX5dmXQbsZducL6iZ8BXwuMZzfx3lF31vtpOZ4jCSqUP_RsxVimrnyrwePWqCmFdK1CRXwjmAGcsd9ib7Jg6O1Fg_8ItGPoewBCUjXh87CVwXqk7RbUqxT4DC-shxLwaJG9ek_yYTyfgdXFfO1A5dHAVkmJyeLVHqtcj61cd0gIj6kaROf6YaO8FFWJkJb5WJczuVc3MQBEBr229y2c"/>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-on-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Available
                  </span>
                </div>
              </div>
              <h3 className="font-headline text-lg mb-2 text-primary">Household Candles</h3>
              <p className="text-on-surface-variant text-xs font-body leading-relaxed">Standard white candles with smoke-free formulation for daily use.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-0.5 bg-neutral-100 text-[9px] uppercase tracking-wider font-bold text-primary border border-neutral-200 rounded-sm">Bulk Available</span>
                <span className="px-2 py-0.5 bg-primary text-[9px] uppercase tracking-wider font-bold text-white rounded-sm">High Demand</span>
              </div>
            </div>

            <div className="group flex flex-col">
              <div className="aspect-[3/4] bg-surface-container-low overflow-hidden mb-6 relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="festive diwali cup candles" src="https://lh3.googleusercontent.com/aida/ADBb0ujNyOsZg125dxPHwP0Uwek3fetpaEZLnAns2C9s8LLAwuRgOVSg-1XUMvxnHU3SujpIZbre-bGoCw7zFEBUaasABRuE2To05OqQDb438rEmCMpIBsY0vdbg4B8q4MbNp5LdqLAMZqMmW-ZcGSRaD7Fu5KqA1glmo89oOgo2CcZcatWqC3pEvraWIZ8gClbrYHrs1-PLzM00YViS3aevLvRDsSekuBwNKTHEedL-zIAaQmRgZOtePGxdOt2Xyn-NeCGCzYfVqzx1Sg"/>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-on-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Available
                  </span>
                </div>
              </div>
              <h3 className="font-headline text-lg mb-2 text-primary">Diwali Cup Candles</h3>
              <p className="text-on-surface-variant text-xs font-body leading-relaxed">Traditional wax lamps designed for festive brilliance and safety.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-0.5 bg-neutral-100 text-[9px] uppercase tracking-wider font-bold text-primary border border-neutral-200 rounded-sm">Bulk Available</span>
                <span className="px-2 py-0.5 bg-primary text-[9px] uppercase tracking-wider font-bold text-white rounded-sm">High Demand</span>
              </div>
            </div>

            <div className="group flex flex-col">
              <div className="aspect-[3/4] bg-surface-container-low overflow-hidden mb-6 relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="ritual karthika festival candles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH2tE6flG4DIf98A6YNF2B4UZM66DtMIahglpezU2oMuSue12QBygBcV9KvgYIUau92hGolKj7zfGeqLL219yKEnIfDL2jrwmfnj53HfApWnViESTm1Tx9KvAyj4sBXZhC36XAjaOOr6eihj7-rUHjJTvpGemps-Ge5qSGeIK9Ycq5ldFxf9aVWwH0De65gFQgvm1X8c5jCTs2H3f4QR6TbWq06N7yATZJiEt8rBz0rpEUsxt4OxmY0bGORIYdDegVyiPx_Mo464s"/>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-on-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Available
                  </span>
                </div>
              </div>
              <h3 className="font-headline text-lg mb-2 text-primary">Karthika Festival Candles</h3>
              <p className="text-on-surface-variant text-xs font-body leading-relaxed">Engineered for ceremonial burns and traditional ritual requirements.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-0.5 bg-neutral-100 text-[9px] uppercase tracking-wider font-bold text-primary border border-neutral-200 rounded-sm">Bulk Available</span>
                <span className="px-2 py-0.5 bg-primary text-[9px] uppercase tracking-wider font-bold text-white rounded-sm">High Demand</span>
              </div>
            </div>

            <div className="group flex flex-col">
              <div className="aspect-[3/4] bg-surface-container-low overflow-hidden mb-6 relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="vibrant colored household candles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF-IS8jwF7x02DlwsvGjvAYki1RSyP4eW5YD5dEkkZOXCfkFAZuInH9AjeOcnZhE3LJGnk1zfpccxks9r5QkUt1pMN3Jz3QWCfUrG_bwplhM4ww5Wu2wmtoHgOjKnzu9EXCC-TMAvB7vEzqlnfB0rJ_9ZpLLrbpAcyIxEny3-Ro-XMGDJItretl9O9KUrzHhbOPfIKSMbuygIcU4yeGyUQ0RF9ROxwzRRthP2ukgAEcZRbdHQqeyZg3BYrBb1hs-2d8M0CJ8EfQBE"/>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-on-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Available
                  </span>
                </div>
              </div>
              <h3 className="font-headline text-lg mb-2 text-primary">Colored Household Candles</h3>
              <p className="text-on-surface-variant text-xs font-body leading-relaxed">High-pigment utility candles available in a curated range of hues.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-0.5 bg-neutral-100 text-[9px] uppercase tracking-wider font-bold text-primary border border-neutral-200 rounded-sm">Bulk Available</span>
                <span className="px-2 py-0.5 bg-primary text-[9px] uppercase tracking-wider font-bold text-white rounded-sm">High Demand</span>
              </div>
            </div>

            <div className="group flex flex-col">
              <div className="aspect-[3/4] bg-surface-container-low overflow-hidden mb-6 relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="white tea light candles in silver tins" src="https://lh3.googleusercontent.com/aida/ADBb0ujQI7yKGf3HKXZyU2m4-zQmrR_D1ITKO5_tgMsMw3UCss6HnnqyQsUtz2tGsJcmVg-YxhoXRo4WGO6icoLG3PtjLlwjQtaetJ-oHPmf8v2gi7Y4hf6vfpMXhP_0qMRLg_xrtO6wtfbacDGcpv5TU4apwD_n_eVggj_4VohuHCXM1ysrFqeuCWAE5tMOGKnpZNZruejXRVCPZucLU08FuRqz0MSTLVdshlm5LRW3Yb_mLdCAMDi4NrjQsKqHzdV1JV0wLY7VI0c7Qg"/>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-on-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Available
                  </span>
                </div>
              </div>
              <h3 className="font-headline text-lg mb-2 text-primary">Tealight Candles</h3>
              <p className="text-on-surface-variant text-xs font-body leading-relaxed">Versatile, clean-burning tealights for ambiance and commercial use.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-0.5 bg-neutral-100 text-[9px] uppercase tracking-wider font-bold text-primary border border-neutral-200 rounded-sm">Bulk Available</span>
                <span className="px-2 py-0.5 bg-primary text-[9px] uppercase tracking-wider font-bold text-white rounded-sm">High Demand</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="border-y border-outline-variant/30 py-16 flex flex-col items-center text-center">
          <h3 className="font-headline text-2xl font-light mb-6 text-primary">Need bulk pricing for your enterprise?</h3>
          <Link to="/enquiry" className="bg-primary text-on-primary px-10 py-4 text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-opacity inline-block">
            [ Request Bulk Quote ]
          </Link>
        </div>
      </section>

      <section className="mb-32">
        <div className="max-w-7xl mx-auto px-8 mb-4">
          <p className="font-label text-xs uppercase tracking-[0.2em] text-secondary font-bold">Innovation Roadmap</p>
        </div>
        <div className="max-w-7xl mx-auto px-8 mb-16">
          <h2 className="font-headline text-4xl font-light tracking-tight text-primary/40 flex items-center gap-4">
            UPCOMING PRODUCTS
            <span className="h-px bg-outline-variant/30 flex-grow"></span>
          </h2>
          <p className="mt-4 text-on-surface-variant/70 font-body text-sm max-w-2xl italic">
            We are continuously expanding our product range to meet evolving customer demands.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 opacity-80">
            <div className="group flex flex-col">
              <div className="aspect-square bg-surface-container-low overflow-hidden mb-6 relative">
                <img className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0" alt="concept shot of oversized pillar candles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABEWzAXmcuAsX5aaixfXopg0dQHLQS4Z0OLW2u0FLozbsAu8Pn5NqNfNYbqUygnETIqWrXvNBBrDZEpiLRn0xf_08lCeZAdVvAp8ULkvBf6RFBm4Fm3DZN6fa0ZdYJJF5NQScep81NeR4QEJ4Y0KMQ8VrSOl1EWf7F54zcRCs17q_-HSTvd8l8GhvblF56I7HZtLuARZP7X8R9VVf9PFGwQuzfUSFhIN8Dnn9wHdcms_pz8HtjG4sENS-xlPxsH06Qawa7wo3HQvU"/>
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-outline-variant text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    New Range – Coming Soon
                  </span>
                </div>
              </div>
              <h3 className="font-headline text-xl mb-3 text-primary/60">Pillar Candles</h3>
              <p className="text-on-surface-variant/80 text-sm font-body leading-relaxed">
                Substantial architectural pillars designed for long-lasting focal illumination.
              </p>
            </div>

            <div className="group flex flex-col">
              <div className="aspect-square bg-surface-container-low overflow-hidden mb-6 relative">
                <img className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0" alt="sculptural decorative candles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPkkw3SvUbtvAZ7PAnaMLLuFeEtffxugKCjEcdl3nH0_YTpBM4ph3Z4j9cq0MT6f3LiXcj7GXHJBAl-12tS8FFHfI_RgVJtNLPRGiMVcA5IYAZsKtz0dyUxZZpo9ucXYfhXb75LBzi4tYroO7zr9QPmRLxIxdX2gCvW-yP2r-Uq8vwdrrG_JdCqK3dFtUbuk6ybE7UGaeBUEpKCm0LLeiL7cmA8cQyW3qXbxtElHWSYdO6w8Z2e_y4eawpQUrodHNtIq7brRKqcI0"/>
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-outline-variant text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    New Range – Coming Soon
                  </span>
                </div>
              </div>
              <h3 className="font-headline text-xl mb-3 text-primary/60">Decorative Candles</h3>
              <p className="text-on-surface-variant/80 text-sm font-body leading-relaxed">
                Artisanal silhouettes and geometric forms merging wax engineering with interior design.
              </p>
            </div>

            <div className="group flex flex-col">
              <div className="aspect-square bg-surface-container-low overflow-hidden mb-6 relative">
                <img className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0" alt="concept shot of scented glass jar candles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH1lAwSBUQCk6qSqLLvyE5fha26ldCWmAwHNQXBpkj-9uc0gxh-3dx4EUxUoes_kz6dE8BgN4WXusNWDYXlSYOaJqPjuuiAf8sjLw5gmBwZoVXC4gFTOCY_Byqu70Ku4I0N3ccZdTV7etoNUXm6U-_Sm9nzSc4caumlUAIJR6lEXaRqhbyZFy6GT0SuuSq9KHioli565bVGaYEfk5HtE2d9ZvUCvWAob67j_S0iWtzyhnSuYeAS8QN3AUPhcmAKgz7qhXja0yv5KM"/>
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-outline-variant text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    New Range – Coming Soon
                  </span>
                </div>
              </div>
              <h3 className="font-headline text-xl mb-3 text-primary/60">Scented Candles</h3>
              <p className="text-on-surface-variant/80 text-sm font-body leading-relaxed">
                Signature fragrance collections engineered for superior hot-throw and olfactory depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48 max-w-5xl mx-auto px-8 text-center">
        <div className="bg-primary p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
          <h2 className="font-headline text-4xl text-on-primary mb-6 relative z-10">Strategic Bulk Sourcing</h2>
          <p className="text-on-primary-container font-body max-w-xl mx-auto mb-10 relative z-10">
            Partner with Dizsfar for industrial-grade supply chains. We offer custom branding, volume-based pricing, and global logistics for our entire catalog.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative z-10">
            <Link to="/enquiry" className="bg-white text-primary px-10 py-4 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity inline-block">
              Inquire for bulk orders
            </Link>
            <a 
              href="https://wa.me/916238018383?text=Hello,%20I%20want%20bulk%20candle%20supply.%20Product:%20___%20Quantity:%20___" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-white/30 text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors inline-block"
            >
              Request Samples
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}
