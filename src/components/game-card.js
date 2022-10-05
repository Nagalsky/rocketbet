import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeartEmpty, HeartFull } from "../lib/icons";

export default function GameCard({
  title,
  image,
  favorite,
  urlPath,
  ...restProps
}) {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const toggleFavorite = () => setIsFavorite((prevCount) => !prevCount);

  return (
    <div className="rounded-2xl overflow-hidden block w-full" {...restProps}>
      <Link href="/">
        <a>
          <Image
            src={image}
            alt={title}
            width={312}
            height={168}
            quality={100}
            className="w-full"
            priority={true}
            layout="responsive"
          />
        </a>
      </Link>
      <div className="px-[12px] py-4 flex items-center justify-between min-w-0 bg-dark-600 gap-3">
        <p className="md:text-base truncate">{title}</p>

        <button
          type="button"
          className="flex-shrink-0"
          onClick={toggleFavorite}
        >
          {isFavorite ? (
            <HeartEmpty className="w-5 h-5 text-dark-300" />
          ) : (
            <HeartFull className="w-5 h-5 text-green-500" />
          )}
        </button>
      </div>
    </div>
  );
}
