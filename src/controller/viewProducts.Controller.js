const { getCartsId } = require("../dao/mongoManager/BdCartManager");
const BdProductManager = require("../dao/mongoManager/BdProductManager");


const viewsBd = async (req, res) => {
    const {limit, page, sort, ...query} = req.query;
    const products= await BdProductManager.getProduct(page, limit,sort, query);

    const product = products.docs.map((product) => ({
        title:product.title,
        id: product.id,
        description:product.description,
        category:product.category,
        price:product.price,
        stock:product.stock
    })) 

    res.render("viewProduct", {
        products: product,
        cartId: '64128ea254f023c350e2e364',
        totalPage: products.totalPages,
        page:products.page,
        prev: products.hasPrevPage,
        next: products.hasNextPage
        }
)}


module.exports ={
    viewsBd,
}