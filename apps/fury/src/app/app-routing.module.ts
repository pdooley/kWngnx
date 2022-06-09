import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@fury/layout';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('@fury/pages/auth/login').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('@fury/pages/auth/register').then(m => m.RegisterModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('@fury/pages/auth/forgot-password').then(m => m.ForgotPasswordModule),
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('@fury/pages/coming-soon').then(m => m.ComingSoonModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@fury/pages/dashboard').then(m => m.DashboardModule),
        pathMatch: 'full'
      },
      {
        path: 'apps/inbox',
        loadChildren: () => import('@fury/pages/apps/inbox').then(m => m.InboxModule),
      },
      {
        path: 'apps/calendar',
        loadChildren: () => import('@fury/pages/apps/calendar').then(m => m.CalendarAppModule),
      },
      {
        path: 'apps/chat',
        loadChildren: () => import('@fury/pages/apps/chat').then(m => m.ChatModule),
      },
      {
        path: 'components',
        loadChildren: () => import('@fury/pages/components').then(m => m.ComponentsModule),
      },
      {
        path: 'forms/form-elements',
        loadChildren: () => import('@fury/pages/forms/form-elements').then(m => m.FormElementsModule),
      },
      {
        path: 'forms/form-wizard',
        loadChildren: () => import('@fury/pages/forms/form-wizard').then(m => m.FormWizardModule),
      },
      {
        path: 'icons',
        loadChildren: () => import('@fury/pages/icons).then(m => m.IconsModule),
      },
      {
        path: 'page-layouts',
        loadChildren: () => import('@fury/pages/page-layouts').then(m => m.PageLayoutsModule),
      },
      {
        path: 'maps/google-maps',
        loadChildren: () => import('@fury/pages/maps/google-maps').then(m => m.GoogleMapsModule),
      },
      {
        path: 'tables/all-in-one-table',
        loadChildren: () => import('@fury/pages/tables/all-in-one-table').then(m => m.AllInOneTableModule),
      },
      {
        path: 'drag-and-drop',
        loadChildren: () => import('@fury/pages/drag-and-drop').then(m => m.DragAndDropModule)
      },
      {
        path: 'editor',
        loadChildren: () => import('@fury/pages/editor').then(m => m.EditorModule),
      },
      {
        path: 'blank',
        loadChildren: () => import('@fury/pages/blank').then(m => m.BlankModule),
      },
      {
        path: 'level1/level2/level3/level4/level5',
        loadChildren: () => import('@fury/pages/level5').then(m => m.Level5Module),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
