/*
You have been given a list of products which is having property productName, quantity and description.
PROBLEM STATEMENTS:
1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.
Sample Output for the given listOfProducts will be :
{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}
2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.
Sample Output for the given listOfProducts will be :
[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]
*/
const listOfProducts = [
    {
      productName: 'TV',
      quantity: 10,
      description: 'television',
    },
    {
      productName: 'AC',
      quantity: 5,
      description: 'air conditioner',
    },
    {
      productName: 'TV',
      quantity: 10,
      description: 'television',
    },
    {
      productName: 'AC',
      quantity: 5,
      description: 'air conditioner',
    },
    {
      productName: 'FAN',
      quantity: 10,
      description: 'Ceiling Fan',
    },
  ]
 
  

  function getUniqueProductCount(listOfProducts) {
    let productCount = {}
    for (let i = 0; i < listOfProducts.length; i++) {
      if (productCount[listOfProducts[i].productName] === undefined) {
        productCount[listOfProducts[i].productName] = 1
      } else {
        productCount[listOfProducts[i].productName] += 1
      }
    }
    return productCount
  }
  console.log("getUniqueProductCount", getUniqueProductCount(listOfProducts))


  //Second


  function getUniquePrducts(listOfProducts) {
    let uniqueProduct = {}
    for (let i = 0; i < listOfProducts.length; i++) {
      if (uniqueProduct[listOfProducts[i].productName] == undefined) {
        uniqueProduct[listOfProducts[i].productName] = listOfProducts[i]
      } else {
        uniqueProduct[listOfProducts[i].productName].quantity +=listOfProducts[i].quantity
      }
    }
    let updateProduct = Object.values(uniqueProduct)
    return updateProduct
  }
  
  console.log('getUniquePrducts', getUniquePrducts(listOfProducts));  
  
  let getUniquePrductsOptimise = listOfProducts.filter(
    (ele, index, arr) =>
      index === arr.findIndex((e, ind) => {
        if (e.productName == ele.productName) {
          if (index != ind) {
            return (e.quantity += ele.quantity)
          } else {
            return e
          }
        }
      }),
  )
