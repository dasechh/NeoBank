import { useNavigation, Outlet } from 'react-router';
import { Spinner } from '@/components/Spinner/Spinner';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const MainLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
      <Header />

      {isNavigating && (
        <div>
          <Spinner />
        </div>
      )}

      <Outlet />

      <Footer />
    </>
  );
};
