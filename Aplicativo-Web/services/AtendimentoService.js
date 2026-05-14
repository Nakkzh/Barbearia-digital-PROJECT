const Atendimento = require("../MVC/Models/AtendimentoModel")
const AtendimentoSchema = require("../SCHEMAS/AtendimentoSchema")

class AtendimentoService
{
    #atendimentoSchema

    constructor()
    {
        this.#atendimentoSchema = AtendimentoSchema
    }

    async buscarAtendimento(id)
    {
        const dado = await this.#atendimentoSchema.findOne({
            where: { id: id }
        })

        if (!dado)
        {
            return null
        }

        const atendimento = new Atendimento(
            dado.nomeCliente,
            dado.telefone,
            dado.horarioAtendimento,
            dado.dataAtendimento,
            dado.dataNascimento,
            dado.tipoServico,
            dado.profissional
        )

        atendimento.id = dado.id

        return atendimento
    }

    async deletarAtendimento(id)
    {
        const atendimento = await this.#atendimentoSchema.findOne({
            where: { id: id }
        })

        if (!atendimento)
        {
            return 0
        }

        const affectedRows = await atendimento.destroy()

        return affectedRows
    }

    async buscarTodosAtendimentos()
    {
        const atendimentos = []

        const dados = await this.#atendimentoSchema.findAll({})

        for (const dado of dados)
        {
            const atendimento = new Atendimento(
                dado.nomeCliente,
                dado.telefone,
                dado.horarioAtendimento,
                dado.dataAtendimento,
                dado.dataNascimento,
                dado.tipoServico,
                dado.profissional
            )

            atendimento.id = dado.id

            atendimentos.push(atendimento)
        }

        return atendimentos
    }

    async cadastrarAtendimento(
        nomeCliente,
        telefone,
        horarioAtendimento,
        dataAtendimento,
        dataNascimento,
        tipoServico,
        profissional
    )
    {
        const atendimento = await this.#atendimentoSchema.create({
            nomeCliente,
            telefone,
            horarioAtendimento,
            dataAtendimento,
            dataNascimento,
            tipoServico,
            profissional
        })

        return atendimento.id
    }

    async atualizarAtendimento(
        id,
        nomeCliente,
        telefone,
        horarioAtendimento,
        dataAtendimento,
        dataNascimento,
        tipoServico,
        profissional
    )
    {
        const atendimento = await this.#atendimentoSchema.findOne({
            where: { id: id }
        })

        if (!atendimento)
        {
            return 0
        }

        const affectedRows = await this.#atendimentoSchema.update(
            {
                nomeCliente: nomeCliente || atendimento.nomeCliente,
                telefone: telefone || atendimento.telefone,
                horarioAtendimento: horarioAtendimento || atendimento.horarioAtendimento,
                dataAtendimento: dataAtendimento || atendimento.dataAtendimento,
                dataNascimento: dataNascimento || atendimento.dataNascimento,
                tipoServico: tipoServico || atendimento.tipoServico,
                profissional: profissional || atendimento.profissional
            },
            {
                where: { id: id }
            }
        )

        return affectedRows
    }
}

module.exports = AtendimentoService