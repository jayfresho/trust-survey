import images from "@constants/images";
import { socialLinks } from "@lib/data/socialLinks";
import styles from "@styles/tailwind";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className={`${styles.maxWidth} pt-[60px] text-black-cus-1 dark:text-gray-cus-1`}
    >
      <div className="w-full pl-0 xs:pl-[10%] lg:pl-0 flex flex-col gap-[25px] lg:flex-row lg:justify-end mb-[20px]">
        <div className="flex gap-[22px] items-center text-[19px] sm:text-[22px] dark:text-white-cus-1">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={"_blank"}
              rel="noreferrer"
            >
              <item.icon />
            </a>
          ))}
        </div>
        <span className="inline-block lg:hidden text-[14px] md:text-[16px]">
          Privacy policy | Terms of service
        </span>
        <span className="inline-block lg:hidden text-[14px] md:text-[16px]">
          Powered by <span className="dark:text-white-cus-1">TechWey</span>
        </span>
      </div>
      <div className="flex justify-center">
        <div className="w-[85%] border border-gray-cus-1"></div>
      </div>
      <div className="py-[25px] flex justify-center gap-[80px] items-center text-[14px] md:text-[16px]">
        <span className="hidden lg:inline-block">
          Privacy policy | Terms of service
        </span>
        <span className="text-black-cus-1 dark:text-white-cus-1 flex items-center gap-x-[4px]">
          <span className="md:text-[24px]">©</span>
          <span className="text-[16px] md:text-[19px] font-Nunito-Sans">
            2023 <span className="font-[700]">BibzyCarter</span>
          </span>
        </span>
        <span className="hidden lg:inline-block">
          Powered by <span className="dark:text-white-cus-1">TechWey</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
