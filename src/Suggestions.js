import Sidebar from "./Sidebar";
export default function Suggestions(props){
    return(

    <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src = {props.img}/>
                <div class="texto">
                  <div class="nome">{props.nome}</div>
                  <div class="razao">{props.razao}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src = {props.img}/>
                <div class="texto">
                  <div class="nome">{props.nome}</div>
                  <div class="razao">{props.razao}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src = {props.img}/>
                <div class="texto">
                  <div class="nome">{props.nome}</div>
                  <div class="razao">{props.razao}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src = {props.img}/>
                <div class="texto">
                  <div class="nome">{props.nome}</div>
                  <div class="razao">{props.razao}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src = {props.img}/>
                <div class="texto">
                  <div class="nome">{props.nome}</div>
                  <div class="razao">{props.razao}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
          </div>
           );
        }