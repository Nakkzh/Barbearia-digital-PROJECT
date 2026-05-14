const AtendimentoService = require('../../services/AtendimentoService.js')

class AtendimentoController {
    constructor() {
        this.atendimentoService = new AtendimentoService()
    }

    async atendimentoListView(req, res) {
        const atendimentos = await this.atendimentoService.buscarTodosAtendimentos()
        res.render("Atendimento/ListView", { atendimentos: atendimentos })
    }

    async atendimentoCreateView(req, res) {
        res.render("Atendimento/CreateView")
    }

    async atendimentoEditView(req, res) {
        const atendimento = await this.atendimentoService.buscarAtendimento(req.params.id)
        res.render("Atendimento/EditView", { atendimento: atendimento })
    }

    async atendimentoPostAsync(req, res) {
        const id = await this.atendimentoService.cadastrarAtendimento(
            req.body.nomeCliente,
            req.body.telefone,
            req.body.horarioAtendimento,
            req.body.dataAtendimento,
            req.body.dataNascimento,
            req.body.tipoServico,
            req.body.profissional
        )
        res.json({ id: id })
    }

    async atendimentoPutAsync(req, res) {
        const affectedRows = await this.atendimentoService.atualizarAtendimento(
            req.body.id,
            req.body.nomeCliente,
            req.body.telefone,
            req.body.horarioAtendimento,
            req.body.dataAtendimento,
            req.body.dataNascimento,
            req.body.tipoServico,
            req.body.profissional
        )
        res.json({ affectedRows: affectedRows })
    }

    async atendimentoDeleteAsync(req, res) {
        const affectedRows = await this.atendimentoService.deletarAtendimento(req.params.id)
        res.json({ affectedRows: affectedRows })
    }
}

module.exports = new AtendimentoController()