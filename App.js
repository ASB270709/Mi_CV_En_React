
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';


const PantallaPrincipal = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.Contenedor}>
        <View style={styles.DivisionImagen}>
        <Image
            source= {require('C:/Users/sonic/OneDrive/Escritorio/Escuela/Sexto Semestre/Desarrollo De Aplicaciones Moviles/Apps/Mi_CV_En_React/assets/imagen.jpg')}
            style={styles.Imagen}
          />
        </View>
        <View style={styles.Division}>
          <Text style={styles.Titulos}>Ariel Suárez Beltrán</Text>
        </View>

        <View style={styles.Division}>
          <Text style={styles.Titulos}>Experiencia Laboral</Text>
          <Text style={styles.MainTxt}>-1 año como desarrollador de videojuegos con el motor gráfico Unity</Text>
          <Text style={styles.MainTxt}>-2 años como desarrollador de Aplicaciones Moviles</Text>
          <Text style={styles.MainTxt}>Cargo en la empresa : Desarrollador</Text>        
        </View>

        <View style={styles.Division}>
          <Text style={styles.Titulos}>Educación</Text>
        </View>

        <View style={styles.Division}>
          <Text style={styles.MainTxt}>-Egresado titulado: Ingeniería en Software en la Universidad Autónoma De Querétaro</Text>
          <Text style={styles.MainTxt}>-Maestria en Sistemas de Información</Text>
        </View>

        <View style={styles.Division}>
          <Text style={styles.Titulos}>Formación Extracurricular</Text>
        </View>

        <View style={styles.Division}>
          <Text style={styles.MainTxt}>-Desarrollo de videojuegos en 2D y 3D en Unity</Text>
          <Text style={styles.MainTxt}>-Certificación Azure AZ-900</Text>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#787878'
  },
  Contenedor: {
    padding: 20,
  },
  Division: {
    marginBottom: 20,
    backgroundColor: '#484848',
    borderRadius: 25,
  },
  DivisionImagen: {
    marginBottom: 20,
    backgroundColor: '#484848',
    alignItems: 'center',
    borderRadius: 25,
  },
  Imagen: {
    width: 200,
    height: 200,
    borderRadius: 65,
    marginBottom: 10,
    
  },
  Titulos: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: 'white',
  },
  MainTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },

});

export default PantallaPrincipal;
