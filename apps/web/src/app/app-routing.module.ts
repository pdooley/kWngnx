import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';
import { Routes }               from '@angular/router';

import { LayoutComponent }      from './layout/layout.component';

import { kwLogin }              from '@kw/ng/page';
import { kwLogout}              from '@kw/ng/page';

import { dwpAct }               from "@dw";
import { dwpBinder }            from '@dw';
import { dwpClose }             from '@dw';
import { dwpDash }              from '@dw';
import { dwpDeals }             from '@dw';
import { dwpEvent }             from '@dw';
import { dwpDil }               from '@dw';
import { dwpFeed }              from '@dw';
import { dwpInfo }              from '@dw';
import { dwpMttr }              from '@dw';
import { dwpMsgs }              from '@dw';
import { dwpOpts }              from '@dw';
import { dwpPlay }              from '@dw';
import { dwpPlayNav }           from '@dw';
import { dwpRoster }            from '@dw';
import { dwpSrch }              from '@dw';
import { dwpStruct}             from '@dw';
import { dwpTasks }             from '@dw';
import { dwpTerm }              from '@dw';
import { dwpWar }               from '@dw';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: kwLogin
    },
    {
        path: 'logout',
        component: kwLogout
    },
    {
        path: 'register',
        loadChildren: 'app/demo/custom-pages/register/register.module#RegisterModule',
    },
    {
        path: 'forgot-password',
        loadChildren: 'app/demo/custom-pages/forgot-password/forgot-password.module#ForgotPasswordModule',
    },
    {
        path: 'apps',
        component: LayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'deals'
            },
            {
                path: 'deals',
                component: dwpDeals,
            },
            {
                path: 'matter/:id',
                component: dwpMttr,
                children: [
                    //{
                        //path: '',
                        //pathMatch: 'full',
                        //redirectTo: 'playbook'
                    //},
                    {
                        path: 'playbook',
                        component: dwpPlay,
                        children: [
                            {
                                path: '',
                                pathMatch: 'full',
                                redirectTo: 'activity'
                            },
                            {
                                path: 'activity',
                                component: dwpAct,
                            },
                            {
                                path: 'matter_info',
                                component: dwpInfo,
                            },
                            {
                                path: 'roster',
                                component: dwpRoster,
                            },
                            {
                                path: 'term_sheet',
                                component: dwpTerm,
                            },
                            {
                                path: 'struct_chart',
                                component: dwpStruct,
                            },
                            {
                                path: 'add_event',
                                component: dwpEvent,
                            }
                        ]
                    },
                    {
                        path: 'diligence',
                        component: dwpDil,
                    },
                    {
                        path: 'closing',
                        component: dwpClose,
                    },
                    {
                        path: 'war',
                        component: dwpWar,
                    },
                    {
                        path: 'binder',
                        component: dwpBinder,
                    }

                ]
            },
            {
                path: 'opts',
                component: dwpOpts,
            },
            {
                path: 'playnav',
                component: dwpPlayNav,
            },
            {
                path: 'search',
                component: dwpSrch,
            },
            {
                path: 'messages',
                component: dwpMsgs,
            },
            {
                path: 'feed',
                component: dwpFeed,
            },
            {
                path: 'task_list',
                component: dwpTasks,
            },
            {
                path: 'inbox',
                loadChildren: 'app/demo/apps/inbox/inbox.module#InboxModule',
            },
            {
                path: 'chat',
                loadChildren: 'app/demo/apps/chat/chat.module#ChatModule',
            },
            {
                path: 'calendar',
                loadChildren: 'app/demo/apps/calendar/calendar.module#CalendarAppModule',
            }
        ]
    },
    {
        path: 'components',
        loadChildren: 'app/demo/components/components.module#ComponentsModule',
    },
    {
        path: 'forms/form-elements',
        loadChildren: 'app/demo/forms/form-elements/form-elements.module#FormElementsModule',
    },
    {
        path: 'forms/form-wizard',
        loadChildren: 'app/demo/forms/form-wizard/form-wizard.module#FormWizardModule',
    },
    {
        path: 'icons',
        loadChildren: 'app/demo/icons/icons.module#IconsModule',
    },
    {
        path: 'level1/level2/level3/level4/level5',
        loadChildren: 'app/demo/level5/level5.module#Level5Module',
    },
    {
        path: 'maps/google-maps',
        loadChildren: 'app/demo/maps/google-maps/google-maps.module#GoogleMapsModule',
    },
    {
        path: 'tables/simple-table',
        loadChildren: 'app/demo/tables/simple-table/simple-table.module#SimpleTableModule',
    },
    {
        path: 'tables/all-in-one-table',
        loadChildren: 'app/demo/tables/all-in-one-table/all-in-one-table.module#AllInOneTableModule',
    },
    {
        path: 'drag-and-drop',
        loadChildren: 'app/demo/drag-and-drop/drag-and-drop.module#DragAndDropModule'
    },
    {
        path: 'editor',
        loadChildren: 'app/demo/editor/editor.module#EditorModule',
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
