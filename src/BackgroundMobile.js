export default function BackgroundMobile(props){
    const iconsNames = ["home","search-outline","add-circle-outline","heart-outline","person-outline"];
      return(
        <div class="fundo-mobile">
            <ion-icon name={props.iconsNames[0]}></ion-icon>
            <ion-icon name={props.iconsNames[1]}></ion-icon>
            <ion-icon name={props.iconsNames[2]}></ion-icon>
            <ion-icon name={props.iconsNames[3]}></ion-icon>
            <ion-icon name={props.iconsNames[4]}></ion-icon>
        </div>
        );
        }