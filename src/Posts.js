let info = [
    {nome: 'meowed',avatar:'assets/img/meowed.svg', img: 'assets/img/gato-telefone.svg', curtido: 'respondeai', curtidas: '3834'},
    
  ];
export default function Posts (){
            return(
            <div class="posts">
              {info.map(info => <Posts nome={info.nome} avatar={info.avatar} img={info.img} curtido={info.curtido} curtidas={info.curtidas}/>)}
            </div>
        );
    } 
    