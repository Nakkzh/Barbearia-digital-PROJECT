const UsuarioService = require('../../services/UsuarioService.js')
class UsuarioController
{
    constructor()
    {
        this.usuarioService = new UsuarioService()
    }

    async index(req, res)
    {
        const usuarios = await this.usuarioService.buscarUsuario(req.params.id)
        res.render("Usuario/UsuarioView", { usuarios })
    }

    async usuarioEditView(req, res)
    {
        res.render("Usuario/EditView")
    }
    async usuarioPostAsync(req, res)
    {
        const id = await this.usuarioService.cadastrarUsuario(
            req.body.username,
            req.body.email,
            req.body.senha
        )
        res.json({ id : id })
    }
}

module.exports = new UsuarioController()