import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MonitorComponent } from './monitor/monitor.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: '/monitor', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    MonitorComponent,
    SearchComponent,
    PageNotFoundComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes,{ enableTracing: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
