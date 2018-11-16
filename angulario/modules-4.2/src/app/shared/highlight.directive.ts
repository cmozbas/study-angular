/**
 * The HighlightDirective is an attribute directive that sets the background
 * color of its host element. This is how to use it
 *
 * <h1 highlight>{{title}}</h1>
 */

// Exact copy of contact/highlight.directive except for color and message
import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[highlight], input' })
// Highlight the host element or any InputElement in gray
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'lightgray';
    console.log(
      `* Shared highlight called for ${el.nativeElement.tagName}`);
  }
}
