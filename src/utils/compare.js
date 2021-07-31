import products from "../products.json";

export function setCompareData(productId, status) {
  console.log("status is: " + status);
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
  let ids = getCompareList();
  let productData = products["products"].filter((obj) => ids.includes(obj.id));
  return productData;
}

export function getCompareList() {
  return JSON.parse(localStorage.getItem("compareList")) || [];
}

export function setCompareList(compareData) {
  compareData &&
    localStorage.setItem("compareList", JSON.stringify(compareData));
}
