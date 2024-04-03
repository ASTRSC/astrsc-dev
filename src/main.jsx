import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import WhatIsASTRSC from '../src/components/About/WhatIsASTRSC.jsx'
import WhoIsBehind from '../src/components/About/WhoIsBehind.jsx'
import './index.css'
import WhoIsFor from './components/About/WhoIsFor.jsx';
import Generalization from './components/TropesPages/Generalization.jsx'
import Tribalism from './components/TropesPages/Tribalism.jsx';
import Scanner from './components/Scanner/Scanner/Scanner.jsx';
import Motive from './components/QuoteFeature/Motive.jsx'
import HowItWorks from './components/QuoteFeature/HowItWorks.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/what-is-astrsc",
    element: <WhatIsASTRSC />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/who-is-behind-astrsc",
    element: <WhoIsBehind />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/who-is-astrsc-for",
    element: <WhoIsFor />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/generalization",
    element: <Generalization />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/conflict-and-violence",
    element: <WhoIsFor />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/tribalism",
    element: <Tribalism />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/scanner",
    element: <Scanner />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/motive-and-intention",
    element: <Motive />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />,
    // errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
