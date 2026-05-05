const Usuario = require("../Models/UsuarioModel")
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
        return await this.#usuarioSchema.findAll({ where: { id: id } })
    }
}

module.exports = UsuarioService