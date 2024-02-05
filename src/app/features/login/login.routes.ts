import {Route} from '@angular/router'

export const LoginRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login.component').then((m) => m.LoginComponent),
  },
]
