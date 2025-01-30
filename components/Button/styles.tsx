import styled from './styled-components/native';

import {colors} from './constants';

export const CalculateButton =styled.TouchableOpacity`
    background-color: ${colors.primary};
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
`;  

export const CalculateButtonText =styled.Text`
    text-transform: uppercase;
    font-family: 'Poppins_700Bold';
    font-size:20px;
    color:${colors.primaryDark}
`;