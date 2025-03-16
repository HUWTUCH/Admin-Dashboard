import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './shared-layout';
import { Dashboard } from './dashboard';
import { AllCustomers } from './all-customers';
import { AllOrders } from './all-orders';
import { AllProducts } from './all-products';
import { AllSuppliers } from './all-suppliers';
import { NotFount } from './error';
import { AuthPage } from './sign-in';
import { LoginForm, RegistrationForm } from '../features';
// TODO: Перенести в providers/routing/ui/routing.tsx
export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />}>
          <Route index path="/registration" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
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
