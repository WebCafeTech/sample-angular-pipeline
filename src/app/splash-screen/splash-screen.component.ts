import { Component, OnInit, Input } from '@angular/core';
import { SplashAnimationType } from './splash-animation-type';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {

  windowWidth: string | undefined;
  showSplash = true;
  splashTransition: string | undefined;
  opacityChange: number = 1;

  @Input() animationDuration: number = 0.5;
  @Input() duration: number = 3;
  @Input() animationType: string | SplashAnimationType = SplashAnimationType.FadeOut;

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      let transitionStyle = "";
        switch (this.animationType) {
          case SplashAnimationType.SlideLeft:
            this.windowWidth = "-" + window.innerWidth + "px";
            transitionStyle = "left " + this.animationDuration + "s";
            break;
          case SplashAnimationType.SlideRight:
            this.windowWidth = window.innerWidth + "px";
            transitionStyle = "left " + this.animationDuration + "s";
            break;
          case SplashAnimationType.FadeOut:
            transitionStyle = "opacity " + this.animationDuration + "s";
            this.opacityChange = 0;
        }
  
        this.splashTransition = transitionStyle;
  

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      },  this.animationDuration * 1000);
    }, this.duration * 1000);
  }

}
