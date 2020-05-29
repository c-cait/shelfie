module.exports = {
    getAllProducts: (req, res) => {
        console.log('hit get product')
        const db = req.app.get('db')

        db.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err))
    },

    addProduct: (req, res) => {
        console.log('hit add product')
        const db = req.app.get('db');
        const {name, price, img} = req.body;

        db.create_product([name, price, img])
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    }
}