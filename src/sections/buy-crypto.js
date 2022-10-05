import Link from "next/link";
import Image from "next/image";

export default function BuyCrypto({ ...restProps }) {
  return (
    <section
      className="relative gap-4 my-8 md:mt-16 md:mb-10 px-4 py-6 md:py-8 flex flex-col lg:flex-row lg:items-center lg:justify-between rounded-2xl bg-no-repeat bg-center bg-cover bg-[url('/images/temp/buy-crypto-mask.png')]"
      {...restProps}
    >
      <div className="absolute w-[105px] lg:w-[147px] bottom-0 left-4 lg:left-[385px]">
        <Image
          src="/images/temp/character.png"
          alt="mastercard"
          width={147}
          height={168}
          quality={100}
          className="w-full"
          priority={true}
          layout="responsive"
        />
      </div>

      <div className="max-w-[280px] md:max-w-[350px]">
        <h2 className="text-lg mb-2">Buy Crypto in Seconds</h2>
        <p>
          Buy crypto instantly, and have it automatically transferred to your
          “Rocketbet” balance.
        </p>
      </div>

      <div className="flex-shrink-0 flex flex-col 2xl:flex-row 2xl:items-center gap-2 2xl:gap-16 3xl:gap-32 ml-auto max-w-[184px] lg:max-w-full lg:ml-0 mt-6 lg:mt-0 relative z-10">
        <div className="grid grid-cols-4 gap-2 [&>*]:rounded [&>*]:bg-dark-700 [&>*]:inline-block [&>*]:w-[42px] [&>*]:lg:w-[60px] [&>*]:h-[22px] [&>*]:lg:h-[32px] [&>*]:p-2">
          <span>
            <Image
              src="/images/payment/mastercard.png"
              alt="mastercard"
              width={100}
              height={32}
              quality={100}
              className="w-full"
              priority={true}
              layout="responsive"
            />
          </span>
          <span>
            <Image
              src="/images/payment/visa.png"
              alt="visa"
              width={100}
              height={32}
              quality={100}
              className="w-full"
              priority={true}
              layout="responsive"
            />
          </span>
          <span>
            <Image
              src="/images/payment/apay.png"
              alt="apay"
              width={100}
              height={32}
              quality={100}
              className="w-full"
              priority={true}
              layout="responsive"
            />
          </span>
          <span>
            <Image
              src="/images/payment/gpay.png"
              alt="gpay"
              width={100}
              height={32}
              quality={100}
              className="w-full"
              priority={true}
              layout="responsive"
            />
          </span>
        </div>

        <div>
          <Link href="/">
            <a className="w-full font-semibold text-white rounded bg-gradient-to-r from-[#3dc68d] to-[#278b62] hover:from-[#278b62] hover:to-[#3dc68d] py-[6.5px] md:py-[10px] px-3 md:px-4 lg:px-[72px] transition inline-flex items-center justify-center gap-2 shadow-[0_3px_13px_0_#3cc38b] text-[13px] md:text-sm">
              Buy crypto
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
