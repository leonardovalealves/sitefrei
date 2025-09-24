import feiraController from "./feiraController.js"
//import alunoController from './controller/alunoController.js'
// import ...
// import ...

export function adicionarRotas(api) {
  api.use(feiraController);
  // api.use(alunoController);
  // api.use(...);
  // api.use(...);
}