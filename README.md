# EduComponentsLibrary

* Set of extra `angular material` components.
* It is developed using `Angular >= 7.1.0` and its newly introduced `ng g library` schematics.
* Library location: `projects/ngx-edu-components` directory of this repository.

## Installation

`npm i ngx-edu-components`

## Import the module NgxEduComponentsModule
```typescript
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEduComponentsModule } from 'ngx-edu-components';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...,
    NgxEduComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 ```

## NgxEduDatepickerComponent

`import { NgxEduDatepickerComponent } from 'ngx-edu-components'`<br>
`selector: ngx-edu-datepicker`

### @Inputs()

yourFormGroup: FormGroup (Required)<br>
yourFormControlName: string (Required)<br>
placeholder: string (Optional, default: 'Fecha')

## Usage

1) In your component .ts

```typescript
createFormGroup(): FormGroup {
    return this._formBuilder.group({
        ...,
        FechaNacimiento: ['', Validators.required],
    });
}
```

2) In your component .html

```html
<ngx-edu-datepicker
    [yourFormGroup]="dialogForm"
    [yourFormControlName]="'FechaNacimiento'"
    [placeholder]="'Fecha de nacimiento'"></ngx-edu-datepicker>
```

## NgxEduGalleryComponent
`import { NgxEduGalleryComponent } from 'ngx-edu-components'`<br>
`selector: ngx-edu-gallery`

### @Inputs()

images: ImageItem[] (Required, default: [])<br>
imagesHeight: number (Optional, , default: 200)<br>
defaultImageUrl: string (Required, default: '')

## Usage

1) In your component .ts

```typescript
this.images = [{
    url: 'yourImageUrl1',
    alt: 'Image 1'
},
{
    url: 'yourImageUrl2',
    alt: 'Image 2'
},
{
    url: 'yourImageUrl3',
    alt: 'Image 3'
}];
```

2) In your component .html

```html
<ngx-edu-gallery
  [images]="images"
  [imagesHeight]="200"
  [defaultImageUrl]="'yourDefaultImageUrl'"></ngx-edu-gallery>
```

## NgxEduCropperComponent
`import { NgxEduCropperComponent } from 'ngx-edu-components'`<br>
`selector: ngx-edu-cropper`

### @Inputs()

imageUrl: string (Required, default: '')<br>
minContainerHeight: number (Optional, , default: 325, minimum: 325)<br>
defaultImageUrl: string (Required, default: '')

### @Outputs()

onChange: EventEmitter<NgxEduCropperResponse><br>

## Usage

1) In your component .ts

```typescript
this.imageUrl = 'yourImageUrl';
```

2) In your component .html

```html
<ngx-edu-cropper
  [imageUrl]="imageUrl"
  [minContainerHeight]="325"
  (onChange)="onChange($event)"></ngx-edu-cropper>
```

## NgxEduCropperDialogComponent

## Usage

1) In your component .ts

```typescript
@ViewChild('imageCanvas') public imageCanvas: ElementRef;
confirmDialogRef: any;
openCropperDialog() {
    const config: MatDialogConfig = {
        width: '50%',
        disableClose: true,
        panelClass: '',
        data: {
            imageUrl: 'assets/images/default/company.jpg',
            title: 'Recorde de imagen',
            accept: 'Aceptar',
            cancel: 'Cancelar',
            close: 'Cerrar'
        }
    };

    this.confirmDialogRef = this.dialog.open(NgxEduCropperDialogComponent, config);

    this.confirmDialogRef.afterClosed().subscribe((result: NgxEduCropperResponse | boolean) => {
        if (!result) return;
        this.imageCanvas.nativeElement.appendChild((<NgxEduCropperResponse>result).canvas);
    });
}
```

2) In your component .html

```html
<div #imageCanvas></div>
```

## NgxEduPhoneNumberComponent

### @Inputs()

yourFormGroup: FormGroup (Required)<br>
countryCodeFormControlName: string (Required)<br>
areaCodeFormControlName: string (Required)<br>
localPhoneNumberFormControlName: string (Required)<br>
countries: Country[] (Required)<br>
defaultCountry: Country (Required)<br>
selectedCountry: Country (Optional, default: null)<br>
options: PhoneNumberOptions (Optional, default: {
    disabled: false,
    countryPlaceholder: 'País',
    areaCodePlaceholder: 'Código',
    prefix: '15',
    numberPlaceholder: 'Número'
};)

## Usage

1) In your component .ts

```typescript
// Set your countries
this.yourCountries = [
    {
        id: 'ar',
        name: 'Argentina',
        icon: 'assets/images/flags/ar32.png',
        code: '549'
    },
    {
        id: 'br',
        name: 'Brasil',
        icon: 'assets/images/flags/br32.png',
        code: '55'
    }
];
// Set your default country
this.yourDefaultCountry = this.yourCountries[0];

// Default Options
this.yourOptions = {
    disabled: false,
    countryPlaceholder: 'País',
    areaCodePlaceholder: 'Código',
    prefix: '15',
    numberPlaceholder: 'Número'
};

createFormGroup(): FormGroup {
    return this._formBuilder.group({
        ...,
        countryCode: ['', Validators.required],
        areaCode: ['', Validators.required],
        localPhoneNumber: ['', Validators.required],
    });
}
```

2) In your component .html

```html
<ngx-edu-phone-number
    [yourFormGroup]="nameOfYourFormGroup"
    [countryCodeFormControlName]="'countryCode'"
    [areaCodeFormControlName]="'areaCode'"
    [localPhoneNumberFormControlName]="'localPhoneNumber'"
    [countries]="yourCountries"
    [defaultCountry]="yourDefaultCountry"
    [options]="yourOptions"></ngx-edu-phone-number>
```

## NgxEduSelectComponent

### @Inputs()

yourFormGroup: FormGroup (Required)<br>
yourFormControlName: string (Required)<br>
multiple: boolean (Optional, default: false)<br>
placeholder: string (Optional, default: '')<br>
filterPlaceholder: string (Optional, default: 'Buscar...')<br>
selectAnOption: any[] (Optional, default: '')<br>
options: Country (Required, default: [])<br>
displayOption: any[] (Optional, default: '')<br>
compareWith: Function (Required)<br>

### @Outputs()

onChange: EventEmitter<any><br>

## Usage

1) In your component .ts

```typescript
export class AppComponent {
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
```

2) In your component .html

```html
<ngx-edu-select [yourFormGroup]="myFormGroup" [yourFormControlName]="'Option'" [options]="options"
    [displayOption]="'name'" [placeholder]="'Librería'" [selectAnOption]="'Seleccione una opción'"
    [compareWith]="compareFn"></ngx-edu-select>

<ngx-edu-select [yourFormGroup]="myFormGroup" [yourFormControlName]="'Options'" [options]="options"
    [displayOption]="'name'" [placeholder]="'Librería'" [multiple]="true"
    [compareWith]="compareFn"></ngx-edu-select>

<button (click)="getFormGroupValues()">Get FormGroup Values</button>
```

## Running the example in local env

* `npm i`
* Run `ng serve` for a dev server and running the demo app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build the NgxMatTypeahead module

Run `ng build NgxMatTypeahead` to build the library. The build artifacts will be stored in the `dist/ngx-edu-components` directory. Use the `--prod` flag for a production build.