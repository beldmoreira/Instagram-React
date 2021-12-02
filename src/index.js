import ReactDOM from 'react-dom';
import Header from './Header';
import Stories from './Stories';
import Corpo from './Corpo';

function App() {
    return (
        <Header/>
        <Corpo/>
        <Stories/>
    );
}
const app= App();
ReactDOM.render(<App />, document.querySelector(".root"));