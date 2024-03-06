import Image from "next/image";

export default function Landing() {
  return (
    <>
      <main className="w-full h-full">
        <div className="grid grid-cols-1 gap-8 h-fit">
          <div className="col-span-1 flex flex-col items-center justify-center">
            <Image
              src="/images/IMG_9063 2.jpeg"
              alt="Your Alt Text"
              width={500}
              height={300}
              className="rounded-full h-auto object-cover w-48"
            />
            <h1 className="text-3xl py-5 border-black font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-gray-700">
              Frontend Engineer
            </h1>
            <p className="mt-4 text-gray-500 text-center md:w-2/3 h-fit">
              I am Saurabh Solanke, a passionate individual with expertise in front-end
              development. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Quisque vel neque sit amet est vehicula gravida. Nulla
              facilisi. Vestibulum in malesuada elit.
            </p>
            <div>
            <i className="bi bi-github"></i>1
            <svg xmlns="http://www.w3.org/2000/svg" className="bg-dark h-6 w-6" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.536 10.536 0 0 1 12 6.32a10.49 10.49 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"/></svg>
            2</div>
          </div>
        </div>
      </main>
    </>
  )
}