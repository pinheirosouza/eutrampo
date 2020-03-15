import { LoginGuard } from './shared/guards/auth/login.guard';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: './pages/entry/login/login.module#LoginPageModule',
    // canActivate: [LoginGuard]
  },
  {
    path: 'register',
    loadChildren: './pages/entry/register/register.module#RegisterPageModule',
    // canActivate: [LoginGuard]
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfilePageModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'chat',
    loadChildren: './pages/chat/chat.module#ChatPageModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'provided',
    loadChildren: './pages/activities/provided/provided.module#ProvidedPageModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'hired',
    loadChildren: './pages/activities/hired/hired.module#HiredPageModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'news',
    loadChildren: './pages/news/news.module#NewsPageModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'schedule',
    loadChildren: './pages/schedule/schedule.module#SchedulePageModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'discover',
    loadChildren: './pages/discover/discover.module#DiscoverPageModule',
    // canActivate: [AuthGuard]
  },
  
  {
    path: 'conversas',
    loadChildren: './pages/chat/conversas/conversas/conversas.module#ConversasPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'opportunities',
    loadChildren: './pages/opportunities/opportunities.module#OpportunitiesPageModule',

    // canActivate: [AuthGuard]
  },
  // {
  //   path: 'service-modal',
  //   loadChildren: () => import('./shared/modals/service-modal/service-modal.module').then( m => m.ServiceModalPageModule)
  // },
  {
    path: 'hired-modal',
    loadChildren: () => import('./shared/modals/hired-modal/hired-modal.module').then( m => m.HiredModalPageModule)
  },
  {
    path: 'add-service-modal',
    loadChildren: () => import('./shared/modals/add-service-modal/add-service-modal.module').then( m => m.AddServiceModalPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
