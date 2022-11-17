import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import {
  Container,
  InputWrapper,
  Input,
  Label,
  LoginButton,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" required placeholder="Enter email" />

          <Label htmlFor="password">Password </Label>
          <Input
            type="password"
            name="password"
            required
            placeholder="Enter password"
            min={7}
          />

          <LoginButton type="submit">Log In</LoginButton>
        </InputWrapper>
      </form>
    </Container>
  );
};
