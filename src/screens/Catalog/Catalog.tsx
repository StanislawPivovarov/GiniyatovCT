import { Grid } from "antd-mobile";
import React from "react";
import { ScrollView, View } from "react-native";
import CategoryItem from "../../components/CategoryItem/CategoryItem";

const Catalog = () => {
  return (
    <ScrollView>
        <View>
            <h1>Каталог</h1>
        </View>
        <View>
            <Grid columns={2} gap={12}>
                <CategoryItem
                title="Черный чай"
                image="https://i.ibb.co/GFpzmGp/petr-sidorov-o-P9-Df-JKDy-Qc-unsplash.jpg"
                />
                <CategoryItem
                title="Зеленый чай"
                image="https://i.ibb.co/Kw9TyLf/petr-sidorov-Dr-TXm-ESWa-N8-unsplash.jpg"
                />
                <CategoryItem
                title="Индийский чай"
                image="https://i.ibb.co/z4VtjvH/india.jpg"
                />
                <CategoryItem
                title="Китайский чай"
                image="https://i.ibb.co/m57dxK8/yang-song-8z-ZCb-Ppr-SMk-unsplash.jpg"
                />
                <CategoryItem
                title="Кофе"
                image="https://i.ibb.co/TmqbBFT/jarek-ceborski-Ihq-Dp-Fz7-I8-Q-unsplash.jpg"
                />
                <CategoryItem
                title="Аксессуары"
                image="https://i.ibb.co/z8svhKD/cafeconcetto-kil-3k-Jg-Jk-unsplash.jpg"
                />
            </Grid>
        </View>
    </ScrollView>
  );
};

export default Catalog;
