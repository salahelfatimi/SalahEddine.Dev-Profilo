import Image from 'next/image';

function Head() {
  return (
    <>
      <div>
        <div className="bg-[#F9F9F9] py-24">
          <div className="container space-y-8">
            <div className="flex flex-col-reverse gap-8 justify-center lg:flex-row lg:justify-between items-center">
              <div className="space-y-4 text-center lg:text-start">
                <div className="flex items-center">
                  <span className="text-[#2d2e32] font-extrabold text-5xl">
                    Full Stack Developer
                  </span>
                </div>
                <div>
                  <span className="text-[#89797F]">
                    Hello, I&apos;m Salaheddine Elfatimi, an enthusiastic Full
                    Stack Developer based in Marrakech, Morocco. 📍
                  </span>
                </div>
                <div>
                  <button className="bg-[#148BFB] hover:bg-[#148bfbd2] shadow-2xl rounded-3xl p-2 px-4 transition duration-700 ease-in-out font-bold">
                    Download CV
                  </button>
                </div>
              </div>
              <div>
                <Image
                  className="shadow-2xl rounded-full"
                  src="/profil.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="space-y-12">
              <div className="text-center font-mono">
                <span className="font-extrabold text-3xl text-black border-b-4 border-black">
                  Tech Stack
                </span>
              </div>
              <div className="space-y-8">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  <span className="text-black font-bold text-2xl">
                    Front-End{' '}
                  </span>
                  <div className="lg:flex grid grid-cols-3 items-center gap-8">
                    <Image
                      className="rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-150"
                      src="/html.png"
                      width={60}
                      height={60}
                      alt="html"
                    />
                    {/* ... (other Image components) ... */}
                  </div>
                </div>
                {/* ... (other tech stack sections) ... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Head;
