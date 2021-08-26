import { Component } from "@angular/core";
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styleUrls: ['./scrollmagic.component.css']
})
export class AnimationComponent {

  ngOnInit() {
    // gsap.registerPlugin(ScrollTrigger)
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#ship",
        start: "top 30%",
        end: "bottom top",
      }
    })
    tl.to("#ship", { duration: 5, x: -200 });
  }

  //   var ship = { values: [{ yPercent: 50, xPercent: 0, }, { yPercent: -100, xPercent: -350 }] }
  //   var controller = new ScrollMagic.Controller();
  //   var tl = gsap.timeline();

  //   var tween1 = gsap.fromTo('#ship', { xPercent: -200 }, { xPercent: 0 });
  //   tl.add(tween1)
  //   var scene: any = new ScrollMagic.Scene({ triggerElement: '.trigger', triggerHook: 0, duration: '100%', reverse: true })
  //   scene.addIndicators({ name: "Trigger3", colorTrigger: 'transparent', colorEnd: 'rgba(255,255,255,0)', colorStart: 'rgba(255,255,255,0)' })
  //     .addTo(controller)
  //     .setPin('viewport')
  //     .setTween(tl)
  //     .on("leave", function () {
  //       $("body").css("overflow", "hidden");
  //       $("#ship").toggleClass("keyframesforthewin")
  //       // $(".kf")removeClass("keyframesforthewin");
  //       // $(".kf")toggleClass("keyframesforthewin3");
  //       // $(".pfeil").toggleClass("keyframesforthewin")
  //     })
  //     .on("start", function () {
  //       $("body").css("overflow", "scroll")
  //     });
}
