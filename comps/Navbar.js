import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Image src="/logo.png" width={128} height={100}/>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninjas </Link>
    </nav>
  );
};

export default Navbar;
