import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import RegisterPartial from 'components/RegisterPartial';
import LoginPartial from 'components/LoginPartial';
import Phonebook from 'components/Phonebook';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />}>
        <Route path="register" element={<RegisterPartial />} />
        <Route path="login" element={<LoginPartial />} />
      </Route>
      <Route path="/contacts" element={<Phonebook />} />
    </Routes>
  );
};

export default MyRoutes;
