//QUESTÃO 10) Desenvolva via JavaScript a seguinte estrutura de código levando em consideração as seguintes regras:
//a) Uma variável deve ter o nome de sorvete de chocolate;
//b) Se o seu valor for igual a chocolate, deve ser exibido no alerta do navegador a
//mensagem: Amo sorvete de chocolate;
//c) Se o seu valor for outro, deve exibir a mensagem: Prefiro outros sabores.//

//Declarando a variavel!
var sorveteDeChocolate = 'chocolate';

//Declarando a função e suas condições!
function sorvete() {
    if (sorveteDeChocolate === 'chocolate') {
        alert('Amo sorvete de chocolate!');
    } else {
        alert('Prefiro outros sabores!');
    }
}
sorvete()

