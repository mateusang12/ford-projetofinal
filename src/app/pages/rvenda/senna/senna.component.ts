import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senna',
  templateUrl: './senna.component.html', 
  styleUrls: ['./senna.component.css'] 
})
export class SennaComponent implements OnInit {

  readonly PRECO_INTEIRA = 1840.00;
  readonly PRECO_MEIA = 920.00;

  compraConcluida: boolean = false;
  passoAtual: 'ingressos' | 'pagamento' = 'ingressos';
  quantidadeInteira: number = 0;
  quantidadeMeia: number = 0;
  total: number = 0;

  formaPagamentoSelecionada: 'pix' | 'boleto' | 'cartao' | null = null;
  mensagemErroCartao: string = '';
  exibirFormularioCartao: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.calcularTotal();
  }

  /**
   * quantidade de ingressos e o total.
   * @param tipo 'inteira' ou 'meia'
   * @param delta +1 ou -1
   */
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

  /**
   *  moeda brasil (R$).
   * @param valor 
   * @returns 
   */
  formatarValor(valor: number): string {
  
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
  }

  avancarParaPagamento(): void {
    if (this.total > 0) {
      this.passoAtual = 'pagamento';
    
      if (this.formaPagamentoSelecionada !== 'cartao') {
        this.exibirFormularioCartao = false;
      }
    }
  }

  voltarParaIngressos(): void {
    if (this.compraConcluida) {
      
      this.compraConcluida = false;
      this.passoAtual = 'ingressos';
      this.quantidadeInteira = 0;
      this.quantidadeMeia = 0;
      this.total = 0;
      this.formaPagamentoSelecionada = null;
      this.exibirFormularioCartao = false;
      this.mensagemErroCartao = '';
    } else {

      this.passoAtual = 'ingressos';
      this.mensagemErroCartao = '';
      this.exibirFormularioCartao = this.formaPagamentoSelecionada === 'cartao';
    }
  }


  /**
   * forma de pagamento.
   * @param forma selecionada.
   */
  selecionarPagamento(forma: 'pix' | 'boleto' | 'cartao'): void {
    this.formaPagamentoSelecionada = forma;
    this.exibirFormularioCartao = forma === 'cartao';
    this.mensagemErroCartao = ''; 
  }

  verificarBotaoFinalizar(): boolean {
    if (!this.formaPagamentoSelecionada) {
      return false; 
    }

    if (this.formaPagamentoSelecionada !== 'cartao') {
      return true; 
    }

    return true; 
  }

  finalizarCompra(numero: string, nome: string, validade: string, cvv: string): void {
    this.mensagemErroCartao = '';

    if (!this.formaPagamentoSelecionada) {

      return;
    }

    if (this.formaPagamentoSelecionada === 'cartao') {

      if (numero.length !== 16 || isNaN(Number(numero))) {
        this.mensagemErroCartao = 'Número do cartão inválido.';
        return;
      }
      if (!nome.trim()) {
        this.mensagemErroCartao = 'Nome impresso no cartão é obrigatório.';
        return;
      }
      if (validade.length !== 5 || !validade.match(/^\d{2}\/\d{2}$/)) {
        this.mensagemErroCartao = 'Validade (MM/AA) inválida.';
        return;
      }
      if (cvv.length < 3 || cvv.length > 4 || isNaN(Number(cvv))) {
        this.mensagemErroCartao = 'CVV inválido.';
        return;
      }
   
    }

    console.log(`Compra finalizada com ${this.formaPagamentoSelecionada}. Total: ${this.total}`);
    setTimeout(() => {
      this.compraConcluida = true;
    }, 1000);
  }
}
