import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ButtonComponent } from './controls/button/button.component'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  step: 'home' | 'addProducts' = 'home'

  radioOptions = [
    {
      value: 5,
      title: '5 products for 80 usd / 16$ for each',
      subtitle: 'You safe 36% on each patent check',
    },
    {
      value: 4,
      title: '4 products for 72 usd / 18$ for each',
      subtitle: 'You safe 28% on each patent check',
    },
    {
      value: 3,
      title: '3 products for 60 usd / 20$ for each',
      subtitle: 'You safe 20% on each patent check',
    },
    {
      value: 2,
      title: '2 products for 44 usd / 22$ for each',
      subtitle: 'You safe 12% on each patent check',
    },
    {
      value: 1,
      title: '1 product for 24.99 usd',
      subtitle: 'product for 24.99 usd',
    }
  ]

  radioCtrl = new FormControl(5)
}
