import { NgModule } from '@angular/core';
import { HomeComponent, MessageComponent, ProfileComponent, SettingsComponent, WishlistComponent } from './components';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import {MatMenuModule, MatIconModule, MatToolbarModule, MatListModule, MatSidenavModule} from '@angular/material';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    MessageComponent,
    ProfileComponent,
    SettingsComponent,
    WishlistComponent,
  ],
  imports: [
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
  ],
  providers: [],
})
export class DashboardModule { }
