const Atendimento = require("../../SCHEMAS/Atendimento")

class AtendimentoController
{
    index(req, res)
    {
        res.render("Atendimento/AtendimentoView")
    }

    async salvar(req, res)
    {
        await Atendimento.create(req.body)
        res.redirect("/atendimentos")
    }

    async listar(req, res)
    {
        const atendimentos = await Atendimento.findAll()
        res.render("Atendimento/lista", { atendimentos })
    }
}

module.exports = new AtendimentoController()