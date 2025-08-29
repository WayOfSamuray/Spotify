import './App.css';
import { Routes, Route } from "react-router-dom";
import Contacts from './Contacts/Contacts';
import Content from './Content/Content';
import Cups from './Cups/Cups';
import Delicious from './Delicious/Delicious';
import Events from './Events/Events';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import ShopPage from './Header/ShopPage/ShopPage';
import Welcome from './Welcome/Welcome';

function HomePage() {
  return (
    <>
      <Welcome />
      <Content />
      <Delicious />
      <Cups />
      <Events />
      <Contacts />
    </>
  );
}

function App() {
  return (
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;