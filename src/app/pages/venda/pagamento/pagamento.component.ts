import { Component, OnInit } from '@angular/core';

type FormaPagamento = 'pix' | 'boleto' | 'cartao' | '';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  readonly PRECO_INTEIRA = 1420.00;
  readonly PRECO_MEIA = 710.00;

  quantidadeInteira: number = 0;
  quantidadeMeia: number = 0;
  total: number = 0;
  
  passoAtual: 'ingressos' | 'pagamento' = 'ingressos'; 
  compraConcluida: boolean = false;
  
  formaPagamentoSelecionada: FormaPagamento = '';
  exibirFormularioCartao: boolean = false;
  mensagemErroCartao: string = '';


  constructor() { }

  ngOnInit(): void {
    this.calcularTotal();
  }

  formatarValor(valor: number): string {
    return valor.toLocaleString('pt-BR', { 
      style: 'currency', 
      currency: 'BRL',
      minimumFractionDigits: 2
    });
  }

  mudarQuantidade(tipo: 'inteira' | 'meia', delta: number): void {
    if (tipo === 'inteira') {
      this.quantidadeInteira = Math.max(0, this.quantidadeInteira + delta);
    } else {
      this.quantidadeMeia = Math.max(0, this.quantidadeMeia + delta);
    }
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.total = (this.quantidadeInteira * this.PRECO_INTEIRA) + (this.quantidadeMeia * this.PRECO_MEIA);
  }

  avancarParaPagamento(): void {
    if (this.total > 0) {
      this.passoAtual = 'pagamento';
    } else {
      alert("Adicione pelo menos um ingresso para avançar.");
    }
  }

  voltarParaIngressos(): void {
    this.passoAtual = 'ingressos';
    this.compraConcluida = false;
    this.formaPagamentoSelecionada = '';
    this.exibirFormularioCartao = false;
  }
  
  selecionarPagamento(forma: FormaPagamento): void {
    this.formaPagamentoSelecionada = forma;
    this.mensagemErroCartao = ''; 
    this.exibirFormularioCartao = (forma === 'cartao');
  }

  verificarBotaoFinalizar(): boolean {
    return !!this.formaPagamentoSelecionada;
  }

  finalizarCompra(numero: string, nome: string, validade: string, cvv: string): void {
    if (!this.verificarBotaoFinalizar()) {
      alert("Por favor, selecione uma forma de pagamento.");
      return;
    }

    if (this.formaPagamentoSelecionada === 'cartao') {
      if (numero.trim().length !== 16 || nome.trim() === '' || validade.trim() === '' || cvv.trim() === '') {
         this.mensagemErroCartao = "Preencha todos os dados do cartão (Número, Nome, Validade e CVV).";
         return;
      }
    }
    
    this.mensagemErroCartao = '';
    this.compraConcluida = true;
  }
}