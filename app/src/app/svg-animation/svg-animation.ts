import { Component } from "@angular/core";
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
@Component({
  selector: 'svg-animation-first',
  templateUrl: './svg-animation.html',
  styleUrls: ['./svg-animation.css']
})
export class SvgAnimationComponent {

  ngOnInit() {
    TweenMax.set(".squiggle", {
      drawSVG: '0% 0%'
    })

    TweenMax.to(".squiggle", 1, { drawSVG: "100%", delay: 0.5 })
  }
}
