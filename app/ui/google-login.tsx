
import { signIn } from "@/auth";

async function googleSignInAction() {
    'use server';
    await signIn("google");
} 

export function GoogleLogIn() {
    return (
      <form action={googleSignInAction}>
        <button className='w-full h-8 text-white bg-blue-600 rounded-md' type="submit">Sign in with Google</button>
      </form>
    )  
  }