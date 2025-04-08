import Header from './Header';
import Footer from './Footer'; // ✅ Import Footer component
import { Outlet } from 'react-router-dom';
import { Provider } from "react-redux";
import appStore from './utils/appStore';

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer /> {/* ✅ Add Footer here */}
      </div>
    </Provider>
  );
};

export default App;
