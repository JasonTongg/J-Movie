import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Details from '../Pages/Details/Details';
import ListMovie from '../Pages/ListMovie/ListMovie';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/List" element={<ListMovie />} />
      </Routes>
    </BrowserRouter>
  );
}
