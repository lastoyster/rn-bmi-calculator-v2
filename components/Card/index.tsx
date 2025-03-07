import * as React from "react";
import { StyleProp,ViewStyle } from "react-native";
import {Wrapper,Container} from './styles';

interface Props{
    full?:boolean;
    children?:React.ReactNode;
    style?:StyleProp<ViewStyle>;
    onPress?:() => void;
}

export function Card({full,children,style,onPress}:Props) {
    return(
        <Wrapper onPress={onPress}>
            <Container full={full} style={style}>
                {children}
            </Container>
        </Wrapper>
    );
}