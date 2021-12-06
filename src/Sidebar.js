import Suggestions from "./Suggestions"

export default function Sidebar(){
let info= [{img:"assets/img/bad.vibes.memes.svg",nome:"bad.vibes.memes",razao: "Segue você"}, 
{img:"assets/img/chibirdart.svg",nome:"chibirdart",razao:"Segue você" }, 
{img:"assets/img/razoesparaacreditar.svg",nome:"razoesparaacreditar",razao:"Novo no Instagram" }, 
{img:"assets/img/adorable_animals.svg",nome:"adorable_animals",razao:"Segue você"}, 
{img:"assets/img/smallcutecats.svg",nome:"smallcutecats",razao:"Segue você"}] 
    return(
      <div class="usuario">
        {info.map(info =>  <Sidebar img = {info.img} nome ={info.nome} razao={info.razao}/>}
        </div>
    );
}