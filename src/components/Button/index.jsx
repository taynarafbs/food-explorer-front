import { Container } from './styles';

export function Button({ title, background, icon: Icon, children, ...rest }) {
  return (
    <Container
      type='button'
      background={background}
      {...rest}
    >
      {Icon && <Icon style={{ width: '20', height: '15', marginRight: '3' }}
        preserveAspectRatio='none' size={24} />} {title}
      {children}
    </Container>
  );
}