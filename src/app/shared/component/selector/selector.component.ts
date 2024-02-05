import {Component, Input} from '@angular/core'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {FaIconComponent} from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'Selector',
  standalone: true,
  imports: [FaIconComponent],
  template: `
    <a
      [class]="
        'group px-5 py-2 rounded-full hover:rounded-none hover:rounded-t-2xl select-none relative ' +
        bgColor
      "
    >
      <ng-content></ng-content>
      <fa-icon [icon]="faCaretDown" class="px-1.5"></fa-icon>
      <ul
        [class]="
          'hidden group-hover:flex absolute w-full group-hover:rounded-b-xl px-4 py-2 h-fit flex-col gap-2 pt-4 z-10 ' +
          bgColor
        "
      >
        @for (option of options; track $index) {
          <li class="hover:font-medium">{{ option }}</li>
        }
      </ul>
    </a>
  `,
  styles: `:host{ @apply rounded-full cursor-pointer mb-1; }`,
})
export class SelectorComponent {
  protected readonly faCaretDown = faCaretDown
  @Input() bgColor: string = 'bg-slate-200'
  @Input() options: string[] = []
}
