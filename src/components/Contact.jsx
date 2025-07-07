import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export default function Contact() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", {
      type: "words",
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "100",
          duration: 1,
          ease: "power1.inOut",
        },
        ">",
      );
  });

  return (
    <footer id="contact">
      <img
        src="/public/images/footer-right-leaf.png"
        alt="right leaf"
        id="f-right-leaf"
      />
      <img
        src="/public/images/footer-left-leaf.png"
        id="f-left-leaf"
        alt="left leaf"
      />

      <div className="content">
        <h2>Where To Find Us</h2>

        <div>
          <h3>Visit Bur Bar</h3>
          <p>Lebanon, Beirut, Downtown </p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>01/005009 </p>
          <p>velvetpour@gmail.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>

          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div className="flex-center gap-5">
          <h3>Socials</h3>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <img src={social.icon} alt={social.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
