// import { Link } from 'react-router-dom';
// import NavbarMenu from './NavbarMenu/NavbarMenu';
// import { AiOutlineContacts } from 'react-icons/ai';
// import { IconContext } from 'react-icons';
import { Header, NavMenu, StyledNavLink } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';
// import NavbarAuth from '../NavbarAuth/NavbarAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <NavMenu>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
      </NavMenu>
    </Header>
  );
};

// import NavbarMenu from './NavbarMenu/NavbarMenu';
// import { AiOutlineContacts } from 'react-icons/ai';
// import { IconContext } from 'react-icons';
// import { Header, NavMenu, StyledLink } from './NavBar.styled';
// // import NavbarAuth from '../NavbarAuth/NavbarAuth';

// export default function Navbar() {
//   return (
//     <Header>
//       <NavMenu>
//         <StyledLink to="/">
//           <IconContext.Provider value={{ color: '#fff', size: '40px' }}>
//             <AiOutlineContacts />
//           </IconContext.Provider>
//         </StyledLink>
//         <NavbarMenu />
//       </NavMenu>
//     </Header>
//   );
// }
