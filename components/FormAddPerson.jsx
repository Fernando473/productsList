import React from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";

export default function FormAddPerson({ name, lastname, ci, addPerson, setName, setApellido, setCi, clear, esNuevo }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.containerText}>
        <Text style={styles.text}>Nombre</Text>
        <TextInput onChangeText={setName} value={name} placeholder="Ingrese el nombre" />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>Apellido</Text>
        <TextInput value={lastname} onChangeText={setApellido} placeholder="Ingrese el apellido" />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>Número de cédula</Text>
        <TextInput  onChangeText={setCi} value={ci} placeholder="Ingrese el número de cédula"  editable={esNuevo}/>
      </View>
     <View style={styles.containerButton}>
        
      <Button title="Agregar" onPress={addPerson} />
      <Button title="Limpiar" onPress={clear} />
      
        </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  containerText: {
    flexDirection: "row",
    alignItems: "center",

    gap:10
  },
  containerButton:{
    flexDirection:"row",
    gap:5,
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    fontSize:15,
    fontWeight:"bold"
  }
});
