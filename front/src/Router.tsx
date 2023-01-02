import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTE_ARR } from './constants/route';
import Auth from './utils/auth';

function Router() {
  const CompArr: any = ROUTE_ARR.map((route) =>
    Auth(route.element, route.authenticated),
  );

  return (
    <BrowserRouter>
      <Routes>
        {ROUTE_ARR.map((route, idx) => {
          const Comp = CompArr[idx];
          // eslint-disable-next-line react/no-array-index-key
          return <Route path={route.path} element={<Comp />} key={idx} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
