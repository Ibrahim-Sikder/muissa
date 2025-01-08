'use client'
import { usePathname } from "next/navigation";
import FooterData from "./FooterData";

const Footer = () => {
  const pathname = usePathname()

  return (
    <footer className={
      pathname === '/investment' ||
        pathname === '/investment/one-to-one-consultancy-book-metting' ||
        pathname === '/thank-you-consultant'
        ? 'hidden'
        : 'block'
    }>
      <FooterData />
    </footer>
  );
};

export default Footer;
