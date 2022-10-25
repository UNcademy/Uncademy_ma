import React from 'react'
import styles from '../../App'
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import Courses from '../components/Courses'
import Records from '../components/Records'

const AcadRec = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Historial Academico</Text>
        <Text style={styles.item}>Materias</Text>
            < Courses />
        <Text style={styles.item}>Estadisticas</Text>
        < Records />
    </View>
  )
}

export default AcadRec
