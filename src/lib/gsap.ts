import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, SplitText, TextPlugin);
  // exposed for debugging / programmatic capture
  (window as unknown as { __gsap?: typeof gsap }).__gsap = gsap;
}

export { gsap, ScrollTrigger };
