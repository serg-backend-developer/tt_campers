import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';

import MainHeader from './/MainHeader';
import Loader from './Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const CamperPage = lazy(() => import('../pages/CamperPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));

const Features = lazy(() => import('../components/Features'));
const Reviews = lazy(() => import('../components/Reviews'));

const App = () => {
  return (
    <>
      <MainHeader />
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