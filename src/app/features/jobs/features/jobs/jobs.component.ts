import {Component} from '@angular/core'
import {FiltersComponent} from '../../components/filters/filters.component'
import {FooterComponent} from '../../../../shared/component/footer/footer.component'
import {HeaderComponent} from '../../components/header/header.component'
import {ListingsComponent} from '../../components/listings/listings.component'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FiltersComponent,
    FooterComponent,
    HeaderComponent,
    ListingsComponent,
  ],
  template: `
    <jobs-header></jobs-header>
    <jobs-filters></jobs-filters>
    <jobs-listings></jobs-listings>
    <app-footer></app-footer>
  `,
  styles: ``,
})
export class JobsComponent {}
