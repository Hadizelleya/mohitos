import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <>
      <div className="flex-center">App</div>
      <nav className="">
        <p>hello world</p>
      </nav>
    </>
  );
}
