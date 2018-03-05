// const APIError = require('../rest').APIError;

// module.exports = {
//     'GET /api/products': async(ctx, next) => {
//         ctx.rest({
//             products: '1'
//         });
//     },

//     'POST /api/products': async(ctx, next) => {

//         ctx.rest({
//             products: '111'
//         });
//     },

//     'DELETE /api/products/:id': async(ctx, next) => {
//         console.log(`delete product ${ctx.params.id}...`);

//         if (p) {
//             ctx.rest({
//                 products: '1'
//             });
//         } else {
//             throw new APIError('product:not_found', 'product not found by id.');
//         }
//     }
// };