const schemas = require('../models/schemas.js')

module.exports = {
    getIndex: function (req, res) {
        res.render('index', { title: 'Menu Items' })
    },
    editMenu: async (req, res) => {
        let sesh = req.session

        if (!sesh.loggedIn) {
            res.render('menu', { title: this.editMenu, loggedIn: false, error: 'Invalid Request' })
        } else {
            let id = req.params.id
            let err = ''

            let menu = schemas.menu
            let qry = { _id: id }
                .then((itemData) => {
                    if (itemData == null) {
                        err = 'Invalid ID'
                    }

                    res.render('menu', { title: 'Edit Menu', loggedIn: sesh.loggedIn, error: err })
                })
        }
    },
    deleteMenu: async (req, res) => {
        let sesh = req.session

        if(!sesh.loggedIn) {
            res.redirect('/login')
        } else {
            let menuId = req.body.menuId
            let menuName = req.body.menuName
            let menuIcon = req.body.menuIcon
            let menu = schemas.menu

            let qry = {_id:menuId}

            let saveData = {
                
            }
        }
    }
}
