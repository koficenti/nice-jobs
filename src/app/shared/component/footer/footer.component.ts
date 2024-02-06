import {Component} from '@angular/core'
import {faContactBook, faImage} from '@fortawesome/free-solid-svg-icons'
import {FaIconComponent} from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FaIconComponent],
  template: `
    <div class="bg-gray-200 py-10">
      <div class="flex justify-between px-8 md:px-14 pt-10">
        <div class="flex flex-col gap-6">
          <div class="flex gap-5">
            <fa-icon [icon]="faContactBook" size="xl"></fa-icon>
            <fa-icon [icon]="faContactBook" size="xl"></fa-icon>
            <fa-icon [icon]="faContactBook" size="xl"></fa-icon>
            <fa-icon [icon]="faContactBook" size="xl"></fa-icon>
            <fa-icon [icon]="faContactBook" size="xl"></fa-icon>
          </div>
          <div>
            <ul class="flex text-sm italic gap-2 md:gap-5 list-none opacity-80">
              <li>Feedback</li>
              -
              <li>Terms of use</li>
              -
              <li>Legal, Privacy and Security</li>
            </ul>
          </div>
        </div>
        <div class="hidden md:block">
          <fa-icon [icon]="faImage" size="2xl"></fa-icon>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row justify-between px-8 md:px-14 py-5 text-sm opacity-50"
      >
        <div>Copyright NiceJobs 2024</div>
        <div>Created with plenty of love 🥰</div>
      </div>
    </div>
  `,
  styles: `
    :host {
      @apply w-full;
    }
  `,
})
export class FooterComponent {
  protected readonly faImage = faImage
  protected readonly faContactBook = faContactBook
}
