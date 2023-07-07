import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { BusinessContactComponent } from './business-contact/business-contact.component';

const appRoutes: Routes = [
    {
        path : 'home',
        component: HomeComponent
    },
    {
        path : 'about',
        component: AboutComponent
    },
    {
        path : 'projects',
        component: ProjectsComponent
    },
    {
        path : 'services',
        component: ServicesComponent
    },
    {
        path : 'contact',
        component: ContactComponent
    },
    {
        path : 'login',
        component: LoginComponent
    },
    {
        path : 'business-contact',
        component: BusinessContactComponent
    }
];

export default appRoutes;