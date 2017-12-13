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
            title: 'Historical OrderBook',
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
            title: 'Pending_KYC',
            icon: 'fa fa-balance-scale',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      {
        path: 'addErc20',
        data: {
          menu: {
            title: 'Add ERC 20',
            icon: 'fa fa-plus-circle',
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
            title: 'User Queries',
            icon: 'fa fa-user',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      //  {
      //   path: 'addNewErc20Token',
      //   data: {
      //     menu: {
      //       title: 'Add New ERC 20',
      //       icon: 'fa fa-plus-circle',
      //       selected: false,
      //       expanded: false,
      //       order: 0
      //     }
      //   }
      // },
      {
        path: 'addPair',
        data: {
          menu: {
            title: 'Add Pair',
            icon: 'fa fa-cog ',
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
