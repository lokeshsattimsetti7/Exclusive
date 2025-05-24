import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Flash from '../components/FlashSale/Flash';
import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Category from '../components/Categories/Category';
import BestProducts from '../components/BestProducts/BestProducts';
import MainBannerTwo from '../components/MainBannerTwo/MainBannerTwo';
import Explore from '../components/Explore/Explore';
import Service from '../components/Services/Service';
import Story from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import Products from "../components/Product/Product";
import ContactPage from '../pages/ContactPage';
import Error from '../components/404Error/404';
import Account from '../components/MyAccount/MyAccount'
import Whishlist from '../components/Whishlist/Whishlist';
import Carts from '../components/Cart/Cart';
import Bill from '../components/Billing/Bill';
import ScrollToTop from '../components/functions/ScrollToTop';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>


        <Route path="/product/havit-hv-g92" element={<Products />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Bill" element={<Bill />} />
        <Route path="/Cart" element={<Carts />} />
        <Route path="/Whishlist" element={< Whishlist />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/About" element={<Story />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route
          path="/"
          element={
            <>

              <HeroBanner />
              <Flash />
              < Category />
              <BestProducts />
              <MainBannerTwo />
              <Explore />
              <Service />


            </>
          }
        />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
