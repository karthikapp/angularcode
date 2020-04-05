import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestcallComponent} from '../app/restcall/restcall.component'
import {DashboardComponent } from '../app/dashboard/dashboard.component'
import { NotfoundComponent} from '../app/notfound/notfound.component'
import { ContactusComponent} from '../app/contactus/contactus.component'
import { InsightsComponent} from '../app/insights/insights.component'
import { IntegrationsComponent} from '../app/integrations/integrations.component'
import { AnalyticsComponent} from '../app/analytics/analytics.component'

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, children : [
    {
      path: 'apicall', component: RestcallComponent
    },
    {
      path: 'contactus', component: ContactusComponent
    },
    {
      path: 'insights', component: InsightsComponent
    },
    {
      path: 'integrations', component: IntegrationsComponent
    },
    {
      path: 'analytics', component: AnalyticsComponent
    }
  ]},
  { path: '', redirectTo: '/dashboard/apicall', pathMatch: 'full'},
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
