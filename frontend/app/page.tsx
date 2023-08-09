import Image from "next/image";
import hero from "../public/undraw_festivities_tvvj.svg";
import { Russo_One } from "next/font/google";

const kalam = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kalam",
});

export default function Home() {
  return (
    <>
      <nav className="h-[10vh] flex items-center justify-between p-6 px-[5rem]">
        <h1 className={`${kalam.className} font-bold text-black text-3xl`}>
          EBENTO
        </h1>
        <div className="text-black w-auto flex justify-center items-center gap-7 font-semibold">
          <a href="" className="hover:text-gray-700">
            Home
          </a>
          <a href="" className="hover:text-gray-700">
            How
          </a>
          <a href="" className="hover:text-gray-700">
            About
          </a>
        </div>
      </nav>
      <main className="h-[90vh] w-full flex items-start pt-11  justify-center gap-8  ">
        <Image
          className=" mt-11"
          alt="hero "
          src={hero}
          width={400}
          height={300}
        />
        <div className="  p-8  mt-11 rounded  text-black   text-start leading-normal flex flex-col items-center justify-center gap-6   ">
          <h1 className="text-4xl font-semibold mt-5">Organize Events</h1>
          <p className="text-center  text-xl leading-relaxed font-semibold mt-4">
            A New Way To Make Meeting Friends And Familly <br />
            Easier Than Ever! Join Our Vast Community <br />
            Start Using Ebento Now!
          </p>
          <hr className="bg-black h-[3px] rounded mt-3 w-2/3" />
          <div className="buttons z-30 flex gap-12 items-center justify-center mt-8 ">
            <button className=" rounded-lg px-6 py-2 font-semibold bg-[#121212] hover:bg-[#2b2b2b] text-white">
              <a
                href="/auth/register"
                className="flex items-center justify-center"
              >
                Create an event
              </a>
            </button>
            <button className=" underline font-semibold text-black">
              Join
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
