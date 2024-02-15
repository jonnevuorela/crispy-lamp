import React from 'react'
import { View, Text, Pressable, Image, Linking } from 'react-native'

import styles from './footer.style'
import { icons } from '../../../constants'

const Footer = ({url}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.likeBtn} onPress={()=>Linking.openURL(url)}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </Pressable>

      <Pressable 
      style={styles.applyBtn} onPress={()=>{Linking.openURL(url)}}>
        <Text style={styles.applyBtnText}>Hae työpaikkaa</Text>
      </Pressable>
    </View>
  )
}

export default Footer