import {Route} from '@angular/router'
export const JobsRoutes: Route[] = [
  {
    path: 'jobs',
    loadComponent: () =>
      import('./jobs.component').then((m) => m.JobsComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/jobs/jobs.component').then((m) => m.JobsComponent),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./features/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./features/profile/profile.component').then(
            (m) => m.ProfileComponent
          ),
      },
    ],
  },
]
