import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import RegisterPartial from 'components/RegisterPartial';
import LoginPartial from 'components/LoginPartial';
import ContactsPage from 'pages/ContactsPage';

import PrivateRoute from 'shared/components/PrivateRoute';
import PublicRoute from 'shared/components/PublicRoute';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />}>
        <Route element={<PublicRoute />}>
          <Route path="register" element={<RegisterPartial />} />
          <Route path="login" element={<LoginPartial />} />
        </Route>
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default MyRoutes;
