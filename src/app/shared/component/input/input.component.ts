import {Component, Input} from '@angular/core'

@Component({
  selector: 'TextInput',
  standalone: true,
  imports: [],
  template: `
    <input
      [class]="
        'px-3 py-2 focus:border-0 focus:outline-0 drop-shadow-md rounded-md ' +
        class
      "
      [type]="type"
      [placeholder]="placeholder"
    />
  `,
  styles: ``,
})
export class InputComponent {
  @Input() placeholder: string = ''
  @Input() type: string = 'text'
  @Input() class: string = ''
}
