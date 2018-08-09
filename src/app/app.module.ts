import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './routing/servers/edit-server/can-deactivate-guard-service';
import { ErrorPageComponent } from './routing/error-page/error-page.component';
import { ServerResolver } from './routing/servers/server/server-resolver.service';
import { HomeObsComponent } from './observable/home-obs/home-obs.component';
import { UserObsComponent } from './observable/user-obs/user-obs.component';
import { UsersService } from './observable/users.service';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';

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
    UsersRoutingComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    HomeObsComponent,
    UserObsComponent,
    ReactiveFormComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AccountsService, LoggingService, ServersRoutingService, AuthService, AuthGuard,
    CanDeactivateGuard, ServerResolver, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
