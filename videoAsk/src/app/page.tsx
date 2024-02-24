'use client'
import Image from "next/image";
import NavBar from "./(components)/navbar/nav";
import Section from "./(components)/section/section";
import Ask from "./(components)/ask/page";
import Footer from "./(components)/tools/footer";
import Link from "next/link";
import How from "./(components)/section/how";
import { Suspense } from "react";


export default function Home() {

  return (
    <main className="flex h-full flex-col gap-1 mx-3 lg:container lg:m-auto px-3">
      <NavBar />
      <Section />
      <h1 className=" w-full text-center font-light opacity-45"> +10k bla bla bla bla ...</h1>
      <div className=" flex flex-col gap-2 px-2 py-1 w-full justify-center items-center animate-fade-up animate-ease-linear ">
        <div className=" md:flex w-full gap-2">
          <div className=" flex flex-col justify-center items-center md:w-1/3 gap-2 animate-fade-up animate-ease-linear my-3">
            <Image
              className="rounded-xl px-3 py-3 "
              src="/images/recrutment.png" alt="test" width={720} height={720} priority />
            <h1 className=" font-semibold text-lg">Recruitment</h1>
            <p className="w-2/3 text-center line-clamp-3">
              Streamline the recruitment process with asynchronous interviews, easy scheduling, and tagging.
            </p>
            <div className="flex justify-center items-center px-4 py-3 rounded-full bg-[#dedede] w-max">
              <span className=" text-lg px-3 py-2">Learn more</span>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center md:w-1/3 gap-2 animate-fade-up animate-ease-linear my-3">
            <Image
              className="rounded-xl px-3 py-3 "
              src="/images/girl.png" alt="test" width={720} height={720} priority />
            <h1 className=" font-semibold text-lg">Sales & Marketing</h1>
            <p className="w-2/3 text-center line-clamp-3 ">
              Establish a bond with your audience from the get-go. VideoAsk lets you gather contact info and capture leads with ease.
            </p>
            <div className="flex justify-center items-center px-4 py-3 rounded-full bg-[#dedede] w-max">
              <span className=" text-lg px-3 py-2">Learn more</span>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center md:w-1/3 gap-2 animate-fade-up animate-ease-linear my-3">
            <Image
              className="rounded-xl px-3 py-3 "
              src="/images/test.avif" alt="test" width={720} height={720} priority />
            <h1 className=" font-semibold text-lg">More Solutions</h1>
            <p className="w-2/3 text-center line-clamp-3">
              One tool, endless possibilities—use VideoAsk for research and feedback, training, and customer support.
            </p>
            <div className="flex justify-center items-center px-4 py-3 rounded-full bg-[#dedede] w-max">
              <span className=" text-lg px-3 py-2">Learn more</span>
            </div>
          </div>

        </div>
      </div>
      <div className=" w-full flex justify-center items-center my-2">
        <p className=" w-full md:w-1/2 text-2xl text-center">Scale your high touch communication with asynchronous, interactive video</p>
      </div>
      <div className="w-full justify-center flex flex-col gap-1 h-full mb-3">
        <h1 className=" ml-[5%] text-2xl font-semibold text-black border-l-4 border-black px-2 my-3 animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in">Watch a Demo</h1>
        <Ask />
        <div className=" w-full flex justify-center items-center animate-fade animate-once animate-duration-[2000ms] animate-ease-in-out">
          <Link href='/create' className=" w-max px-2 py-3 text-white bg-black rounded-full font-semibold hover:text-black hover:bg-white hover:outline outline-black">Create videoAsk</Link>
        </div>
      </div>
      <How />
      <Footer />
    </main>
  );
}