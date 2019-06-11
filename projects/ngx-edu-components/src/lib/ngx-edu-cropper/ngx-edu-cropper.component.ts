import { Component, OnInit, OnChanges, OnDestroy, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { CropperComponent } from 'angular-cropperjs';
import { NgxEduCropperOptions } from './ngx-edu-cropper-options';
import { NgxEduCropperResponse } from './ngx-edu-cropper-response';

/**
 * INSTRUCCIONES DE USO
 * 
 * Instalar:
 *  npm install angular-cropperjs --save
 *  npm install cropperjs --save
 * 
 * Configurar en angular.json
 *  en styles > "node_modules/cropperjs/dist/cropper.css"
 *  en scripts > "node_modules/cropperjs/dist/cropper.js"
 * 
 * Importar en módulo ImageToolsModule en tu módulo
 * 
 * INPUTS
 * imageUrl: Url de la imagen a recortar.
 * minContainerHeight: Alto mínimo del contenedor (No puede ser inferior a 325). Valor por defecto: 325.
 * 
 * OUTPUTS
 * onChange(EventEmitter<ImageCropperToolResponse>): Cuando se aplican los cambios devuelve un canvas
 * con la imagen recortada para mostrar dentro de un div y blob que se puede utilizar para subir el archivo
 * utilizando FormData, cuando se realiza algun cambio devuelve null hasta que se apliquen nuevamente los cambios.
 * 
 * EXAMPLE
 * <ngx-edu-cropper [imageUrl]="imageUrl" [minContainerHeight]="325" (onChange)="onChange($event)"></ngx-edu-cropper>
 */
@Component({
    selector: 'ngx-edu-cropper',
    templateUrl: 'ngx-edu-cropper.component.html',
    styleUrls: ['ngx-edu-cropper.component.scss']
})
export class NgxEduCropperComponent implements OnInit, OnChanges, OnDestroy {
    @ViewChild('angularCropper') public angularCropper: CropperComponent;
    ngxEduCropperOptions: NgxEduCropperOptions;
    @Input() imageUrl: string;
    @Input() minContainerHeight: number;
    @Output() onChange: EventEmitter<NgxEduCropperResponse>;

    constructor() {
        this.ngxEduCropperOptions = new NgxEduCropperOptions();
        this.imageUrl = '';
        this.minContainerHeight = 325;
        this.onChange = new EventEmitter<NgxEduCropperResponse>();
        this.setImageCropperToolEvents();
    }

    ngOnInit() {
        if (this.minContainerHeight < 325) {
            this.minContainerHeight = 325;
        }
        this.ngxEduCropperOptions.minContainerHeight = this.minContainerHeight;
    }

    ngOnChanges() {

    }

    ngOnDestroy() {

    }

    setImageCropperToolEvents() {
        this.ngxEduCropperOptions.cropstart = (e) => {
            this.onChange.emit(null);
        };
        this.ngxEduCropperOptions.cropmove = (e) => {
            this.onChange.emit(null);
        };
        this.ngxEduCropperOptions.cropend = (e) => {
            this.onChange.emit(null);
        };
        this.ngxEduCropperOptions.zoom = (e) => {
            this.onChange.emit(null);
        };
    }

    setDragMode(dragMode: string) {
        const cropperDragMode = <Cropper.DragMode> dragMode;
        this.angularCropper.cropper.setDragMode(cropperDragMode);
    }

    zoom(ratio: number) {
        this.angularCropper.cropper.zoom(ratio);
        this.onChange.emit(null);
    }

    rotate(degree: number) {
        this.angularCropper.cropper.rotate(degree);
        this.onChange.emit(null);
    }

    move(offsetX: number, offsetY: number,) {
        this.angularCropper.cropper.move(offsetX, offsetY);
        this.onChange.emit(null);
    }

    disable() {
        this.angularCropper.cropper.disable();
        this.onChange.emit(null);
    }

    enable() {
        this.angularCropper.cropper.enable();
        this.onChange.emit(null);
    }

    reset() {
        this.angularCropper.cropper.reset();
        this.onChange.emit(null);
    }

    clear() {
        this.angularCropper.cropper.clear();
        this.onChange.emit(null);
    }

    crop() {
        this.angularCropper.cropper.crop();
        const canvas = this.angularCropper.cropper.getCroppedCanvas();
        canvas.toBlob((blob) => {
            console.log('NgxEduCropperComponent > crop > blob', blob);
            this.onChange.emit({
                canvas: canvas,
                blob: blob
            });
        });
    }
}
