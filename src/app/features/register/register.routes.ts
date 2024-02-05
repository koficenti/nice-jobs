import {Route} from '@angular/router'

export const RegisterRoutes: Route[] = [
  {
    path: 'register',
    loadComponent: () =>
      import('./register.component').then((m) => m.RegisterComponent),
  },
]
