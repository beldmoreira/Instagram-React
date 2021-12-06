function Second (){
  let info = {nome: 'barked',avatar:'assets/img/respondeai.svg', img: 'assets/img/dog.svg', curtido: 'adorable_animals', curtidas: '3576092'}
  return(
  <div class="posts">
    {info.map(info => <Second nome={info.nome} avatar={info.avatar} img={info.img} curtido={info.curtido} curtidas={info.curtidas}/>)}
  </div>
);
} 


export default function SecondPost (props){
  
    return(
      <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.avatar} />
                  {props.nome}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={props.img} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={props.avatar} />
                  <div class="texto">
                    Curtido por <strong>{props.curtido}</strong> e <strong>{props.curtidas}</strong>
                  </div>
                </div>
              </div>
            </div>
          );
    }