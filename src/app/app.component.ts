import {
  Component,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'storage';
  rangeValue: number = 815;
  totalSize!: number;
  left!: string;
  right!: string;
  leftMiddle!: string;
  mobileView!: boolean;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.onResize();
    this.totalSize = 1000 - this.rangeValue;
    this.left = this.rangeValue / 10 + '%';
    this.right = this.totalSize / 10 + '%';
    this.leftMiddle = this.rangeValue / 20 + '%';
    console.log('this.left : ', this.left);
    console.log('this.right : ', this.right);
    console.log('this.leftMiddle : ', this.leftMiddle);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(window.innerWidth);
    if (window.innerWidth < 678) {
      this.mobileView = true;
    } else {
      this.mobileView = false;
    }
  }

  onSliderChange = () => {
    console.log('It is called : ', this.rangeValue);
    const slider = this.el.nativeElement.querySelector('input.slider');
    this.totalSize = 1000 - this.rangeValue;
    this.left = this.rangeValue / 10 + '%';
    this.right = this.totalSize / 10 + '%';
    this.leftMiddle = this.rangeValue / 20 + '%';
    console.log('this.left : ', this.left);
    console.log('this.right : ', this.right);
    console.log('this.leftMiddle : ', this.leftMiddle);
  };
}
