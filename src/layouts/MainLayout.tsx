import { useNavigation, Outlet } from 'react-router';
import { Header, Footer, Loader } from '@/components';

export const MainLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
      <Header />

      {isNavigating ? <Loader /> : <Outlet />}

      <Footer />
    </>
  );
};
