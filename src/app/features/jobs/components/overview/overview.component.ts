import {Component} from '@angular/core'
import {FaIconComponent} from '@fortawesome/angular-fontawesome'
import {
  faStar,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import {TagComponent} from '../../../../shared/component/tag/tag.component'

@Component({
  selector: 'jobs-overview',
  standalone: true,
  imports: [FaIconComponent, TagComponent],
  template: `
    <div class="flex py-5 flex-col">
      <h1 class="font-medium text-lg">Joshua Hunter</h1>
      <p class="opacity-70">Full Stack Developer</p>
      <div class="flex gap-2">
        <div class="bg-gray-200 rounded-md w-fit px-2 py-1 text-sm mt-2">
          $30 per hour
        </div>
        <div class="bg-gray-200 rounded-md w-fit px-2 py-1 text-sm mt-2">
          Full time
        </div>
      </div>
    </div>
    <h2 class="font-medium mt-5">Description:</h2>
    <p class="opacity-80">
      I am the best programmer ever in the whole wide worlds.
    </p>
    <h2 class="font-medium mt-5">Skills:</h2>
    <div class="grid grid-cols-6 gap-2 text-sm w-fit">
      <Tag> VolleyBall </Tag>
      <Tag> VolleyBall </Tag>
      <Tag> VolleyBall </Tag>
      <Tag> VolleyBall </Tag>
      <Tag> VolleyBall </Tag>
      <Tag> VolleyBall </Tag>
      <Tag> VolleyBall </Tag>
      <Tag> VolleyBall </Tag>
      <Tag> VolleyBall </Tag>
    </div>
    <h2 class="font-medium mt-8">Rating:</h2>
    <fa-icon [icon]="faStar" size="sm"></fa-icon>
    <fa-icon [icon]="faStar" size="sm"></fa-icon>
    <fa-icon [icon]="faStar" size="sm"></fa-icon>
    <fa-icon [icon]="faStar" size="sm"></fa-icon>
    <fa-icon [icon]="faStar" size="sm"></fa-icon>
    <div class="py-10 flex gap-10 place-items-center">
      <div class="flex place-items-center gap-4">
        <fa-icon [icon]="faThumbsUp" size="lg"></fa-icon>
        <h1 class="font-bold text-lg">100</h1>
      </div>
      <div class="flex place-items-center gap-4">
        <fa-icon [icon]="faThumbsDown" size="lg"></fa-icon>
        <h1 class="font-bold text-lg">0</h1>
      </div>
    </div>
  `,
  styles: `
    :host{
      @apply w-[100%] px-10 hidden lg:block bg-white h-fit min-h-[300px] shadow -z-10;
    }
  `,
})
export class OverviewComponent {
  protected readonly faStar = faStar
  protected readonly faThumbsUp = faThumbsUp
  protected readonly faThumbsDown = faThumbsDown
}
