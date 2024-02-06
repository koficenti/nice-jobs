import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {NavComponent} from './components/nav/nav.component'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  template: `
    <jobs-nav></jobs-nav>
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class JobsComponent {}
