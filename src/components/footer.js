import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";
import { Telegram, FaceBook, Twitter, Instagram } from "../lib/icons";

const socialNetworks = [
  {
    url: "https://www.google.com/",
    icon: <Telegram className="w-5" />,
  },
  {
    url: "https://www.google.com/",
    icon: <FaceBook className="w-5" />,
  },
  {
    url: "https://www.google.com/",
    icon: <Twitter className="w-5" />,
  },
  {
    url: "https://www.google.com/",
    icon: <Instagram className="w-5" />,
  },
];

export default function Footer({ ...restProps }) {
  return (
    <footer className="py-4 md:py-10 bg-dark-400 text-dark-300" {...restProps}>
      <div className="container mx-auto max-w-[1330px]">
        <Logo className="w-[178px] mb-4" />

        <p className="mb-8 md:mb-11">
          <span className="font-heading">RocketBet:</span> Play thousands of
          exciting, provably fair games and get the best odds on 50+ sports.
          Deposit with Visa, Ethereum, Bitcoin, Litecoin &#38; more.
          <br className="hidden md:block" /> Featuring instant withdrawals and
          tons of rewards every day!
        </p>

        <h3 className="font-semibold text-base mb-4">Payment methods</h3>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-x-4 items-center mb-8 md:mb-6">
          <Image
            src="/images/logos/bitcoin.svg"
            alt="bitcoin"
            width={100}
            height={50}
            quality={100}
            className="w-full"
            priority={true}
            layout="intrinsic"
          />
          <Image
            src="/images/logos/litecoin.svg"
            alt="litecoin"
            width={100}
            height={50}
            quality={100}
            className="w-full"
            priority={true}
            layout="intrinsic"
          />
          <Image
            src="/images/logos/dogecoin.svg"
            alt="dogecoin"
            width={100}
            height={50}
            quality={100}
            className="w-full"
            priority={true}
            layout="intrinsic"
          />
          <Image
            src="/images/logos/bitcoin-cash.svg"
            alt="bitcoin-cash"
            width={100}
            height={50}
            quality={100}
            className="w-full"
            priority={true}
            layout="intrinsic"
          />
          <Image
            src="/images/logos/ethereum.svg"
            alt="ethereum"
            width={100}
            height={50}
            quality={100}
            className="w-full"
            priority={true}
            layout="intrinsic"
          />
          <Image
            src="/images/logos/tether.svg"
            alt="tether"
            width={100}
            height={50}
            quality={100}
            className="w-full"
            priority={true}
            layout="intrinsic"
          />
        </div>

        <h3 className="font-semibold text-base mb-4">Social networks</h3>

        <div className="flex flex-wrap gap-4 mb-8 md:mb-6">
          {socialNetworks.map((item, index) => {
            return (
              <a
                target="_blank"
                href={item.url}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-[40px] h-[40px] rounded bg-dark-700 text-dark-300 hover:text-green-500 transition"
                key={index}
              >
                {item.icon}
              </a>
            );
          })}
        </div>

        <h3 className="font-semibold text-base mb-4">Other</h3>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-[200px_200px]">
          <div className="grid gap-2 [&>*]:transition">
            <Link href="/help">
              <a className="hover:text-green-500">Help</a>
            </Link>
            <Link href="/faq">
              <a className="hover:text-green-500">Faq</a>
            </Link>
            <Link href="/privacy-policy">
              <a className="hover:text-green-500">Privacy Policy</a>
            </Link>
            <Link href="/terms-of-service">
              <a className="hover:text-green-500">Terms of Service</a>
            </Link>
            <Link href="/refer">
              <a className="hover:text-green-500">Refer a friend</a>
            </Link>
          </div>

          <div className="grid gap-2 [&>*]:transition">
            <Link href="/rules">
              <a className="hover:text-green-500">Rules</a>
            </Link>
            <Link href="/about">
              <a className="hover:text-green-500">About Us</a>
            </Link>
            <Link href="/affiliate-program">
              <a className="hover:text-green-500">Affiliate Program</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-green-500">Contact Us</a>
            </Link>
            <Link href="/responsible-gambling">
              <a className="hover:text-green-500">Responsible Gambling</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
