import theme from '../../styles/theme';
import { Container, Field } from './styles';

export function Input({ icon: Icon, size, title, id, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      <Field>
        {Icon && <Icon color={theme.COLORS.LIGHT_400} size={!size && '24'} style={{ alignItems: 'center' }} />}
        <input id={id} {...rest} />
      </Field>
    </Container>
  );
}