/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div className="flex items-center justify-center gap-5">
      <Link href="/exterior">
        <div className="hover:shadow-3xl relative cursor-pointer shadow-2xl hover:scale-105 hover:transition-transform">
          <figure>
            <img
              src="/assets/exterior.jpg"
              className="h-80 w-32 rounded-xl object-cover md:h-[35rem] md:w-96"
              alt="exterior"
            ></img>
          </figure>
          <div className="absolute bottom-0 left-[8.5rem] right-0 top-96 hidden text-2xl font-semibold text-white md:block">
            EXTERIOR
          </div>
        </div>
      </Link>
      <Link href="/interior">
        <div className="hover:shadow-3xl relative cursor-pointer shadow-2xl hover:scale-105 hover:transition-transform">
          <figure>
            <img
              src="/assets/interior_front.jpg"
              className="h-80 w-32 rounded-xl object-cover md:h-[35rem] md:w-96"
              alt="interior-front"
            ></img>
          </figure>
          <div className="absolute bottom-0 left-[6.5rem] right-0 top-96 hidden text-2xl font-semibold text-white md:block">
            INTERIOR FRONT
          </div>
        </div>
      </Link>
      <Link href="/interior_front">
        <div className="hover:shadow-3xl relative cursor-pointer shadow-2xl hover:scale-105 hover:transition-transform">
          <figure>
            <img
              src="/assets/interior.webp"
              className="h-80 w-32 rounded-xl object-cover md:h-[35rem] md:w-96"
              alt="interior"
            ></img>
          </figure>
          <div className="absolute bottom-0 left-[8rem] right-0 top-96 hidden text-2xl font-semibold text-white md:block">
            INTERIOR
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Home;
