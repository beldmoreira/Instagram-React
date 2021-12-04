import ReactDOM from 'react-dom';
import Header from './Header';
import Stories from './Stories';
import Corpo from './Corpo';
import FirstFile from './FirstFile';

function App() {
    <div class="root">
       
    </div>
    return (
        <Header/>
        <Corpo/>
        <Stories/>
        <FirstPost/>
        <SecondPost/>
    );
}
const app= App();
ReactDOM.render(<App />, document.querySelector(".root"));