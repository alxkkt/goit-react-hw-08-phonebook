import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import RegisterPartial from 'components/RegisterPartial';
import LoginPartial from 'components/LoginPartial';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />}>
        <Route path="register" element={<RegisterPartial />} />
        <Route path="login" element={<LoginPartial />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
