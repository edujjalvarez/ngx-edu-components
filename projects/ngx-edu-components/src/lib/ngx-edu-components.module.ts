import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEduComponentsComponent } from './ngx-edu-components.component';
import { NgxEduDatepickerComponent } from './ngx-edu-datepicker/ngx-edu-datepicker.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule, MatCardModule, MatDividerModule, MatTooltipModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { NgxEduGalleryComponent } from './ngx-edu-gallery/ngx-edu-gallery.component';
import { NgxEduCropperComponent } from './ngx-edu-cropper/ngx-edu-cropper.component';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { NgxEduCropperDialogComponent } from './ngx-edu-cropper-dialog/ngx-edu-cropper-dialog.component';
import { NgxEduPhoneNumberComponent } from './ngx-edu-phone-number/ngx-edu-phone-number.component';
import { NgxEduSelectComponent } from './ngx-edu-select/ngx-edu-select.component';

@NgModule({
	declarations: [
		NgxEduComponentsComponent,
		NgxEduDatepickerComponent,
		NgxEduGalleryComponent,
		NgxEduCropperComponent,
		NgxEduCropperDialogComponent,
		NgxEduPhoneNumberComponent,
		NgxEduSelectComponent,
	],
	imports: [
		CommonModule,
        FormsModule,
        ReactiveFormsModule,
		FlexLayoutModule,
		NgxMaskModule.forRoot(),
		AngularCropperjsModule,
		MatButtonModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
		MatIconModule,
		MatCardModule,
		MatDividerModule,
		MatTooltipModule,
		MatDialogModule,
		MatSelectModule,
	],
	exports: [
		NgxEduComponentsComponent,
		NgxEduDatepickerComponent,
		NgxEduGalleryComponent,
		NgxEduCropperComponent,
		NgxEduPhoneNumberComponent,
		NgxEduSelectComponent,
	],
	entryComponents: [
		NgxEduCropperDialogComponent,
	]
})
export class NgxEduComponentsModule { }
