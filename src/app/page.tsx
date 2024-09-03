"use client";

import Image from "next/image";
import cat3 from "/public/cat3.jpg"
import Link from "next/link";
import { useRouter } from "next/router";
export default function Page() {
  // const router = useRouter();
  // const jump = () => {
  //   router.push('/dashboard');
  // }

  return (
    <>
      <h1>This is /Page.tsx</h1>
      <button type="button">
        <Link href="/dashboard">Go to /dashboard</Link>
      </button>
      <br />
      <img src="/cat3.jpg" alt="cat3" />
      <br />
    </>
  );
}
