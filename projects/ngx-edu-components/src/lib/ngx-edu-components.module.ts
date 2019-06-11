import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEduComponentsComponent } from './ngx-edu-components.component';
import { NgxEduDatepickerComponent } from './ngx-edu-datepicker/ngx-edu-datepicker.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule, MatCardModule } from '@angular/material';
import { NgxEduGalleryComponent } from './ngx-edu-gallery/ngx-edu-gallery.component';

@NgModule({
	declarations: [
		NgxEduComponentsComponent,
		NgxEduDatepickerComponent,
		NgxEduGalleryComponent,
	],
	imports: [
		CommonModule,
        FormsModule,
        ReactiveFormsModule,
		FlexLayoutModule,
		NgxMaskModule.forRoot(),
		MatButtonModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
		MatIconModule,
		MatCardModule,
	],
	exports: [
		NgxEduComponentsComponent,
		NgxEduDatepickerComponent,
		NgxEduGalleryComponent,
	]
})
export class NgxEduComponentsModule { }
