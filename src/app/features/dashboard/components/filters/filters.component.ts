import {Component} from '@angular/core'
import {FaIconComponent} from '@fortawesome/angular-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {SelectorComponent} from '../../../../shared/component/selector/selector.component'

@Component({
  selector: 'dashboard-filters',
  standalone: true,
  imports: [FaIconComponent, SelectorComponent],
  template: `
    <Selector [options]="['Beginner', 'Intermediate', 'Advanced']"
      >Experience Level</Selector
    >
    <Selector
      bgColor="bg-blue-200"
      [options]="['> 10', '> 20', '> 30', '> 40', 'Anywhere']"
      >Within 35 miles</Selector
    >
    <Selector
      [options]="['> $15', '> $25', '> $35', '> $45', '> $55', '$55 and above']"
      >Hourly Rate</Selector
    >
    <Selector [options]="['This Week', 'This Month', 'Oldest', 'Newest']"
      >Post Date</Selector
    >
  `,
  styles: `
    :host {
      @apply flex justify-center mt-8 gap-5 text-sm flex-wrap z-10;
    }
  `,
})
export class FiltersComponent {
  faCaretDown = faCaretDown
}
