import styled, { css } from "styled-components/native"

export const Container = styled.View`
    margin-bottom: 24px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.XL}px;
        color: ${theme.COLORS.GRAY_1};
    `}
`;
