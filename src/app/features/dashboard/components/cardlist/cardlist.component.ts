import {Component} from '@angular/core'
import {CardComponent} from '../card/card.component'

@Component({
  selector: 'dashboard-cardlist',
  standalone: true,
  imports: [CardComponent],
  template: `
    <dashboard-card></dashboard-card>
    <dashboard-card></dashboard-card>
    <dashboard-card></dashboard-card>
    <dashboard-card></dashboard-card>
    <dashboard-card></dashboard-card>
    <dashboard-card></dashboard-card>
  `,
  styles: `
    :host {
      @apply w-[100%] lg:w-[40%] md:min-w-[380px] h-fit flex flex-col gap-5;
    }
  `,
})
export class CardlistComponent {}
