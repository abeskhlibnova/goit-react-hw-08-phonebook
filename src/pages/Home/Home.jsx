import { Container, StyledLink, Text } from '../Pages.styled';
import { useAuth } from 'hooks/useAuth';
import welcome from 'images/welcome.png';

export default function Homepage() {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      {isLoggedIn ? (
        <img src={welcome} alt="" width="250" />
      ) : (
        <div>
          <img src={welcome} alt="" width="250" />
          <StyledLink to="/login">Log In</StyledLink>
          <Text> or </Text>
          <StyledLink to="/register">Register</StyledLink>
        </div>
      )}
    </Container>
  );
}
