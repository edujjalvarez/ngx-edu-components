import { Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'ngx-edu-select',
    templateUrl: 'ngx-edu-select.component.html',
    styleUrls: ['ngx-edu-select.component.scss']
})
export class NgxEduSelectComponent implements OnInit, OnChanges, OnDestroy {

    @ViewChild('filterInput') filterInput: ElementRef;
    @Input() yourFormGroup: FormGroup;
    @Input() multiple: boolean;
    @Input() yourFormControlName: string;
    @Input() placeholder: string;
    @Input() filterPlaceholder: string;
    @Input() selectAnOption: string;
    @Input() options: any[];
    @Input() displayOption: string;
    @Input() compareWith: Function;
    @Output() onChange: EventEmitter<any>;

    hasFormControls: boolean;
    filteredOptions: any[];

    constructor() {
        this.yourFormGroup = null;
        this.multiple = false;
        this.yourFormControlName = '';
        this.placeholder = '';
        this.filterPlaceholder = 'Buscar...';
        this.selectAnOption = '';
        this.options = [];
        this.displayOption = '';
        this.hasFormControls = false;
        this.filteredOptions = [];
        this.compareWith = null;
        this.onChange = new EventEmitter<any>();
    }

    ngOnInit() {
        this.initialize();
    }

    ngOnChanges() {

    }

    ngOnDestroy() {

    }

    initialize() {
        if (!this.yourFormGroup ||
            !this.yourFormGroup.get(this.yourFormControlName)) {
            this.hasFormControls = false;
            return;
        }
        this.hasFormControls = true;
        const formControl = new FormControl('');
        this.yourFormGroup.addControl(`${this.yourFormControlName}Filter`, formControl);
        this.yourFormGroup.get(`${this.yourFormControlName}Filter`).valueChanges.pipe(
            debounceTime(300),
            distinctUntilChanged()
        ).subscribe(value => {
            if (value) {
                this.filter(value);
            } else {
                this.filteredOptions = this.options;
            }
        });
        this.filteredOptions = this.options;
        console.log('NgxEduSelectComponent > initialize > value', this.yourFormGroup.get(this.yourFormControlName).value);
    }

    compareFn(v1: any, v2: any): boolean {
        // console.log('v1', v1);
        // console.log('v2', v2);
        // console.log('this.idOption', this.idOption);
        // console.log('v1[this.idOption]', v1[this.idOption]);
        // console.log('v2[this.idOption]', v2[this.idOption]);
        // console.log('v1 === v2', v1 === v2);
        // console.log('compareFn', v1 && v2 ? v1[this.idOption] === v2[this.idOption] : v1 === v2);
        return v1 && v2 ? v1['id'] === v2['id'] : v1 === v2;
    }

    filter(value: string) {
        let filteredOptions = [];
        for (const o of this.options) {
            if (typeof (o) == 'string') {
                if (o.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                    filteredOptions.unshift(o);
                } else {
                    filteredOptions.push(o);
                }
                continue;
            }
            if (typeof (o) == 'object') {
                let result = false;
                for (const key in o) {
                    if (o[key] && typeof(o[key]) == 'string') {
                        result = o[key].toString().toLowerCase().indexOf(value.toLowerCase()) >= 0;
                    }
                    if (result) {
                        break;
                    }
                }
                if (result) {
                    filteredOptions.unshift(o);
                } else {
                    filteredOptions.push(o);
                }
                continue;
            }
            filteredOptions.push(o);
        }
        this.filteredOptions = filteredOptions;
        // this.filteredOptions = this.options.filter(o => {
        //     if (typeof(o) == 'string') {
        //         return o.toLowerCase().indexOf(value.toLowerCase()) >= 0;
        //     }
        //     let result = false;
        //     if (typeof(o) == 'object') {
        //         for (const key in o) {
        //             result = o[key].toString().toLowerCase().indexOf(value.toLowerCase()) >= 0;
        //             if (result) {
        //                 break;
        //             }
        //         }
        //     }
        //     return result;
        // });
    }

    onSelectionChange($event) {
        console.log('NgxEduSelectComponent > onSelectionChange > $event', $event);
        this.onChange.emit($event);
        if (this.multiple) {
            this.filterInput.nativeElement.focus();
        }
    }

    onOpenedChange($event) {
        this.yourFormGroup.get(`${this.yourFormControlName}Filter`).setValue('');
        if ($event) {
            this.filterInput.nativeElement.focus();
        }        
    }
}
