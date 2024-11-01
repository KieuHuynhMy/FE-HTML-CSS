// const arr = [4, 3, 1, 7, 9, 10, 2, 5];
// for (let i = 0; i < arr.length; i++);
// {
//   if (arr[i] % 5 === 0) {
//     console.log(arr[i]);
//     return arr[i];
//   }
// }

// for (let i = 0; i < arr.length; i++);
// {
//   if (arr[i] % 5 === 0) {
//     console.log(arr[i]);
//     break;
//   }
// }

// for (let i = 0; i < arr.length; i++);
// {
//   for(let j = 0; i < j; j++) {

//   }
// }

// function findMax(a, b) {
//     if(a > b) {
//         console.log(a);
//     }
// }

// const products = [
//   {
//     name: "Iphone 16",
//     quantity: 10,
//   },
//   {
//     name: "Galaxy 16",
//     quantity: 4,
//   },
//   {
//     name: "Oppo",
//     quantity: 15,
//   },
// ];

// function sumQuantity(products) {
//   let sum = 0;
//   return products.map((p) => {
//     let res = p.quantity + sum;
//     return res;
//   });
// }

// console.log(sumQuantity(products));

// const marks = [
//   {
//     name: "Tom",
//     mark: 8,
//   },
//   {
//     name: "Jerry",
//     mark: 3,
//   },
//   // null,
//   {
//     name: "Blue",
//     mark: 3,
//   },
//   // undefined,
//   {
//     name: "Yellow",
//     mark: 4,
//   },
// ];

// const findName = marks.map((mark, i) => {
//   if (mark.name === "Yellow") {
//     // mark.shift(mark)
//     // console.log(mark.name);
//     return mark.name;
//   }
// });
// // console.log(marks.unshift(findName))
// if(findName === 'Yellow') {
//   console(marks.unshift(findName));
// }

/*
array.unshift(                      // add to the front of the array
  array.splice(                     // the result of deleting items
    array.findIndex(                // starting with the index where
      elt => elt.Name === 'Sarah'), // the name is Sarah
  1)[0]                             // and continuing for one item
)
  */

// console.log(marks.unshift(marks.map((mark) =>  mark.name
// ).indexOf('Yellow')));

// console.log(findName.unshift());
// console.log(findName);
// console.log(marks)

// console.log(marks.unshift(                      // add to the front of the array
//   marks.splice(                     // the result of deleting items
//     marks.findIndex(                // starting with the index where
//       elt => elt.name === 'Yellow'), // the name is Sarah
//   1)[0]                             // and continuing for one item
// ))

// const marks = [
//   {
//     name: "Tom",
//     mark: 9,
//   },
//   {
//     name: "Jerry",
//     mark: 3,
//   },
//   null,
//   {
//     name: "Blue",
//     mark: 3,
//   },
//   undefined,
//   {
//     name: "Yellow",
//     mark: 4,
//   },
// ];

// function findScore(arr, ) {}

// const score = marks.filter(m => m && m.mark === 3);
// console.log(score);

// function moveToTop2(arr) {
//   const index = arr.findIndex((a) => a?.name === "Yellow");
//   if (index !== -1) {
//     sliceItem = arr.splice(index, arr.length);
//     return [sliceItem, ...arr];
//     // console.log(sliceItem);
//   }
//   return arr;
// }
// console.log(moveToTop2(marks));

// function decreaseSort(...arr) {
//   let result = [...arr].reduce((a, b) => {
//     return a.mark > b.mark ? a : b;
//   });
//   return result;
// }

// console.log(decreaseSort(marks));

// function sumMarks(arr) {
//   return arr
//     .reduce((prevVal, currVal) => prevVal + currVal.mark, 0);
// }

// console.log(sumMarks(marks));

// function convert(products) {
//   return products.reduce((prevVal, currVal) => {
//     prevVal.push({
//       name: currVal.name,
//       colors: JSON.stringify(currVal.colors),
//     });
//     return prevVal;
//   }, []);
// }

// console.log(convert(products2));

// const duplicateNum = [4, 3, 1, 4, 4, 6, 2, 8, 2];

// const findValue = duplicateNum.filter(
//   (item, index) => duplicateNum.indexOf(item) !== index
// );
// console.log(findValue);

// const num1 = [0, 4, 9];
// const num2 = [2, 2, 4, 7, 9];
// const sortNum = [...num1, ...num2];
// const rs = sortNum.sort();
// console.log(rs);

/**
 * Homework:
 * 1. write a convert function returning
    { totalQuantity: 75, products: [{ name: '', price: '30,000,000' }] }
   2. merge sorted numbers
   given 2 array sorted numbers: nums1 = [0, 4, 9], nums2 = [2, 2, 4, 7, 9]
   merge => return a new array = [0, 2, 2, 4, 4, 7, 9, 9]
   // O(n + m)
 */
function mergeSort(num1, num2) {
  /* C1 */
  return [...num1, ...num2].sort();

  /* C2 */
  // const mergeNum = [...num1, ...num2];
  // const sortResult = mergeNum.sort();
  // return sortResult;
}

console.log(mergeSort([0, 4, 9], [2, 2, 4, 7, 9]));

const products2 = [
  {
    name: "Iphone 16",
    colors: ["white", "ocean", "pink", "purple"],
    quantity: 20,
    price: 20000000,
  },
  {
    name: "Iphone 16 promax",
    colors: ["white", "ocean", "yellow"],
    quantity: 40,
    price: 30000000,
  },
  {
    name: "Iphone 15",
    colors: ["purple"],
    quantity: 13,
    price: 10000000,
  },
  {
    name: "samsung zip 4",
    colors: ["gray", "green"],
    quantity: 2,
    price: 25000000,
  },
];

function convert(productList) {
  const totalQuantity = productList.reduce(
    (prevVal, currVal) => prevVal + currVal.quantity,
    0
  );
  const products = productList.map((product) => ({
    name: product.name,
    price: product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  }));

  return {
    totalQuantity,
    products,
  };
}

console.log(convert(products2));
