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
            imageUrl: 'assets/images/default/company.jpg'
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

## Running the example in local env

* `npm i`
* Run `ng serve` for a dev server and running the demo app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build the NgxMatTypeahead module

Run `ng build NgxMatTypeahead` to build the library. The build artifacts will be stored in the `dist/ngx-edu-components` directory. Use the `--prod` flag for a production build.