import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[typewritterEffect]'
})
export class TypewritterEffect implements OnInit {
  @Input('typewritterEffect') text: string = '';
  @Input() speed: number = 50; // ms per character

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.typeText();
  }

  private async typeText(): Promise<void> {
    const element: HTMLElement = this.el.nativeElement;
    element.textContent = '';

    for (let i = 0; i < this.text.length; i++) {
      element.textContent += this.text.charAt(i);
      await this.delay(this.speed);
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
