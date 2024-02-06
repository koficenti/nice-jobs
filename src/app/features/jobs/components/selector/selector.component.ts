import {Component, Input} from '@angular/core'
import {faCaretDown, faClose, faXmark} from '@fortawesome/free-solid-svg-icons'
import {FaIconComponent} from '@fortawesome/angular-fontawesome'
import {SelectorOptionType, SelectorType} from '../../types/selector.type'

@Component({
  selector: 'jobs-selector',
  standalone: true,
  imports: [FaIconComponent],
  template: `
    <a
      [class]="
        'group px-5 py-2 rounded-full hover:rounded-none hover:rounded-t-2xl select-none relative ' +
        getBackgroundColor()
      "
    >
      {{ getDisplayName() }}
      @if (!optionSelected()) {
        <fa-icon [icon]="faCaretDown" class="px-1.5"></fa-icon>
      } @else {
        <fa-icon
          [icon]="faXmark"
          class="px-1.5"
          (click)="removeSelection()"
        ></fa-icon>
      }
      <ul
        [class]="
          'hidden group-hover:flex absolute w-full group-hover:rounded-b-xl px-4 py-2 h-fit flex-col gap-2 pt-4 z-10 ' +
          getBackgroundColor()
        "
      >
        @for (option of selector?.options; track $index) {
          <li (click)="setSelected(option)" class="hover:font-medium">
            {{ option.display_value }}
          </li>
        }
      </ul>
    </a>
  `,
  styles: `:host{ @apply rounded-full cursor-pointer mb-1; }`,
})
export class SelectorComponent {
  protected readonly faCaretDown = faCaretDown
  @Input() selector: SelectorType<any> | null = null

  getDisplayName(): string | null {
    if (this.selector) {
      const replacementValue =
        this.selector.selected?.value || this.selector.default?.value || null

      if (this.selector.is_selected_display_value && replacementValue) {
        return this.selector.is_selected_display_value.replace(
          '^',
          replacementValue
        )
      }
      return (
        this.selector.selected?.display_value ||
        this.selector.display_value ||
        null
      )
    }

    return null
  }

  getBackgroundColor(): string {
    return this.selector?.selected || this.selector?.default
      ? 'bg-blue-200'
      : 'bg-gray-200'
  }
  setSelected(option: SelectorOptionType<any>) {
    if (this.selector) this.selector.selected = option
  }

  optionSelected(): boolean {
    return !!(
      this.selector &&
      (this.selector.selected || this.selector.default)
    )
  }

  removeSelection() {
    if (this.selector) {
      this.selector.default = null
      this.selector.selected = null
    }
  }

  protected readonly faXmark = faXmark
}
