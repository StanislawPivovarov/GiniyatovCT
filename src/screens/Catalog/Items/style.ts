import { StyleSheet } from "react-native";

export const ContentItems = StyleSheet.create({
  header: {
    fontSize: 13,
  },
  icon: {
    width: 100,
    height: "auto",
    borderRadius: 10
  },
  subheader: {
    fontSize: 10,
    width: "100%"
  },
  content: {
    flexDirection: "row",
    height: 'min-content',
    width: '100%'
  },
  paddings: {
    paddingHorizontal: 8
  }
});
