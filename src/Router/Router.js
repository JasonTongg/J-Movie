import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Details from '../Pages/Details/Details';
import ListMovie from '../Pages/ListMovie/ListMovie';
import NotFound from '../Pages/NotFound/NotFound';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:type/:id" element={<Details />} />
        <Route path="/List/:type" element={<ListMovie />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}
