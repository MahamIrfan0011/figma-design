import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  return (
    <nav className="bg-[rgba(4, 56, 115, 1)] w-full h-16">
      <div className="container mx-auto flex justify-center ">
      <div className="flex items-center mt-5 mr-12">
      <Image src="/logo 1.png" alt="Logo" width={191} height={34} justify-between="true"/>
        </div>

        <ul className="flex gap-6 mt-8 ml-20">
          <li className="w-[78px] h-[23px] font-sans font-medium text-[18px] leading-[23px] text-white">
            <Link href="/">
              Products
            </Link>
          </li>
          <li className="w-[78px] h-[23px] font-sans font-medium text-[18px] leading-[23px] text-white">
            <Link href="/Solutions">
              Solutions
            </Link>
          </li>
          <li className="w-[78px] h-[23px] font-sans font-medium text-[18px] leading-[23px] text-white">
            <Link href="/Resources">
              Resources
            </Link>
          </li>
          <li className="w-[78px] h-[23px] font-sans font-medium text-[18px] leading-[23px] text-white">
            <Link href="/Pricing">
              Pricing
            </Link>
          </li>
        </ul>
      <div className="w-[126px] h-[60px] rounded-md  pt-[16px] pr-[40px] pb-[16px] pl-[40px] bg-[rgba(255,228,146,1)] flex items-center justify-center translate-y-3 ml-20">
         <p className="font-['Inter'] font-medium text-[18px] leading-[23px] tracking-[-0.02em] text-[rgba(4,56,115,1)]">
          Login
         </p>
      </div>
      
      </div>
    </nav>
  );
}


