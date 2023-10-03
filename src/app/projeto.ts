export interface Projeto {
  Id_Projeto: number;
  Nome: string;
  Descricao?: string;
  DataInicio: string;
  DataEntregaPrevista: string;
  DataEntregaEfetiva?: string;
  Equipe: number;
  Cliente: number;
  Estado: number;
}
