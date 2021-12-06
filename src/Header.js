export default function Header(props){
  
  const images = "assets/img/logo.png";
  let icons= ["logo-instagram","logo-instagram","paper-plane-outline","compass-outline","heart-outline","person-outline","paper-plane-outline"];
  
    return(
      <div class="navbar">
        <div class="container">
          <div class="logo">
            <ion-icon name={props.icons[0]}></ion-icon>
            <div class="separador"></div>
            <img src={images}/>
          </div>

          <div class="logo-mobile">
            <ion-icon name={props.icons[1]}></ion-icon>
          </div>

          <div class="instagram-mobile">
            <img src={images}/>
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
            <ion-icon name={props.icons[2]}></ion-icon>
            <ion-icon name={props.icons[3]}></ion-icon>
            <ion-icon name={props.icons[4]}></ion-icon>
            <ion-icon name={props.icons[5]}></ion-icon>
          </div>

          <div class="icones-mobile">
            <ion-icon name={props.icons[6]}></ion-icon>
          </div>
        </div>
      </div>
        );
    }