import { signIn } from "@/auth";

async function githubSignInAction() {
    'use server';
    await signIn("github");
} 

export async function GitHubLogIn() {
    'use server'  
    return (
      <form action={ githubSignInAction }>
        <button className='w-full h-8 text-white bg-blue-600 rounded-md' type="submit">Sign in with GitHub</button>
      </form>
    )  
  }