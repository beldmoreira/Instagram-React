const dados = [
    {nome: 'meowed',avatar:'assets/img/meowed.svg', img: 'assets/img/gato-telefone.svg', curtido: 'respondeai', curtidas: '3834'},
    {nome: 'barked',avatar:'assets/img/respondeai.svg', img: 'assets/img/dog.svg', curtido: 'adorable_animals', curtidas: '3576092'}
  ];
export default function Posts (){
            return(
            <div class="posts">
              {dados.map(dados => <Posts nome={dados.nome} avatar={dados.avatar} img={dados.img} curtido={dados.curtido} curtidas={dados.curtidas}/>)}
            </div>
        );
    } 
    