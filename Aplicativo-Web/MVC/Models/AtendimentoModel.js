class Atendimento
{
    #id
    #nomeCLiente
    #telefone
    #horarioAtendimento
    #dataAtendimento
    #dataNascimento
    #tipoServico
    #profissional

    constructor(nomeCLiente, telefone, horarioAtendimento, dataAtendimento, dataNascimento, tipoServico, profissional)
    {
        this.#nomeCLiente = nomeCLiente
        this.#telefone = telefone
        this.#horarioAtendimento = horarioAtendimento
        this.#dataAtendimento = dataAtendimento
        this.#dataNascimento = dataNascimento
        this.#tipoServico = tipoServico
        this.#profissional = profissional
    }

    get id()
    {
        return this.#id
    }
    set id(value)
    {
        this.#id = value
    }

    get nomeCLiente()
    {
        return this.#nomeCLiente
    }
    set nomeCLiente(value)
    {
        this.#nomeCLiente = value
    }

    get telefone()
    {
        return this.#telefone
    }   
    set telefone(value)
    {
        this.#telefone = value
    }

    get horarioAtendimento()
    {
        return this.#horarioAtendimento
    }
    set horarioAtendimento(value)
    {
        this.#horarioAtendimento = value
    }

    get dataAtendimento()
    {
        return this.#dataAtendimento
    }
    set dataAtendimento(value)
    {
        this.#dataAtendimento = value
    }

    get dataNascimento()
    {
        return this.#dataNascimento
    }

    get tipoServico()
    {
        return this.#tipoServico
    }
    set tipoServico(value)
    {
        this.#tipoServico = value
    }
    
    get profissional()
    {
        return this.#profissional
    }
    set profissional(value)
    {
        this.#profissional = value
    }

}
module.exports = Atendimento