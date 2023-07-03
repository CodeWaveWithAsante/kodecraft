import {
  About,
  Contact,
  Header,
  Services,
  Team,
  Testimonies,
} from "@/components";

export default function Home() {
  return (
    <main className='w-full bg-[#fcfcfc]'>
      <div className='container mx-auto'>
        <section className='p-5' id='home'>
          <Header />
        </section>

        <section className='p-5 border-t border-gray-200' id='about'>
          <About />
        </section>
      </div>

      <section className='' id='services'>
        <div className='overflow-x-hidden -mb-0.5'>
          <svg
            preserveAspectRatio='none'
            viewBox='0 0 1200 120'
            xmlns='http://www.w3.org/2000/svg'
            style={{
              fill: "#003060",
              width: "125%",
              height: 112,
              transform: "rotate(180deg)",
            }}
          >
            <path d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' />
          </svg>
        </div>

        <div className='bg-[#003060]'>
          <Services />
        </div>

        <div className='overflow-x-hidden -mt-1'>
          <svg
            preserveAspectRatio='none'
            viewBox='0 0 1200 120'
            xmlns='http://www.w3.org/2000/svg'
            style={{ fill: "#003060", width: "125%", height: 140 }}
          >
            <path d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' />
          </svg>
        </div>
      </section>

      <section className='p-5' id='team'>
        <Team />
      </section>

      <section className='p-5'>
        <Testimonies />
      </section>

      <section className='relative' id='contact'>
        <Contact />
      </section>
    </main>
  );
}
