const username = document.getElementById('name');
  const data1 = document.getElementById('nota1');
  const data2 = document.getElementById('nota2');
  const data3 = document.getElementById('nota3');
  const btnCalculate = document.getElementById('btn-calculate');
  const predict= document.getElementById('btn-predict');
  const response = document.getElementById('resultado');
  const btnPredict = document.getElementById('btn-predict');

  btnCalculate.addEventListener('click', calculateNote);
  btnPredict.addEventListener('click', predictNote);

  
  function calculateNote(event) {
    event.preventDefault();
    let user= username.value
    let note1 = Number(data1.value);
    let note2 = Number(data2.value);
    let note3 = Number(data3.value);
    let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2);


     if (result>0 && result<=3.5 ){
        response.textContent=`Hola ${user} su nota definitiva es: ${result} , perdio la materia`;
        response.style.color='red';
    }
    else if (result>=3.6 && result <= 4.5){
        response.textContent=`Hola ${user} su nota definitiva es: ${result} ,Gano la materia`;
        response.style.color='orange';
    }
    else if (result>=4.6 && result <= 5.0){
        response.textContent=`Hola ${user} su nota definitiva es: ${result} . ,Su nota es sobresaliente`
        response.style.color='green';
    }
    else {
         response.textContent=`Hola ${user} alguna de sus notas es invalida, revise`;
    }
  }

    // Function predict note

  function predictNote(event){
    event.preventDefault();
    let user = username.value;
    let note1 = Number(data1.value);
    let note2 = Number(data2.value);
   
    //Nota deseada
    let notaDeseada = 3.6;

    let predict = (notaDeseada - (note1 * 0.3) - (note2 * 0.3)) / 0.4.toFixed(2);

    if(note1 < 1 && note1 > 5 && note2 < 1 && note2 > 5){
       alert('Alguna nota no concuerda');
       return;
    }

    if(predict > 5){
        response.textContent = `Hola ${user} te falta: ${predict.toFixed(2)} para pasar la materia`
    } else if( predict === 3.5){
        response.textContent = `Hola ${user} con las notas actuales, ya ha alcanzado una nota definitiva mayor a 3,5`;
    }else{
        response.textContent = `Hola ${user}, necesitas al menos: ${predict.toFixed(2)} para pasar la materia`;
    }
}