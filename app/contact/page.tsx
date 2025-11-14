export default function ContactPage() {
  return (
    <div className="bg-[#0B1324] text-white antialiased font-montserrat">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">

        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have questions? Need help? Get in touch—we're here to help keep you safe online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Questions About ScamBomb?</h3>
                <p className="text-white/80">
                  Have feedback, suggestions, or want to report a scam pattern? We're listening.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Support & Help</h3>
                <p className="text-white/80">
                  Need assistance with the tool or have a suspicious message? Reach out for guidance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Press & Media</h3>
                <p className="text-white/80">
                  Journalists interested in covering online safety? We'd love to chat.
                </p>
              </div>
            </div>
          </div>

          <div>
            <form
              className="bg-white/5 rounded-2xl p-8"
              action="https://formspree.io/f/xvgzrkgj"  // Replace with your Formspree form ID
              method="POST"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F5C84C]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F5C84C]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F5C84C]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F5C84C]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F5C84C] text-[#0B1324] font-bold py-3 px-6 rounded-xl hover:bg-[#F5C84C]/90 transition-colors"
              >
                Send Message
              </button>

              <p className="mt-4 text-sm text-white/60 text-center">
                We typically respond within 24 hours.
              </p>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
