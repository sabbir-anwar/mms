const Members = require('../models/memberModel')

const memberCtrl = {
    getMembers: async(req, res) =>{
        try {
            const members = await Members.find()

            res.json(members)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createMember: async(req, res) =>{
        try {
            const {member_id, name, address, area, phone, email, image} = req.body;

            const member = await Members.findOne({member_id})
            if(member)
                return res.status(400).json({msg: "This member already exists."})

            const newMember = new Members({
              member_id, name, address, area, phone, email, image
            })

            await newMember.save()
            res.json({msg: "Created a member"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteMember: async(req, res) =>{
        try {
            await Members.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Member"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateMember: async(req, res) =>{
        try {
            const {name, address, area, phone, email, image} = req.body;
            
            await Members.findOneAndUpdate({_id: req.params.id}, {
              name, address, area, phone, email, image
            })

            res.json({msg: "Updated a Member"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = memberCtrl