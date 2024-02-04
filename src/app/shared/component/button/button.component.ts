import {Component, inject, Input} from '@angular/core'
import {provideRouter, Router, RouterLink, RouterModule} from '@angular/router'

@Component({
  selector: 'Button',
  standalone: true,
  imports: [RouterLink, RouterModule],
  template: `
    <div
      class="rounded-md px-3 py-2 transition-colors duration-100 drop-shadow-md"
    >
      <a (click)="buttonClicked()">
        <ng-content />
      </a>
    </div>
  `,
  styles: `:host > div {
    background-color: var(--button-color);
    color: var(--button-text-color);

    &:hover {
      background-color: var(--hover-button-color)
    }
  }`,
})
export class ButtonComponent {
  @Input() route: string | undefined
  @Input() onClick: (() => void) | undefined

  router = inject(Router)
  buttonClicked() {
    if (this.onClick) this.onClick()
    if (this.route) this.router.navigate([this.route])
  }
}
