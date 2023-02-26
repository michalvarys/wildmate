import Image from "next/image";
import Link from "next/link";
import logo from '../assets/wildmate-symbol-white.svg';

export function HomeButton() {
  return (
    <Link href="/?page=home">
      <Image alt="" src={logo} width={100} style={{ position: 'absolute', top: '15px', left: '15px' }} />
    </Link>
  )
}