import { Routes, RouterModule } from '@angular/router';
import { DoingComponent } from './doing/doing.component';
import { DoneComponent } from './done/done.component';

const routing: Routes = [
    {
        path: 'doing', 
        component: DoingComponent
    },
    {
        path: 'done', 
        component: DoneComponent
    },
];

export const appRoutes = RouterModule.forRoot(routing);