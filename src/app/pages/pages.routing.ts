import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { PrivateRouteAuthGuard } from './auth-guard/private.route.auth.guard.service';
import { PublicRouteAuthGuard } from './auth-guard/public.route.auth.guard.service';

// noinspection TypeScriptValidateTypes
// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
    canActivate: [PublicRouteAuthGuard],
  },
  {
    path: 'fPassword',
    loadChildren: 'app/pages/forgotPassword/forgotPassword.module#forgotPassword',
    canActivate: [PublicRouteAuthGuard],
  },

  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule',
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [PrivateRouteAuthGuard],
      },
      {
        path: 'withdraws',
        loadChildren: './withdraw/withdrawal.module#WithdrawFess',

      },
      {
        path: 'trading',
        loadChildren: './trading/trading.module#TradingsFees',

      },
      {
        path: 'users',
        loadChildren: './users/users.module#UserModule',
        canActivate: [PrivateRouteAuthGuard],
      },
      {
        path: 'HistoricalOrderBook',
        loadChildren: './historicalOrderbook/historicalOrderbook.module#HistoricalOrder',
      },
      {
        path: 'usersQueries',
        loadChildren: './usersQueries/usersQueries.module#UsersQueriesModule',
      },
      {
        path: 'pendingKyc',
        loadChildren: './pendingKyc/pendingKyc.module#PendingKycModule',
        canActivate: [PrivateRouteAuthGuard],
      },
      {
        path: 'addErc20',
        loadChildren: './addErc20/addErc20.module#AddErc20Module',
        canActivate: [PrivateRouteAuthGuard],
      },
      {
        path: 'kycDetails/:userId',
        loadChildren: './KycDetails/kycDetails.module#kycDetailsModule',
        canActivate: [PrivateRouteAuthGuard],
      },
      {
        path: 'userdetails/:userId',
        loadChildren: './userDetails/userDetail.module#UserDetailModule',
        canActivate: [PrivateRouteAuthGuard],
      },
      {
        path: 'orderdetails',
        loadChildren: './orderDetails/orderDetails.module#OrderDetailsModule'
      },
      {
        path: 'pairdetails/:pairID',
        loadChildren: './pairDetails/pairDetails.module#PairDetailsModule',
        canActivate: [PrivateRouteAuthGuard],
      },
      {
        path: 'addnewpair',
        loadChildren: './addNewPair/addNewPair.module#AddNewPairModule',
        canActivate: [PrivateRouteAuthGuard],
      },
      {
        path: 'reply',
        loadChildren: './reply/reply.module#ReplyModule',
      },
       {
        path: 'dispute',
        loadChildren: './dispute/dispute.module#DisputeModule',
      },
      {
        path: 'adderdetails',
        loadChildren: './adderDetails/adderDetails.module#AdderDetailsModule',
      },
      {
        path: 'addPair',
        loadChildren: './addPair/addPair.module#AddPairModule',
        canActivate: [PrivateRouteAuthGuard],
      },
      {
        path: 'addNewErc20Token',
        loadChildren: './addNewErc20Token/addNewErc.module#AddNewErcModule',
      },
      //   {
      //   path: 'fPassword',
      //   loadChildren: './forgotPassword/forgotPassword.module#forgotPassword',
      // },
      //   { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      //   { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      //   { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      //   { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      //   { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      //   { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      //   { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
      //
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
