import React from 'react';
import {View, FlatList, StyleSheet, StatusBar, Image} from 'react-native';

import {List} from 'react-native-paper';

import Usuarios from '../data/Usuarios'

export default props => {

    const Item = ({elemento: item}) => {
        return(   
        <List.Item
            title={item.usuario}
            description={item.descricao}
            // left={props => <List.Icon {...props} icon="folder" />}
            left={props => 
                <Image {...props} 
                    style={styles.tinyLogo} 
                    source={
                        {
                            uri: item.urlImagem
                        }
                    }/>}
            onPress={() => props.navigation.navigate("DetalheUsuario", {id: item.id})}
        />
    )};

    return (
        <View style={styles.container}>
            <FlatList
                data={Usuarios}
                renderItem={({ item }) =><Item elemento={ item } /> }
                keyExtractor={ item => item.id }
            />
        </View>
    );
}

// Style
const styles = StyleSheet.create({
    container: {
        flex:      1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding:          20,
        marginVertical:   8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});