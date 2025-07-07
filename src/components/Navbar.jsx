import React, { useRef } from "react";
import { navLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Navbar() {
  const navRef = useRef(null);
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: navRef.current,
      start: "top top",
      end: "+=100",
      onEnter: () => {
        gsap.to(navRef.current, {
          backgroundColor: "#00000050",
          backdropFilter: "blur(10px)",
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, {
          backgroundColor: "transparent",
          backdropFilter: "none",
          duration: 0.5,
        });
      },
    });
  }, []);

  return (
    <nav ref={navRef}>
      <div>
        <a href="#" className="flex items-center gap-2">
          <img src="../../public/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
