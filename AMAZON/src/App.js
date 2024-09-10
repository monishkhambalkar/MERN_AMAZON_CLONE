import React from 'react';
import './index.css';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Cart,
  Homepage,
  NavBar,
  ProductPage,
  SearchResults,
  ProductDetailsSample,
  OrdersPage,
  PurchaseReview,
  Checkout,
  Footer,
  UserAccountModel,
  Login,
  Register,
  ForgetPassword,
  WishList,
  OrderDetails,
  Email,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/product-details-sample"
          element={<ProductDetailsSample />}
        />
        <Route path="/my-order-return" element={<OrdersPage />} />
        <Route path="/purchase-review" element={<PurchaseReview />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/modal" element={<UserAccountModel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/email" element={<Email />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
