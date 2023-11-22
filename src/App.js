import logo from './logo.svg';
import './App.scss';
import './styles/dashboard.scss';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
