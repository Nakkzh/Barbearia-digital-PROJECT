const { Router } = require('express')
const UsuarioController = require('../Controllers/UsuarioController')
const router = Router()


router.get("/user/index", UsuarioController.index)

module.exports = router