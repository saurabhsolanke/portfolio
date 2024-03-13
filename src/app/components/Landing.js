import Image from "next/image";

export default function Landing() {
  return (
    <>
      <main className="w-full h-full">
        <div className="grid grid-cols-1 gap-8 h-fit px-9">
          <div className="col-span-1 flex flex-col">
            <Image
              src="/images/IMG_9063 2.jpeg"
              alt="Your Alt Text"
              width={500}
              height={300}
              className="rounded-full h-auto object-cover w-48"
            />
            <h1 className="text-5xl py-5 border-black font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-gray-700">
              Frontend Engineer
            </h1>
            <p className="mt-4 text-gray-500 md:w-2/3 h-fit">
              I am Saurabh Solanke, a passionate individual with expertise in front-end
              development. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Quisque vel neque sit amet est vehicula gravida. Nulla
              facilisi. Vestibulum in malesuada elit.
            </p>
            <div className="flex gap-4 text-black py-4">
              <a href="https://www.linkedin.com/in/saurabh-solanke/" target="_blank">
                <img src="/images/linkedin.svg" />
              </a>
              <a href="https://github.com/saurabhsolanke" target="_blank">
                <img src="/images/github.svg" />
              </a>
              <a href="https://stackoverflow.com/users/11864453/saurabh-solanke" target="_blank">
                <img src="/images/stack-overflow.svg" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}