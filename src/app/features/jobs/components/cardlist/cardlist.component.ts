import {Component} from '@angular/core'
import {CardComponent} from '../card/card.component'

@Component({
  selector: 'jobs-cardlist',
  standalone: true,
  imports: [CardComponent],
  template: `
    <jobs-card></jobs-card>
    <jobs-card></jobs-card>
    <jobs-card></jobs-card>
    <jobs-card></jobs-card>
    <jobs-card></jobs-card>
    <jobs-card></jobs-card>
  `,
  styles: `
    :host {
      @apply w-[100%] lg:w-[40%] md:min-w-[380px] h-fit flex flex-col gap-5;
    }
  `,
})
export class CardlistComponent {}
