import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretFriendRoutingModule } from './secret-friend-routing.module';
import { SelectNamesComponent } from './components/select-names';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [SelectNamesComponent, ResultComponent],
  imports: [CommonModule, FormsModule, SecretFriendRoutingModule],
})
export class SecretFriendModule {}
