export interface Funcionario {
  Id_Funcionario: number;
  Nome: string;
  Idade: number;
  CPF: string;
  Equipe: string | null;
  DataNascimento: string;
  Sexo: 'F' | 'M';
  Telefone: string | null;
  Endereco: string | null;
  Email: string;
}
