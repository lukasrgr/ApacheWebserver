import { Component } from "@angular/core";
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styleUrls: ['./scrollmagic.component.css']
})
export class AnimationComponent {

  public particles = new Array(100);

  ngOnInit() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#ship",
        start: "top 30%",
        end: "bottom top",
      }
    })
    tl.to("#ship", { duration: 5, x: -200 });
  }
}
