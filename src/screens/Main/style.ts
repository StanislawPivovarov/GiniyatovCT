import { Flex } from "@ant-design/react-native";
import { StyleSheet } from "react-native";

export const mainStyles = StyleSheet.create({
  margins: {
    width: "100%",
    backgroundColor: "#F4F5F0",
    paddingHorizontal: 10,
  },

  adressHeader: {
    fontSize: 20,
    fontFamily: "Comfortaa_400Regular",
    color: "#4E4138"
  },

  adressIcon : {
    fontSize: 18,
  },

  link: {
    fontSize: 18,
    color:"#4E4138",
    marginTop: 8
  },

  searchButton: {
    fontSize: 25,
    color:"#4E4138",
    marginRight: 15
  },

  header: {
    width: "100%",
    flex: 2,
    paddingTop: 10,
  },
  adress: {
    width: "100%",
    flex: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemCard: {
    width: "170px",
    height: "max-content",
    borderRadius: 12,
    backgroundColor: "#ECE3D2",
    padding: 6,
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 16,
    width: "min-content",
    margin: 0,
    fontFamily: "Comfortaa_700Bold",
  },
  itemCategory: {
    fontSize: 14,
    margin: 0,
    fontFamily: "Comfortaa_400Regular",
    width: 100,
    marginTop: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  buttonCart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100px",
  },
  button: {
    height: 35,
    width: "100%",
    margin: "0 auto",
    padding: "0px",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#4E4138",
    color: "#fff",
  },
  buttonHeader: {
    margin: 0,
    fontSize: 14,
    fontFamily: "Comfortaa_400Regular",
  },
  iconButton: {
    fontSize: 17,
    borderRadius: 10,
  },
  price: {
    fontSize: 14,
    fontFamily: "Comfortaa_700Bold",
  },
});
