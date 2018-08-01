import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { HomeRoutingComponent } from './routing/home/home-routing.component';
import { EditServerRoutingComponent } from './routing/servers/edit-server/edit-server-routing.component';
import { ServerRoutingComponent } from './routing/servers/server/server-routing.component';
import { ServersRoutingComponent } from './routing/servers/servers-routing.component';
import { UserRoutingComponent } from './routing/users/user/user-routing.component';
import { UsersRoutingComponent } from './routing/users/users-routing.component';
import { ServersRoutingService } from './routing/servers/servers-routing.service';

const appRoutes: Routes = [
  { path: '', component: HomeRoutingComponent },
  { path: 'users', component: UsersRoutingComponent },
  { path: 'users/:id/:name', component: UserRoutingComponent },
  { path: 'servers', component: ServersRoutingComponent },
  { path: 'servers/:id/edit', component: EditServerRoutingComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DatabindingComponent,
    CockpitComponent,
    ServerElementComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    HomeRoutingComponent,
    EditServerRoutingComponent,
    ServerRoutingComponent,
    ServersRoutingComponent,
    UserRoutingComponent,
    UsersRoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AccountsService, LoggingService, ServersRoutingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
