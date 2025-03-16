import { LogoutButtonContainer } from './style.tsx';
import logoutIcon from './../../shared/assets/icons/SVG/logout.svg';
// TODO: Перенести в features/logout/ui/logout-button.tsx
export const Logout = () => {
  return (
    <LogoutButtonContainer type='button'>
      <img src={logoutIcon} height={19} width={17}/>
    </LogoutButtonContainer>
  );
};
