import * as React from "react";
import { Text, View , Image, TouchableOpacity } from 'react-native';

export interface State { }

export interface Props {
    text: string;
    imgSrc: string;
    categoriesStyle: any; // TODO: Remove this prop
}

export class JIcon extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <TouchableOpacity style={this.props.categoriesStyle.categorieTouchable}>
                    <Image
                        source={require(`../../../assets/${this.props.imgSrc}`)} style={this.props.categoriesStyle.categorieIMG}
                    />
                    <View style={this.props.categoriesStyle.specialTitleContainer}>
                        <Text style={this.props.categoriesStyle.specialTitle}>{this.props.text}</Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
    
    
}
