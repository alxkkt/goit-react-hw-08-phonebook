import { Route, Routes } from 'react-router-dom';
import Phonebook from 'components/Phonebook';

import Navbar from 'components/Navbar';
import HomePage from 'pages/HomePage';
import RegisterForm from 'components/RegisterForm';
import LoginForm from 'components/LoginForm';

// Homepage --> Header (NavMenu)
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />}>
          <Route path="/home/register" element={<RegisterForm />} />
          <Route path="/home/login" element={<LoginForm />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
