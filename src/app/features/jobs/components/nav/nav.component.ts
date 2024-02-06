import {Component, inject, OnInit} from '@angular/core'
import {Location} from '@angular/common'
import {NavigationEnd, Router, RouterLink} from '@angular/router'
import {filter, map} from 'rxjs'

@Component({
  selector: 'jobs-nav',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="flex justify-between px-20 py-5 select-none">
      <div>ICON</div>

      <ul class="flex gap-10">
        @if (path != '/jobs') {
          <li>
            <a routerLink="/jobs">Find Developers</a>
          </li>
        } @else {
          <li>
            <a class="opacity-50">Find Developers</a>
          </li>
        }

        @if (path != '/jobs/login') {
          <li>
            <a routerLink="/jobs/login">Login</a>
          </li>
        } @else {
          <li>
            <a class="opacity-50">Login</a>
          </li>
        }

        @if (path != '/jobs/register') {
          <li>
            <a routerLink="/jobs/register">Register</a>
          </li>
        } @else {
          <li>
            <a class="opacity-50">Register</a>
          </li>
        }
      </ul>
    </div>
  `,
  styles: ``,
})
export class NavComponent implements OnInit {
  private router = inject(Router)
  private location = inject(Location)

  path = this.location.path()

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.path = e.urlAfterRedirects.toString()
      })
  }
}
