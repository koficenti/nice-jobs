import {ApplicationConfig} from '@angular/core'
import {provideRouter} from '@angular/router'

import {routes} from './app.routes'
import {JobsRoutes} from './features/jobs/jobs.routes'
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(JobsRoutes), provideRouter(routes)],
}
