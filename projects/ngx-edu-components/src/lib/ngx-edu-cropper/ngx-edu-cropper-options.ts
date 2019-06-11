/**
 * Ir a la documentaciones oficial para ver todas las opciones disponibles para cada atributo.
 * https://github.com/fengyuanchen/cropperjs/blob/master/README.md#options
 */
export class NgxEduCropperOptions {
    viewMode: number;
    dragMode: string;
    initialAspectRatio: number;
    aspectRatio: number;
    data: any;
    preview: any | any[] | string; // TODO NodeList pendiente
    responsive: boolean;
    restore: boolean;
    checkCrossOrigin: boolean;
    checkOrientation: boolean;
    modal: boolean;
    guides: boolean;
    center: boolean;
    highlight: boolean;
    background: boolean;
    autoCrop: boolean;
    autoCropArea: number;
    movable: boolean;
    rotatable: boolean;
    scalable: boolean;
    zoomable: boolean;
    zoomOnTouch: boolean;
    zoomOnWheel: boolean;
    wheelZoomRatio: number;
    cropBoxMovable: boolean;
    cropBoxResizable: boolean;
    toggleDragModeOnDblclick: boolean;
    minContainerWidth: number;
    minContainerHeight: number;
    minCanvasWidth: number;
    minCanvasHeight: number;
    minCropBoxWidth: number;
    minCropBoxHeight: number;
    ready: any; // Function
    cropstart: any; // Function
    cropmove: any; // Function
    cropend: any; // Function
    crop: any; // Function
    zoom: any; // Function

    constructor() {
        this.viewMode = 0;
        this.dragMode = 'crop';
        this.initialAspectRatio = NaN;
        this.aspectRatio = NaN;
        this.data = null;
        this.preview = '';
        this.responsive = true;
        this.restore = true;
        this.checkCrossOrigin = true;
        this.checkOrientation = true;
        this.modal = true;
        this.guides = true;
        this.center = true;
        this.highlight = true;
        this.background = true;
        this.autoCrop = true;
        this.autoCropArea = 0.8;
        this.movable = true;
        this.rotatable = true;
        this.scalable = true;
        this.zoomable = true;
        this.zoomOnTouch = true;
        this.zoomOnWheel = true;
        this.wheelZoomRatio = 0.1;
        this.cropBoxMovable = true;
        this.cropBoxResizable = true;
        this.toggleDragModeOnDblclick = true;
        this.minContainerWidth = 200;
        this.minContainerHeight = 100;
        this.minCanvasWidth = 0;
        this.minCanvasHeight = 0;
        this.minCropBoxWidth = 0;
        this.minCropBoxHeight = 0;
        this.ready = null;
        this.cropstart = null;
        this.cropmove = null;
        this.cropend = null;
        this.crop = null;
        this.zoom = null;
    }
}