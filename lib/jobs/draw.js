'use strict';

var mongoose = require('mongoose'),
    Strategy = mongoose.model('Strategy'),
    Draw = mongoose.model('Draw'),
    Match = mongoose.model('Match');

module.exports = function(kue, jobs) {

  var init_process = function(job, done) {

    // INICIO DE PROCESO DE SORTEO
    // 1. SE SELECCIONA EL 25% DE LAS ESTRATEGIAS CON VOTOS MAYORES A 1
    // 2. SE BUSCAN SOLO LAS DRAW'S CORRESPONDIENTES A LAS ESTRATEGIAS 
    //    SELECCIONADAS DENTRO DEL 25%
    // 3. SE ELIGE AL AZAR DENTRO DE ESTAS AL GANADOR
    // 4. SE GUARDA EL GANADOR

    // LLAMADO EN STRATEGY PARA SACAR EL 25%
    Strategy.selectStrategyForDraw(job.data.match_id, function(err, ids) {
      if (!err) {
        // SE CAMBIA EL ESTADO DEL MATCH A 'EN SORTEO'
        Match.isDraw(job.data.match_id, function(err) {
          if (!err) {
            // SOCKET.IO PARA CAMBIAR A LA TOMBOLA CON LOS 25% ELEGIDO

            // SE CREA EL FINALLY JOB, DANDOLE UN DELAY DE 15 MIN
            jobs.create('finally_draw', {
              ids: ids,
              match_id: job.data.match_id
            })
            .delay(900000)
            .priority('high')
            .save();

          };
        });

      };
    });

    done();
  };

  var finally_process = function(job, done) {

    // TENIENDO LAS IDS DEL 25%, SE LLAMA AL METODO DE SORTEO EN DRAW
    Draw.selectWin(job.data.ids, job.data.match_id);

    done();
  };

  var remove_process = function(job, done) {

    Match.findById(job.data.id)
      .select('draw_log')
      .exec(function(err, match) {
        if (!err) {

          kue.Job.get(match.draw_log, function(err, job) {
            if (!err) {
              job.remove();
            };
          });

        };
      });

    done();
  };

  jobs.process('init_draw', 50, init_process);
  jobs.process('finally_draw', 50, finally_process);
  jobs.process('remove_draw', 50, remove_process);

};