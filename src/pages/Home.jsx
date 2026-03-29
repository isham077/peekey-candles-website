import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Cinematic close-up of a premium minimalist candle flame with soft warm glow casting elegant shadows on a textured neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhGOpgQRzZAwjMix7LwS4wu6zrvqME5dDuYxF9VScVR9Bh2vy0RhPCabeP5KHapvpaUz2kdntOXYXJZkv_NnEs5Y86cWLdxlfwxaXZj8XZXgQf8kfZ7HsOoeW23PnR2MdGwoS1zfWxjGAOzzYTqhyJ0WuOC-Yz_4HoE4dlUql6Qu8FlM2iMdb9zD7yFaYRiMVbpi0WQMnpNcCxWXRxjpS0dTKiooXPeB0BUn7qqe2KkyKLQl74WMj1PElHCX2VpHcwoUDyFEqgB9g"/>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block label-md uppercase tracking-[0.2em] text-secondary-fixed mb-6 font-bold">Established Manufacturers</span>
            <h1 className="text-6xl md:text-8xl font-headline text-on-primary leading-[1.1] mb-8 tracking-tight">
              Crafting Quality <br/><span className="italic font-light">Candles at Scale</span>
            </h1>
            <p className="text-xl md:text-2xl font-body text-primary-fixed leading-relaxed mb-12 max-w-xl">
              Trusted by wholesalers and retailers across South India for unmatched consistency and artisanal precision.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/enquiry" className="bg-primary text-on-primary px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-primary-container transition-colors shadow-2xl inline-block">
                [ Request Bulk Enquiry ]
              </Link>
              <a 
                href="https://wa.me/916238018383?text=Hello,%20I%20want%20bulk%20candle%20supply.%20Product:%20___%20Quantity:%20___" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-outline-variant/30 backdrop-blur-md text-on-primary px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-surface-container-lowest/10 transition-colors inline-block"
              >
                [ WhatsApp Us ]
              </a>
            </div>

          </div>
        </div>
      </section>

      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <span className="label-md uppercase tracking-[0.2em] text-secondary mb-4 block font-bold">Our Provenance</span>
              <h2 className="text-4xl md:text-5xl font-headline text-on-surface mb-8 leading-tight">Heritage Meets <br/>High-Output Production</h2>
              <p className="text-on-surface-variant font-body leading-relaxed mb-6 text-lg">
                  Dizsfar Candles stands at the intersection of traditional craftsmanship and industrial efficiency. Founded on family values, we have grown into a powerhouse capable of producing over 1.5 tons of premium wax products daily.
              </p>
              <p className="text-on-surface-variant font-body leading-relaxed mb-10">
                  With an arsenal of 40+ specialized machines, we ensure that every candle—from the simplest household stick to the most ornate festive light—meets our rigorous standards for burn time and aesthetic clarity.
              </p>
              <Link to="/about" className="text-secondary font-bold uppercase tracking-widest text-sm inline-flex items-center gap-2 group">
                  Our Full Story 
                  <span className="w-12 h-[1px] bg-secondary group-hover:w-16 transition-all duration-300"></span>
              </Link>
            </div>
            <div className="md:col-span-7 relative">
              <div className="aspect-[4/5] bg-surface-container-high overflow-hidden">
                <img className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" alt="Industrial factory setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0AAcGgdYQYnpvwuu8AJwINwPuDvnpo0eX3-4aFDga-vVzWYnO6SO1uLkzYVPvFJu04tZmBg_3Af0SaZUc0C7EKrUF4dc5eyUwLDxBYTAfzGCNPhpW3hgC3HZzXwi6Qa4jACfxAi7bdpfR6DGUOw4wS_mp3tU0ntnWofNfg17VUB1S1mBek_54BgVrXSTJNR6mwrKak4RWFxSCFU5_TJ8XIWpZ9Odvd-rX5T8wVjhvc0hjLmx_a0G_cDkTttC1DYt_Kl7RPzzRV-I"/>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-surface-container-lowest p-10 shadow-xl max-w-xs hidden lg:block">
                <h3 className="font-headline text-2xl mb-2 italic">Unwavering Standards</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Every batch is tested for consistency in color, scent retention, and optimal wick performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-high border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-headline mb-4">Looking for bulk candle supply?</h2>
            <p className="text-on-surface-variant text-lg font-body">Get consistent quality and reliable delivery.</p>
          </div>
          <Link to="/enquiry" className="bg-primary text-on-primary px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-primary-container transition-all shadow-lg shrink-0 inline-block">
            [ Request Quote ]
          </Link>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20">
            <div className="py-8 md:px-12 text-center">
              <div className="text-6xl font-headline text-primary mb-2">1.5T</div>
              <div className="label-md uppercase tracking-[0.2em] text-on-surface-variant font-bold">Daily Capacity</div>
            </div>
            <div className="py-8 md:px-12 text-center">
              <div className="text-6xl font-headline text-primary mb-2">3</div>
              <div className="label-md uppercase tracking-[0.2em] text-on-surface-variant font-bold">States Served</div>
            </div>
            <div className="py-8 md:px-12 text-center">
              <div className="text-6xl font-headline text-primary mb-2">60+</div>
              <div className="label-md uppercase tracking-[0.2em] text-on-surface-variant font-bold">Bulk Clients</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-20">
            <div>
              <span className="label-md uppercase tracking-[0.2em] text-secondary mb-4 block font-bold">Product Range</span>
              <h2 className="text-4xl md:text-5xl font-headline">The Collection</h2>
            </div>
            <Link to="/products" className="text-sm font-bold uppercase tracking-widest border-b border-primary pb-2 mb-2 hover:text-secondary hover:border-secondary transition-colors inline-block">
              View Full Catalog
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container">
              <div className="aspect-[16/9] overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Collection of minimalist white pillar candles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZgF4dCLmPMdpmitVd9m75VrwkrV1xIEKHPxw2-AbDLDKqdxIzxkC5BgvL-9MG6WjZWpb6CuRxdhv_BvQQI9BLQI2MHcw2lLZs_xRHwhk2acI1HfKMQNvL7FbfEuaGrngcxQLB9ejlr5fhQM6di4yDt0jJG3VBQEI8eaxRFBr7rhb76N_l9h19CejAEblK_ZaUAD6BUIAtFPSITq8s-uzkSiWNewO-rSN4mebctPSHF7uS-_6is0f9cdQ2HYGtMB_4Q4ESdQK8eFE"/>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-12">
                <h3 className="text-3xl font-headline text-on-primary mb-2">Household Staples</h3>
                <p className="text-primary-fixed max-w-md">Long-burning utility candles designed for reliability and consistency.</p>
              </div>
            </div>
            <div className="md:col-span-4 group relative overflow-hidden bg-surface-container">
              <div className="aspect-[4/5] md:aspect-auto h-full overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Intricate golden festive candles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIqY4tfwEWLEH4DkP671a16PmfFf1mjWgDGJINIFtPdYKltReV52PPDqpw-MxC3Xt6SwYr8RNuCX59I_R6G46zu10k955bQa27Zz8PqIT9zWtB8aupnSZpa9_-4Z2Uk3NaEg57Na_qbz4rt_SfLv-pBRPPSJ9CCFvw4Snu3jDxTa2_48QkzIIMjbVu1Nf0aJO6kd4fzlW1bys_nFyS1MY5EWvT9Woeeb1mk3ydXYNXgciNzvC2oH-hyzqoK3dKuOG_t6IgaveWJME"/>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-12">
                <h3 className="text-2xl font-headline text-on-primary mb-1">Festive Diwali</h3>
                <p className="text-primary-fixed text-sm">Ornate designs for the festival of lights.</p>
              </div>
            </div>
            <div className="md:col-span-4 group relative overflow-hidden bg-surface-container">
              <div className="aspect-[4/5] overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Traditional oil lamps and candles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIcPgH2f09WfJ0lzy3ZdaZ1AUgfEBx4dHrH1P5oXxONErfkrHqF_FbBI2rI83z0os3EjuA48qkIhSbHD4kf8hkca6xfseCS2MBHvzGscs5hzwms8aUlPUCingWNaryttM7JRWEuRayp2hX-NlODN3o--TJFsfrJXesQa3MJdy9A-JX3ucrxqTJjj72sBGmU061ktYJy04b4odFKUCcw-EAad7r0wj0Z-Psevcb8YsDGDv_3Tutk1hqgcRvaWE1BVsuApQsYetiGeM"/>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-12">
                <h3 className="text-2xl font-headline text-on-primary mb-1">Karthika Collection</h3>
                <p className="text-primary-fixed text-sm">Deep-rooted tradition in every flame.</p>
              </div>
            </div>
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container">
              <div className="aspect-[16/9] overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Artistic array of tapered candles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM4HW1i0f5rvZ08U_Y5DuNKu_6r1kiZoeJPa674IQuLCRUmzUVSAo5bKEVNKcTuwpZNRwuhIHd0YkrOzbwaQuOi2nCmTNCuYg4zwJ_QZVXw_wCw2Oan0ad5IHswqmCAjhfpC5W1fEtQ8yfs6pYdX_oyHHuHdD5bBxri8IgLVXhmVCzBSXDxQJe9bpjp8MSeNS_3tY9h51GBSrTPWXTvCCdGDmJ0AyOEd7RCDtHjfv2PI86qTjuI-s0s4P3kcXjGB8ihjuczMxrr_c"/>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-12">
                <h3 className="text-3xl font-headline text-on-primary mb-2">Signature Colored</h3>
                <p className="text-primary-fixed max-w-md">Vibrant hues with high-pigment saturation for luxury aesthetics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface-container-high overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2 sticky top-32">
              <span className="label-md uppercase tracking-[0.2em] text-secondary mb-4 block font-bold">Strategic Partnership</span>
              <h2 className="text-5xl font-headline mb-8 leading-tight">Why Businesses <br/>Choose Us</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-4xl text-secondary">inventory_2</span>
                  <div>
                    <h4 className="font-headline text-xl mb-2">Consistent Bulk Supply</h4>
                    <p className="text-on-surface-variant leading-relaxed">Stable inventory management ensuring your shelves never go empty, regardless of seasonal spikes.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-4xl text-secondary">schedule</span>
                  <div>
                    <h4 className="font-headline text-xl mb-2">Reliable Dispatch Timelines</h4>
                    <p className="text-on-surface-variant leading-relaxed">Precision logistics planning that respects your business hours and delivery commitments.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-4xl text-secondary">precision_manufacturing</span>
                  <div>
                    <h4 className="font-headline text-xl mb-2">Scalable Production Capacity</h4>
                    <p className="text-on-surface-variant leading-relaxed">Our 40+ machine infrastructure grows with your ambition, handling any volume requirements.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-4xl text-secondary">hub</span>
                  <div>
                    <h4 className="font-headline text-xl mb-2">Proven Regional Distribution</h4>
                    <p className="text-on-surface-variant leading-relaxed">Extensive experience across South India with a logistics network optimized for regional hubs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="h-64 bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Vintage industrial candle manufacturing facility" src="https://lh3.googleusercontent.com/aida/ADBb0ugdz9m72GsLEDzQrkeiXcs0GDCLO_5XFAQROYGVmGZKBiN2QrPkGmLlMjEtXgj2vAzFvqPv16bj-bmDt8n3hVniZcIV4aJaWPUrngQouWKPKCjH72USdnsim5AYE4W0jBI-i1T9_7CGTo56rOXV0UPpQ4yE3QUrcxtFO2CNDdP1s4wgppMLn7-AuyNwIDuJc_9_cHXcEvJxu2VqXOIu7HiG-_AhzD1R5S8IC46kVfYUGP1MZ0wqHj-gLAcXkOTliFvIve3UZrdKCw"/>
                </div>
                <div className="h-96 bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Worker inspecting white candles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARlSC0wYVdH9LF-sWDQ5AItjTbBHU9TGK6Y2dM2nTokRXUcqIW6Up-XkWTVwVx-fpeEbLYNdiqWRs-Wo06WHIC6GKSAvGCdqiLKO24BEMrN8E0e95iKT0Z5akoQO0d6-3B-70AQeqr_Pbf185CbyZhBDrEKeuSx7ALQyj8_MPS57obvdOv9d0P_QZwTGh4FPuNZH6GgnoCmWJ0QtIn0uAs9PX9kjgABh2T7rR2PwOW_InJXoMTYbGBUqfyKYX9CM-oNkLjUn1NOoc"/>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-96 bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Precision wax pouring machine" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb23Y0R5jRkxIlpJIsfz_3MR5O6QFosWBUMs4OwLQkEemchlKcVudc-dG4iesAG9eHskU_vqPR_K2wZeF5lLP34lB1xMw5lMF7bWQsbov1Oh5x_5Xr1FA0qrFIwKwfOigjYQ6IykJt_0kLPYHQtKzoffJopDXL3eKqJOVaV0eC-Z9yA_ttZvdG7QIIjitAvxp7auieG0grYDc8BTd7tF3sMiAaheYdpz8J2hf0wPaq8wwX5YDBi9tunNJSoMynNW6B4HH5bqjE8Bc"/>
                </div>
                <div className="h-64 bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Warehouse with shipping boxes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAwgpVanDT18y3F_EEkoqjfkSqO0uEzixRHSTp7DyiYeKmq27cVOPUkukONAMEpUgZee_WMDBecU5wGWw28FPBCmxJOUBhLjWN-8xVXcUGzpM7irH9PrmUbbfGIZXAAvPJXisFknzaMrHcOwYOM3FeoLuLerXLxtUDGuOf-lPFBLhki0H4HpQQ_Cg0p2iyMU6d_Gbic5QlcEoU3Qug3q5nOkmGu4ovBV_KXVAxEMY3WSbO9dUOBQReJbM8Paa3pvVtXb42B-pvl24"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-primary text-on-primary text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-6 h-full gap-4">
            <div className="border-r border-on-primary"></div>
            <div className="border-r border-on-primary"></div>
            <div className="border-r border-on-primary"></div>
            <div className="border-r border-on-primary"></div>
            <div className="border-r border-on-primary"></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <h2 className="text-5xl md:text-7xl font-headline mb-10 leading-tight">Looking for Bulk <br/>Candle Supply?</h2>
          <p className="text-xl md:text-2xl font-body text-primary-fixed leading-relaxed mb-16 opacity-80">
            Connect with our wholesale team today for tailored pricing and high-volume delivery schedules.
          </p>
          <Link to="/enquiry" className="bg-surface-container-lowest text-primary px-16 py-6 text-sm uppercase tracking-[0.3em] font-bold hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-300 inline-block">
            Send Enquiry Now
          </Link>
        </div>
      </section>
    </>
  );
}
