import Image from 'next/image';
import { signInAction } from '../_lib/actions';


function SignInButton() {
  return (
    

    <form action={signInAction} method="post" className="flex flex-col gap-4 items-center">
      <button
        type="submit"
        className='flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium'>
      
        <Image
          src='https://authjs.dev/img/providers/google.svg'
          alt="Google Icon"
          width={24}
          height={24}
        />
        Sign in with Google
      </button>
      <p className="text-sm text-gray-500">
        By signing in, you agree to our{' '}
        <a href="/terms" className="text-blue-500 hover:underline">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="/privacy" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>.
      </p>
    </form>

    
  );
}

export default SignInButton;
