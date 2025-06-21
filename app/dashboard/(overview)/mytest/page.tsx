
import { auth } from "@/auth"
 
export default async function Page() {
  const session = await auth();
  // if (!session) {
  //   console.log ("Not authenticated") 
  //   return <div>Not authenticated</div>
  // }
  console.log(JSON.stringify(session, null, 2));
  return (
    session ?
      <div className='text-white'>
        <ul>
          <li>{session.user?.name}</li>
          <li>{session.user?.email}</li>
          <li>{session.user?.image}</li>
        </ul>
        {"--------"}
        <div>{JSON.stringify(session, null, 2)}</div>     
      </div>
      : <div>Not authenticated.</div>
  )
} 