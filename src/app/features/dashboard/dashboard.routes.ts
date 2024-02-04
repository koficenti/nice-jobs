import {Route} from '@angular/router'
export const DashboardRoutes: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard.component').then((m) => m.DashboardComponent),
  },
]
