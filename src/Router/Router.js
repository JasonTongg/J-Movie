import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Details from '../Pages/Details/Details';
import MainLayout from '../Layout/MainLayout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route index element={<Home />} />
          <Route path="/Details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
