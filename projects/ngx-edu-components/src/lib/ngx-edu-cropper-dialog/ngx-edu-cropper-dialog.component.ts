import { Component, Inject } from '@angular/core';
import { NgxEduCropperResponse } from '../ngx-edu-cropper/ngx-edu-cropper-response';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

/**
 * INSTRUCCIONES DE USO
 * 
 * Importar en módulo ImageToolsModule en tu módulo
 * 
 * EXAMPLE
 * 
 * <div #imageCanvas></div>
 * 
 *  @ViewChild('imageCanvas') public imageCanvas: ElementRef;
    confirmDialogRef: any;
    openCropperDialog() {
        const config: MatDialogConfig = {
            width: '50%',
            disableClose: true,
            panelClass: 'ea-dialog',
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
*/
@Component({
    selector: 'ngx-edu-cropper-dialog',
    templateUrl: 'ngx-edu-cropper-dialog.component.html',
    styleUrls: ['ngx-edu-cropper-dialog.component.scss']
})
export class NgxEduCropperDialogComponent {
    imageUrl: string;
    title: string;
    accept: string;
    cancel: string;
    close: string;
    ngxEduCropperResponse: NgxEduCropperResponse;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public _dialogRef: MatDialogRef<NgxEduCropperDialogComponent>,
    ) {
        this.imageUrl = data.imageUrl;
        this.title = data.title ? data.title : 'Recorte de imagen';
        this.accept = data.accept ? data.accept : 'Aceptar';
        this.cancel = data.cancel ? data.cancel : 'Cancelar';
        this.close = data.close ? data.close : 'Cerrar';
        this.ngxEduCropperResponse = null;
    }

    ngOnInit() {

    }

    ngOnChanges() {

    }

    ngOnDestroy() {

    }

    onChange(ngxEduCropperResponse: NgxEduCropperResponse) {
        this.ngxEduCropperResponse = ngxEduCropperResponse;
    }

    save() {
        this._dialogRef.close(this.ngxEduCropperResponse);
    }
}
