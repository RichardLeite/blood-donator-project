module.exports = app => {
    app.route('/doadores')
    .post(app.api.doador.save)
    .get(app.api.doador.get)

    app.route('/doadores/:id')
    .put(app.api.doador.save)
    .get(app.api.doador.getById)
//Cuidado com as ordem! 
    app.route('/clinicasHospitais')
    .post(app.api.clinicaHospital.save)
    .get(app.api.clinicaHospital.get)

    app.route('/clinicasHospitais/:id')
    .put(app.api.clinicaHospital.save)
    .get(app.api.clinicaHospital.getById)

    app.route('/agendamentos')
    .post(app.api.agendamento.save)
    .get(app.api.agendamento.get)

    app.route('/agendamentos/:id')
    .put(app.api.agendamento.save)
    .get(app.api.agendamento.getById)
    .delete(app.api.agendamento.remove)

    app.route('/enderecos')
    .post(app.api.endereco.save)
    .get(app.api.endereco.get)

    app.route('/enderecos/:id')
    .put(app.api.endereco.save)
    .get(app.api.endereco.getById)

    app.route('/bairros')
    .post(app.api.bairro.save)
    .get(app.api.bairro.get)

    app.route('/bairros/:id')
    .put(app.api.bairro.save)
    .get(app.api.bairro.getById)

    app.route('/cidades')
    .post(app.api.cidade.save)
    .get(app.api.cidade.get)

    app.route('/cidades/:id')
    .put(app.api.cidade.save)
    .get(app.api.cidade.getById)

    app.route('/estados')
    .post(app.api.estado.save)
    .get(app.api.estado.get)

    app.route('/estados:id')
    .put(app.api.estado.save)
    .get(app.api.estado.getById)

    app.route('/telefones')
    .post(app.api.telefone.save)
    .get(app.api.telefone.get)

    app.route('/telefones:id')
    .put(app.api.telefone.save)
    .get(app.api.telefone.getById)

    // app.route('')
    // .post(app.api..save)
    // .get(app.api..get)

    // app.route('/:id')
    // .put(app.api..save)
    // .get(app.api..getById)

}