export interface Funcionario {
  Id_Funcionario: number;
  Nome: string;
  Idade: number;
  CPF: string;
  Equipe: string | null;
  DataNascimento: string;
  Sexo: 'S' | 'M';
  Telefone: string | null;
  Endereco: string | null;
  Email: string;
}
