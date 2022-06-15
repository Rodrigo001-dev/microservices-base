## :page_with_curl: Projeto

<LINKEDIN>
Entendendo sobre a base de microsserviços com Nodex.js!
</LINKEDIN>

Microsserviço é um conceito que vai implicar na maneira que você pensa na aplicação antes de codar do que durante o código

O microsserviço tem alguns princípios:

- Alta independência entre as aplicações: cada microsserviço deve ser altamente independente, cada serviço da aplicação, cada "mini aplicação" que todas juntas criam um grande conglomerado que tem nas empresas, cada um desses mini serviços deve ser uma aplicação totalmente independente, ou seja, se alguém pegar a aplicação e rodar somente ela na máquina deve funcionar.

Se uma aplicação parar de funcionar, ou alguma outra aplicação cair, ou alguma outra aplicação estiver lenta, ou alguma outra aplicação não estiver no ar, não interessa! Todas as outras aplicações devem continuar funcionando sem problemas.

- Única responsabilidade dentro do domínio: ex: em uma barbearia, para contruir uma aplicação primeiro de tudo precisamos conversar com o barbeiro para ver o que ele está tendo de problema. E nós perguntamos qual é o seu problma, qual a dor dele(a dor do "usuário", o que precisa ser resolvido) e ele diz que os clientes quando fazem um agendamento, pode ocorrer um agendamento de clientes no mesmo horário, ou seja, ele precisa de um controle de horário, é esse o problema.

E quando vamos falar com o pessoal do financeiro e eles falam que o "consumidor"
realiza um pagamento, percebe-se que cliente e consumidor é a mesma coisa mas em domínios diferentes. Dependendo com quem iremos falar na barbearia, essa pessoa vai se referir as vezes a mesma coisa com nomes diferentes, ou seja, para diferentes áreas de entendimento as entidades podem ter nomes diferentes.
<LINKEDIN>
Mas o que é domínio?
</LINKEDIN>

Domínio é muito utilizado dentro do DDD, o domínio da aplicação é entender em qual contexto a nossa aplicação está sendo aplicado. Domínios são áreas de entendimento.

<LINKEDIN>
Mas afinal, o que ganhamos utilizando uma arquitetura como essa? 
Quais as vantagens de dividir a aplicação em várias "mini aplicações"?

- Independência entre times: pelos serviços serem autônomos, os serviços não devem dependerdo restante dos outros microsserviços que tem na rede ou que outras pessoas estão desenvolvendo, ou seja, eu consigo pegar 1 microsserviço rodar, interagir e isso deve ser o suficiente para eu conseguir dar manutenção nesse serviço. A partir do momento que você está em um time grande, onde tem vários times trabalhando em pequenas partes da sua aplicação, em domínios da apliacação, onde cada parte(domínio) poderia ser uma aplicação desacoplada do restante, eu tenho mais independência entre os times e eu tenho mais independência no fluxo de CI e CD da apliacação.

- "Fácil" manutenção: se você não souber trabalhar com microsserviços provavelmente no começo não vai ser fácil, mas é muito mais fácil dar manutenção em 1 único serviço do que ter que baixar todas a aplicação para conseguir alterar uma coisa muito especifica em uma parte da apliacação.

- Escalonamento independente: cada parte da aplicação está hospedada de uma forma que é possível escalonar, ou seja, se adaptar ao tanto de carga que ela está recebendo de uma forma individual, sem afetar o restante das aplicações.

Mas nem tudo são flores
Com microsserviços também temos desafios:

- Observabilidade: observabilidade é básicamente você saber o que está acontecendo com a aplicação, e não esperar por exemplo um usuário te mandar um e-mail falando que teve algun problema. Quando trabalhamos com microsserviços não temos que controlar a observabilidade de uma aplicação, temos que controlar a observabilidade de muitas aplicações(ex: o mercado livre já tem mais do 10.000 microsserviços).

- Comunicação: como que 1 microsserviço se comunica com outro?

- Resiliência a falhas: ex: eu tenho um microsserviço de compras, e esse microsserviço se comunica com um microsserviço de nota fiscal para cada vez que tiver uma compra eu emitir uma nota fiscal, o que vai acontecer se o serviço de nota fiscal para de funcionar? Qual é o mecanismo de tolerância a falhas que eu tenho no serviço de compras para que mesmo que o serviço de nota fiscal não esteja no ar ele continue operando normalmente e quando o serviço de nota fiscal voltar a funcionar ele consiga fazer uma análise de tudo que tem que ser realizado.
</LINKEDIN>