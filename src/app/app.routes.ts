import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'dashboard/list', component: ListComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path:'**', component: DashboardComponent}
];
