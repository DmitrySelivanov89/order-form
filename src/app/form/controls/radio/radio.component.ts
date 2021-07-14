import { Component, forwardRef, Input } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

interface RadioOption {
  value: any
  title: string
  subtitle: string
}

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent),
    multi: true
  }]
})
export class RadioComponent implements ControlValueAccessor {
  @Input() options: RadioOption[] = []

  value: any

  writeValue(newValue: any) {
    this.value = newValue
  }

  onChange: (newValue: any) => void = (newValue: any) => {
    this.value = newValue
  }

  registerOnChange(fn: (newValue: any) => void) {
    const defaultOnChange = this.onChange
    this.onChange = (newValue: any) => {
      defaultOnChange(newValue)
      fn(newValue)
    }
  }

  onTouched: (newValue: any) => void = (newValue: any) => {
  }

  registerOnTouched(fn: (newValue: any) => void) {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void;
}
