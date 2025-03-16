import { Formik } from 'formik';
import { ErrorMessages, FormContainer, InputsField, LogInBtn } from './styles.tsx';
import loginSchema from '../../config/validation-schema-login.ts';
import {loginApi} from '../../api/login-api.ts';
import { useNavigate } from 'react-router-dom';
import { initialValuesType } from '../../models/types.ts';
const initialValues: (initialValuesType) = {
  email: '',
  password: '',
};

// TODO: Перенести в features/login/ui/login-form.tsx
export const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogIn = async (values: initialValuesType, actions: any) => {
    try {
      const response = await loginApi(values, actions);
      console.log('Login success:', response);
      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.accessToken);
        navigate('/dashboard');
        actions.resetForm();
      }
    } catch (error) {
      console.error('Login failed:', error);
      actions.resetForm();
    }
  };

  return (
    <Formik 
    initialValues={initialValues} 
    onSubmit={handleLogIn} 
    validationSchema={loginSchema}
    >
      <FormContainer>
        <InputsField 
        type="email" 
        name="email" 
        placeholder="Email adress" 
        />
        <ErrorMessages 
        name="email" 
        component="p" 
        />
        <InputsField 
        type="password" 
        name="password" 
        placeholder="Password" 
        />
        <ErrorMessages 
        name="password" 
        component="p" 
        />
        <LogInBtn type="submit">Log In</LogInBtn>
      </FormContainer>
    </Formik>
  );
};
