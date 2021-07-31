export function getCompareList() {
  return JSON.parse(localStorage.getItem("compareList")) || [];
}

export function setCompareList(compareData) {
  compareData &&
    localStorage.setItem("compareList", JSON.stringify(compareData));
}
