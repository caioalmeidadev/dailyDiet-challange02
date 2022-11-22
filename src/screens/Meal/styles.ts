import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    justify-content: space-between;
`;

export const Content = styled.View`
    padding: 40px 24px 0;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    border-radius: 20px;
    width: 100%;
    transform: translateY(-25px);
    flex-grow: 1;
`;

export const MealTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.XL}px;
        color: ${theme.COLORS.GRAY_1};
    `}
    margin-bottom: 8px;
`;

export const MealDescription = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.TITLE.MD}px;
        color: ${theme.COLORS.GRAY_2};
    `}
    margin-bottom: 24px;
`;

export const MealDateAndHourTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.SM}px;
        color: ${theme.COLORS.GRAY_1};
    `}
    margin-bottom: 8px;
`

export const MealDateAndHour = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.TITLE.MD}px;
        color: ${theme.COLORS.GRAY_2};
    `}
    margin-bottom: 24px;
`;

export const Footer = styled.View`
    padding: 0 24px 24px;
`;

export const ModalContainer = styled.View`
    justify-content: center;
    align-items: center;
    
    flex: 1;
`;

export const ModalContent = styled.View`
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    width: 327px;
    height: 192px;
    border-radius: 8px;
    padding: 40px 24px 24px;
`;

export const ModalText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.MD}px;
        color: ${theme.COLORS.GRAY_2};
    `}
    text-align: center;
    margin-bottom: 32px;
`;

export const ModalButtons = styled.View`
    flex-direction: row;
`;

export const Filter = styled.View`
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    position: absolute;
`;