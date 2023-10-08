"use client"

import Link from "next/link";
import Container from "@/components/container";
import ReactPlayer from "react-player";
export default function Post({ posts }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center">

        <ReactPlayer width={960} height={540} playing controls={false} muted={true} loop={true} url="https://vimeo.com/872297976" />

        <button className="rounded-lg my-4 bg-blue-600 p-4 font-semibold text-white shadow-lg">
          <Link href="/commercials" passHref>
            View Commercials
          </Link>
        </button>
      </div>

    </Container>
  );
}
