import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'mat-edu-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'EduComponentsLibrary';
	options: any[] = [
		{
			id: '1',
			name: 'Opción 1',
			description: 'Descripción 1'
		},
		{
			id: '2',
			name: 'Opción 2',
			description: 'Descripción 2'
		},
		{
			id: '3',
			name: 'Opción 3',
			description: 'Descripción 3'
		},
		{
			id: '4',
			name: 'Opción 4',
			description: 'Descripción 4'
		},
		{
			id: '5',
			name: 'Opción 5',
			description: 'Descripción 5'
		}
	];
	myFormGroup: FormGroup;

	constructor(
		private _formBuilder: FormBuilder,
	) {
		const selectedOptions = [this.options[2], this.options[4]]
		this.myFormGroup = this._formBuilder.group({
			// Option: [this.options[3]],
			Option: [this.options[3], [Validators.required]],
			// Options: [selectedOptions],
			Options: [selectedOptions, [Validators.required]],
        });
	}

	compareFn(v1: any, v2: any): boolean {
        return v1 && v2 ? v1.id === v2.id : v1 === v2;
	}
	
	getFormGroupValues() {
		const rawValue = this.myFormGroup.getRawValue();
		console.log('AppComponent > getFormGroupValues > rawValue', rawValue);
	}
}
