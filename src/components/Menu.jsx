import { useRef, useState } from "react";
import { sliderLists } from "../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export default function Menu() {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(
      ".title",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
      },
    );

    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      {
        opacity: 1,
        duration: 1,
        xPercent: 0,
        ease: "power1.inOut",
      },
    );

    gsap.fromTo(
      ".details h2",
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        opacity: 1,
        yPercent: 1,
        ease: "power1.inOut",
      },
    );

    gsap.fromTo(
      ".details p",
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        opacity: 1,
        yPercent: 1,
        ease: "power1.inOut",
      },
    );
  }, [currentIndex]);

  const totalCocktails = sliderLists.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset) => {
    return sliderLists[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const prevCocktail = getCocktailAt(-1);
  const currentCocktail = getCocktailAt(0);
  const nextCocktail = getCocktailAt(1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/public/images/slider-left-leaf.png"
        alt="left-lead"
        id="m-left-leaf"
      />
      <img
        src="/public/images/slider-right-leaf.png"
        alt="right-lead"
        id="m-right-leaf"
      />

      <h2 className="sr-only" id="cocktail-tabs">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((item, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              onClick={() => goToSlide(index)}
              key={item.id}
              className={`${isActive ? "border-white text-white" : "border-white/50 text-white/50"}`}
            >
              {item.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="cursor-pointer text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img src="/public/images/right-arrow.png" alt="right arrow" />
          </button>

          <button
            className="cursor-pointer text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img src="/public/images/left-arrow.png" alt="left arrow" />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={currentCocktail.image}
            className="object-contain"
            alt="cocktail image"
          />
        </div>

        <div className="recipe">
          <div className="info" ref={contentRef}>
            <p>Recipe For:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
