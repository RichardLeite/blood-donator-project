module.exports = app => {
    app.route('/doadores')
    .post(app.api.doador.save)
    .get(app.api.doador.get)

    app.route('/doadores/:id')
    .put(app.api.doador.save)
    .get(app.api.doador.getById)

    app.route('/clinicasHospitais')
    .post(app.api.clinicaHospital.save)
    .get(app.api.clinicaHospital.get)

    app.route('/clinicasHospitais/:id')
    .put(app.api.clinicaHospital.save)
    .get(app.api.clinicaHospital.getById)

}