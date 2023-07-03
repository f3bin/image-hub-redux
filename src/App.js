
import './App.css';
import Gallery from './components/gallery/Gallery.jsx';
import {
  createBrowserRouter,
  RouterProvider, Route, createRoutesFromElements
} from "react-router-dom";
import RootLayout from './components/rootLayout/RootLayout.jsx';
import Favourites from './components/favourites/Favourites.jsx';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Gallery />} />
      <Route path='/favourites' element={<Favourites />} />
    </Route>
  ));
  return (

    <div className="App"> 
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
