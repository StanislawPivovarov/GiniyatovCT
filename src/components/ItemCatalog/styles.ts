import { StyleSheet } from "react-native";

export const ItemCat = StyleSheet.create({
  component: {
    flexDirection: "row",
    padding: "9px 4px",
    marginVertical: 7.5
  },
  icon: {
    width: 100,
  },
  header: {
    fontSize: 15,
    fontStyle: "italic",
  },
  description: {
    fontSize: 10,
    lineHeight: 11,
  },
  btn: {
    height: 24,
    backgroundColor: '#DADE93',
    width: 190,
    borderRadius: 20,
    color: "#4E4138",
    margin: '0 auto'
  }
});
