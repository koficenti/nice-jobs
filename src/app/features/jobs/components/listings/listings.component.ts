import {Component} from '@angular/core'
import {CardlistComponent} from '../cardlist/cardlist.component'
import {OverviewComponent} from '../overview/overview.component'

@Component({
  selector: 'jobs-listings',
  standalone: true,
  imports: [CardlistComponent, OverviewComponent],
  template: `
    <jobs-cardlist class="mb-20"></jobs-cardlist>
    <jobs-overview></jobs-overview>
  `,
  styles: `:host{
    @apply flex mt-10 w-[90%] lg:w-[88%] h-fit gap-5 m-auto;
  }`,
})
export class ListingsComponent {}
