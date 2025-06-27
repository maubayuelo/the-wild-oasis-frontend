import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/public/logo.png';
// Importing the logo image directly is not necessary since we are using the Image component from Next.js

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logoImg} quality={75} height="60" width="60" alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
