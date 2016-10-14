'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

// const listedPrice =
//   listing =>
//     name =>
//       name === listing.name
//         ? listing.price
//         : 0

// const listedPrice =
//   function (listing) {
//     return function (name) {
//       if (name === listing.name) {
//         return listing.price
//       } else {
//         return 0
//       }
//     }
//   }

/**
 * transform carts into an array of { customer, total }
 */
 // Peter's Functional Solution
 // const calculateTotals2 =
 //   (listings) =>
 //     (carts) => {
 //       return carts.map(
 //         cart => ({
 //           customer: cart.customer,
 //           total:
 //            cart.items.reduce(
 //             (prior, current) =>
 //              prior +
 //                listings
 //                  .filter(l => l.name === current)
 //                 .map(l => l.price)
 //                 .reduce((prior, current) => prior + current, 0)
 //                ,
 //             0
 //           )
 //         })
 //       )
 //     }

 // My Functional solution
 const calculateTotals =
   listings =>
     carts =>
      carts.map(cart => ({
         customer: cart.customer,
         total: cart.items.reduce((prior, current) => prior + listings.filter(listing => listing.name === current).map(listing => listing.price).reduce((prior, current) => prior + current, 0), 0)
       })
     )

// Imperative solution
// const calculateTotals =
//   function (listings) {
//     return function (carts) {
//       const result = []
//
//       for (let cart of carts) {
//         const customerTotal = { customer: cart.customer }
//         let total = 0
//
//         for (let item of cart.items) {
//           for (let listing of listings) {
//             if (listing.name === item) {
//               total += listing.price
//             }
//           }
//         }
//
//         customerTotal.total = total
//         result.push(customerTotal)
//       }
//       return result
//     }
//   }

module.exports = {
  listing,
  cart,
  calculateTotals
}
