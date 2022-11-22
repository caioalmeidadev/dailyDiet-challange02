import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonColorStyleProps = 'PRIMARY' | 'SECONDARY' | 'THIRD' | 'FOURTH';

type ButtonColorProps = {
    type: ButtonColorStyleProps;
};

export const Container = styled(TouchableOpacity)<ButtonColorProps>`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-shrink: 1;
    width: 100%;
    height: 50px;
    background-color: ${({ theme, type }) => type === 'PRIMARY' || type === 'SECONDARY' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7};
    border: ${({ theme, type }) => type === 'THIRD' || type === 'FOURTH' ? `1px solid ${theme.COLORS.GRAY_1}` : 'none'};
    border-radius: 6px;
`;

export const Title = styled.Text<ButtonColorProps>`
    ${({ theme }) => css<ButtonColorProps>`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.MD}px;
        color: ${({ type }) => type !== 'THIRD' && type !== 'FOURTH' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    `}
    margin-left: ${({ type }) => type !== 'SECONDARY' && type !== 'FOURTH'  ? 12 : 0}px;
`;