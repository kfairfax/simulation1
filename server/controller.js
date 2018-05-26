let product = [];

module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const{name, price, imageurl}=req.body;
        dbInstance.create_product([name, price, imageurl])
        .then(()=>res.status(200).send())
        .catch(()=>res.status(500).send());
    },

    read: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_product()
        .then(product=>res.status(200).send(product))
        .catch(()=>res.status(500).send());
    },

}

