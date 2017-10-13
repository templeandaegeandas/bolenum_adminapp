import {Injectable} from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';


@Injectable()
export class AddErc20Service {
    pageNumber:number;


     constructor(private http: HttpClient) { }

  userTableData = [
    {
      name: 'John',
      email: 'John Doe@gmail.com',
      mobile: '98888888',
      kyc: '4,214',
      createdDate: '23-2-1015',
      lastLogin: '23-2-1015',
      investment: '20',
      action:'View'
    }
  ];


getToken(currentPage: number, pageSize: number, sortBy: String, sortOrder: String){
      this.pageNumber = currentPage - 1;
    return this.http.get('api/v1/admin/get/token/list?pageNumber='
    + this.pageNumber + '&pageSize='
    + pageSize + '&sortBy='
    + sortBy + '&sortOrder=' + sortOrder)
    .map(res => res.json());
}



















  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.userTableData);
      }, 2000);
    });
  }

      dataTableData = [{
        'name': 'ab',
        'email': 'tellus.eu.augue@arcu.com',
        'date': '2016-01-09T14:48:34-08:00',
        'price': '1',
        'amount':'20',
    },
    {
        'name': 'Whitney',
        'email': 'sed.dictum@Donec.org',
        'date': '2017-01-23T20:09:52-08:00',
         'price': '1',
         'amount':'40',
    },
    
       { 
        'name': 'Oliver',
        'email': 'mauris@Craslorem.ca',
         'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
          'amount':'20',
     },
    {
        'name': 'Vladimir',
        'email': 'mi.Aliquam@Phasellus.net',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Maggy',
        'email': 'ligula@acorciUt.edu',
        'date': '2017-02-25T15:42:17-08:00',
        'price': '1',
         'amount':'50',
    },
    {
        'name': 'Unity',
        'email': 'Nunc.commodo@justo.org',
        'date': '2015-11-19T19:11:33-08:00',
       'price': '1',
         'amount':'50',
    },
    {
        'name': 'Ralph',
        'email': 'augue@penatibuset.net',
        'date': '2015-11-19T19:11:33-08:00',
       'price': '1',
         'amount':'50',
    },
    {
        'name': 'Medge',
        'email': 'sagittis.augue@taciti.edu',
        'date': '2015-11-19T19:11:33-08:00',
       'price': '1',
         'amount':'20',
    },
    {
        'name': 'Orli',
        'email': 'nascetur@mipedenonummy.edu',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'20',
    },
    {
        'name': 'Ainsley',
        'email': 'morbi.tristique.senectus@enim.ca',
        'date': '2015-11-19T19:11:33-08:00',
        'price': '1',
         'amount':'20',
    },
    {
        'name': 'Candice',
        'email': 'turpis.non.enim@fringillami.com',
         'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'20',
    },
    {
        'name': 'Alexis',
        'email': 'lacinia.orci.consectetuer@dolorFuscefeugiat.ca',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':20
    },
    {
        'name': 'Diana',
        'email': 'pede.Cras@a.edu',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':20
    },
    {
        'name': 'Tyrone',
        'email': 'ornare.In@duilectus.co.uk',
       'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Brennan',
        'email': 'scelerisque.lorem@enim.net',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Lillith',
        'email': 'non@lectus.edu',
        'regDate': '2016-08-01T12:45:06-07:00',
        'city': 'Lillois-WitterzŽe',
        'age': '50',
    },
    {
        'name': 'Wayne',
        'email': 'at.egestas.a@Pellentesque.edu',
        'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Vielka',
        'email': 'Nam.porttitor@Uttincidunt.ca',
         'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Armando',
        'email': 'Aliquam@orciin.net',
        'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Justin',
        'email': 'gravida.non.sollicitudin@placerataugue.edu',
        'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Zorita',
        'email': 'enim@risus.org',
         'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Mariam',
        'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Malik',
        'email': 'Nam@enimEtiam.org',
        'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Claire',
        'email': 'sapien@Nullamlobortis.ca',
         'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Hilel',
        'email': 'tempor@purusmaurisa.edu',
         'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Alea',
        'email': 'vulputate@orciUt.ca',
         'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Nash',
        'email': 'Nunc.ullamcorper.velit@egetmetuseu.edu',
         'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Brennan',
        'email': 'Vestibulum@Sedpharetra.org',
       'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'20',
    },
    {
        'name': 'Diana',
        'email': 'Cras.vulputate@erosturpisnon.edu',
         'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Farrah',
        'email': 'dignissim.tempor.arcu@gravidamaurisut.edu',
         'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'August',
        'email': 'tincidunt.Donec@dictumeleifendnunc.org',
        'regDate': '2016-11-21T05:57:31-08:00',
        'city': 'Hameln',
        'age': 21
    },
    {
        'name': 'Reese',
        'email': 'et.magnis.dis@montesnasceturridiculus.net',
         'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Pascale',
        'email': 'pede.ultrices@lacinia.com',
        'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Gage',
        'email': 'In.mi.pede@diameu.edu',
         'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Nora',
        'email': 'Ut.semper.pretium@luctussit.net',
         'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Jameson',
        'email': 'dolor.Fusce.feugiat@tempusnon.ca',
        'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Ryder',
        'email': 'Vestibulum.accumsan@egetmetus.co.uk',
         'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Lyle',
        'email': 'libero.nec.ligula@euaugueporttitor.co.uk',
         'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Carly',
        'email': 'vitae.sodales@pretium.co.uk',
         'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Hector',
        'email': 'luctus@orci.com',
        'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Luke',
        'email': 'luctus.aliquet.odio@bibendumDonecfelis.edu',
         'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Celeste',
        'email': 'et.malesuada.fames@utdolordapibus.org',
        'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Ila',
        'email': 'urna.Nullam@nullaCraseu.ca',
        'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Leila',
        'email': 'vehicula@orciUtsagittis.net',
        'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Zahir',
        'email': 'eleifend.non.dapibus@auguescelerisque.edu',
        'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Jin',
        'email': 'fames.ac.turpis@Namligula.edu',
        'date': '2015-06-17T23:31:55-07:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Wallace',
        'email': 'natoque.penatibus@tortorIntegeraliquam.com',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Wallace',
        'email': 'nulla.magna.malesuada@cursusNuncmauris.edu',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Buffy',
        'email': 'est@Vestibulumanteipsum.edu',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Jin',
        'email': 'orci.in@nuncsitamet.org',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Ethan',
        'email': 'ad@enimcommodohendrerit.com',
       'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Sheila',
        'email': 'dictum@rhoncus.com',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Jolie',
        'email': 'facilisis@uterat.net',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Eugenia',
        'email': 'dolor@nibhsit.ca',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Suki',
        'email': 'pretium.neque@consequatnecmollis.net',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Barrett',
        'email': 'a@lobortismaurisSuspendisse.edu',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Tashya',
        'email': 'nascetur@tinciduntadipiscingMauris.ca',
       'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Doris',
        'email': 'vitae@Ut.net',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Herrod',
        'email': 'arcu.Vestibulum@augueporttitorinterdum.co.uk',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Patience',
        'email': 'gravida@in.ca',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'arden',
        'email': 'tincidunt.nunc.ac@nibhenim.ca',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Harper',
        'email': 'tempor.lorem@quisturpis.edu',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':20
    },
    {
        'name': 'Burke',
        'email': 'lobortis@velpede.ca',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':20
    },
    {
        'name': 'Jael',
        'email': 'hendrerit.a.arcu@montes.edu',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':20
    },
    {
        'name': 'Stephanie',
        'email': 'dictum@Inmi.net',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':20
    },
    {
        'name': 'Frances',
        'email': 'lectus.quis.massa@non.ca',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':20
    },
    {
        'name': 'Mark',
        'email': 'est.Mauris@arcuvel.ca',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Roth',
        'email': 'enim.non.nisi@Lorem.net',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Dakota',
        'email': 'sed.orci@ligulaAeneaneuismod.org',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Teegan',
        'email': 'augue.eu.tempor@Integervulputate.org',
       'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Chandler',
        'email': 'a.odio@sedturpis.edu',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Kathleen',
        'email': 'Ut.tincidunt.vehicula@consectetuerrhoncusNullam.edu',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Scarlet',
        'email': 'Suspendisse.non@montesnascetur.com',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Haley',
        'email': 'risus@Cras.net',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Jesse',
        'email': 'odio@amet.org',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Noble',
        'email': 'vulputate.risus.a@Quisqueliberolacus.co.uk',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Phelan',
        'email': 'nascetur.ridiculus@fringilla.edu',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Amos',
        'email': 'Phasellus.fermentum@montesnascetur.ca',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Pandora',
        'email': 'aliquet.Phasellus@sociis.ca',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Jada',
        'email': 'eu@a.edu',
         'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Abraham',
        'email': 'Nunc@Vivamus.com',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Bert',
        'email': 'non.bibendum@mollisduiin.org',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Lars',
        'email': 'dolor.Fusce.feugiat@metusurnaconvallis.ca',
         'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Bethany',
        'email': 'Sed.nulla.ante@sociosquadlitora.net',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Jasmine',
        'email': 'id.enim.Curabitur@tellus.com',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Brody',
        'email': 'ac.orci@facilisisnon.com',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'alec',
        'email': 'in@aliquameu.org',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Audrey',
        'email': 'Donec@Aliquamadipiscinglobortis.org',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Forrest',
        'email': 'leo.elementum@ridiculus.co.uk',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Jessica',
        'email': 'a.mi.fringilla@montes.net',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Cedric',
        'email': 'Praesent.eu.nulla@tempordiamdictum.co.uk',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Maile',
        'email': 'pharetra@Duisatlacus.edu',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'acton',
        'email': 'consequat.auctor@Quisque.org',
        'date': '2017-01-19T05:53:38-08:00',
        'price': '15',
        'amount': '50',
    },
    {
        'name': 'Macey',
        'email': 'faucibus@tellus.org',
        'date': '2016-12-29T18:47:43-08:00',
        'price': '12',
        'amount': '50',
    },
    {
        'name': 'Iona',
        'email': 'rutrum.justo@eu.org',
        'date': '2015-11-10T14:36:30-08:00',
        'price': '14',
        'amount': '50',
    },
    {
        'name': 'Eve',
        'email': 'risus.Morbi@aliquameros.com',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Jayme',
        'email': 'a.nunc.In@convallisante.ca',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Bo',
        'email': 'posuere.cubilia.Curae@estNunclaoreet.net',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Matthew',
        'email': 'enim.Mauris.quis@vehicula.edu',
       'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'50',
    },
    {
        'name': 'Justina',
        'email': 'Donec.nibh@Vivamusmolestie.ca',
        'date': '2015-11-19T19:11:33-08:00',
         'price': '1',
         'amount':'40',
    }
];

  getDataTable(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataTableData);
      }, 2000);
    });
  }
}
