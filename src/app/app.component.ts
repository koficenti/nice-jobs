import {Component, inject} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {ThemeService} from './core/service/theme.service'
import {CoreModule} from './core/core.module'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [CoreModule],
  template: '<router-outlet/>',
})
export class AppComponent {
  themeService = inject(ThemeService)

  getThemeVariables() {
    this.themeService.getThemeVariables()
  }
}
