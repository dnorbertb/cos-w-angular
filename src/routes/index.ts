import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { OverviewComponent } from 'src/app/overview/overview.component';

export const routes: Routes = [
    { path: "", component: HomeComponent, title: "Home" },
    { path: ":id", component: OverviewComponent, title: "Overview" }
]