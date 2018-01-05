export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      {
        path: 'users',
        data: {
          menu: {
            title: 'Users',
            icon: 'fa fa-user',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      {
        path: 'HistoricalOrderBook',
        data: {
          menu: {
            title: 'Trade History',
            icon: 'fa fa-first-order',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
       {
        path: 'pendingKyc',
        data: {
          menu: {
            title: 'Pending KYC',
            icon: 'fa fa-balance-scale',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      {
        path: 'usersQueries',
        data: {
          menu: {
            title: 'Newsletter Request',
            icon: 'fa fa-user',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      {
        path: ' ',
        data: {
          menu: {
            title: 'Currencies',
            icon: 'fa fa-cog ',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
        children: [
          {
            path: ['./addErc20'],
            data: {
              menu: {
                title: 'New ERC20',
              },
            },
          },
           {
            path: ['./addPair'],
              data: {
              menu: {
                title: 'Markets',
              },
            },
          },
        ],
      },
      {
        path: ' ',
        data: {
          menu: {
            title: 'Fees',
            icon: 'fa fa-cog ',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
        children: [
          {
            path: ['./withdraws'],
            data: {
              menu: {
                title: 'Withdrawal',
              },
            },
          },
           {
            path: ['./trading'],
              data: {
              menu: {
                title: 'Trading',
              },
            },
          },
        ],
      },
      {
        path: 'dispute',
        data: {
          menu: {
            title: 'Dispute',
            icon: 'fa fa-user',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      {
        path: 'balanceTotal',
        data: {
          menu: {
            title: 'Balance',
            icon: 'fa fa-money',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      }
    ],
  },
];
