const Area = require('../models/areaModel')

const areaCtrl = {
    getAreas: async(req, res) =>{
        try {
            const areas = await Area.find()
            res.json(areas)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createArea: async (req, res) =>{
        try {
            // if user have role = 1 ---> admin
            // only admin can create , delete and update category
            const {name} = req.body;
            const area = await Area.findOne({name})
            if(area) return res.status(400).json({msg: "This area already exists."})

            const newArea = new Area({name})

            await newArea.save()
            res.json({msg: "Created an Area"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteArea: async(req, res) =>{
        try {
            // const products = await Products.findOne({category: req.params.id})
            // if(products) return res.status(400).json({
            //     msg: "Please delete all products with a relationship."
            // })

            await Area.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Area"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateArea: async(req, res) =>{
        try {
            const {name} = req.body;
            await Area.findOneAndUpdate({_id: req.params.id}, {name})

            res.json({msg: "Updated a area"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = areaCtrl