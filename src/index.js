import ReactDOM from 'react-dom';
import Header from './Header';
import Stories from './Stories';
import Body from './Body';
import FirstPost from './FirstPost';
import SecondPost from './SecondPost';
import User from './User';
import Suggestions from './Suggestions';
import Footer from './Footer';
import BackgroundMobile from './BackgroundMobile';

function App() {
    <div class="root">
       
    </div>
    return (
        <Header/>
        <Body/>
        <Stories/>
        <FirstPost/>
        <SecondPost/>
        <User/>
        <Suggestions/>
        <Footer/>
        <BackgroundMobile/>
    );
}
const app= App();
ReactDOM.render(<App />, document.querySelector(".root"));