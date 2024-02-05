import {Component, inject} from '@angular/core'
import {ThemeService} from '../../core/service/theme.service'
import {FiltersComponent} from './components/filters/filters.component'
import {HeaderComponent} from './components/header/header.component'
import {JobsComponent} from './components/jobs/jobs.component'
import {FooterComponent} from '../../shared/component/footer/footer.component'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FiltersComponent, HeaderComponent, JobsComponent, FooterComponent],
  template: `
    <dashboard-header></dashboard-header>
    <dashboard-filters></dashboard-filters>
    <dashboard-jobs></dashboard-jobs>
    <app-footer></app-footer>
  `,
  styles: ``,
})
export class DashboardComponent {
  themeService = inject(ThemeService)
  currentTheme: string

  constructor() {
    this.currentTheme = this.themeService.getCurrentTheme()
  }

  buttonClicked(): void {
    this.themeService.toggleTheme()
    this.currentTheme = this.themeService.getCurrentTheme()
  }
}
