'use client';

import { signIn, signOut } from "next-auth/react";

export async function login(providers: "google" | "facebook" = "google") {
  await signIn(providers);
}

export async function logout() {
  await signOut();
}