import {Component} from '@angular/core'
import {SelectorComponent} from '../selector/selector.component'
import {SelectorType} from '../../types/selector.type'

@Component({
  selector: 'jobs-filters',
  standalone: true,
  imports: [SelectorComponent],
  template: `
    <jobs-selector [selector]="ExperienceLevel"></jobs-selector>
    <jobs-selector [selector]="HourlyRate"></jobs-selector>
    <jobs-selector [selector]="PostDate"></jobs-selector>
    <jobs-selector [selector]="MilesWithin"></jobs-selector>
  `,
  styles: `
    :host {
      @apply flex justify-center mt-8 gap-5 text-sm flex-wrap z-10;
    }
  `,
})
export class FiltersComponent {
  ExperienceLevel: SelectorType<string> = {
    default: null,
    display_value: 'Experience Level',
    is_selected_display_value: null,
    options: [
      {value: 'Beginner', display_value: 'Beginner'},
      {value: 'Advanced', display_value: 'Advanced'},
      {value: 'Expert', display_value: 'Expert'},
    ],
    selected: null,
  }
  HourlyRate: SelectorType<number> = {
    default: null,
    display_value: 'Hourly Rate',
    is_selected_display_value: null,
    options: [
      {value: 15, display_value: '> $15 / Hour'},
      {value: 25, display_value: '> $25 / Hour'},
      {value: 35, display_value: '> $35 / Hour'},
      {value: 45, display_value: '> $45 / Hour'},
      {value: 9999, display_value: '< $45 / hour'},
    ],
    selected: null,
  }
  PostDate: SelectorType<string> = {
    default: null,
    display_value: 'Post Date',
    is_selected_display_value: null,
    options: [
      {value: 'Week', display_value: 'This week'},
      {value: 'Month', display_value: 'This month'},
      {value: 'Newest', display_value: 'Newest'},
      {value: 'Oldest', display_value: 'Oldest'},
    ],
    selected: null,
  }
  MilesWithin: SelectorType<number> = {
    default: null,
    display_value: 'Distance',
    is_selected_display_value: 'Within ^ Miles',
    options: [
      {value: 10, display_value: '< 10 Miles'},
      {value: 20, display_value: '< 20 Miles'},
      {value: 30, display_value: '< 30 Miles'},
    ],
    selected: null,
  }
}
