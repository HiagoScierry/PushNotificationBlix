import styled from 'styled-components/native';
import { colors } from '../../theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.primary};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity`
`;

export const Image = styled.Image`
    width: 200px;
    height: 200px;
`;
export const Text = styled.Text`
    font-size: 20px;
    color: ${colors.light};
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: underline;
    
`;
