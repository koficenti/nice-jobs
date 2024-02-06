import {Component} from '@angular/core'
import {ButtonComponent} from '../../../../shared/component/button/button.component'
import {FaIconComponent} from '@fortawesome/angular-fontawesome'
import {InputComponent} from '../../../../shared/component/input/input.component'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'jobs-header',
  standalone: true,
  imports: [ButtonComponent, FaIconComponent, InputComponent],
  template: `
    <h1 class="text-2xl text-center pt-10">Let's find you a professional!</h1>
    <div
      class="flex flex-col md:flex-row gap-5 pt-8 justify-center place-items-center"
    >
      <div class="flex flex-wrap justify-center gap-3">
        <div class="relative">
          <TextInput
            class="min-w-[320px] md:w-[23vw]"
            placeholder="Enter skills, names, experience levels"
          />
          <fa-icon
            [icon]="faSearch"
            class="absolute right-3 py-2 opacity-60 md:hidden"
          ></fa-icon>
        </div>
        <TextInput class="min-w-[150px]" placeholder="Location" />
      </div>
      <Button class="hidden md:block">Find Developers</Button>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  faSearch = faSearch
}
