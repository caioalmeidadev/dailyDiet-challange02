import { TextInput } from 'react-native';
import styled, { css } from "styled-components/native";

export type InputStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    inputType: InputStyleProps;
}

type InputType = {
    type: any;
}

export const Container = styled.View<InputType>`
    margin-bottom: 24px;
    width: 100%;
    flex-shrink: 1;
    margin-right: ${({ type }: InputType) => type === "Data" ? 24 : 0}px;
`;

export const InputName = styled(TextInput)<Props>`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.TITLE.MD}px;
        color: ${theme.COLORS.GRAY_1};
        border: 1px solid ${theme.COLORS.GRAY_5};
    `}
    padding: 14px;
    border-radius: 6px;
    height: ${({ inputType }) => inputType === "PRIMARY" ? 48 : 120}px;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.MD}px;
        color: ${theme.COLORS.GRAY_2};
    `}
    margin-bottom: 4px;
`