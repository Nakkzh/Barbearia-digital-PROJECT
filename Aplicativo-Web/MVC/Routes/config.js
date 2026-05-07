const { Router } = require('express')
const UsuarioController = require('../Controllers/UsuarioController')
const router = Router()


router.get("/user/index", (req, res) => UsuarioController.index(req, res))
router.post("/user/create", (req, res) => UsuarioController.usuarioPostAsync(req, res))
router.get("/user/create", (req, res) => UsuarioController.usuarioEditView(req, res))

module.exports = router