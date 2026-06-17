import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SafeMessage AI (Archived)',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ArchivedAboutPage() {
  return (
    <div className="bg-[#0B1324] text-white antialiased font-montserrat">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-red-500/20 border border-red-500 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6">
            ARCHIVED PAGE - NO LONGER ACTIVE
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            About SafeMessage AI
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            This page has been archived. SafeMessage AI has been rebranded as ScamBomb.
          </p>
          <a 
            href="/about" 
            className="inline-block mt-8 rounded-2xl px-6 py-4 text-lg font-semibold bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90 transition-colors"
          >
            Visit Current About Page →
          </a>
        </div>

        {/* Original content preserved for reference */}
        <section className="prose prose-lg prose-invert max-w-none opacity-50">
          <p className="text-lg text-white/90 leading-relaxed">
            Built by a Digital Industry Veteran With 15+ Years of Real-World Experience
          </p>
          
          <p className="text-white/90 leading-relaxed mb-4">
            Hi, I'm George Featherstone — a digital marketing engineer, web developer, and AI systems consultant with more than 15 years of hands-on experience helping businesses and everyday users navigate the online world.
          </p>
          
          <p className="text-white/90 leading-relaxed mb-4">
            Throughout my career, I've worked on hundreds of websites, optimized and secured digital systems, and supported thousands of users through technical challenges. I've seen the internet at its best… and unfortunately, at its worst.
          </p>
          
          <p className="text-white/90 leading-relaxed mb-4">
            And over the past few years, I've watched one thing grow faster than anything else:
          </p>
          
          <p className="text-2xl font-bold text-[#F5C84C] mb-6">
            Scams targeting everyday people.
          </p>
          
          <p className="text-white/90 leading-relaxed mb-4">
            I've watched family members, seniors, clients, and even tech-savvy friends get targeted.
          </p>
          
          <p className="text-white/90 leading-relaxed mb-4">
            Some lose money.<br/>
            Some lose confidence.<br/>
            Some lose trust in technology entirely.
          </p>
          
          <p className="text-lg font-bold text-[#F5C84C] mt-6">
            And honestly?<br/>
            I'm tired of seeing vulnerable people get taken advantage of.
          </p>
          
          <p className="text-white/90 leading-relaxed">
            SafeMessage AI existed to give regular people an easy, affordable way to stay safe online.
          </p>
        </section>
      </div>
    </div>
  );
}