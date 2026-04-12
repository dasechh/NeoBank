import { useNavigation, Outlet } from 'react-router';
import { Spinner, Header, Footer } from '@/components';

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
