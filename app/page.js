import trust_home_bg from "@public/images/trust-home-bg.png";
import trust_logo from "@public/images/trust-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-y-auto text-white">
      <div className="z-[2] absolute bg-linear-gradient-1 w-full h-full px-[25px] flex justify-center items-center">
        <div>
          <div className="relative w-[80px] h-[80px] mx-auto mb-6">
            <Image
              src={trust_logo}
              alt="Trust logo"
              fill
              className="inline-block rounded-full"
            />
          </div>
          <h1 className="text-[31px] text-center mb-8 md:text-[50px] leading-[40px] md:leading-[50px] font-[700]">
            Trust Referral Program
          </h1>
          <div className="px-[40px] py-[20px] bg-blue-900 shadow-md rounded-lg">
            <p className="text-[18px] text-center mb-2">
              Welcome to our referral program
            </p>
            <p className="mb-6 text-center">Sign up to continue</p>
            <Link
              href="/signup"
              className="w-[95px] h-[38px] bg-blue-600 rounded mx-auto flex items-center justify-center hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={trust_home_bg}
        alt="Trust background"
        fill
        sizes="(max-width: 600px) 40vw, (max-width: 1200) 60vw, 100vw"
        className="object-cover "
      />
    </div>
  );
}
