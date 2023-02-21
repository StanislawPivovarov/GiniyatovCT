import React from "react";
import { ScrollView, View } from "react-native";
import { Image } from "antd-mobile";
import { ContentItems } from "../style";

const BlackTea = () => {
  return (
    <ScrollView style={ContentItems.paddings}>
      <View style={ContentItems.content}>
        <View>
          <Image
            style={ContentItems.icon}
            src="https://i.ibb.co/GFpzmGp/petr-sidorov-o-P9-Df-JKDy-Qc-unsplash.jpg"
          />
        </View>
        <View>
          <h1 style={ContentItems.header}>Черный чай</h1>
          <p style={ContentItems.subheader}>
            Черный чай содержит кофеин, полифенолы, антиоксиданты, теарубигины,
            теанин и другие полезные вещества. Регулярное употребление напитка
            препятствует развитию онкологических и сердечно-сосудистых
            заболеваний, помогает замедлить старение клеток, укрепить иммунитет,
            нормализовать пищеварение и снизить уровень сахара в крови. Напиток
            противопоказан людям с повышенной чувствительностью к кофеину.
          </p>
        </View>
      </View>
    </ScrollView>
  );
};

export default BlackTea;
