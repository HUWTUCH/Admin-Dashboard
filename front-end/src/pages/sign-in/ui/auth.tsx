import { AuthContainer, AuthOutlet } from './styles.tsx';
import logo from '../../../shared/assets/images/logo.png';
import footerElement from '../../../shared/assets/images/footer_login_element.png';
import tablet from '../../../shared/assets/images/tablet.png';
import { Link, Outlet } from 'react-router-dom';

export const AuthPage = () => {
  return (
    <AuthContainer>
      <div className="header">
        <img src={logo} />
      </div>
      <div className="main">
        <div className="main-container">
          <h3 className="title">
            Your medication,<br />delivered Say goodbye<br />to all <span style={{ color: 'rgba(89, 177, 122, 1)' }}>your healthcare</span>
            <br />worries with us
          </h3>
          <img src={tablet} />
        </div>
        <AuthOutlet>
          <Outlet />
        <div className="auth-links">
          <Link className="auth-link" to="/registration">
            <span className="auth-link-text">Sig In</span>
          </Link>
          <Link className="auth-link" to="/login">
            <span className="auth-link-text">Log In</span>
          </Link>
        </div>
        </AuthOutlet>
      </div>
      <div className="footer">
        <img src={footerElement} />
      </div>
    </AuthContainer>
  );
};
