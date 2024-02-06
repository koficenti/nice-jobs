import {Route} from '@angular/router'

export const ProfileRoutes: Route[] = [
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile.component').then((m) => m.ProfileComponent),
  },
]
