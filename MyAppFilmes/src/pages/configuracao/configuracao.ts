import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';
import { PopularPage } from '../popular/popular';
import { LancamentoPage } from '../lancamento/lancamento';
import { GeneroPage } from '../genero/genero';



@IonicPage()
@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html',
})
export class ConfiguracaoPage {
  rootPage = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracaoPage');
  }

  openHome(){
    this.navCtrl.push(HomePage);
  }

  openCadastro(){
    this.navCtrl.push(CadastroPage);
  }

  openPopular(){
    this.navCtrl.push(PopularPage);
  }

  openLancamento(){
    this.navCtrl.push(LancamentoPage);
  }

  openGenero(){
    this.navCtrl.push(GeneroPage);
  }

}
