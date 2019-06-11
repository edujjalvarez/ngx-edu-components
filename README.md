# EduComponentsLibrary

* Set of extra `angular material` components.
* It is developed using `Angular >= 7.1.0` and its newly introduced `ng g library` schematics.
* Library location: `projects/ngx-edu-components` directory of this repository.

## Installation

`npm i ngx-edu-components`

## NgxEduDatepickerComponent

`import { NgxEduDatepickerComponent } from 'ngx-edu-components'`<br>
`selector: ngx-edu-datepicker`

### @Inputs()

yourFormGroup: FormGroup (Required)<br>
yourFormControlName: string (Required)<br>
placeholder: string (Optional, default: 'Fecha')

## Usage

1) Import the `NgxEduComponentsModule` in your module.
 > `import { NgxEduComponentsModule } from 'ngx-edu-components'`

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

 2) In your component .ts

```typescript
createFormGroup(): FormGroup {
    return this._formBuilder.group({
        ...,
        FechaNacimiento: ['', Validators.required],
    });
}
```

3) In your component .html

```html
<ngx-edu-datepicker
    [yourFormGroup]="dialogForm"
    [yourFormControlName]="'FechaNacimiento'"
    [placeholder]="'Fecha de nacimiento'"></ngx-edu-datepicker>
```

## Running the example in local env

* `npm i`
* Run `ng serve` for a dev server and running the demo app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build the NgxMatTypeahead module

Run `ng build NgxMatTypeahead` to build the library. The build artifacts will be stored in the `dist/ngx-edu-components` directory. Use the `--prod` flag for a production build.