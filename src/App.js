import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import BookingForm from './components/BookingForm';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav></Nav>
      
      <BrowserRouter><Main></Main></BrowserRouter>
    </>
  );
}

export default App;
