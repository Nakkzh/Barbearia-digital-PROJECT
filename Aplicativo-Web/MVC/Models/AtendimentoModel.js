class Atendimento
{
    nomeCliente
    telefone
    data
    horario
    profissional
    tipoServico

    constructor(nomeCliente, telefone, data, horario, profissional, tipoServico)
    {
        this.nomeCliente = nomeCliente
        this.telefone = telefone
        this.data = data
        this.horario = horario
        this.profissional = profissional
        this.tipoServico = tipoServico
    }
}

module.exports = Atendimento