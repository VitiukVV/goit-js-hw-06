const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
  let textElem = item.firstElementChild.textContent;
  let amountElem = item.lastElementChild.children.length;
  console.log(`Category: ${textElem}\nElements: ${amountElem}`);
});
