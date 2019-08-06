import { Routes } from '@angular/router';
import { HomeComponent, MessageComponent, WishlistComponent, SettingsComponent, ProfileComponent } from './components';
import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'messages',
      component: MessageComponent,
    },
    {
      path: 'wishlist',
      component: WishlistComponent,
    },
    {
      path: 'settings',
      component: SettingsComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
  ],
}];
