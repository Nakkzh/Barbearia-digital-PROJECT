const Atendimento = require("../MVC/Models/AtendimentoModel");
const Usuario = require("../SCHEMAS/UsuarioSchema"); // Para o include
const AtendimentoSchema = require("../SCHEMAS/AtendimentoSchema");

class AtendimentoService {

    #atendimentoSchema
    
    constructor() {     
        this.#atendimentoSchema = AtendimentoSchema;
    }

    async buscarAtendimento(id) {   
       const dado = await this.#atendimentoSchema.findOne({
            where: { id: id },
            include: "usuario" // ⬅️ alias correto
        });

        if(!dado) return null;

       const atendimento = new Atendimento(
        dado.nomeCliente,
        dado.telefone,
        dado.horarioAtendimento,
        dado.dataAtendimento,
        dado.dataNascimento,
        dado.tipoServico,
        dado.usuario.username // ⬅️ alias correto
       );

       atendimento.id = dado.id;
       return atendimento;
    }

    async deletarAtendimento(id) {   
        const atendimento = await this.#atendimentoSchema.findOne({
            where: { id: id }
        });

        const affectedRows = await atendimento.destroy();
        return affectedRows;
    }

    async buscarTodosAtendimentos() {   
        const atendimentos = [];
        const dados = await this.#atendimentoSchema.findAll({
            include: "usuario" // ⬅️ alias correto
        });

        for(const atendimento of dados) {            
            const a = new Atendimento(
                atendimento.nomeCliente,
                atendimento.telefone,
                atendimento.horarioAtendimento,
                atendimento.dataAtendimento,
                atendimento.dataNascimento,
                atendimento.tipoServico,
                atendimento.usuario.username // ⬅️ alias correto
            );
            
            a.id = atendimento.id;
            atendimentos.push(a);
        }

        return atendimentos;
    }

    async cadastrarAtendimento(
        nomeCliente,
        telefone,
        horarioAtendimento,
        dataAtendimento,
        dataNascimento,
        tipoServico,
        usuarioId,
        profissional // opcional
    ) {
        // Validação simples
        if (!nomeCliente || !telefone || !horarioAtendimento || !dataAtendimento || !dataNascimento || !tipoServico || !usuarioId) {
            throw new Error("Todos os campos obrigatórios devem ser preenchidos");
        }
    
        // Cria diretamente no Sequelize
        const novoAtendimento = await this.#atendimentoSchema.create({
            nomeCliente,
            telefone,
            horarioAtendimento,
            dataAtendimento,
            dataNascimento,
            tipoServico,
            profissional: profissional || "Profissional padrão",
            usuarioId
        });
    
        return novoAtendimento;
    }

    async atualizarAtendimento(
        id, 
        nomeCliente,
        telefone,
        horarioAtendimento,
        dataAtendimento,
        dataNascimento,
        tipoServico,
        usuarioId // ⬅️ ID do usuário
    ) {
       
        let rows = 0;
        const atendimento = await this.buscarAtendimento(id);

        if(atendimento) {
           
            const model = new Atendimento(
                nomeCliente || atendimento.nomeCliente , 
                telefone || atendimento.telefone,
                horarioAtendimento || atendimento.horarioAtendimento,
                dataAtendimento || atendimento.dataAtendimento,
                dataNascimento || atendimento.dataNascimento,
                tipoServico || atendimento.tipoServico,
                usuarioId || atendimento.profissional     
            );

            const affectedRows = await this.#atendimentoSchema.update({
                    nomeCliente: model.nomeCliente,
                    telefone: model.telefone,
                    horarioAtendimento: model.horarioAtendimento,
                    dataAtendimento: model.dataAtendimento,
                    dataNascimento: model.dataNascimento,
                    tipoServico: model.tipoServico,
                    profissional: model.profissional,
                    usuarioId: model.profissional
                },
                { where: { id: id } }
            );

            rows = affectedRows;
        }       

        return rows;
    }
}

module.exports = AtendimentoService;