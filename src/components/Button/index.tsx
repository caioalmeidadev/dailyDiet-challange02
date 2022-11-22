import { TouchableOpacityProps } from 'react-native';
import { Container, Title, ButtonColorStyleProps } from './styles'

type ButtonProps = TouchableOpacityProps & {
    title: string;
    type?: ButtonColorStyleProps;
    icon?: React.ReactNode;
};

export function Button({ title, type = 'PRIMARY', icon, ...rest }: ButtonProps) {
    return (
        <Container type={type} {...rest} activeOpacity={0.9}>
            { icon }
            <Title type={type}>
                { title }
            </Title>
        </Container>
    )
}