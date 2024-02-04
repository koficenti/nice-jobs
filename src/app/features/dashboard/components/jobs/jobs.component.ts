import {Component} from '@angular/core'
import {CardlistComponent} from '../cardlist/cardlist.component'
import {OverviewComponent} from '../overview/overview.component'

@Component({
  selector: 'dashboard-jobs',
  standalone: true,
  imports: [CardlistComponent, OverviewComponent],
  template: `
    <dashboard-cardlist></dashboard-cardlist>
    <dashboard-overview></dashboard-overview>
  `,
  styles: `:host{
    @apply flex mt-10 w-[90%] lg:w-[88%] h-fit gap-5 m-auto;
  }`,
})
export class JobsComponent {}
