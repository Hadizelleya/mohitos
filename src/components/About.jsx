import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function About() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeLine
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid, .bottom-grid",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5",
      );
  });

  return (
    <div id="about">
      <div className="mb-16 px-5 md:px-0">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where Everey Detail Matters <span className="text-white">-</span>{" "}
              From Muddle Too Garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div>
              <p className="text-xl font-bold md:text-3xl">
                <span>4.5</span>/5
              </p>
              <p className="text-white-100 text-sm">
                More Than +1000 Customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy">
            <img src="/public/images/abt1.png" alt="grid-image-1" />
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="noisy">
            <img src="/public/images/abt2.png" alt="grid-image-5" />
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="noisy">
            <img src="/public/images/abt5.png" alt="grid-image-5" />
          </div>
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy">
            <img src="/public/images/abt3.png" alt="grid-image-5" />
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="noisy">
            <img src="/public/images/abt4.png" alt="grid-image-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
