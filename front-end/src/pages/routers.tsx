import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './shared-layout';
import { Login, Registration } from './sign-in';
import { Dashboard } from './dashboard';
import { AllCustomers } from './all-customers';
import { AllOrders } from './all-orders';
import { AllProducts } from './all-products';
import { AllSuppliers } from './all-suppliers';
import { NotFount } from './error';

export const Routing = () => {
  return (
    <div>
      <Routes>
        {/*<Route path="/" element={<Navigate to="/register" replace />} />*/}
        <Route path="/login" element={<Login />} />
        <Route index path="/register" element={<Registration />} />
        <Route path="/" element={<SharedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<AllCustomers />} />
          <Route path="/orders" element={<AllOrders />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/suppliers" element={<AllSuppliers />} />
        </Route>
        <Route path="*" element={<NotFount />} />
      </Routes>
    </div>
  );
};
