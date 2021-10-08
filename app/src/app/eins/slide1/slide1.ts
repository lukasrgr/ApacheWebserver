import { Component } from "@angular/core";
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

@Component({
  selector: 'slide1',
  templateUrl: './slide1.html',
  styleUrls: ['./slide1.scss']
})
export class Slide1Component {

  public particles = new Array(100);
  public width: string | undefined = '';

  // Lottie Animation
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor() {
    this.lottieConfig = {
      path: 'assets/pinjump.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }
  ngOnInit() {


    //   this.width = document.getElementById('circle')?.style.getPropertyValue('width').toString();
    //   console.log("width", this.width)
    //   var tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: "#trigger",
    //       start: "top 30%",
    //       end: "bottom top",
    //     }
    //   })
    //   tl.to("#hi", { duration: 1, xPercent: -15, opacity: 1, ease: Circ.easeOut });
    //   tl.to("#im", { duration: 1, xPercent: -15, opacity: 1, ease: Circ.easeOut }, 2);

    // tl.to("#image", { duration: 1, opacity: 1, ease: Circ.easeOut });

    // Show image directly after 'Sichel'
    // tl.to("#circle", 1, {
    //   backgroundColor: "transparent", delay: 0.5,
    //   Ease: Elastic.easeOut.config(1, 0.3)
    // });
  }
}

