import {Component} from '@angular/core'
import {FooterComponent} from '../../shared/component/footer/footer.component'
import {FaIconComponent} from '@fortawesome/angular-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {ButtonComponent} from '../../shared/component/button/button.component'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FooterComponent, FaIconComponent, ButtonComponent],
  template: `
    <div class="w-full h-screen py-20 flex justify-center place-items-center">
      <div
        class="bg-white shadow min-w-[100%] md:min-w-[420px] w-1/4 h-screen md:h-fit py-10 px-10 flex flex-col gap-5 text-md justify-center text-sm"
      >
        <div class="relative">
          <div
            class="w-40 aspect-square rounded-xl bg-gray-300 m-auto  mb-4"
          ></div>
          <fa-icon
            [icon]="faEdit"
            size="lg"
            class="absolute top-0 right-0"
          ></fa-icon>
        </div>

        <div>
          <div class="text-sm">Name:</div>
          <div class="flex gap-4">
            <span class="text-lg">Joshua Hunter</span>
          </div>
        </div>

        <div>
          <div class="text-sm">Desired Role:</div>
          <div class="flex gap-4">
            <span class="text-lg">Full Stack Developer</span>
          </div>
        </div>

        <div>
          <div class="text-sm">Description:</div>
          <div class="flex gap-4">
            <span class="text-lg">I am the best developer in the world.</span>
          </div>
        </div>

        <div>
          <div class="text-sm">Github:</div>
          <div class="flex gap-4">
            <span class="underline text-lg">https://github.com/koficenti</span>
          </div>
        </div>

        <div>
          <div class="text-sm">Linkedin:</div>
          <div class="flex gap-4">
            <span class="underline text-lg"
              >https://linkedin.com/in/koficenti</span
            >
          </div>
        </div>
        @if (isEditing) {
          <Button class="mt-2">Save</Button>
        }
      </div>
    </div>

    <app-footer></app-footer>
  `,
  styles: `

  `,
})
export class ProfileComponent {
  protected readonly faEdit = faEdit

  isEditing = false
}
