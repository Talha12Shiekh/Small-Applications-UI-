import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarContainer: {
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  cartContainer: {
    width: 40,
    aspectRatio: 1,
    backgroundColor: "rgba(0,0,0,.1)",
    borderRadius: 100,
  },
  seasonal: {
    fontSize: 25,
    marginTop: 10,
  },
  fruits_and_vegetables: {
    fontSize: 30,
    marginTop: 5,
    fontWeight: "500",
  },
  categoriesContainer: {
    marginTop: 25,
  },
  categoryText: {
    fontSize: 20,
    marginRight: 25,
    fontWeight: "500",
  },
  txtBottomLine: {
    width: "30%",
    backgroundColor: "orange",
    height: 3,
    marginLeft: 10,
    marginTop: 5,
  },
  fruitCardsContainer: {
    marginVertical: 30,
  },
  fruitCard: {
    width: 270,
    borderRadius: 50,
    marginRight: 40,
  },
  fruitImage: {
    width: 250,
    height: 250,
  },
  heartContainer: {
    alignItems: "flex-end",
    marginTop: 10,
    marginRight: 15,
  },
  heartIconContainer: {
    width: 50,
    aspectRatio: 1,
    backgroundColor: "rgba(255,255,255,.3)",
    borderRadius: 100,
  },
  textContainer: {
    marginVertical: 15,
    marginLeft: 20,
  },
  fruitText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
  hotText: {
    fontSize: 20,
    fontWeight: "600",
  },
  bottomFruitView: {
    width: 70,
    aspectRatio: 1,
    marginRight: 40,
    alignSelf: "center",
    borderRadius: 20,
    marginLeft: 5,
    zIndex: -1,
    flexDirection: "row",
    justifyContent: "center",
  },
  botFruitImage: {
    height: 70,
    margin: 10,
    width: 70,
    marginBottom: -35,
    shadowRadius: 40,
  },
  botFruitPrice: {
    alignSelf: "flex-end",
    marginBottom: 5,
    marginRight: 5,
    fontWeight: "500",
  },
  arrowContainer: {
    width: 35,
    aspectRatio: 1,
    backgroundColor: "rgba(255,255,255,.4)",
    position: "absolute",
    top: 50,
    left: 30,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    zIndex: 9999999999999,
  },
  fruitImageContainer: {
    marginTop: 100,
    alignSelf: "center",
  },
  bottomSheet: {
    height: "45%",
    backgroundColor: "white",
    marginTop: 70,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    paddingHorizontal: 30,
  },
  fruitnameContainer: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  flavour_price_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  starsContainer: {
    marginTop: 15,
    flexDirection: "row",
    gap: 10,
  },
  textcontainer: {
    marginTop: 10,
  },
  detailsText: {
    color: "grey",
  },
  price_cart_container: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    fontSize: 30,
  },
  button: {
    width: "60%",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
  btntext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  detailsImage: {
    height: 310,
  },
});

export default styles;
