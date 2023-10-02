import React from "react";
import { Text, View, Image, StyleSheet } from 'react-native';
import logo from '../../../../assets/logo.png';

export default function Detalhes() {
    return(
        <>
          <Text style={estilos.nome}>Cesta de Verduras</Text>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazenda}/>
                <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            <Text style={estilos.descricao}>Uma cesta com produtos selecionados 
                cuidadosamente da fazenda direto 
                para sua cozinha.
            </Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </>
    )
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42, //TAMANHO DA LINHA
        color: "#464646",
        fontFamily: "MontserratBold"
    },

    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },

    imagemFazenda: {
        width: 32,
        height: 32
    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular"
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },

    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})