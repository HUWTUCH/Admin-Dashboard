import { Header, SharedLayoutComponent } from './style.tsx';
import Logo from './../../../shared/asstes/icons/PNG/logo.svg';

export const SharedLayout = () => {
  return (
    <SharedLayoutComponent>
      <Header>
        <img src={Logo} width={40} height={40}/>
        <h1>Shared Layout</h1>
      </Header>
      <h1>Shared Layout</h1>
      <h1>Shared Layout</h1>
      <h1>Shared Layout</h1>
    </SharedLayoutComponent>
  );
};
