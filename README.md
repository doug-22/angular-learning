# AngularLearning

## Anotações - Aula 7

Compartilhamento de dados. No angular podemos compartilhar dados do componente pai com o componente filho:

- Para compartilhar, vamos disponibilizar na chamada do componente o nome do dado que será recebido com a seguinte sintaxe: `[dado]`;
- E no código _.ts_ do componente filho vamos utilizar o decorator `@Input`, que tem como papel entregar o dado para o template.
