import { useState } from 'react';

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In the future, the user will link this to Google Forms.
    // For now, we simulate the submission.
    console.log("Enquiry form data:", formData);
    setSubmitted(true);
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      product: '',
      quantity: '',
      message: ''
    });
    
    // Smooth scroll to top of form to see success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-24">
      <header className="max-w-7xl mx-auto px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-4 block font-bold font-body">Institutional Partnerships</span>
            <h1 className="font-headline text-5xl md:text-7xl font-light tracking-tight leading-[1.1] text-primary">
              Get in Touch for <br/><span className="italic font-normal">Bulk Supply</span>
            </h1>
          </div>
          <div className="md:col-span-5 pb-4">
            <p className="text-on-surface-variant text-lg font-light leading-relaxed max-w-md font-body">
              Our industrial atelier caters to global hospitality, retail chains, and corporate gifting with precision manufacturing and artisanal quality.
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <div className="bg-surface-container-lowest p-10 md:p-16 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.04)]">
              {submitted ? (
                <div className="py-20 text-center animate-in fade-in duration-700">
                  <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                  </div>
                  <h2 className="font-headline text-3xl text-primary mb-4">Thank you.</h2>
                  <p className="text-on-surface-variant text-lg font-body max-w-sm mx-auto">
                    Our team will contact you shortly to discuss your requirements.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-12 text-secondary font-label text-xs uppercase tracking-widest font-bold border-b border-secondary/30 pb-1 hover:border-secondary transition-colors"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <p className="font-body text-[10px] uppercase tracking-widest text-secondary mb-4 opacity-80 font-bold">Bulk orders are scheduled based on production capacity. Contact early to ensure timely delivery.</p>
                  <h2 className="font-headline text-2xl mb-12 text-primary">Bulk Enquiry Portal</h2>
                  <form className="space-y-12" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="relative group">
                        <label className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2 block font-bold font-body">Full Name *</label>
                        <input 
                          required 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-transparent border-none border-b border-outline-variant/40 focus:ring-0 focus:border-secondary transition-all py-2 px-0 text-on-surface font-light placeholder:text-surface-dim outline-none text-lg" 
                          placeholder="Alexander Wright" 
                          type="text"
                        />
                      </div>
                      <div className="relative group">
                        <label className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2 block font-bold font-body">Company Name *</label>
                        <input 
                          required 
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-transparent border-none border-b border-outline-variant/40 focus:ring-0 focus:border-secondary transition-all py-2 px-0 text-on-surface font-light placeholder:text-surface-dim outline-none text-lg" 
                          placeholder="Wright Hospitality Group" 
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="relative group">
                        <label className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2 block font-bold font-body">Phone Number *</label>
                        <input 
                          required 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-transparent border-none border-b border-outline-variant/40 focus:ring-0 focus:border-secondary transition-all py-2 px-0 text-on-surface font-light placeholder:text-surface-dim outline-none text-lg" 
                          placeholder="+91 0000 000000" 
                          type="tel"
                        />
                      </div>
                      <div className="relative group">
                        <label className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2 block font-bold font-body">Professional Email *</label>
                        <input 
                          required 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-transparent border-none border-b border-outline-variant/40 focus:ring-0 focus:border-secondary transition-all py-2 px-0 text-on-surface font-light placeholder:text-surface-dim outline-none text-lg" 
                          placeholder="a.wright@whg.com" 
                          type="email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="relative group">
                        <label className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2 block font-bold font-body">Product Interested *</label>
                        <input 
                          required 
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full bg-transparent border-none border-b border-outline-variant/40 focus:ring-0 focus:border-secondary transition-all py-2 px-0 text-on-surface font-light placeholder:text-surface-dim outline-none text-lg" 
                          placeholder="e.g. Pillar Candles, Tealights" 
                          type="text"
                        />
                      </div>
                      <div className="relative group">
                        <label className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2 block font-bold font-body">Expected Quantity *</label>
                        <input 
                          required 
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full bg-transparent border-none border-b border-outline-variant/40 focus:ring-0 focus:border-secondary transition-all py-2 px-0 text-on-surface font-light placeholder:text-surface-dim outline-none text-lg" 
                          placeholder="e.g. 500 units" 
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2 block font-bold font-body">Message / Custom Requirements</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-transparent border-none border-b border-outline-variant/40 focus:ring-0 focus:border-secondary transition-all py-2 px-0 text-on-surface font-light placeholder:text-surface-dim resize-none outline-none text-lg" 
                        placeholder="Please describe any specific scents, branding needs, or delivery timelines..." 
                        rows="4"
                      ></textarea>
                    </div>

                    <div className="pt-8">
                      <button className="w-full md:w-auto bg-primary text-white px-16 py-6 font-label uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-primary/90 transition-all group font-bold" type="submit">
                          Send Enquiry
                          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

          <aside className="lg:col-span-2 space-y-12">
            <div className="bg-surface-container-low p-10 space-y-12">
              <div className="space-y-12">
                <div>
                  <h3 className="font-headline text-2xl text-primary mb-8">Industrial Excellence</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-secondary pt-1" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                      <div>
                        <p className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-1 font-bold font-body">Manufacturing Scale</p>
                        <p className="text-primary font-medium font-body">40+ advanced machines</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-secondary pt-1" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                      <div>
                        <p className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-1 font-bold font-body">Output Power</p>
                        <p className="text-primary font-medium font-body">1–1.5 ton daily capacity</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-secondary pt-1" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                      <div>
                        <p className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-1 font-bold font-body">Regional Network</p>
                        <p className="text-primary font-medium font-body">Serving South India & Beyond</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-secondary pt-1" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                      <div>
                        <p className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-1 font-bold font-body">Reliability</p>
                        <p className="text-primary font-medium font-body">Consistent quality & precision</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/5] overflow-hidden">
                <img alt="aesthetic close-up of premium candles with minimalist label in a soft lit industrial workshop" className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:rotate-1 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd37vNqJuPXR9oaUp7G2Gk69DhZ3aSlr7cafA7PPrALfxGhBhdZS364i4v7smaZsBQmqLXMnxiik-9OJJl4VPwCiGiPuirfAyj_t3WeC8dDH4Xy0xOI-b83N4SoMtaKc1m2-d_0hYyXghrtyCZ6Z4OVaKIW-qiacyuoILNTe26JYOJPbfGkYYilzW1kaEyWlwf08ZlxIFpq--vkTagvvwvtAFvG-7W2X-NkWkZ0XlM7y5NBV1_ofGCADTNSe_mHGLJ1H03CMVtTsM"/>
              </div>
              <div className="absolute bottom-0 right-0 w-3/4 bg-surface-container-lowest p-8 translate-x-4 translate-y-4 shadow-xl border border-outline-variant/10">
                <p className="font-headline text-lg italic text-primary leading-tight">"Where precision meets the primitive glow of wax and fire."</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mt-32">
        <div className="bg-surface-container-low relative overflow-hidden flex items-center justify-center min-h-[500px] border border-outline-variant/10">
          <img alt="Dizsfar Candles Manufacturing & Supply Network" className="absolute inset-0 w-full h-full object-cover opacity-100" style={{objectPosition: "center 60%"}} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJtclFOl8mxFkqEZn_amspD3FxA48IC5LrHl4eI5yHfm1im6WS2F5pKrW-4P5WxOYsY9M2q3VTnkdenJLh6fLtHpoaFN2hlMv5ouelpN-YtTW8pDXhdn0Z_B7jKYmU_uOSCJzyAlK9KagCTker4pYmcKQnk-58DcLSjtMxaXcFVr582vFWOTjtg9r6i_kXX83zl35cKgo_QMj6i6oPDsClC2iStgsTvym0FRWZfZu3XFemD7lUg0G-oehJjVJP2DkbU19lrTPYcWg"/>
          <div className="relative z-10 text-center">
             <span className="font-label text-[10px] uppercase tracking-[0.4em] text-secondary mb-4 block font-bold font-body">Supply Network</span>
             <h2 className="font-headline text-4xl text-primary">Serving South India</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

