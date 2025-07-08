"use client";
import { useSession } from "next-auth/react";
import { GoogleSignIn, GoogleSignOut } from "@/component/googleSignIn";
import { FacebookSignIn, FacebookSignOut } from "@/component/Facebook";

export default function Component() {
  const { data: session, status } = useSession();

  console.log("Session data:", session);
  if (status === "loading") return <p>Loading...</p>;

  if (status === "unauthenticated") {
    return (
      <>
        Not signed in <br />
        <GoogleSignIn />
        <FacebookSignIn />
      </>
    );
  }

  return (
    <>
      Signed in as {session?.user?.name} <br /> {session?.user?.email} <br />
      <GoogleSignOut />
      <FacebookSignOut />
    </>
  );
}