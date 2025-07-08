"use client";
import { login, logout } from "@/lib/action/auth";
export const GoogleSignIn = () => {
    return <button onClick={ () => login("google") } className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Sign in Google </button>
}

export const GoogleSignOut = () => {
    return <button onClick={ () => logout() } className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"> Sign out Google </button>
}