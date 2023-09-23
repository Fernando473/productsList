import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View, Alert } from "react-native";
import Person from "./components/Person";
import FormAddPerson from "./components/FormAddPerson";

export default function App() {
  const personsArr = [
    {
      nombre: "Juan",
      apellido: "Pérez",
      cedula: "123456789",
    },
    {
      nombre: "María",
      apellido: "Gómez",
      cedula: "987654321",
    },
    {
      nombre: "Carlos",
      apellido: "López",
      cedula: "456789123",
    },
    {
      nombre: "Ana",
      apellido: "Martínez",
      cedula: "789123456",
    },
  ];

  const [persons, setPersons] = useState(personsArr);
  const [person, setPerson] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [ci, setCi] = useState("");
  const [esNuevo, setEsNuevo] = useState(true);

  const addPerson = () => {
    if (esNuevo) {
      const personNew = { nombre: nombre, apellido: apellido, cedula: ci };
      if (!existPerson(ci)) {
        setPersons([...persons, personNew]); // Usar spread para crear una nueva matriz de personas
      }else{
        Alert.alert("Information",`Ya existe una persona con ese numero de cedula ${ci}`)
      }
    } else {
      console.log("Implementar logica editar");
      const EditPerson = { nombre: nombre, apellido: apellido, cedula: ci };
      persons.filter((person) => {
        if (person.cedula === EditPerson.cedula) {
          person.cedula = EditPerson.cedula;
          person.apellido = EditPerson.apellido;
          person.nombre = EditPerson.nombre;
        }
      });
    }
    clear();
  };
  const existPerson = (cedula) =>
    persons.some((person) => person.cedula === cedula);

  const deletePerson = (cedula) => {
    const newPers = persons.filter((person) => person.cedula !== cedula);
    setPersons(newPers);
  };

  const clear = () => {
    setApellido("");
    setNombre("");
    setCi("");
    setEsNuevo(true);
  };

  useEffect(() => {});

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Personas</Text>
      </View>
      <View style={styles.form}>
        <FormAddPerson
          addPerson={addPerson}
          setCi={setCi}
          setName={setNombre}
          setApellido={setApellido}
          name={nombre}
          lastname={apellido}
          ci={ci}
          clear={clear}
          esNuevo={esNuevo}
        />
      </View>
      <FlatList
        data={persons}
        renderItem={({ item, index }) => (
          <Person
            ci={item.cedula}
            name={item.nombre}
            lastname={item.apellido}
            index={index}
            setApellido={setApellido}
            setNombre={setNombre}
            setCI={setCi}
            setEsNuevo={() => setEsNuevo(false)}
            deletePerson={deletePerson}
          />
        )}
        keyExtractor={(item) => item.cedula}
        style={styles.productList}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
    borderWidth: 2,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  productList: {
    flex: 2,
    width: "100%",
    paddingHorizontal: 20,

    marginBottom: 20,
  },
  form: {
    flex: 0.7,
  },
});
