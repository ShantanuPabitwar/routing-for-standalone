import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditComponent } from './profile/edit/edit.component';
import { UpdateComponent } from './profile/update/update.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: "home"
    }
    ,
    {
        path: 'home',
        component: HomeComponent
    }
    ,{
        path: 'contact',
        component: ContactsComponent
    },
    {
        path: 'profile',
        loadComponent: ()=> (import('./profile/profile.component').then((c)=>c.ProfileComponent)),
        children: [
            {
                path: 'edit',
                component: EditComponent
            },
            {
                path: 'update',
                component: UpdateComponent
            }
        ]
    },
    {
        path: 'users',
        loadComponent: ()=> (import('./users/users.component').then((c)=>c.UsersComponent))
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: 'not-found'
    },
];
