export default function Page() {
  return (
    <div className="min-h-screen w-full bg-emerald-900 text-white">
      {/*Home*/}
   
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

          <div className="flex-1 text-center md:text-left space-y-5 relative z-[1]">
            <p className="uppercase tracking-[0.2em] text-white/70 text-xs">Zahra's Space • Personal Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              I am <span className="text-yellow-400">Zahra Aurellia Thobaroni</span>. <br className="hidden md:block" />
              <span className="text-yellow-300/90">Frontend Student</span> |
            </h1>
            <p className="text-white/80 max-w-xl mx-auto md:mx-0">
              I am a Sophomore Software Engineering student at SMK Telkom Malang, focusing on Frontend Development.
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start pt-2">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-yellow-400 text-emerald-950 font-semibold px-5 py-3 shadow hover:bg-yellow-300 transition">
                Contact Me
              </a>
            </div>
          </div>

          {/*Image*/}
          <div className="flex-1 flex justify-center md:justify-end relative z-[1]">
            <div className="relative">
              <img
                src="kat - julia stiles.jpg"
                alt="Profile"
                className="w-64 h-64 md:w-[380px] md:h-[380px] object-cover rounded-full border-4 border-yellow-400 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
              />

              <div className="absolute inset-0 -z-10 rounded-full bg-yellow-400/10 blur-2xl" />
            </div>
          </div>
        </div>
    
      {/*About Me*/}
      <section id="about" className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src="kat - julia stiles.jpg"
              alt="Profile"
              className="w-64 h-64 md:w-[380px] md:h-[380px] object-cover rounded-full border-4 border-yellow-400 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
            />

          </div>
          <div className="space-y-5">
            <p className="text-sm tracking-wide text-yellow-300/90">ABOUT ME</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              I study Software Engineer in <span className="text-yellow-400" SMK Telkom Malang></span>
            </h2>
            <p className="text-white/80">
              I like listening to music and watching movies while doing homework or studying. I currently studying
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm ">
              {[
                'HTML',
                'CSS',
                'Tailwind',
                'Node JS',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                  <span className="mt-0.5 inline-block size-3 rounded-full bg-yellow-400/90" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <a href="#cv" className="inline-flex items-center rounded-md bg-yellow-400 text-emerald-950 font-semibold px-5 py-3 shadow hover:bg-yellow-300 transition">
                CV Download
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*Contact*/}
      <section className="border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-white/60 text-sm">CONTACT NOW</p>
            <p className="mt-1">zarathobaroni@gmail.com</p>
            <p className="text-white/60">+62 823 3104 6933</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-white/60 text-sm">ADDRESS</p>
            <p className="mt-1">Bandung,Tulungagung, Jawa Timur, Indonesia</p>
            <p className="text-white/60">MV 102545</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-white/60 text-sm">SOCIAL MEDIA</p>
            <div className="mt-2 flex gap-4 text-yellow-300/90">
              <a href="#" aria-label="twitter">
                <a href="https://twitter.com/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="4" fill="#1DA1F2" />
                    <path d="M19.633 7.581c.013.18.013.36.013.54 0 5.49-4.18 11.82-11.82 11.82-2.35 0-4.54-.68-6.38-1.86.33.04.65.06.99.06a8.35 8.35 0 0 0 5.17-1.78 4.17 4.17 0 0 1-3.89-2.89c.26.04.52.07.8.07.38 0 .75-.05 1.1-.15a4.16 4.16 0 0 1-3.34-4.08v-.05c.56.31 1.2.5 1.88.52a4.16 4.16 0 0 1-1.85-3.46c0-.77.21-1.48.58-2.1a11.82 11.82 0 0 0 8.58 4.35 4.7 4.7 0 0 1-.1-.95 4.16 4.16 0 0 1 7.2-2.85 8.23 8.23 0 0 0 2.64-1.01 4.16 4.16 0 0 1-1.83 2.29 8.29 8.29 0 0 0 2.39-.65 8.96 8.96 0 0 1-2.08 2.16z" fill="white" />
                  </svg>
                </a>
              </a>
              <a href="#" aria-label="facebook">
                <a href="https://facebook.com/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="4" fill="#1877F2" />
                    <path d="M15 8h-2c-.552 0-1 .448-1 1v2h3l-.5 3h-2.5v7h-3v-7H7v-3h2v-2.5A3.5 3.5 0 0 1 12.5 5H15v3z" fill="white" />
                  </svg>
                </a>
              </a>
              <a href="#" aria-label="instagram">
                <a href="https://www.instagram.com/djaraaur?igsh=MW0xbzJ5NXJia2k5eQ%3D%3D&utm_source=qr" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="4" fill="#E1306C" />
                    <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.92a3.12 3.12 0 1 1 0-6.24 3.12 3.12 0 0 1 0 6.24zm6.24-8.16a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0zm3.12 1.14c-.07-1.48-.41-2.8-1.5-3.89C18.8 2.17 17.48 1.83 16 1.76 14.52 1.69 9.48 1.69 8 1.76 6.52 1.83 5.2 2.17 4.14 3.23c-1.09 1.09-1.43 2.41-1.5 3.89C2.69 9.48 2.69 14.52 2.76 16c.07 1.48.41 2.8 1.5 3.89 1.06 1.06 2.38 1.4 3.86 1.47 1.48.07 6.52.07 8 .01 1.48-.07 2.8-.41 3.86-1.47 1.09-1.09 1.43-2.41 1.5-3.89.07-1.48.07-6.52 0-8zm-2.8 9.72a3.37 3.37 0 0 1-1.9 1.9c-1.32.52-4.45.4-5.56.4s-4.24.12-5.56-.4a3.37 3.37 0 0 1-1.9-1.9c-.52-1.32-.4-4.45-.4-5.56s-.12-4.24.4-5.56a3.37 3.37 0 0 1 1.9-1.9c1.32-.52 4.45-.4 5.56-.4s4.24-.12 5.56.4a3.37 3.37 0 0 1 1.9 1.9c.52 1.32.4 4.45.4 5.56s.12 4.24-.4 5.56z" fill="white" />
                  </svg>
                </a>
              </a>
              <a href="#" aria-label="github">
                <a href="https://github.com/zahraaurel" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="4" fill="#333" />
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.41 7.86 10.94.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.39-3.87-1.39-.52-1.33-1.27-1.68-1.27-1.68-1.04-.7.08-.68.08-.68 1.15.08 1.75 1.19 1.75 1.19 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.82 1.19 3.08 0 4.44-2.69 5.42-5.25 5.71.41.36.78 1.09.78 2.21v3.28c0 .31.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" fill="white" />
                  </svg>
                </a>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*My Skills*/}
      
    </div>
  );
}
