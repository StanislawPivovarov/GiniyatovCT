import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Image } from "antd-mobile";
import React from "react";
import { ScrollView, View } from "react-native";
import {ItemCat} from './styles'

interface CatProps {
    header: string,
    icon: string,
    description: string
}

const ItemCatalog = (props: CatProps) => {
    return(
        <View style={ItemCat.component}>
            <View>
                <Image style={ItemCat.icon} src={props.icon}/>
            </View>
            <View>
                <h1 style={ItemCat.header}>{props.header}</h1>
                <p style={ItemCat.description}>{props.description}</p>
                <Button style={ItemCat.btn}>Добавить в корзину <ShoppingCartOutlined /></Button>
            </View>
        </View>
    )
}

export default ItemCatalog;