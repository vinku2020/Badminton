import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { GroupStageFixtureComponent } from '../../group-stage-fixture/group-stage-fixture.component';
import { UpdateMatchResultComponent } from '../../update-match-result/update-match-result.component';
import { ScheduleMatchComponent } from '../../schedule-match/schedule-match.component';
import { AdminComponent } from '../../admin/admin.component';
import { LoginComponent } from 'app/login/login.component';
import { ExpenseGuard } from 'app/expense.guard';
import { ContentSliderComponent } from 'app/contentSlider/content-slider.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'fixtures',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'addGroupFixture', component: GroupStageFixtureComponent, canActivate: [ExpenseGuard] },
    // { path: 'updateResult', component: UpdateMatchResultComponent},
    { path: 'updateResult/:id', component: UpdateMatchResultComponent, canActivate: [ExpenseGuard] },
    { path: 'scheduleMatch/:id', component:ScheduleMatchComponent, canActivate: [ExpenseGuard] },
    { path: 'admin', component:AdminComponent, canActivate: [ExpenseGuard] },
    { path: 'login', component:LoginComponent},
    { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
    { path: 'slide', component: ContentSliderComponent}
];
