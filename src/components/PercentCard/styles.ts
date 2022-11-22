import styled, {css} from "styled-components/native";
import { TouchableOpacity } from "react-native";
import {ArrowUpRight} from 'phosphor-react-native';

export type PercentCardStyleProps = 'POSITIVE' | 'NEGATIVE';

type PercentCardProps = {
    percentType: PercentCardStyleProps;
}

export const Container = styled(TouchableOpacity)<PercentCardProps>`
    width: 100%;
    height: 102px;
    justify-content: center;
    position: absolute;
    background-color: ${({theme,percentType}) => percentType === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

    border-radius: 8px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.TITLE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
    text-align: center;
`;

export const Subtitle = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1};
    `}
    text-align: center;
`;

export const Icon = styled(ArrowUpRight).attrs<PercentCardProps>(({ theme, percentType }) => ({
    color: percentType === "POSITIVE" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    size: 24,
}))<PercentCardProps>`
    position: absolute;
    right: 8px;
    top: 8px;
`;