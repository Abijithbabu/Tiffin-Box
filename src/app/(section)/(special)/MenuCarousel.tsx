"use client";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/app/(section)/(special)/MenuArrowButtons";
import { useDotButton } from "@/app/(section)/(special)/MenuDotButton";
import "@/app/(section)/(special)/embla-menu.css";
import { Icons } from "@/components/Icon";
import ModelBox from "@/components/ModelBox";
import { Button } from "@/components/ui/button";
import type {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef } from "react";

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: { modelUrl: string; price: string; name: string }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(
        ".embla-menu__slide__number",
      ) as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap?.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          if (!tweenNode) return;
          tweenNode.style.transform = `scale(${scale})`;
          tweenNode.style.opacity = scale;
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi, tweenScale]);

  return (
    <>
      <div className="z-50 flex h-screen w-full flex-col items-center">
        <div className="embla-menu">
          <div className="overflow-hidden lg:overflow-visible" ref={emblaRef}>
            <div className="embla-menu__container">
              {slides.map((item, index) => (
                <div className="embla-menu__slide" key={index}>
                  <div className="embla-menu__slide__number h-full rounded-full border border-white/20 bg-white bg-opacity-5 backdrop-blur-lg 2xl:w-full">
                    <div className="flex flex-col items-center gap-8 py-8 2xl:py-0">
                      <div className="lg:hidden">
                        <ModelBox
                          src={item.modelUrl}
                          width="200px"
                          height="200px"
                          cameraOrbit="0deg 40deg 0deg 5m"
                          fieldOfView="25deg"
                          cameraTarget="0m 0m 0m"
                        />
                      </div>
                      <div className="hidden lg:flex 2xl:hidden">
                        <ModelBox
                          src={item.modelUrl}
                          width="250px"
                          height="250px"
                          cameraOrbit="0deg 40deg 0deg 5m"
                          fieldOfView="25deg"
                          cameraTarget="0m 0m 0m"
                        />
                      </div>
                      <div className="hidden 2xl:flex">
                        <ModelBox
                          src={item.modelUrl}
                          width="300px"
                          height="300px"
                          cameraOrbit="0deg 40deg 0deg 5m"
                          fieldOfView="25deg"
                          cameraTarget="0m 0m 0m"
                        />
                      </div>
                      <div className="flex w-full flex-col items-center justify-center pb-12 font-jakarta font-thin tracking-wider">
                        <p className="max-w-xs text-wrap text-center text-base uppercase 2xl:text-xl">
                          {item?.name}
                        </p>
                        <p className="text-lg 2xl:text-xl">£ {item?.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Button
          className="group items-center gap-[1.19rem] border border-white bg-transparent hover:bg-yellow"
          variant="secondary"
          asChild
        >
          <Link href="/menu" className="group flex items-center space-x-2">
            <p className="text-white duration-300 group-hover:text-black">
              Explore Full Menu
            </p>
            <Icons.rightArrow className="transform text-yellow duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-black" />
          </Link>
        </Button>
      </div>
      <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center">
        <Image
          alt="tiffin-box"
          src="/images/landing-page/featured-bg.png"
          width={500}
          height={500}
          objectFit="contain"
          className="h-4/5 w-full pb-28 lg:h-full lg:w-1/2 2xl:h-[90%]"
        />
      </div>
    </>
  );
};

export default EmblaCarousel;
