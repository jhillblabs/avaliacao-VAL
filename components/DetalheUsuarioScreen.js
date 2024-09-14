import { useState } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import Usuarios from "../data/Usuarios";

const getUsuarioPorId = (id) => {
    return Usuarios.find(p => p.id == id)
}

export default ({route, navigation}) => {
    const [usuario, setUsuario] = useState(getUsuarioPorId(route.params.id))

    return (
        <View>
            <Card>
                <Card.Cover source={{
                        uri: usuario.urlImagem
                    }} />
                <Card.Title title={usuario.usuario} />
                <Card.Content>
                    <Text variant="bodyMedium">{usuario.descricao}</Text>
                </Card.Content>
            </Card>
        </View>
    )
}