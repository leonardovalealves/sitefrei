import * as repo from "./feiraRepository.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/cadastro', async (req, resp) => {
  let novoCadastro = req.body;

  let id = await repo.inserirCadastro(novoCadastro);
  resp.send({ novoId: id });
})

export default endpoints;