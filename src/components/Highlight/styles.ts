import styled, { css } from "styled-components/native";

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        color: ${theme.COLORS.GRAY_1};
    `}
    text-align: center;
    margin-bottom: 8px;
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.TITLE.MD}px;
        color: ${theme.COLORS.GRAY_2};
    `}
    text-align: center;
`;