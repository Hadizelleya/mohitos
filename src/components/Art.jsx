import React from "react";
import { featureLists, goodLists } from "../constants";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

export default function Art() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";
    const maskTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeLine
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.02,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  });

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The Art</h2>

        <div className="content">
          <ul className="will-fade space-y-4">
            {goodLists.map((list, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/public/images/check.png" alt="check" />
                <p>{list}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              src="/public/images/under-img.jpg"
              alt="art image"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="will-fade space-y-4">
            {featureLists.map((list, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/public/images/check.png" alt="check" />
                <p className="w-60 md:w-fit">{list}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
