let perguntas = 
[
{
    titulo: 'Cachorro',
    alternativas: ['Dog','drog','Rog','Bog'],
    correta: 0
},


{
    titulo: 'Fogo',
    alternativas: ['Dirty','flares','flare','Fire'],
    correta: 3
}

,
{
    titulo: 'Gato',
    alternativas: ['Gat','Cat','Gate','Dog'],
    correta: 1
}
]

let app = {
start: function(){
        this.Atualpos = 0;
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element,index)=>{
            element.addEventListener('click',()=>{
            this.checaResposta(index);
            })
        })
app.mostraquestao(perguntas[this.Atualpos]);
},

mostraquestao: function(q){
    this.qatual = q;
    //mostrando titulo
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo;
    //mostrando alternativaas
    let alts = document.querySelectorAll('.alternativa');
    alts.forEach(function(element,index){
        element.textContent = q.alternativas[index];
    })
},

Proximaperg: function(){
    this.Atualpos++;
    if(this.Atualpos == perguntas.length){
        this.Atualpos = 0;
    }

},

checaResposta: function(user){
   if(this.qatual.correta == user){
    console.log("correta")
   }else{
    console.log("Errada")
   }
    this.Proximaperg();
    this.mostraquestao(perguntas[this.Atualpos]);
}
}
app.start();

