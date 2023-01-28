import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'solitaire-iframe',
  templateUrl: './s-iframe.component.html',
  styleUrls: ['./s-iframe.component.css']
})
export class SIFrameComponent {

  displayFrame() {
    utilDisplay.display();
  }
  
  hideFrame() {
    utilHide.hide();
  }

@ViewChild('myModal', { static: false }) myModal: ElementRef;
elm: HTMLElement;
ngAfterViewInit(): void {
   this.elm = this.myModal.nativeElement as HTMLElement;
}
close(): void {
    this.elm.classList.remove('show');
    setTimeout(() => {
      this.elm.style.width = '0';
    }, 75);
}
open(): void {
    this.elm.classList.add('show');
    this.elm.style.width = '100vw';
    utilDisplay.display();
}
  
}
