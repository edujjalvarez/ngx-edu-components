import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Country } from './country';
import { PhoneNumberOptions } from './phone-number-options';
import { RegExpHelper } from '../helpers/reg-exp.helper';

/**
 * INSTRUCCIONES DE USO
 * 
 * Agregar las imagenes de las banderas a utilizar en la siguiente carpeta:
 *  assets/images/flags
 * 
 * Importar en módulo CustomToolsModule en tu módulo
 * 
 * INPUTS
 * yourFormGroup: FormGroup que utilizas tu formulario (se requiere agregar los controles "countryCode", "areaCode" y "localPhoneNumber").
 * countries (Opcional): Country[] (listado de paises a ulitizar, por defecto Argentina y Brasil).
 * selectedCountry (Opcional): Country seleccionado por defecto.
 * options (Opcional): PhoneNumberToolOptions (Opciones de configuración del componente).
 * 
 * EXAMPLE
 * <ngx-edu-phone-number [yourFormGroup]="nameOfYourFormGroup"></ngx-edu-phone-number>
 * 
 * Ejemplo de controles en tu FormGroup
 * 'countryCode': [this.data.driver.countryCode, [Validators.required]],
 * 'areaCode': [this.data.driver.areaCode, [Validators.required, Validators.minLength(2), Validators.maxLength(4), Validators.pattern(RegExpHelper.AREA_CODE)]],
 * 'localPhoneNumber': [this.data.driver.localPhoneNumber, [Validators.required, Validators.minLength(6), Validators.maxLength(9), Validators.pattern(RegExpHelper.LOCAL_PHONE_NUMBER)]],
 * 
 * Obteniendo los valores
 * const rawValue = this.nameOfYourFormGroup.getRawValue();
 * const phoneNumber = rawValue.countryCode + rawValue.areaCode + rawValue.localPhoneNumber;
 */
@Component({
    selector: 'ngx-edu-phone-number',
    templateUrl: 'ngx-edu-phone-number.component.html',
    styleUrls: ['ngx-edu-phone-number.component.scss']
})
export class NgxEduPhoneNumberComponent implements OnInit, OnChanges, OnDestroy {
    @Input() yourFormGroup: FormGroup;
    @Input() countryCodeFormControlName: string;
    @Input() areaCodeFormControlName: string;
    @Input() localPhoneNumberFormControlName: string;
    @Input() countries: Country[];
    @Input() selectedCountry: Country;
    @Input() defaultCountry: Country;
    @Input() options: PhoneNumberOptions;

    hasProperties: boolean;
    onlyNumberMax4: RegExp;
    onlyNumberMax10: RegExp;

    constructor() {
        this.yourFormGroup = null;
        this.countryCodeFormControlName = '';
        this.areaCodeFormControlName = '';
        this.localPhoneNumberFormControlName = '';
        this.countries = [];
        this.selectedCountry = null;
        this.defaultCountry = null;
        this.options = new PhoneNumberOptions();
        this.hasProperties = false;
        this.onlyNumberMax4 = RegExpHelper.ONLY_NUMBER_MAX_4;
        this.onlyNumberMax10 = RegExpHelper.ONLY_NUMBER_MAX_10;
    }

    ngOnInit() {
        this.initialize();
    }

    ngOnChanges() {
        this.refreshOptions();
    }

    ngOnDestroy() {

    }

    initialize() {
        if (!this.yourFormGroup ||
            !this.yourFormGroup.get(this.countryCodeFormControlName) ||
            !this.yourFormGroup.get(this.areaCodeFormControlName) ||
            !this.yourFormGroup.get(this.localPhoneNumberFormControlName)) {
            this.hasProperties = false;
            return;
        }
        this.hasProperties = true;
        if (this.yourFormGroup.get(this.countryCodeFormControlName).value) {
            const country = this.countries.find(c => c.code == this.yourFormGroup.get(this.countryCodeFormControlName).value);
            this.selectedCountry = country ? country : null;
        }
        if (!this.selectedCountry) {
            this.selectedCountry = this.defaultCountry;
        }
        this.yourFormGroup.get(this.countryCodeFormControlName).setValue(this.selectedCountry.code);
    }

    refreshOptions() {
        const defaultOptions = PhoneNumberOptions.getDefaultOptions();
        if (!this.options) {
            this.options = defaultOptions;
        }
        if (this.options.disabled == null || this.options.disabled == undefined) {
            this.options.disabled = defaultOptions.disabled;
        }
        if (!this.options.countryPlaceholder) {
            this.options.countryPlaceholder = defaultOptions.countryPlaceholder;
        }
        if (!this.options.areaCodePlaceholder) {
            this.options.areaCodePlaceholder = defaultOptions.areaCodePlaceholder;
        }
        if (!this.options.prefix) {
            this.options.prefix = defaultOptions.prefix;
        }
        if (!this.options.numberPlaceholder) {
            this.options.numberPlaceholder = defaultOptions.numberPlaceholder;
        }
    }

    setSelectedCountry(country: Country) {
        this.selectedCountry = country;
        if (!this.yourFormGroup || !this.yourFormGroup.get(this.countryCodeFormControlName)) return;
        this.yourFormGroup.get(this.countryCodeFormControlName).setValue(this.selectedCountry.code);
    }
}
