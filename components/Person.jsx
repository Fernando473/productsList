import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";

export default function Person({ name, lastname, ci, index, setNombre, setApellido, setCI, setEsNuevo, deletePerson }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerIndex}>
        <Text style={styles.nameText}>{index}</Text>
      </View>
      <View style={styles.containerInformation}>
        <Text style={styles.nameText}>
          {name} {lastname}
        </Text> 
        <Text>{ci}</Text>
      </View>
      <View style={styles.containerButtons}>
            <Button title="E" onPress={()=>{
                setNombre(name)
                setApellido(lastname)
                setCI(ci)
                setEsNuevo()
            }} />
            <Button title="X"  onPress={() => {
                deletePerson(ci)
            }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F7DC6F",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: "row",
    gap: 5,
    marginTop:5
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  containerIndex: {
    flex: 1,
    borderColor: "black",
    borderRightWidth: 2,
    padding:5,
    justifyContent:"center",
    alignItems:"center",
    marginVertical:5
  },
  containerInformation: {
    flex: 5,

    padding:5
  },
  containerButtons:{
    flex:1,
    gap:3,
    padding:4,
    flexDirection:"row",
    paddingRight:10,
    alignItems:"center",
    justifyContent:"space-between",
    borderColor: "black",
    borderLeftWidth: 2,
    marginVertical:5
  },
  button:{
    paddingHorizontal:10
  }

});
