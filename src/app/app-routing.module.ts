import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'secret-friend',
  },
  {
    path: 'secret-friend',
    loadChildren: () =>
      import('./modules/secret-friend/secret-friend.module').then(
        (m) => m.SecretFriendModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
