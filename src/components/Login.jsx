import { SignIn } from "@clerk/clerk-react"


export default function SignInPage({user}) {
    return (
        <div className='flex items-center justify-center'>
            <SignIn afterSignInUrl={`${user}/dashboard`}  />;
        </div>
    )
}