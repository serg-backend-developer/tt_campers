import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const CamperPage = lazy(() => import('./pages/CamperPage/CamperPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

const Features = lazy(() => import('./components/Features/Features'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:camperId" element={<CamperPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
};

export default App;