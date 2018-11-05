import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';
import { LancamentoPage } from '../lancamento/lancamento';
import { PopularPage } from '../popular/popular';
import { GeneroPage } from '../genero/genero';
import { ConfiguracaoPage } from '../configuracao/configuracao';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CadastroPage;
  tab3Root = LancamentoPage;
  tab4Root = PopularPage;
  tab5Root = GeneroPage;
  tab6Root = ConfiguracaoPage;

  constructor() {

  }
}
