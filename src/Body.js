import Suggestions from "./Suggestions";
import Stories from "./Stories";
import Posts from "./Posts";
import User from "./User"
import Footer from "./Footer";

export default function Body(){
return(
<div class="corpo">
    <div class="esquerda">
        <Stories/>
        <Posts/>
        <User/>
        <Suggestions/>
        <Footer/>
    </div>
</div>
);
}