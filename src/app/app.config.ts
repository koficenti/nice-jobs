import {ApplicationConfig} from '@angular/core'
import {provideRouter} from '@angular/router'

import {routes} from './app.routes'
import {DashboardRoutes} from './features/dashboard/dashboard.routes'
import {LoginRoutes} from './features/login/login.routes'
import {RegisterRoutes} from './features/register/register.routes'
import {ProfileRoutes} from './features/profile/profile.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(DashboardRoutes),
    provideRouter(LoginRoutes),
    provideRouter(RegisterRoutes),
    provideRouter(ProfileRoutes),
    provideRouter(routes),
  ],
}
