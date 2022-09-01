// import logo from './logo.svg';
import './App.css';
import NewsApi from './client/newsApi';
import News from './components/news';

function App() {
  return (
    <div className="App">
      <h1 className='testHeader'>Sathish Mohan - News API Task</h1>
      <NewsApi>
        <News />
      </NewsApi>
    </div>
  );
}

export default App;
