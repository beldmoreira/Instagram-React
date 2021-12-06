import ReactDOM from 'react-dom';
import Header from './Header';
import Body from './Body';
import BackgroundMobile from './BackgroundMobile';

function App() {
   
    return (
        <div class="root">
        <Header/>
        <Body/>
        <BackgroundMobile/>
        </div>
    );
}
const app= App();
ReactDOM.render(<App />, document.querySelector(".root"));