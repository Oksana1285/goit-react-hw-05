import Navigation from './components/Navigation/Navigation';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <AppRoutes />
      </main>
    </>
  );
};

export default App;
