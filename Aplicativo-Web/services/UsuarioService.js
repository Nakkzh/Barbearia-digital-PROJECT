
const Usuario = require("../MVC/Models/UsuarioModel")
const UsuarioSchema = require("../SCHEMAS/UsuarioSchema")

class UsuarioService
{
    #usuarioSchema

    constructor()
    {
        this.#usuarioSchema = UsuarioSchema
    }
    async buscarUsuario(id)
    {
        return await this.#usuarioSchema.findOne({ where: { id: id } })
    }
    async deletarUsuario(id)
    {
        const usuario = await this.#usuarioSchema.findOne({ where: { id: id } })
        const affectedRows = await usuario.destroy()
        
        return affectedRows
    }
    async buscarTodosUsuario(id)
    {
        return await this.#usuarioSchema.findAll({})
    }

    async cadastrarUsuario(username, email, senha)
    {
        const usuario = new Usuario(email, senha, username)

        const id = await this.#usuarioSchema.create
        (
            {
                username: usuario.nome,
                email: usuario.email,
                senha: usuario.senha
            }
        )

        return id
    }

    async atualizarUsuario(id, username, email, senha)
    {
        let rows = 0

        const usuario = await this.#usuarioSchema.buscarUsuario(id)
        if (usuario)
        {
            const model = new usuario
            (
                email || usuario.email,
                senha || usuario.senha,
                username || usuario.username
            )
        

            const affectedRows = await this.#usuarioSchema.update
            (
                {
                    username: model.nome,
                    email: model.email,
                    senha: model.senha
                },
                {
                    where: { id: id }
                }
            )
            rows = affectedRows
        }
        
        return rows
    }
}

module.exports = UsuarioService