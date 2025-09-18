import { conection } from "./conexao.js"

export async function inserirCadastro(novoCadastro) {
  const comando = `
    INSERT INTO cadastro_feira (cpf, nome_completo, escolaridade, email, telefone, interesse_curso, previsao_chegada, foi_aluno_do_frei, como_soube)
               values (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `

  let [info] = await conection.query(comando, [novoCadastro.cpf, novoCadastro.nome_completo, novoCadastro.escolaridade, novoCadastro.email,
 novoCadastro.telefone, novoCadastro.interesse_curso, novoCadastro.previsao_chegada, novoCadastro.foi_aluno_do_frei, novoCadastro.como_soube]);
  return info.insertId;
}