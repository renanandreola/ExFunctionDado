//5) Crie uma função chamado Dado() que retorna, através de sorteio, 
//um número de 1 até 6.

var number = [];

function dado () {
	for(i=0; i<7; i++) {
        number.push(Math.floor((Math.random() * 6) + 1));
        return document.body.append("O NÚMERO SORTEADO É: " + number); 	
    }
}
dado();


