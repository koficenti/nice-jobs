import {Component} from '@angular/core'
import {
  faEllipsisVertical,
  faListDots,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {FaIconComponent} from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'jobs-card',
  standalone: true,
  imports: [FaIconComponent],
  template: `
    <div class="flex gap-2 cursor-pointer">
      <div class="px-4 md:px-6 place-self-center flex justify-center">
        <div class="bg-slate-200 rounded-xl w-24 aspect-square"></div>
      </div>
      <div class="pr-8 py-5 flex-grow">
        <div class="flex justify-between">
          <h1 class="text-lg font-medium">Joshua Hunter</h1>
          <fa-icon [icon]="faEllipsisVertical" size="lg"></fa-icon>
        </div>
        <p>Full Stack Developer</p>
        <div class="py-2 opacity-60 text-sm">
          I am the best programmer ever...
        </div>
        <div class="flex gap-2 text-[10pt] sm:text-sm">
          <div class="bg-gray-200 rounded-md w-fit px-2 py-1 mt-2">
            $30 per hour
          </div>
          <div class="bg-gray-200 rounded-md w-fit px-2 py-1 mt-2">
            Full time
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      @apply bg-white w-full max-h-[200px] h-fit shadow;
    }
  `,
})
export class CardComponent {
  protected readonly faListDots = faListDots
  protected readonly faEllipsisVertical = faEllipsisVertical
  protected readonly faUser = faUser
}
