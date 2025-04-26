import { signIn } from "@/auth";

async function githubSignInAction() {
    'use server';
    await signIn("github");
} 

export function GitHubLogIn() {
    return (
      <form action={githubSignInAction}>
        <button className='w-full p-4 text-white bg-blue-600 rounded-md' type="submit">Sign in with GitHub</button>
      </form>
    )  
  }