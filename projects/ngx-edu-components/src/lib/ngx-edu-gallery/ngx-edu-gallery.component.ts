import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { ImageItem } from './image-item';
import Viewer from 'viewerjs';

/**
 * INSTRUCCIONES DE USO
 * 
 * Instalar:
 *  npm install viewerjs --save
 * 
 * Configurar en angular.json
 *  en styles > "node_modules/viewerjs/dist/viewer.css"
 *  en scripts > "node_modules/viewerjs/dist/viewer.js"
 * 
 * Importar en módulo ImageToolsModule en tu módulo
 * 
 * Crear la siguiente variable en tu componente para cargar las imagenes a mostrar en la galería -> images: ImageItem[] = [];
 * Cuando se realizen cambios en el array de imagenes, realizar la siguiente asignación para refrescar cambios -> this.images = [...this.images];
 * 
 * Agregar el siguiente código en donde quieras que se muestre la galería. Opcionalmente setear imagesHeight (por defecto 200px).
 * <ngx-edu-gallery [images]="images" [imagesHeight]="200"></ngx-edu-gallery>
 */
@Component({
    selector: 'ngx-edu-gallery',
    templateUrl: 'ngx-edu-gallery.component.html',
    styleUrls: ['ngx-edu-gallery.component.scss']
})
export class NgxEduGalleryComponent implements OnInit, OnChanges, OnDestroy {
    gallery: any;
    @Input() images: ImageItem[];
    @Input() imagesHeight: number;
    @Input() defaultImageUrl: string;

    constructor() {
        this.gallery = null;
        this.images = [];
        this.imagesHeight = 200;
        this.defaultImageUrl = '';
    }

    ngOnInit() {
        
    }

    ngOnChanges() {
        if (this.images.length > 0) {
            setTimeout(() => {
                this.initialize();
            }, 1000);
        }
    }

    ngOnDestroy() {
        if (this.gallery) {
            this.gallery.destroy();
        }
    }    

    initialize() {
        if (this.gallery) {
            this.gallery.destroy();
        }
        this.gallery = new Viewer(document.getElementById('ngx-edu-gallery'));
    }

    onError(image: ImageItem) {
        if (image) {
            image.url = this.defaultImageUrl;
        }
    }
}
