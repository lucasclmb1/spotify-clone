import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FOOTER_ICONS } from 'app-constants';
import { styles } from './styles'

interface Props {
  currentPage: string
}

export default function Footer({ currentPage }: Props) {
  const [selectedIcon, setSelectedIcon] = useState(currentPage)
  const navigation = useNavigation()

  const handleIconClick = (iconName: React.SetStateAction<string>) => {
    navigation.navigate(iconName)
    setSelectedIcon(iconName)
  }

  return (
    <View style={styles.footer}>
      {FOOTER_ICONS.map((icon) => (
        <TouchableOpacity
          key={icon.name}
          style={styles.icon}
          onPress={() => handleIconClick(icon.name)}
        >
          <icon.icon
            size={24}
            color={selectedIcon === icon.name ? '#42C83C' : '#A7A7A7'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
