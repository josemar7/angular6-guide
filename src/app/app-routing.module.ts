import { ServerResolver } from './routing/servers/server/server-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutingComponent } from './routing/home/home-routing.component';
import { UsersRoutingComponent } from './routing/users/users-routing.component';
import { UserRoutingComponent } from './routing/users/user/user-routing.component';
import { ServersRoutingComponent } from './routing/servers/servers-routing.component';
import { ServerRoutingComponent } from './routing/servers/server/server-routing.component';
import { EditServerRoutingComponent } from './routing/servers/edit-server/edit-server-routing.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './routing/servers/edit-server/can-deactivate-guard-service';
import { ErrorPageComponent } from './routing/error-page/error-page.component';

const appRoutes: Routes = [
  { path: '', component: HomeRoutingComponent },
  { path: 'users', component: UsersRoutingComponent, children: [
    { path: ':id/:name', component: UserRoutingComponent }
  ] },
  { path: 'servers',
  // canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  component: ServersRoutingComponent,
  children: [
    { path: ':id', component: ServerRoutingComponent, resolve: {server: ServerResolver} },
    { path: ':id/edit', component: EditServerRoutingComponent, canDeactivate: [CanDeactivateGuard] }
  ] },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
