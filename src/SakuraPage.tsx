import React from 'react';

const SakuraPage: React.FC = () => {
  return (
    <div className="scroll-smooth bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(134,78,90,0.06)] flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        <div className="font-serif text-2xl font-bold italic text-[#864e5a] dark:text-[#ffb7c5]">Sakura Tokyo</div>
        <div className="hidden md:flex items-center gap-10">
          <a className="text-[#864e5a] dark:text-[#ffb7c5] border-b-2 border-[#ffb7c5] pb-1 font-serif tracking-tight text-lg ease-in-out transition-all duration-300" href="#locations">Locations</a>
          <a className="text-[#514345] dark:text-zinc-400 hover:text-[#864e5a] font-serif tracking-tight text-lg ease-in-out transition-all duration-300 hover:opacity-80" href="#gallery">Gallery</a>
          <a className="text-[#514345] dark:text-zinc-400 hover:text-[#864e5a] font-serif tracking-tight text-lg ease-in-out transition-all duration-300 hover:opacity-80" href="#forecast">Forecast</a>
          <a className="text-[#514345] dark:text-zinc-400 hover:text-[#864e5a] font-serif tracking-tight text-lg ease-in-out transition-all duration-300 hover:opacity-80" href="#contact">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-2.5 rounded-full font-medium tracking-tight hover:opacity-90 active:scale-95 transition-all duration-300">
          Plan Visit
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface pt-20">
        <div className="absolute inset-0 z-0">
          <img alt="Ethereal cherry blossoms in full bloom" className="w-full h-full object-cover" src="https://as2.ftcdn.net/v2/jpg/02/48/87/01/1000_F_248870149_HSCEcxfETS4tDQSvq5xugCmhyPV2Mt5U.jpg" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-surface-container-low"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10 flex flex-col items-center text-center">
          <h1 className="font-headline text-7xl md:text-9xl text-primary tracking-tight mb-8 leading-tight drop-shadow-sm">
            Sakura Tokyo
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed drop-shadow-sm">
            A digital journey through the ephemeral beauty of Tokyo’s cherry blossoms. Track the bloom, find your peace, and wander through history.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-full text-lg font-semibold ambient-shadow hover:scale-105 active:scale-95 transition-all duration-300">
              Explore the Map
            </button>
            <button className="bg-primary-fixed text-on-primary px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all active:scale-95">
              View Live Bloom
            </button>
          </div>
        </div>
      </section>

      {/* Top Locations Section */}
      <section className="py-32 bg-surface-container-low" id="locations">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase mb-4 block">Curated Destinations</span>
              <h2 className="font-headline text-5xl md:text-6xl text-on-surface mb-6">Iconic Viewing Spots</h2>
            </div>
            <p className="text-on-surface-variant text-lg max-w-xs md:text-right">
              Selected locations where the blossoms reach their most ethereal state.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1: Ueno Park */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow group hover:-translate-y-2 transition-all duration-500">
              <div className="h-80 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="scenic view of ueno park with thousands of cherry blossoms lining a wide walking path at noon with soft sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIaRmwNdSDtV7vFHxGQdvq37FeVtWCNbkaj6ZQyYBv6lK0m5W8-OSi7CC_dy88R-HIpHcIjEPhhpmTpy5nDkkUjOvlhnQqwBksKZCyQigFuw74SPoMUrTZr99B2OA85krNZy0wUPYkamKH7OmTu_r78v0kbWqtIlYoJguaNEoctrv_01GsCkBgW6i7W0QoTPIE18cvEzXHNkOg-0pQ_jul8EtOPglL722Zl3Ls5zxCEu8ZAJu79L3dlZcl4qbvUEmHYq6C8K3c5Nc" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-headline text-2xl text-primary">Ueno Park</h3>
                  <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-medium text-on-surface">Full Bloom</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-6">Home to over 1,000 cherry trees, this historic park transforms into a sea of pink every spring.</p>
                <button className="bg-primary-fixed text-on-primary px-4 py-2 rounded-lg font-semibold flex items-center gap-2 group/btn hover:opacity-90 transition-all">
                  Learn More <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Card 2: Meguro River */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow group hover:-translate-y-2 transition-all duration-500">
              <div className="h-80 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="cherry blossoms arching over meguro river at twilight with glowing pink lanterns reflected in the water" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAug7m4rmo1zuYN7bKQUEvgf5qBzTpUDU11MocCKcBQe4-xC5PoQtV5Fxur73s_-Lw33aYKNsSIP5fWD86AMPwHwEF6Y22_gRowGHaCWAthCLI2lSdpneSSFyzUyt3v5eeafuo6Hlf3Ab0zLgw2CX428vtXchFRbZwIihGKFP0NGNEzVAyONxlxHiWZX0HRn-6seb2mOkJV5GMPz_w2nCr49zEUYDzscF-VMd6zeT2-XG3dnEY97hEIax9JdAlYmkGTSBjMQI0x4M0" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-headline text-2xl text-primary">Meguro River</h3>
                  <span className="bg-primary-container px-3 py-1 rounded-full text-xs font-medium text-on-primary-container">Evening Illumination</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-6">A four-kilometer stretch where blossoms canopy the canal, creating a magical tunnel of petals.</p>
                <button className="bg-primary-fixed text-on-primary px-4 py-2 rounded-lg font-semibold flex items-center gap-2 group/btn hover:opacity-90 transition-all">
                  Learn More <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Card 3: Shinjuku Gyoen */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow group hover:-translate-y-2 transition-all duration-500">
              <div className="h-80 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="manicured japanese garden in shinjuku gyoen with cherry blossoms and distant skyscrapers under a clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPnGwlJjlpcVPCZCOyRfbkF9FVwU4C5hY2jDnLY0Oae7MzSuUHOaij-jAMI5GwNew285zy-Ixk2ZFIiPNoi6POhHIbY6JZLmQOMbjxixTWNkEHnPwjiFNEEUI0mGZHHi_aiJEfI5btAfHNrPQgji4FSiSx-Z-wPO3iEff41gSlB8KlK15gEgvL-2nWb2RdT0IPDJFo6AEc_F-K-_q9jYAR97NxQ3Bfxf5QwJ-OPIVn-gwW3ON9wOFQPSPBlFjt7FPzbk9TzjZAxfA" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-headline text-2xl text-primary">Shinjuku Gyoen</h3>
                  <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-medium text-on-surface">Diverse Species</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-6">A serene oasis blending Japanese, English, and French garden styles with early and late-blooming varieties.</p>
                <button className="bg-primary-fixed text-on-primary px-4 py-2 rounded-lg font-semibold flex items-center gap-2 group/btn hover:opacity-90 transition-all">
                  Learn More <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-surface" id="gallery">
        <div className="container mx-auto px-8">
          <h2 className="font-headline text-5xl text-center text-on-surface mb-20 tracking-tight italic">Ethereal Blooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            <div className="md:col-span-8 rounded-xl overflow-hidden group relative">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="cinematic close-up of delicate cherry blossom petals with soft morning dew and hazy sunlight background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEn_dLpUgM_0zLeO7PZpaCBA92IaWqIPfYxb0_RKP95mLLzFv6d9LcJXWqEfBGIRBlG2OUta9_aTpIFM8F2v11sGe1OI8TJUEGSbIgxRJnRNJ1WDQSTyheYmj1VjcP6xcSTDua1jUFUli1mQ_nufG6jm1blrVFpa1BNv8KMmPryF5fnx_cLyTjC0BBNVJEr7qbSA6fBLdGncTo_ct7K6lnGGE-IdAC-w95boWOVGQWiLJgOIkeshNr5iuxOBLYA0pF6AS74F9WSRY" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-headline text-xl">The First Bloom</p>
              </div>
            </div>
            <div className="md:col-span-4 rounded-xl overflow-hidden group relative">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="aerial view of a winding road in tokyo covered in pink cherry blossom petals like a carpet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxFNPgdK3WYEq_Y-S889nLDzxMw0Gt42_9Au8pl-Ht_4tws97AFXaEFtMFVPQXexQLrO9hQEMy_Af33E4aZAkHrJhCDk-CgwYE5yGrfOnMen_MW-Wagxu7QheKIWvFJTZaeOnhZUM3P91y7-XixcD54TA1dF6dVfQ2RZqEiLs5jHpHYS7YSk0vWiWlhaU_wpWOmwhuj-SxLVLb4k3Ay9mUxhygnTrgy63Q2jmLuWzvCRvVksF6F0U2w5UMSlZHImLiiUwlkuqh0wI" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-headline text-xl">Petal Paths</p>
              </div>
            </div>
            <div className="md:col-span-4 rounded-xl overflow-hidden group relative">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="traditional japanese tea house surrounded by blossoming cherry trees and a soft mist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUPZ_DIFZyZlplOGf0PQCbs8E8pHppfFn-MWG83gJrcfwAHd7eygGP1HeJdAASXFocIyHXVM3m_B9ySId_WUnqNxpGA3025kOHzFnI7nirPgyRI1QmbBwxMP5d5gJ4MeWp9lCwbKOuHgOM2-sFtWx9BN6mYW9X_DLufWh6o35HOa6PZqogRyGdPXue9jKQW0vRBvDSrTlCICU-YD0eAwBahOM0Wdx8zm094ppIrNvDh4Xa-ialdhIdCdjNXKLNqeEZ8ribHDw6mCU" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-headline text-xl">Ancient Echoes</p>
              </div>
            </div>
            <div className="md:col-span-8 rounded-xl overflow-hidden group relative">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="tokyo tower silhouetted against a vibrant sunset sky framed by cherry blossoms" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp9H-KsF1Hnmp0FgUF8nR5ikGwJrAZcKi36av1Nmgs5DvPSuVA0j_OLdU9vISOYu8ifzq60Z-Cc8UcXhRk24UgQr87xNeU_FhjV_0ybEhaT320Nmk9rs1g71XXxPG_iykEzIul8OSjlSDSVf3-hHbYtbVcjTG3JdlpB8fDzJIrFLpic_8B5Ve9yf4GnQ9rx-5sHLtdV28l8Pab33yZnhZuRw5ukVQ-0TwoiCBI3sXX8Vlj_709OoJ_JBVQLubn7GNcM4hbLIoaAUs" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-headline text-xl">City in Pink</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forecast Section */}
      <section className="py-32 bg-surface-container-low" id="forecast">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-5xl text-on-surface mb-6">Bloom Timeline 2024</h2>
              <p className="text-on-surface-variant text-lg">The delicate balance of nature, mapped across Tokyo's unique micro-climates.</p>
            </div>
            <div className="space-y-8">
              {/* Timeline Item */}
              <div className="bg-surface-container-lowest p-8 rounded-xl ambient-shadow flex flex-col md:flex-row items-center gap-8 group">
                <div className="text-center md:text-left min-w-[120px]">
                  <span className="block text-primary font-headline text-4xl font-bold">Mar 22</span>
                  <span className="text-on-surface-variant text-sm font-medium tracking-widest uppercase">Start Bloom</span>
                </div>
                <div className="flex-1 border-l-2 border-primary-container pl-8 py-2">
                  <h4 className="font-headline text-xl mb-2 text-on-surface">Minato &amp; Chiyoda</h4>
                  <p className="text-on-surface-variant">Central districts experience the first signs of awakening. Best seen near the Imperial Palace moat.</p>
                </div>
                <div className="w-full md:w-48 h-2 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primary-container w-[15%]"></div>
                </div>
              </div>
              {/* Timeline Item */}
              <div className="bg-surface-container-lowest p-8 rounded-xl ambient-shadow flex flex-col md:flex-row items-center gap-8 group">
                <div className="text-center md:text-left min-w-[120px]">
                  <span className="block text-primary font-headline text-4xl font-bold">Apr 02</span>
                  <span className="text-on-surface-variant text-sm font-medium tracking-widest uppercase">Peak Bloom</span>
                </div>
                <div className="flex-1 border-l-2 border-primary-container pl-8 py-2">
                  <h4 className="font-headline text-xl mb-2 text-on-surface">Ueno &amp; Meguro</h4>
                  <p className="text-on-surface-variant">The city reaches its maximum floral saturation. Perfect time for Hanami festivals and evening picnics.</p>
                </div>
                <div className="w-full md:w-48 h-2 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primary-container w-[100%]"></div>
                </div>
              </div>
              {/* Timeline Item */}
              <div className="bg-surface-container-lowest p-8 rounded-xl ambient-shadow flex flex-col md:flex-row items-center gap-8 group">
                <div className="text-center md:text-left min-w-[120px]">
                  <span className="block text-primary font-headline text-4xl font-bold">Apr 10</span>
                  <span className="text-on-surface-variant text-sm font-medium tracking-widest uppercase">Late Bloom</span>
                </div>
                <div className="flex-1 border-l-2 border-primary-container pl-8 py-2">
                  <h4 className="font-headline text-xl mb-2 text-on-surface">Setagaya &amp; West Tokyo</h4>
                  <p className="text-on-surface-variant">The delicate dance of "Sakurafubuki" (blossom blizzards) as petals begin to drift with the wind.</p>
                </div>
                <div className="w-full md:w-48 h-2 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primary-container w-[60%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Interactivity Preview (Bento Grid) */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 rounded-xl bg-primary-fixed overflow-hidden relative ambient-shadow group">
              <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" data-location="Tokyo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI58B0dgmQMn1b91bWmsNrfoh9NV3TMQuBpthzrw_WFW51EnLiT8VqrCrchMR0ZAf8tUOtHPJvhuJXfgwRJFfThEspVJMBigByOmfNsdAXy8yi-cPMugD1yYNbgTKJd8W7oq1d6sI5yP_G6E31ZO0aV8voRuZTimgCJ9cGvdzBLVMzI4Bbrbi2AQkkxZmwWFGxAbXj5nKlRJUsiNPf3EIiT4KGz95PN-7LbYCi9Eg3SX9dFVGj8r0NPbubAJF92oah1GOWMMjSQY8" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-primary/60 to-transparent">
                <h3 className="font-headline text-4xl text-white mb-4">Interactive Discovery</h3>
                <p className="text-white/90 text-lg mb-8">Navigate Tokyo via real-time satellite data and local floral sensors.</p>
                <button className="bg-white text-primary w-fit px-8 py-3 rounded-full font-bold flex items-center gap-2">
                  Open Map <span className="material-symbols-outlined">map</span>
                </button>
              </div>
            </div>
            <div className="md:col-span-2 rounded-xl bg-surface-container-low p-8 flex items-center justify-between ambient-shadow">
              <div>
                <h4 className="font-headline text-2xl text-primary mb-2">Live Wind Data</h4>
                <p className="text-on-surface-variant">Predicting petal fall patterns across 23 wards.</p>
              </div>
              <span className="material-symbols-outlined text-primary text-5xl opacity-40">air</span>
            </div>
            <div className="md:col-span-1 rounded-xl bg-primary-container p-8 ambient-shadow flex flex-col justify-center">
              <span className="material-symbols-outlined text-on-primary-container text-4xl mb-4" data-weight="fill">notifications</span>
              <h4 className="font-bold text-on-primary-container">Smart Alerts</h4>
            </div>
            <div className="md:col-span-1 rounded-xl bg-secondary-container p-8 ambient-shadow flex flex-col justify-center">
              <span className="material-symbols-outlined text-on-secondary-container text-4xl mb-4">camera_enhance</span>
              <h4 className="font-bold text-on-secondary-container">Best Shots</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-20 bg-[#f4f3f4] dark:bg-zinc-900 flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full font-sans text-sm tracking-wide">
        <div className="font-serif text-xl text-[#864e5a] mb-6 md:mb-0">Sakura Tokyo</div>
        <div className="flex gap-8 mb-6 md:mb-0">
          <a className="text-[#514345] dark:text-zinc-500 hover:text-[#864e5a] transition-colors" href="#">Instagram</a>
          <a className="text-[#514345] dark:text-zinc-500 hover:text-[#864e5a] transition-colors" href="#">Privacy Policy</a>
          <a className="text-[#514345] dark:text-zinc-500 hover:text-[#864e5a] transition-colors" href="#">Contact Support</a>
        </div>
        <div className="text-[#514345] dark:text-zinc-500">
          © 2024 Sakura Tokyo. An Ethereal Journey.
        </div>
      </footer>
    </div>
  );
};

export default SakuraPage;