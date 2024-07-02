"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  //redirect to "/pages/main"
  const router = useRouter();
  useEffect(() => {
    router.replace(`/pages/main`);
  }, [router]);
  return <></>;
}
