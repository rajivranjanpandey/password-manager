import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class EditPasswordItem extends Component {
    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => <Button title="HI !" />
        })
    }
    render() {
        console.log(this.props)
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
