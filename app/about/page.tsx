export default function AboutPage() {
  return (
    <div className="bg-[#0B1324] text-white antialiased font-montserrat">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            About SafeMessage AI
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Built by a Digital Industry Veteran With 15+ Years of Real-World Experience
          </p>
        </section>

        {/* Main Content */}
        <section className="prose prose-lg prose-invert max-w-none">

          {/* Intro */}
          <div className="mb-12 text-center">
            <p className="text-lg text-white/90 leading-relaxed">
              Hi, I'm George Featherstone — a digital marketing engineer, web developer, and AI systems consultant with more than 15 years of hands-on experience helping businesses and everyday users navigate the online world.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <p className="text-white/90 leading-relaxed mb-4">
              Throughout my career, I've worked on hundreds of websites, optimized and secured digital systems, and supported thousands of users through technical challenges. I've seen the internet at its best… and unfortunately, at its worst.
            </p>
            <p className="text-white/90 leading-relaxed mb-4">
              And over the past few years, I've watched one thing grow faster than anything else:
            </p>
            <p className="text-2xl font-bold text-[#F5C84C] mb-6">
              Scams targeting everyday people.
            </p>
          </div>

          {/* Scam Types */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">The Growing Threat</h2>
            <div className="grid md:grid-cols-2 gap-4 text-white/80">
              <ul className="space-y-2">
                <li>• Fake "wrong number" messages</li>
                <li>• Fraudulent job offers</li>
                <li>• Romance scams</li>
                <li>• Investment scams</li>
              </ul>
              <ul className="space-y-2">
                <li>• Delivery phishing</li>
                <li>• Identity theft attempts</li>
                <li>• AI-enhanced trickery that looks frighteningly real</li>
              </ul>
            </div>
            <p className="mt-6 text-white/90">
              What used to fool only a few people is now carefully engineered deception, designed to manipulate human psychology and steal time, money, and peace of mind.
            </p>
          </div>

          {/* Personal Stories */}
          <div className="mb-12">
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
          </div>

          {/* Why Built */}
          <div className="bg-[#F5C84C] rounded-2xl p-8 mb-12 text-[#0B1324]">
            <h2 className="text-2xl font-bold mb-6">Why I Built SafeMessage AI</h2>
            <p className="text-lg mb-4">
              SafeMessage AI exists for one reason:
            </p>
            <p className="text-2xl font-bold mb-6">
              To give regular people an easy, affordable way to stay safe.
            </p>
            <div className="mb-6">
              <p className="mb-2">No tech jargon.</p>
              <p className="mb-2">No fear tactics.</p>
              <p>No $30-$80/month security products full of features you'll never use.</p>
            </div>
            <p className="text-lg">
              Just a simple tool that helps you:
            </p>
            <ul className="list-none space-y-1 mt-4">
              <li>• Recognize scam texts and emails</li>
              <li>• Understand what's risky (and why)</li>
              <li>• Learn exactly what to do next</li>
              <li>• Build confidence in spotting red flags</li>
              <li>• Keep yourself and your loved ones safe</li>
            </ul>
          </div>

          {/* Pricing */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12">
            <p className="text-center">
              <span className="text-2xl font-bold text-[#F5C84C]">
                For $4.99/month or $49.99/year,
              </span>
              <br/>
              SafeMessage AI offers peace of mind at a price anyone can afford — especially those who need it most.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-12">
            <p className="text-lg text-white/90 mb-4">
              I don't want online safety to be a luxury.<br/>
              I want it to be accessible.
            </p>
            <p className="text-white/90 leading-relaxed">
              This project is my way of fighting back — using my skills in web development, AI systems, cybersecurity awareness, and digital literacy to level the playing field.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">My Mission</h2>
            <p className="text-xl font-bold text-center mb-6">
              Empower people to stay safe online — with clarity, confidence, and common sense.
            </p>
            <div className="text-center">
              <p className="mb-4">Whether you're:</p>
              <ul className="list-none space-y-2 text-white/80">
                <li>• A senior unsure about a suspicious text</li>
                <li>• A parent helping your family avoid scams</li>
                <li>• Someone tired of spam, phishing, and fake job offers</li>
                <li>• Or just a person who wants a second opinion before replying…</li>
              </ul>
              <p className="mt-4 text-lg">
                SafeMessage AI is here to help.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mb-12">
            <a href="/" className="inline-block rounded-2xl px-8 py-4 bg-[#F5C84C] font-bold text-[#0B1324] hover:bg-[#F5C84C]/90 transition-colors">
              Try SafeMessage AI Today →
            </a>
          </div>

          {/* Closing */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">Thank You for Being Here</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-white/90 leading-relaxed mb-4">
                Building this platform isn't just a project — it's a personal mission.
                And every person who uses SafeMessage AI helps push back against scammers, fraudsters, and digital predators who thrive on confusion and fear.
              </p>
              <p className="text-white/90 leading-relaxed mb-4">
                You deserve to feel safe online.<br/>
                And I'm here to help make that happen.
              </p>
              <p className="text-white/90 leading-relaxed">
                If there's ever anything you'd like to see added, expanded, or improved, please reach out. SafeMessage AI will grow right alongside the people it protects.
              </p>
              <p className="text-2xl font-bold mt-8 text-[#F5C84C]">
                — George
              </p>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
