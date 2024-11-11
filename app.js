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
// function mergeSort(num1, num2) {
//   /* C1 */
//   return [...num1, ...num2].sort();

//   /* C2 */
//   // const mergeNum = [...num1, ...num2];
//   // const sortResult = mergeNum.sort();
//   // return sortResult;
// }

// console.log(mergeSort([0, 4, 9], [2, 2, 4, 7, 9]));

// const products2 = [
//   {
//     name: "Iphone 16",
//     colors: ["white", "ocean", "pink", "purple"],
//     quantity: 20,
//     price: 20000000,
//   },
//   {
//     name: "Iphone 16 promax",
//     colors: ["white", "ocean", "yellow"],
//     quantity: 40,
//     price: 30000000,
//   },
//   {
//     name: "Iphone 15",
//     colors: ["purple"],
//     quantity: 13,
//     price: 10000000,
//   },
//   {
//     name: "samsung zip 4",
//     colors: ["gray", "green"],
//     quantity: 2,
//     price: 25000000,
//   },
// ];

// function convert(productList) {
//   const totalQuantity = productList.reduce(
//     (prevVal, currVal) => prevVal + currVal.quantity,
//     0
//   );
//   const products = productList.map((product) => ({
//     name: product.name,
//     price: product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
//   }));

//   return {
//     totalQuantity,
//     products,
//   };
// }

// console.log(convert(products2));

// function convertPrice(priceNum) {
//   let priceStr = Number(priceNum).toLocaleString();

//   return priceStr;
// }

// console.log(convertPrice('30000000'));

// function convertPrice(priceNum) {
//   const number = Number(priceNum);
//   let priceStr = '';

//   const numStr = number.toString();

//   for (let i = numStr.length - 1; i >= 0; i--) {
//       priceStr = numStr[i] + priceStr;
//       if ((numStr.length - i) % 3 === 0 && i !== 0) {
//           priceStr = ',' + priceStr;
//       }
//   }

//   return priceStr;
// }

// console.log(convertPrice('30000000'));

// const person = {
//   name: "John",
//   birthDate: '1980-02-09',
//   getAge: function() {
//     const date = new Date(this.birthDate);
//     const today = new Date();
//     return today.getYear() - date.getYear();
//   }
// }

// console.log(person.getAge());

// const shop = {
//   name: "Furniture",
//   activeTime: "8am-10pm",
//   categories: ["bedroom", "kitchen", "conference"],
//   // return boolean
//   isActive: function () {
//     const currentTime = new Date();
//     const currentHour = currentTime.getHours();

//     const [openingTime, closingTime] = this.activeTime.split("-");

//     const convertTo24Hour = function (time) {
//       let [hour, period] = time.split(/(am|pm)/);
//       hour = parseInt(hour, 10);
//       if (period === "pm" && hour < 12) hour += 12;
//       if (period === "am" && hour === 12) hour = 0;
//       return hour;
//     };

//     const openHour = convertTo24Hour(openingTime);
//     const closeHour = convertTo24Hour(closingTime);
//     return currentHour >= openHour && currentHour < closeHour;
//   },

//   sortAlphabet: function () {
//     return this.categories.sort();
//   },

//   getCategoriesAndNew: function (category) {
//     // washroom
//     if (!this.categories.includes(category)) {
//       this.categories.push(category);
//     }
//     return this.sortAlphabet(); // a sorted array of categories
//   },
// };

// console.log(shop.isActive());
// console.log(shop.sortAlphabet());
// console.log(shop.getCategoriesAndNew("washroom"));

// class Shop {
//   constructor(name, phone) {
//     this.name = name;
//     this.phone = phone;
//     this.isPreferred = false;
//     this.created = new Date();
//   }

//   setPrefer(value) {
//     this.isPreferred = value;
//   }

//   getRegion() {
//     const countryCodes = {
//       '+84': 'VN', // Vietnam
//       '+65': 'SG', // Singapore
//       '+60': 'MY', // Malaysia
//     };

//     // Extract the country code from the phone number
//     const code = this.phone.split(' ')[0]; // Get the first part of the phone number

//     return countryCodes[code] || 'Unknown'; // Return the region or 'Unknown' if not found
//   }
// }

// // Example usage:
// const furniture = new Shop('Tanpo', '+84 784 01213');
// const typo = new Shop('Typo', '+65 9684 3455');
// const maybank = new Shop('Maybank', '+60 234234 3241234');

// console.log(furniture.getRegion()); // VN
// console.log(typo.getRegion());      // SG
// console.log(maybank.getRegion());   // MY

/* Homework */
// function SortedArray(nums) {
//   this.numbers = nums; // [1, 3, 5]
// }

// SortedArray.prototype.get = function (num) {
//   // return index in the array
//   const index = this.numbers.indexOf(num);
//   return index;
// };

// SortedArray.prototype.set = function (num) {
//   // [1, 2, 3, 3, 5, 6]
//   // add the number in order
//   this.numbers.push(num);
//   this.numbers.sort((a, b) => a - b);
// };

// SortedArray.prototype.remove = function (num) {
//   // remove the input number in the array
//   const index = this.numbers.indexOf(num);
//   if (index !== -1) {
//     this.numbers.splice(index, 1);
//   }
// };

// const sortedArray = new SortedArray([1, 3, 5]);
// console.log(sortedArray.get(3)); // Output: 1
// sortedArray.set(2);
// console.log(sortedArray.numbers); // Output: [1, 2, 3, 5]
// sortedArray.remove(3);
// console.log(sortedArray.numbers); // Output: [1, 2, 5]

// async function fetchPosts(postId) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`
//   );
//   if (res.status !== 200) {
//     throw new Error("Error fetching post");
//   }

//   const post = await res.json();
//   return post;
// }

// fetchPosts(3)
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   if (res.status !== 200) {
//     throw new Error(`Error fetching data`);
//   }
//   return res.json();
// }

// async function fetchPosts() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (res.status !== 200) {
//     throw new Error(`Error fetching data`);
//   }
//   return res.json();
// }
// fetchUsers().then((res) => console.log(res));
// fetchPosts().then((res) => console.log(res));

// async function fetchData() {
//   try {
//     const users = await fetch("https://jsonplaceholder.typicode.com/users");
//     const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (users.status !== 200 || posts.status !== 200) {
//       throw new Error(`HTTP error! Status: ${users.status} ${posts.status}`);
//     }
//     const usersData = await users.json();
//     const postsData = await posts.json();

//     const userLookup = {};
//     usersData.forEach((user) => {
//       userLookup[user.id] = user.name;
//     });

//     const combinedData = postsData.map((post) => ({
//       ...post,
//       author: userLookup[post.userId] || "Unknown",
//     }));

//     return combinedData;
//   } catch (err) {
//     console.log("Error fetching data", err);
//     return null;
//   }
// }

// fetchData()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

/**
 * nums1 = [2, 5, 7, 0, 0, 0, 0], n=3, nums2 = [1, 6, 8, 9] m=4
 * O(m+n)
 * function mergeSortedArray(nums1, n, nums2, m) {
 *
 * }
 * modify on the nums 1 to become a sorted array: nums1 = [1, 2, 5, 6, 7, 8, 9]
 */

function mergeSortedArray(nums1, n, nums2, m) {
  let i = n - 1;
  let j = m - 1;
  let k = n + m - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

let nums1 = [2, 5, 7, 0, 0, 0, 0];
let n = 3;
let nums2 = [1, 6, 8, 9];
let m = 4;
mergeSortedArray(nums1, n, nums2, m);
console.log(nums1); // Output: [1, 2, 5, 6, 7, 8, 9]
