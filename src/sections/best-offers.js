import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { TopPicks } from "../lib/icons";
import "keen-slider/keen-slider.min.css";

export default function BestOffers({ ...restProps }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      spacing: 20,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="py-6" {...restProps}>
      <h1 className="flex items-center justify-start gap-2 text-lg font-medium mb-4">
        <TopPicks className="text-green-500 w-8 h-8 flex-shrink-0" /> Best
        offers
      </h1>

      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1 h-[200px] bg-red-500">
          1
        </div>
        <div className="keen-slider__slide number-slide2 h-[200px] bg-red-500">
          2
        </div>
        <div className="keen-slider__slide number-slide3 h-[200px] bg-red-500">
          3
        </div>
        <div className="keen-slider__slide number-slide4 h-[200px] bg-red-500">
          4
        </div>
        <div className="keen-slider__slide number-slide5 h-[200px] bg-red-500">
          5
        </div>
        <div className="keen-slider__slide number-slide6 h-[200px] bg-red-500">
          6
        </div>
      </div>
    </section>
  );
}
