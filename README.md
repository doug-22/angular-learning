# AngularLearning

## Anotações - Aula 4

Criando componentes:

- É possível utilizar a CLI para criar componentes;
- O comando para criar é `ng generate component <nome>`;
- Todos os arquivos necessário serão criados no projeto;
- Para importar o componente basta utilizar o seu _selector_ em um HTML de outro componente.

obs** Ao criar um novo componente pela CLI, além de ser criado os arquivos padrão do próprio componente em sua respectiva pasta, é também atualizado o arquivo **app.module.ts\*\* no qual é feita a importação do novo componente e exposto o mesmo na variácel declarations do _@NgModule_:

```
import { NovoComponente } from './components/novo-componente/novo-componente.component';


@NgModule({
  declarations: [
    AppComponent,
    NovoComponente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
