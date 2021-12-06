import Posts from "./Posts";
export default function FirstPost (props){
return (     <div class="post">
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
              <img src={props.img}/>
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
                    Curtido por <strong>{props.curtido}</strong> e <strong>outras {props.curtidas}pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
            );
        }