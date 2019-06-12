export class PhoneNumberOptions {
    disabled: boolean;
    countryPlaceholder: string;
    areaCodePlaceholder: string;
    prefix: string;
    numberPlaceholder: string;

    constructor() {
        this.disabled = false;
        this.countryPlaceholder = 'País';
        this.areaCodePlaceholder = 'Código';
        this.prefix = '15';
        this.numberPlaceholder = 'Número';
    }

    public static getDefaultOptions(): PhoneNumberOptions {
        return {
            disabled: false,
            countryPlaceholder: 'País',
            areaCodePlaceholder: 'Código',
            prefix: '15',
            numberPlaceholder: 'Número'
        };
    }
}