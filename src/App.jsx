import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {

  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Messages />
    </div>
  );
}

export default App;
