import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.UserPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'provided',
    loadChildren: () => import('./pages/activities/provided/provided.module').then( m => m.ProvidedPageModule)
  },
  {
    path: 'hired',
    loadChildren: () => import('./pages/activities/hired/hired.module').then( m => m.HiredPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./pages/schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'bus',
    loadChildren: () => import('./pages/discover/bus/bus.module').then( m => m.BusPageModule)
  },
  {
    path: 'museums',
    loadChildren: () => import('./pages/discover/museums/museums.module').then( m => m.MuseumsPageModule)
  },
  {
    path: 'cycleways',
    loadChildren: () => import('./pages/discover/cycleways/cycleways.module').then( m => m.CyclewaysPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
