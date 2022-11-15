import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import {
  Container,
  InputWrapper,
  Input,
  Label,
  RegisterButton,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label htmlFor="name">Username </Label>
          <Input type="text" name="name" required placeholder="Enter name" />

          <Label htmlFor="email">Email </Label>
          <Input type="email" name="email" required placeholder="Enter email" />

          <Label htmlFor="password">Password </Label>
          <Input
            type="password"
            name="password"
            required
            minLength={7}
            placeholder="Please enter password(min 7)"
          />

          <RegisterButton type="submit">Register</RegisterButton>
        </InputWrapper>
      </form>
    </Container>
  );
};
