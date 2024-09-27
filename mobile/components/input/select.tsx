import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import { Controller } from 'react-hook-form'
import { colors } from '../../constants/colors'
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';

interface OptionsProps{
    label: string;
    value: string | number;
}

interface SelectProps {
    name: string;
    control: any;
    placeholder?: string;
    error?: string;
    options: OptionsProps[]

}
export function Select({name, control, placeholder, error, options} : SelectProps) {
    const [visible, setVisible] = useState(false);
 
    return (
   <View style={sytles.container}>
        <Controller
            control={control}
            name={name}

            render={({field: {onChange, onBlur, value}}) => (
                <>
                    <TouchableOpacity style={sytles.select} onPress={() => setVisible(true) }>
                        <Text>{value? options.find(option => option.value ===value)?.label : placeholder}</Text>
                        <Feather name ="arrow-down" size={16} color="#000" ></Feather>
                    </TouchableOpacity>

                    <Modal
                        visible={visible}
                        animationType="fade"
                        transparent={true}
                        onRequestClose={() => setVisible(false)}
                    >
                        <TouchableOpacity
                            style={sytles.modalContainer}
                            activeOpacity={1}
                            onPress={() => setVisible(false)}
                        >

                            <TouchableOpacity style={sytles.modalContent} activeOpacity={1}>
                                <FlatList
                                    contentContainerStyle ={{gap:4}}
                                    data={options}
                                    keyExtractor={(item) => item.value.toString()}
                                    renderItem={({item}) => (
                                        <TouchableOpacity 
                                            style={sytles.option}
                                            onPress={() => {
                                                onChange(item.value)
                                                setVisible(false)
                                            }}
                                            >
                                            <Text>{item.label}</Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            </TouchableOpacity>

                        </TouchableOpacity>

                    </Modal>

                
                </>
            )}
        />

        {error && <Text style={sytles.errorText}>{error}</Text>}
   </View>
  );
}

const sytles = StyleSheet.create({
    container:{
        marginBottom:16
    },
    input:{
        height: 44,
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        borderRadius: 4
    },
    errorText:{
        color: 'red',
        marginTop: 4,
    },
    select:{
        flexDirection:'row',
        height: 44,
        backgroundColor: colors.white,
        alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal:10,
        borderRadius: 4
    },
    modalContainer:{
        backgroundColor: 'gba(0,0,0,0.5)',
        flex:1,
        justifyContent:'center'
    },
    modalContent:{
        backgroundColor: colors.white,
        marginHorizontal:10,
        borderRadius:8,
        padding:20,
    },
    option:{
        paddingVertical:14,
        backgroundColor: 'gba(208,208,208,0.40)',
        borderRadius:4,
        paddingHorizontal:8
    }
})