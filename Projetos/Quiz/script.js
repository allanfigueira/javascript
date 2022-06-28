let pergunta = {
    titulo: 'Gato',
    alternativas: ['Gat','Cat','Gate','Dog'],
    correta: 1
};
let app = {
start: function(){
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element,index)=>{
            element.addEventListener('click',()=>{
            this.checaResposta(index);
            })
        })
app.mostraquestao(pergunta);
},

mostraquestao: function(q){
    //mostrando titulo
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo;
    //mostrando alternativaas
    let alts = document.querySelectorAll('.alternativa');
    alts.forEach(function(element,index){
        element.textContent = q.alternativas[index];
    })
},

checaResposta: function(user){

}
}
app.start();

