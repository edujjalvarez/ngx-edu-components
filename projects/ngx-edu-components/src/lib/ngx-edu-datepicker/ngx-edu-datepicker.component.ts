import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  ViewChild,
  Input,
} from "@angular/core";
import { MatDatepicker, MatDatepickerInputEvent } from "@angular/material";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import * as moment_ from "moment";
import { RegExpHelper } from "../helpers/reg-exp.helper";
const moment = moment_;

// const DATE_REGEXP = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

/**
 * INSTRUCCIONES DE USO
 *
 * Importar en módulo CustomToolsModule en tu módulo
 *
 * INPUTS
 * yourFormGroup: FormGroup
 * yourFormControlName: string (nombre de control de formulario)
 * placeholder (Opcional): string (texto a mostrar)
 *
 * EXAMPLE
 * <ngx-edu-datepicker [yourFormGroup]="nameOfYourFormGroup" [yourFormControlName]="'myDate'" [placeholder]="'Fecha'"></ngx-edu-datepicker>
 *
 * Obteniendo los valores
 * const rawValue = this.nameOfYourFormGroup.getRawValue();
 * const phoneNumber = rawValue.countryCode + rawValue.areaCode + rawValue.localPhoneNumber;
 */
@Component({
  selector: "ngx-edu-datepicker",
  templateUrl: "ngx-edu-datepicker.component.html",
  styleUrls: ["ngx-edu-datepicker.component.scss"],
})
export class NgxEduDatepickerComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild("picker") datePicker: MatDatepicker<Date>;
  @Input() yourFormGroup: FormGroup;
  @Input() yourFormControlName: string;
  @Input() placeholder: string;
  @Input() maxDate: Date;

  hasProperties: boolean;
  dateKeypress: RegExp;

  constructor() {
    this.yourFormGroup = null;
    this.yourFormControlName = "";
    this.placeholder = "Fecha";
    this.hasProperties = false;
    this.dateKeypress = RegExpHelper.DATE_KEYPRESS;
    this.maxDate = null;
  }

  ngOnInit() {
    this.initialize();
  }

  ngOnChanges() {
    // this.refresh();
  }

  ngOnDestroy() {}

  initialize() {
    if (
      !this.yourFormGroup ||
      !this.yourFormGroup.get(this.yourFormControlName)
    ) {
      this.hasProperties = false;
      return;
    }
    this.hasProperties = true;
    let formattedDate = "";
    if (this.yourFormGroup.get(this.yourFormControlName).value) {
      const date = moment(
        this.yourFormGroup.get(this.yourFormControlName).value
      );
      if (date.isValid()) {
        formattedDate = date.format("DD/MM/YYYY");
      }
    }
    let disabled = false;
    try {
      disabled = this.yourFormGroup.get(this.yourFormControlName).disabled;
    } catch (error) {
      //   console.error(
      //     "NgxEduDatepickerComponent > initialize > validators error",
      //     error
      //   );
    }
    let validators = null;
    try {
      validators = this.yourFormGroup
        .get(this.yourFormControlName)
        .validator({} as AbstractControl);
    } catch (error) {
      //   console.error(
      //     "NgxEduDatepickerComponent > initialize > validators error",
      //     error
      //   );
    }
    console.log("VALIDATORSSSSSSSSSSSSSSSSSSSSSSS", validators);
    const formControl =
      validators && validators.required
        ? new FormControl({ value: formattedDate, disabled: disabled }, [
            Validators.required,
            Validators.pattern(RegExpHelper.DATE_ES_AR),
          ])
        : new FormControl(
            { value: formattedDate, disabled: disabled },
            Validators.pattern(RegExpHelper.DATE_ES_AR)
          );
    this.yourFormGroup.addControl(
      `${this.yourFormControlName}DisplayDate`,
      formControl
    );
    this.yourFormGroup
      .get(`${this.yourFormControlName}DisplayDate`)
      .valueChanges.pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        if (
          value &&
          this.yourFormGroup.get(`${this.yourFormControlName}DisplayDate`).valid
        ) {
          console.log(
            "NgxEduDatepickerComponent > initialize > Fecha válidaaaaaaa...."
          );
          const date = moment(value, "DD/MM/YYYY");
          if (date.isValid()) {
            this.yourFormGroup
              .get(this.yourFormControlName)
              .setValue(date.toDate());
          }
        }
        if (!value) {
          this.yourFormGroup.get(this.yourFormControlName).setValue(null);
        }
      });
  }

  open() {
    this.datePicker.open();
  }

  onDateChange($event: MatDatepickerInputEvent<Date>) {
    console.log("DateToolComponent > onDateChange > $event", $event);
    const date = moment($event.value).format("DD/MM/YYYY");
    console.log("DateToolComponent > onDateChange > date", date);
    this.yourFormGroup
      .get(`${this.yourFormControlName}DisplayDate`)
      .setValue(date);
  }

  public refresh() {
    console.log("NgxEduDatepickerComponent > refresh");
    if (
      this.yourFormGroup &&
      this.yourFormGroup.get(this.yourFormControlName) &&
      this.yourFormGroup.get(this.yourFormControlName).value &&
      this.yourFormGroup.get(`${this.yourFormControlName}DisplayDate`)
    ) {
      const date = moment(
        this.yourFormGroup.get(this.yourFormControlName).value
      );
      console.log("NgxEduDatepickerComponent > refresh > date", date);
      if (date.isValid()) {
        const formattedDate = date.format("DD/MM/YYYY");
        console.log(
          "NgxEduDatepickerComponent > refresh > formattedDate",
          formattedDate
        );
        this.yourFormGroup
          .get(`${this.yourFormControlName}DisplayDate`)
          .setValue(formattedDate);
      }
    }
  }
}
