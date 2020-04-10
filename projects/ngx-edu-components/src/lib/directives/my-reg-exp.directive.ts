import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[myRegExp]'
})
export class MyRegExpDirective {

    TAG: string = 'MyRegExpDirective';
    elementRef: ElementRef;
    @Input('myRegExp') myRegExp: RegExp;

    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

    @HostListener('keypress', ['$event'])
    onKeyPress(event) {
        const e = <KeyboardEvent>event;
        // console.log(`${this.TAG} > onKeyPress > e`, e);
        let value = this.elementRef.nativeElement.value;
        value = value == null || value == '' ? e.key : value + e.key;
        // console.log(`${this.TAG} > onKeyPress > value`, value);
        if (!this.myRegExp.test(value)) {
            e.preventDefault();
        }
    }

    @HostListener('paste', ['$event'])
    onPaste(event) {
        const e = <ClipboardEvent>event;
        console.log(`${this.TAG} > onPaste > e`, e);
        const pasteData = e.clipboardData.getData('text/plain');
        console.log(`${this.TAG} > onPaste > pasteData`, pasteData);
        if (!this.myRegExp.test(pasteData)) {
            e.preventDefault();
        }
    }

}
