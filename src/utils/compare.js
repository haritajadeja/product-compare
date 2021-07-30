import products from "../products.json";

export function setCompareData(productId, status) {
  let compareData = getCompareList();
  if (productId) {
    if (status) {
      const getIndex = compareData.findIndex((item) => item === productId);
      if (getIndex > -1) {
        compareData[getIndex] = productId;
      } else {
        compareData.push(productId);
      }
    } else {
      const getIndex = compareData.findIndex((item) => item === productId);
      if (getIndex > -1) {
        compareData.splice(getIndex, 1);
      }
    }
    setCompareList(compareData);
  }
  return compareData;
}

export function getCompareData() {
  localStorage.setItem("compareList", JSON.stringify([1, 2, 3]));
  let ids = getCompareList();
  return ids;
}

function getCompareList() {
  return JSON.parse(localStorage.getItem("compareList")) || [];
}

function setCompareList(compareData) {
  compareData &&
    localStorage.setItem("compareList", JSON.stringify(compareData));
}

/*export function prepareCart() {
  let cartData = getCart();
  let cartProducts = [];
  const otherData = {
    totalQuantity: 0,
    subTotal: 0,
    maxInstallment: 0,
  };
  cartData.map((item) => {
    const findProduct = products.find((product) => product.id === item.id);
    if (findProduct) {
      cartProducts.push({
        ...findProduct,
        quantity: item.quantity,
      });

      otherData.totalQuantity = otherData.totalQuantity + item.quantity;
      otherData.subTotal = otherData.subTotal + findProduct.price;
      otherData.maxInstallment =
        findProduct.installments > otherData.maxInstallment
          ? findProduct.installments
          : otherData.maxInstallment;
    }
  });
  return { cartProducts, otherData };
}

export function updateCart(action) {
  if (action.id) {
    let cartData = getCart();
    const itemIndex = cartData.findIndex((item) => item.id === action.id);
    if (itemIndex > -1) {
      switch (action.type) {
        case "increase":
          cartData[itemIndex] = {
            id: cartData[itemIndex].id,
            quantity: cartData[itemIndex].quantity + 1,
          };
          break;
        case "decrease":
          cartData[itemIndex] = {
            id: cartData[itemIndex].id,
            quantity: cartData[itemIndex].quantity - 1,
          };
          break;
        case "remove":
          cartData[itemIndex] = {
            id: cartData[itemIndex].id,
            quantity: 0,
          };
          break;

        default:
          break;
      }
      if (cartData[itemIndex].quantity === 0) {
        cartData.splice(itemIndex, 1);
      }
    }
    setCart(cartData);
    return prepareCart();
  }
}*/
