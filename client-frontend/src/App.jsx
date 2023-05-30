import { Navbar, Welcome, Footer, Services, Transactions, CryptoPrice, Cryptocurrencies, News } from './components';
import { Route, BrowserRouter, Routes } from 'react-router-dom';


const App = () => {     //arrow function
  return (
    <div className="min-h-screen gradient-bg-welcome">
      <BrowserRouter>
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Welcome/>} exact/>
          <Route path='/market' element= {<CryptoPrice/>} exact/>
          <Route path='/cryptoPrice' element={<Cryptocurrencies/>} exact/>
          <Route path='/news' element={<News/>} exact/>
          <Route path='/transactions' element={<Transactions/>} exact/>
        </Routes>        
        
      </div>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App;

