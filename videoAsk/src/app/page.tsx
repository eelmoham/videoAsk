import Image from "next/image";
import NavBar from "./(components)/navbar/nav";
import Section from "./(components)/section/section";
import Ask from "./(components)/ask/page";
import Footer from "./(components)/footer";

export default function Home() {
  return (
    <main className="flex h-full flex-col gap-1">
      <NavBar />
      <Section />
      <h1 className=" w-full text-center font-light opacity-45"> +10k bla bla bla bla ...</h1>
      <div className=" flex flex-col gap-2 px-2 py-1 w-full justify-center items-center animate-fade-up animate-ease-linear">
        <div className=" md:flex w-full">
          <div className=" flex flex-col justify-center items-center md:w-1/3 gap-2 animate-fade-up animate-ease-linear my-3">
            <Image
              className="rounded-lg shadow-lg w-60 h-64 "
              src="/images/test.avif" alt="test" width={720} height={720} priority />
            <h1 className=" font-semibold text-lg">More Solutions</h1>
            <p className="w-2/3 text-center line-clamp-3">
              One tool, endless possibilities—use VideoAsk for research and feedback, training, and customer support.
            </p>
            <div className=" w-max px-3 py-2 rounded-full bg-[#dedede]">
              <span>Learn more</span>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center md:w-1/3 gap-2 animate-fade-up animate-ease-linear my-3">
            <Image
              className="rounded-lg shadow-lg w-60 h-64 "
              src="/images/example.webp" alt="test" width={720} height={720} priority />
            <h1 className=" font-semibold text-lg">Example</h1>
            <p className="w-2/3 text-center line-clamp-3 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, recusandae consequuntur eaque velit magnam quis fugit suscipit doloribus quisquam fugiat quaerat omnis, eius commodi praesentium ipsum, perspiciatis ipsam delectus iste?
            </p>
            <div className=" w-max px-3 py-2 rounded-full bg-[#dedede]">
              <span>Learn more</span>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center md:w-1/3 gap-2 animate-fade-up animate-ease-linear my-3">
            <Image
              className="rounded-lg shadow-lg w-60 h-64 "
              src="/images/test.avif" alt="test" width={720} height={720} priority />
            <h1 className=" font-semibold text-lg">More Solutions</h1>
            <p className="w-2/3 text-center line-clamp-3">
              One tool, endless possibilities—use VideoAsk for research and feedback, training, and customer support.
            </p>
            <div className=" w-max px-3 py-2 rounded-full bg-[#dedede]">
              <span>Learn more</span>
            </div>
          </div>

        </div>
      </div>
      <div className=" w-full flex justify-center items-center my-2">
        <p className=" w-full md:w-1/2 text-2xl text-center">Scale your high touch communication with asynchronous, interactive video</p>
      </div>
      <div className="w-full justify-center flex flex-col gap-2 h-full">
        <h1>Watch a Demo</h1>
        <Ask />
      </div>
      <Footer />
    </main>
  );
}