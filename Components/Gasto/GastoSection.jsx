import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GastosList from './GastoList';
import CustomPicker from '../Picker/CustomPicker';
import GastoForm from './GastoForm';

const GastoView = () => {
  const [gastos, setGastos] = useState([
    {
      nombre: 'Gasto 1',
      prioridad: 'alta',
      costo: 10.99
    },
    {
      nombre: 'Gasto 2',
      prioridad: 'media',
      costo: 20.99
    },
    {
      nombre: 'Gasto 3',
      prioridad: 'baja',
      costo: 30.99
    }
  ]);

  const opciones = [
    { label: 'Mostrar todos', value: "Mostrar todos" },
    { label: 'Prioridad alta', value: 'alta' },
    { label: 'Prioridad media', value: 'media' },
    { label: 'Prioridad baja', value: 'baja' },
  ];

  const [filtroPrioridad, setFiltroPrioridad] = useState(null);

  const handlePickerChange = (itemValue) => {
    setFiltroPrioridad(itemValue);
  };

  const handleAgregarGasto = (nuevoGasto) => {
    setGastos([...gastos, nuevoGasto]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <CustomPicker
          selectedValue={filtroPrioridad}
          onValueChange={handlePickerChange}
          options={opciones}
        />
      </View>

      <View style={styles.gastosListContainer}>
        <GastosList gastos={gastos} selectedPriority={filtroPrioridad} />
      </View>

      <View style={styles.gastoFormContainer}>
        <GastoForm onAgregarGasto={handleAgregarGasto} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  pickerContainer: {
    marginBottom: 16,
  },
  gastosListContainer: {
    flex: 1,
  },
  gastoFormContainer: {
    marginBottom: 16,
  },
});

export default GastoView;