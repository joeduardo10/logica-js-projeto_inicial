alert('Bem vindos ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 4);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;
while(chute != numeroSecreto){
    chute = prompt('digite um numero entre 0 e 100');
    if(chute == numeroSecreto){
        break;
    }else{
            if(chute > numeroSecreto){
                alert(`Ònumero secreto é menor que ${chute}`)}
            else{
                alert(`Ònumero secreto é maior que ${chute}`)}
            tentativas ++;    

                }

        }
     
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
    