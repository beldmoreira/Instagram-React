import Suggestions from "./Suggestions";
import Stories from "./Stories";
import FirstPost from "./FirstPost"
import SecondPost from "./SecondPost"
import User from "./User"
import Footer from "./Footer";

export default function Body(){
return(
<div class="corpo">
    <div class="esquerda">
        <Stories/>
        <FirstPost/>
        <SecondPost/>
        <User/>
        <Suggestions/>
        <Footer/>
    </div>
</div>
);
}