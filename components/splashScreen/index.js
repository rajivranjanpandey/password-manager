import React from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../../utils/misc/colors'

export default function SplashScreen() {
    return (
        <View style={{ backgroundColor: COLORS.darkBlue }}>
            <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 16 }}>Please wait...</Text>
        </View>
    )
}
