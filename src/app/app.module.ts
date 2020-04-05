import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestcallComponent } from './restcall/restcall.component';
import { SearchnamepipePipe } from './searchnamepipe.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { IntegrationsComponent } from './integrations/integrations.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { InsightsComponent } from './insights/insights.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    RestcallComponent,
    SearchnamepipePipe,
    DashboardComponent,
    NotfoundComponent,
    IntegrationsComponent,
    AnalyticsComponent,
    InsightsComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
