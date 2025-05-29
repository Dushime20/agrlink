import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './page/layout/Layou.jsx';
import Home from './page/home/Home.jsx';

import AuthTabs from './page/auth/AuthTabs.jsx';
import ProductList from './page/products/ProductList.jsx';
import ProductDetail from './page/products/ProductDetail.jsx';
import Dashboard from './page/dashboard/dashboard.jsx';
import MainContent from './page/dashboard/mainContent.jsx';
import Profile from './page/profile/profile.jsx';
import AboutPage from './page/home/AboutUsPage.jsx';
import ManageProduct from './page/dashboard/ManageProduct';
import ViewOrder from './page/dashboard/ViewOrder';
import UserSettings from './page/dashboard/User';
import MyOrder from './page/order/MyOrder';

import ReportsPage from './page/dashboard/Reports';
import SupportPage from './page/profile/Suport';
import EditUser from './page/dashboard/EditUser';


const router = createBrowserRouter([
  {
    path:'/',
    element:< Layout/>,
    children:[
      {path:"/", element:<Home/>},
      {path:"/about", element:<AboutPage/>},
     
      {path:"/products",element:<ProductList/>},
      {path:"/product-detail/:id", element:<ProductDetail/>},
      {path:"/profile", element:<Profile/>},
      {path:"/my-order", element:<MyOrder/>},
      {path:"/support", element:<SupportPage/>},
      
    ]
  },{path:'/auth', element:<AuthTabs/>},
  {
    path:"/dashboard",
    element:<Dashboard/>,
    children:[
      {path:"", element: <MainContent/>},
      {path:"manage-product", element: <ManageProduct/>},
      {path:"view-order", element: <ViewOrder/>},
      {path:"user-settings", element: <UserSettings/>},
      {path:"reports", element: <ReportsPage/>},
      {path:"edit-user/:userId", element: <EditUser/>},
    ]
  }
])




const rootElement = document.getElementById("root");



if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
