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
        .then(product => {res.status(200).send(product)})
        .catch(err => res.status(500).send(err))
    },

    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {name, price} = req.body

        db.update_product([name, price, id])
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(id)
        .then(product => res.status(200).send(product))
        .catch(err => console.log(err))

    }
}