import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Controller } from 'react-hook-form'

interface InputProps {
    name: string;
    control: any;
    placeholder?: string;
    rules?: object;
    error?: string;

}
export function Input() {
 return (
   <View style={sytles.container}>
        <TextInput>
            placeholder='Digite algo'
        </TextInput>
   </View>
  );
}

const sytles = StyleSheet.create({
    container:{
        marginBottom:16
    }
})