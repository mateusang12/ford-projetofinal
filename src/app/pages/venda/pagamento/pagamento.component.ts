// src/app/pages/venda/pagamento/pagamento.component.ts

import { Component, OnInit } from '@angular/core';

// Novo Tipo para gerenciar o estado da forma de pagamento
type FormaPagamento = 'pix' | 'boleto' | 'cartao' | '';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  // Definição de Preços
  readonly PRECO_INTEIRA = 200.00;
  readonly PRECO_MEIA = 100.00;

  // Estado da Venda
  quantidadeInteira: number = 0;
  quantidadeMeia: number = 0;
  total: number = 0;
  
  // Estado do Fluxo
  passoAtual: 'ingressos' | 'pagamento' = 'ingressos'; // Controla a tela principal
  compraConcluida: boolean = false; // Controla o box de sucesso
  
  // Estado do Pagamento
  formaPagamentoSelecionada: FormaPagamento = '';
  exibirFormularioCartao: boolean = false;
  mensagemErroCartao: string = '';


  constructor() { }

  ngOnInit(): void {
    this.calcularTotal();
  }

  // --- FUNÇÃO DE FORMATAÇÃO ---
  formatarValor(valor: number): string {
    return valor.toLocaleString('pt-BR', { 
      style: 'currency', 
      currency: 'BRL',
      minimumFractionDigits: 2
    });
  }

  // --- LÓGICA DE CÁLCULO ---
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

  // --- LÓGICA DE FLUXO ---
  
  // Chamado pelo botão "Avançar para Pagamento"
  avancarParaPagamento(): void {
    if (this.total > 0) {
      this.passoAtual = 'pagamento';
    } else {
      alert("Adicione pelo menos um ingresso para avançar.");
    }
  }

  // Chamado pelo botão Voltar e tela de Sucesso
  voltarParaIngressos(): void {
    this.passoAtual = 'ingressos';
    this.compraConcluida = false;
    this.formaPagamentoSelecionada = '';
    this.exibirFormularioCartao = false;
  }
  
  // --- LÓGICA DE PAGAMENTO ---

  // Controla qual opção está ativa e se o formulário do cartão deve aparecer
  selecionarPagamento(forma: FormaPagamento): void {
    this.formaPagamentoSelecionada = forma;
    this.mensagemErroCartao = ''; 
    this.exibirFormularioCartao = (forma === 'cartao');
  }

  verificarBotaoFinalizar(): boolean {
    return !!this.formaPagamentoSelecionada;
  }

  // Função FINALIZAR COMPRA
  // Recebe os valores do HTML (numero, nome, validade, cvv) de forma simples.
  finalizarCompra(numero: string, nome: string, validade: string, cvv: string): void {
    if (!this.verificarBotaoFinalizar()) {
      alert("Por favor, selecione uma forma de pagamento.");
      return;
    }

    if (this.formaPagamentoSelecionada === 'cartao') {
      // Simulação de validação mínima para Cartão
      if (numero.trim().length !== 16 || nome.trim() === '' || validade.trim() === '' || cvv.trim() === '') {
         this.mensagemErroCartao = "Preencha todos os dados do cartão (Número, Nome, Validade e CVV).";
         return;
      }
    }
    
    // Se a validação passar (ou se for Pix/Boleto), a compra é concluída
    this.mensagemErroCartao = '';
    this.compraConcluida = true;
  }
}