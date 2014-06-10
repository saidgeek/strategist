(function() {
  "use strict";
  angular.module("strategistApp").factory("Matches", function($resource) {
    return [
      {
        id: 'ARGENTINA_AUSTRALIA',
        label: 'Argentina v/s Australia'
      }, {
        id: 'ARGENTINA_BRASIL',
        label: 'Argentina v/s Brasil'
      }, {
        id: 'ARGENTINA_COREA DEL SUR',
        label: 'Argentina v/s Corea del Sur'
      }, {
        id: 'ARGENTINA_COSTA RICA',
        label: 'Argentina v/s Costa Rica'
      }, {
        id: 'ARGENTINA_ESTADOS UNIDOS',
        label: 'Argentina v/s Estados Unidos'
      }, {
        id: 'ARGENTINA_IRÁN',
        label: 'Argentina v/s Irán'
      }, {
        id: 'ARGENTINA_ITALIA',
        label: 'Argentina v/s Italia'
      }, {
        id: 'ARGENTINA_JAPÓN',
        label: 'Argentina v/s Japón'
      }, {
        id: 'ARGENTINA_HOLANDA',
        label: 'Argentina v/s Holanda'
      }, {
        id: 'ARGENTINA_ALEMANIA',
        label: 'Argentina v/s Alemania'
      }, {
        id: 'ARGENTINA_BÉLGICA',
        label: 'Argentina v/s Bélgica'
      }, {
        id: 'ARGENTINA_COLOMBIA',
        label: 'Argentina v/s Colombia'
      }, {
        id: 'ARGENTINA_SUIZA',
        label: 'Argentina v/s Suiza'
      }, {
        id: 'ARGENTINA_RUSIA',
        label: 'Argentina v/s Rusia'
      }, {
        id: 'ARGENTINA_BOSNIA',
        label: 'Argentina v/s Bosnia'
      }, {
        id: 'ARGENTINA_INGLATERRA',
        label: 'Argentina v/s Inglaterra'
      }, {
        id: 'ARGENTINA_ESPAÑA',
        label: 'Argentina v/s España'
      }, {
        id: 'ARGENTINA_CHILE',
        label: 'Argentina v/s Chile'
      }, {
        id: 'ARGENTINA_ECUADOR',
        label: 'Argentina v/s Ecuador'
      }, {
        id: 'ARGENTINA_HONDURAS',
        label: 'Argentina v/s Honduras'
      }, {
        id: 'ARGENTINA_CAMERÚN',
        label: 'Argentina v/s Camerún'
      }, {
        id: 'ARGENTINA_COSTA DE MARFIL',
        label: 'Argentina v/s Costa de Marfil'
      }, {
        id: 'ARGENTINA_NIGERIA',
        label: 'Argentina v/s Nigeria'
      }, {
        id: 'ARGENTINA_GHANA',
        label: 'Argentina v/s Ghana'
      }, {
        id: 'ARGENTINA_ARGELIA',
        label: 'Argentina v/s Argelia'
      }, {
        id: 'ARGENTINA_PORTUGAL',
        label: 'Argentina v/s Portugal'
      }, {
        id: 'ARGENTINA_FRANCIA',
        label: 'Argentina v/s Francia'
      }, {
        id: 'ARGENTINA_CROACIA',
        label: 'Argentina v/s Croacia'
      }, {
        id: 'ARGENTINA_GRECIA',
        label: 'Argentina v/s Grecia'
      }, {
        id: 'ARGENTINA_MÉXICO',
        label: 'Argentina v/s México'
      }, {
        id: 'ARGENTINA_URUGUAY',
        label: 'Argentina v/s Uruguay'
      }, {
        id: 'AUSTRALIA_ARGENTINA',
        label: 'Australia v/s Argentina'
      }, {
        id: 'AUSTRALIA_BRASIL',
        label: 'Australia v/s Brasil'
      }, {
        id: 'AUSTRALIA_COREA DEL SUR',
        label: 'Australia v/s Corea del Sur'
      }, {
        id: 'AUSTRALIA_COSTA RICA',
        label: 'Australia v/s Costa Rica'
      }, {
        id: 'AUSTRALIA_ESTADOS UNIDOS',
        label: 'Australia v/s Estados Unidos'
      }, {
        id: 'AUSTRALIA_IRÁN',
        label: 'Australia v/s Irán'
      }, {
        id: 'AUSTRALIA_ITALIA',
        label: 'Australia v/s Italia'
      }, {
        id: 'AUSTRALIA_JAPÓN',
        label: 'Australia v/s Japón'
      }, {
        id: 'AUSTRALIA_HOLANDA',
        label: 'Australia v/s Holanda'
      }, {
        id: 'AUSTRALIA_ALEMANIA',
        label: 'Australia v/s Alemania'
      }, {
        id: 'AUSTRALIA_BÉLGICA',
        label: 'Australia v/s Bélgica'
      }, {
        id: 'AUSTRALIA_COLOMBIA',
        label: 'Australia v/s Colombia'
      }, {
        id: 'AUSTRALIA_SUIZA',
        label: 'Australia v/s Suiza'
      }, {
        id: 'AUSTRALIA_RUSIA',
        label: 'Australia v/s Rusia'
      }, {
        id: 'AUSTRALIA_BOSNIA',
        label: 'Australia v/s Bosnia'
      }, {
        id: 'AUSTRALIA_INGLATERRA',
        label: 'Australia v/s Inglaterra'
      }, {
        id: 'AUSTRALIA_ESPAÑA',
        label: 'Australia v/s España'
      }, {
        id: 'AUSTRALIA_CHILE',
        label: 'Australia v/s Chile'
      }, {
        id: 'AUSTRALIA_ECUADOR',
        label: 'Australia v/s Ecuador'
      }, {
        id: 'AUSTRALIA_HONDURAS',
        label: 'Australia v/s Honduras'
      }, {
        id: 'AUSTRALIA_CAMERÚN',
        label: 'Australia v/s Camerún'
      }, {
        id: 'AUSTRALIA_COSTA DE MARFIL',
        label: 'Australia v/s Costa de Marfil'
      }, {
        id: 'AUSTRALIA_NIGERIA',
        label: 'Australia v/s Nigeria'
      }, {
        id: 'AUSTRALIA_GHANA',
        label: 'Australia v/s Ghana'
      }, {
        id: 'AUSTRALIA_ARGELIA',
        label: 'Australia v/s Argelia'
      }, {
        id: 'AUSTRALIA_PORTUGAL',
        label: 'Australia v/s Portugal'
      }, {
        id: 'AUSTRALIA_FRANCIA',
        label: 'Australia v/s Francia'
      }, {
        id: 'AUSTRALIA_CROACIA',
        label: 'Australia v/s Croacia'
      }, {
        id: 'AUSTRALIA_GRECIA',
        label: 'Australia v/s Grecia'
      }, {
        id: 'AUSTRALIA_MÉXICO',
        label: 'Australia v/s México'
      }, {
        id: 'AUSTRALIA_URUGUAY',
        label: 'Australia v/s Uruguay'
      }, {
        id: 'BRASIL_ARGENTINA',
        label: 'Brasil v/s Argentina'
      }, {
        id: 'BRASIL_AUSTRALIA',
        label: 'Brasil v/s Australia'
      }, {
        id: 'BRASIL_COREA DEL SUR',
        label: 'Brasil v/s Corea del Sur'
      }, {
        id: 'BRASIL_COSTA RICA',
        label: 'Brasil v/s Costa Rica'
      }, {
        id: 'BRASIL_ESTADOS UNIDOS',
        label: 'Brasil v/s Estados Unidos'
      }, {
        id: 'BRASIL_IRÁN',
        label: 'Brasil v/s Irán'
      }, {
        id: 'BRASIL_ITALIA',
        label: 'Brasil v/s Italia'
      }, {
        id: 'BRASIL_JAPÓN',
        label: 'Brasil v/s Japón'
      }, {
        id: 'BRASIL_HOLANDA',
        label: 'Brasil v/s Holanda'
      }, {
        id: 'BRASIL_ALEMANIA',
        label: 'Brasil v/s Alemania'
      }, {
        id: 'BRASIL_BÉLGICA',
        label: 'Brasil v/s Bélgica'
      }, {
        id: 'BRASIL_COLOMBIA',
        label: 'Brasil v/s Colombia'
      }, {
        id: 'BRASIL_SUIZA',
        label: 'Brasil v/s Suiza'
      }, {
        id: 'BRASIL_RUSIA',
        label: 'Brasil v/s Rusia'
      }, {
        id: 'BRASIL_BOSNIA',
        label: 'Brasil v/s Bosnia'
      }, {
        id: 'BRASIL_INGLATERRA',
        label: 'Brasil v/s Inglaterra'
      }, {
        id: 'BRASIL_ESPAÑA',
        label: 'Brasil v/s España'
      }, {
        id: 'BRASIL_CHILE',
        label: 'Brasil v/s Chile'
      }, {
        id: 'BRASIL_ECUADOR',
        label: 'Brasil v/s Ecuador'
      }, {
        id: 'BRASIL_HONDURAS',
        label: 'Brasil v/s Honduras'
      }, {
        id: 'BRASIL_CAMERÚN',
        label: 'Brasil v/s Camerún'
      }, {
        id: 'BRASIL_COSTA DE MARFIL',
        label: 'Brasil v/s Costa de Marfil'
      }, {
        id: 'BRASIL_NIGERIA',
        label: 'Brasil v/s Nigeria'
      }, {
        id: 'BRASIL_GHANA',
        label: 'Brasil v/s Ghana'
      }, {
        id: 'BRASIL_ARGELIA',
        label: 'Brasil v/s Argelia'
      }, {
        id: 'BRASIL_PORTUGAL',
        label: 'Brasil v/s Portugal'
      }, {
        id: 'BRASIL_FRANCIA',
        label: 'Brasil v/s Francia'
      }, {
        id: 'BRASIL_CROACIA',
        label: 'Brasil v/s Croacia'
      }, {
        id: 'BRASIL_GRECIA',
        label: 'Brasil v/s Grecia'
      }, {
        id: 'BRASIL_MÉXICO',
        label: 'Brasil v/s México'
      }, {
        id: 'BRASIL_URUGUAY',
        label: 'Brasil v/s Uruguay'
      }, {
        id: 'COREA DEL SUR_ARGENTINA',
        label: 'Corea del Sur v/s Argentina'
      }, {
        id: 'COREA DEL SUR_AUSTRALIA',
        label: 'Corea del Sur v/s Australia'
      }, {
        id: 'COREA DEL SUR_BRASIL',
        label: 'Corea del Sur v/s Brasil'
      }, {
        id: 'COREA DEL SUR_COSTA RICA',
        label: 'Corea del Sur v/s Costa Rica'
      }, {
        id: 'COREA DEL SUR_ESTADOS UNIDOS',
        label: 'Corea del Sur v/s Estados Unidos'
      }, {
        id: 'COREA DEL SUR_IRÁN',
        label: 'Corea del Sur v/s Irán'
      }, {
        id: 'COREA DEL SUR_ITALIA',
        label: 'Corea del Sur v/s Italia'
      }, {
        id: 'COREA DEL SUR_JAPÓN',
        label: 'Corea del Sur v/s Japón'
      }, {
        id: 'COREA DEL SUR_HOLANDA',
        label: 'Corea del Sur v/s Holanda'
      }, {
        id: 'COREA DEL SUR_ALEMANIA',
        label: 'Corea del Sur v/s Alemania'
      }, {
        id: 'COREA DEL SUR_BÉLGICA',
        label: 'Corea del Sur v/s Bélgica'
      }, {
        id: 'COREA DEL SUR_COLOMBIA',
        label: 'Corea del Sur v/s Colombia'
      }, {
        id: 'COREA DEL SUR_SUIZA',
        label: 'Corea del Sur v/s Suiza'
      }, {
        id: 'COREA DEL SUR_RUSIA',
        label: 'Corea del Sur v/s Rusia'
      }, {
        id: 'COREA DEL SUR_BOSNIA',
        label: 'Corea del Sur v/s Bosnia'
      }, {
        id: 'COREA DEL SUR_INGLATERRA',
        label: 'Corea del Sur v/s Inglaterra'
      }, {
        id: 'COREA DEL SUR_ESPAÑA',
        label: 'Corea del Sur v/s España'
      }, {
        id: 'COREA DEL SUR_CHILE',
        label: 'Corea del Sur v/s Chile'
      }, {
        id: 'COREA DEL SUR_ECUADOR',
        label: 'Corea del Sur v/s Ecuador'
      }, {
        id: 'COREA DEL SUR_HONDURAS',
        label: 'Corea del Sur v/s Honduras'
      }, {
        id: 'COREA DEL SUR_CAMERÚN',
        label: 'Corea del Sur v/s Camerún'
      }, {
        id: 'COREA DEL SUR_COSTA DE MARFIL',
        label: 'Corea del Sur v/s Costa de Marfil'
      }, {
        id: 'COREA DEL SUR_NIGERIA',
        label: 'Corea del Sur v/s Nigeria'
      }, {
        id: 'COREA DEL SUR_GHANA',
        label: 'Corea del Sur v/s Ghana'
      }, {
        id: 'COREA DEL SUR_ARGELIA',
        label: 'Corea del Sur v/s Argelia'
      }, {
        id: 'COREA DEL SUR_PORTUGAL',
        label: 'Corea del Sur v/s Portugal'
      }, {
        id: 'COREA DEL SUR_FRANCIA',
        label: 'Corea del Sur v/s Francia'
      }, {
        id: 'COREA DEL SUR_CROACIA',
        label: 'Corea del Sur v/s Croacia'
      }, {
        id: 'COREA DEL SUR_GRECIA',
        label: 'Corea del Sur v/s Grecia'
      }, {
        id: 'COREA DEL SUR_MÉXICO',
        label: 'Corea del Sur v/s México'
      }, {
        id: 'COREA DEL SUR_URUGUAY',
        label: 'Corea del Sur v/s Uruguay'
      }, {
        id: 'COSTA RICA_ARGENTINA',
        label: 'Costa Rica v/s Argentina'
      }, {
        id: 'COSTA RICA_AUSTRALIA',
        label: 'Costa Rica v/s Australia'
      }, {
        id: 'COSTA RICA_BRASIL',
        label: 'Costa Rica v/s Brasil'
      }, {
        id: 'COSTA RICA_COREA DEL SUR',
        label: 'Costa Rica v/s Corea del Sur'
      }, {
        id: 'COSTA RICA_ESTADOS UNIDOS',
        label: 'Costa Rica v/s Estados Unidos'
      }, {
        id: 'COSTA RICA_IRÁN',
        label: 'Costa Rica v/s Irán'
      }, {
        id: 'COSTA RICA_ITALIA',
        label: 'Costa Rica v/s Italia'
      }, {
        id: 'COSTA RICA_JAPÓN',
        label: 'Costa Rica v/s Japón'
      }, {
        id: 'COSTA RICA_HOLANDA',
        label: 'Costa Rica v/s Holanda'
      }, {
        id: 'COSTA RICA_ALEMANIA',
        label: 'Costa Rica v/s Alemania'
      }, {
        id: 'COSTA RICA_BÉLGICA',
        label: 'Costa Rica v/s Bélgica'
      }, {
        id: 'COSTA RICA_COLOMBIA',
        label: 'Costa Rica v/s Colombia'
      }, {
        id: 'COSTA RICA_SUIZA',
        label: 'Costa Rica v/s Suiza'
      }, {
        id: 'COSTA RICA_RUSIA',
        label: 'Costa Rica v/s Rusia'
      }, {
        id: 'COSTA RICA_BOSNIA',
        label: 'Costa Rica v/s Bosnia'
      }, {
        id: 'COSTA RICA_INGLATERRA',
        label: 'Costa Rica v/s Inglaterra'
      }, {
        id: 'COSTA RICA_ESPAÑA',
        label: 'Costa Rica v/s España'
      }, {
        id: 'COSTA RICA_CHILE',
        label: 'Costa Rica v/s Chile'
      }, {
        id: 'COSTA RICA_ECUADOR',
        label: 'Costa Rica v/s Ecuador'
      }, {
        id: 'COSTA RICA_HONDURAS',
        label: 'Costa Rica v/s Honduras'
      }, {
        id: 'COSTA RICA_CAMERÚN',
        label: 'Costa Rica v/s Camerún'
      }, {
        id: 'COSTA RICA_COSTA DE MARFIL',
        label: 'Costa Rica v/s Costa de Marfil'
      }, {
        id: 'COSTA RICA_NIGERIA',
        label: 'Costa Rica v/s Nigeria'
      }, {
        id: 'COSTA RICA_GHANA',
        label: 'Costa Rica v/s Ghana'
      }, {
        id: 'COSTA RICA_ARGELIA',
        label: 'Costa Rica v/s Argelia'
      }, {
        id: 'COSTA RICA_PORTUGAL',
        label: 'Costa Rica v/s Portugal'
      }, {
        id: 'COSTA RICA_FRANCIA',
        label: 'Costa Rica v/s Francia'
      }, {
        id: 'COSTA RICA_CROACIA',
        label: 'Costa Rica v/s Croacia'
      }, {
        id: 'COSTA RICA_GRECIA',
        label: 'Costa Rica v/s Grecia'
      }, {
        id: 'COSTA RICA_MÉXICO',
        label: 'Costa Rica v/s México'
      }, {
        id: 'COSTA RICA_URUGUAY',
        label: 'Costa Rica v/s Uruguay'
      }, {
        id: 'ESTADOS UNIDOS_ARGENTINA',
        label: 'Estados Unidos v/s Argentina'
      }, {
        id: 'ESTADOS UNIDOS_AUSTRALIA',
        label: 'Estados Unidos v/s Australia'
      }, {
        id: 'ESTADOS UNIDOS_BRASIL',
        label: 'Estados Unidos v/s Brasil'
      }, {
        id: 'ESTADOS UNIDOS_COREA DEL SUR',
        label: 'Estados Unidos v/s Corea del Sur'
      }, {
        id: 'ESTADOS UNIDOS_COSTA RICA',
        label: 'Estados Unidos v/s Costa Rica'
      }, {
        id: 'ESTADOS UNIDOS_IRÁN',
        label: 'Estados Unidos v/s Irán'
      }, {
        id: 'ESTADOS UNIDOS_ITALIA',
        label: 'Estados Unidos v/s Italia'
      }, {
        id: 'ESTADOS UNIDOS_JAPÓN',
        label: 'Estados Unidos v/s Japón'
      }, {
        id: 'ESTADOS UNIDOS_HOLANDA',
        label: 'Estados Unidos v/s Holanda'
      }, {
        id: 'ESTADOS UNIDOS_ALEMANIA',
        label: 'Estados Unidos v/s Alemania'
      }, {
        id: 'ESTADOS UNIDOS_BÉLGICA',
        label: 'Estados Unidos v/s Bélgica'
      }, {
        id: 'ESTADOS UNIDOS_COLOMBIA',
        label: 'Estados Unidos v/s Colombia'
      }, {
        id: 'ESTADOS UNIDOS_SUIZA',
        label: 'Estados Unidos v/s Suiza'
      }, {
        id: 'ESTADOS UNIDOS_RUSIA',
        label: 'Estados Unidos v/s Rusia'
      }, {
        id: 'ESTADOS UNIDOS_BOSNIA',
        label: 'Estados Unidos v/s Bosnia'
      }, {
        id: 'ESTADOS UNIDOS_INGLATERRA',
        label: 'Estados Unidos v/s Inglaterra'
      }, {
        id: 'ESTADOS UNIDOS_ESPAÑA',
        label: 'Estados Unidos v/s España'
      }, {
        id: 'ESTADOS UNIDOS_CHILE',
        label: 'Estados Unidos v/s Chile'
      }, {
        id: 'ESTADOS UNIDOS_ECUADOR',
        label: 'Estados Unidos v/s Ecuador'
      }, {
        id: 'ESTADOS UNIDOS_HONDURAS',
        label: 'Estados Unidos v/s Honduras'
      }, {
        id: 'ESTADOS UNIDOS_CAMERÚN',
        label: 'Estados Unidos v/s Camerún'
      }, {
        id: 'ESTADOS UNIDOS_COSTA DE MARFIL',
        label: 'Estados Unidos v/s Costa de Marfil'
      }, {
        id: 'ESTADOS UNIDOS_NIGERIA',
        label: 'Estados Unidos v/s Nigeria'
      }, {
        id: 'ESTADOS UNIDOS_GHANA',
        label: 'Estados Unidos v/s Ghana'
      }, {
        id: 'ESTADOS UNIDOS_ARGELIA',
        label: 'Estados Unidos v/s Argelia'
      }, {
        id: 'ESTADOS UNIDOS_PORTUGAL',
        label: 'Estados Unidos v/s Portugal'
      }, {
        id: 'ESTADOS UNIDOS_FRANCIA',
        label: 'Estados Unidos v/s Francia'
      }, {
        id: 'ESTADOS UNIDOS_CROACIA',
        label: 'Estados Unidos v/s Croacia'
      }, {
        id: 'ESTADOS UNIDOS_GRECIA',
        label: 'Estados Unidos v/s Grecia'
      }, {
        id: 'ESTADOS UNIDOS_MÉXICO',
        label: 'Estados Unidos v/s México'
      }, {
        id: 'ESTADOS UNIDOS_URUGUAY',
        label: 'Estados Unidos v/s Uruguay'
      }, {
        id: 'IRÁN_ARGENTINA',
        label: 'Irán v/s Argentina'
      }, {
        id: 'IRÁN_AUSTRALIA',
        label: 'Irán v/s Australia'
      }, {
        id: 'IRÁN_BRASIL',
        label: 'Irán v/s Brasil'
      }, {
        id: 'IRÁN_COREA DEL SUR',
        label: 'Irán v/s Corea del Sur'
      }, {
        id: 'IRÁN_COSTA RICA',
        label: 'Irán v/s Costa Rica'
      }, {
        id: 'IRÁN_ESTADOS UNIDOS',
        label: 'Irán v/s Estados Unidos'
      }, {
        id: 'IRÁN_ITALIA',
        label: 'Irán v/s Italia'
      }, {
        id: 'IRÁN_JAPÓN',
        label: 'Irán v/s Japón'
      }, {
        id: 'IRÁN_HOLANDA',
        label: 'Irán v/s Holanda'
      }, {
        id: 'IRÁN_ALEMANIA',
        label: 'Irán v/s Alemania'
      }, {
        id: 'IRÁN_BÉLGICA',
        label: 'Irán v/s Bélgica'
      }, {
        id: 'IRÁN_COLOMBIA',
        label: 'Irán v/s Colombia'
      }, {
        id: 'IRÁN_SUIZA',
        label: 'Irán v/s Suiza'
      }, {
        id: 'IRÁN_RUSIA',
        label: 'Irán v/s Rusia'
      }, {
        id: 'IRÁN_BOSNIA',
        label: 'Irán v/s Bosnia'
      }, {
        id: 'IRÁN_INGLATERRA',
        label: 'Irán v/s Inglaterra'
      }, {
        id: 'IRÁN_ESPAÑA',
        label: 'Irán v/s España'
      }, {
        id: 'IRÁN_CHILE',
        label: 'Irán v/s Chile'
      }, {
        id: 'IRÁN_ECUADOR',
        label: 'Irán v/s Ecuador'
      }, {
        id: 'IRÁN_HONDURAS',
        label: 'Irán v/s Honduras'
      }, {
        id: 'IRÁN_CAMERÚN',
        label: 'Irán v/s Camerún'
      }, {
        id: 'IRÁN_COSTA DE MARFIL',
        label: 'Irán v/s Costa de Marfil'
      }, {
        id: 'IRÁN_NIGERIA',
        label: 'Irán v/s Nigeria'
      }, {
        id: 'IRÁN_GHANA',
        label: 'Irán v/s Ghana'
      }, {
        id: 'IRÁN_ARGELIA',
        label: 'Irán v/s Argelia'
      }, {
        id: 'IRÁN_PORTUGAL',
        label: 'Irán v/s Portugal'
      }, {
        id: 'IRÁN_FRANCIA',
        label: 'Irán v/s Francia'
      }, {
        id: 'IRÁN_CROACIA',
        label: 'Irán v/s Croacia'
      }, {
        id: 'IRÁN_GRECIA',
        label: 'Irán v/s Grecia'
      }, {
        id: 'IRÁN_MÉXICO',
        label: 'Irán v/s México'
      }, {
        id: 'IRÁN_URUGUAY',
        label: 'Irán v/s Uruguay'
      }, {
        id: 'ITALIA_ARGENTINA',
        label: 'Italia v/s Argentina'
      }, {
        id: 'ITALIA_AUSTRALIA',
        label: 'Italia v/s Australia'
      }, {
        id: 'ITALIA_BRASIL',
        label: 'Italia v/s Brasil'
      }, {
        id: 'ITALIA_COREA DEL SUR',
        label: 'Italia v/s Corea del Sur'
      }, {
        id: 'ITALIA_COSTA RICA',
        label: 'Italia v/s Costa Rica'
      }, {
        id: 'ITALIA_ESTADOS UNIDOS',
        label: 'Italia v/s Estados Unidos'
      }, {
        id: 'ITALIA_IRÁN',
        label: 'Italia v/s Irán'
      }, {
        id: 'ITALIA_JAPÓN',
        label: 'Italia v/s Japón'
      }, {
        id: 'ITALIA_HOLANDA',
        label: 'Italia v/s Holanda'
      }, {
        id: 'ITALIA_ALEMANIA',
        label: 'Italia v/s Alemania'
      }, {
        id: 'ITALIA_BÉLGICA',
        label: 'Italia v/s Bélgica'
      }, {
        id: 'ITALIA_COLOMBIA',
        label: 'Italia v/s Colombia'
      }, {
        id: 'ITALIA_SUIZA',
        label: 'Italia v/s Suiza'
      }, {
        id: 'ITALIA_RUSIA',
        label: 'Italia v/s Rusia'
      }, {
        id: 'ITALIA_BOSNIA',
        label: 'Italia v/s Bosnia'
      }, {
        id: 'ITALIA_INGLATERRA',
        label: 'Italia v/s Inglaterra'
      }, {
        id: 'ITALIA_ESPAÑA',
        label: 'Italia v/s España'
      }, {
        id: 'ITALIA_CHILE',
        label: 'Italia v/s Chile'
      }, {
        id: 'ITALIA_ECUADOR',
        label: 'Italia v/s Ecuador'
      }, {
        id: 'ITALIA_HONDURAS',
        label: 'Italia v/s Honduras'
      }, {
        id: 'ITALIA_CAMERÚN',
        label: 'Italia v/s Camerún'
      }, {
        id: 'ITALIA_COSTA DE MARFIL',
        label: 'Italia v/s Costa de Marfil'
      }, {
        id: 'ITALIA_NIGERIA',
        label: 'Italia v/s Nigeria'
      }, {
        id: 'ITALIA_GHANA',
        label: 'Italia v/s Ghana'
      }, {
        id: 'ITALIA_ARGELIA',
        label: 'Italia v/s Argelia'
      }, {
        id: 'ITALIA_PORTUGAL',
        label: 'Italia v/s Portugal'
      }, {
        id: 'ITALIA_FRANCIA',
        label: 'Italia v/s Francia'
      }, {
        id: 'ITALIA_CROACIA',
        label: 'Italia v/s Croacia'
      }, {
        id: 'ITALIA_GRECIA',
        label: 'Italia v/s Grecia'
      }, {
        id: 'ITALIA_MÉXICO',
        label: 'Italia v/s México'
      }, {
        id: 'ITALIA_URUGUAY',
        label: 'Italia v/s Uruguay'
      }, {
        id: 'JAPÓN_ARGENTINA',
        label: 'Japón v/s Argentina'
      }, {
        id: 'JAPÓN_AUSTRALIA',
        label: 'Japón v/s Australia'
      }, {
        id: 'JAPÓN_BRASIL',
        label: 'Japón v/s Brasil'
      }, {
        id: 'JAPÓN_COREA DEL SUR',
        label: 'Japón v/s Corea del Sur'
      }, {
        id: 'JAPÓN_COSTA RICA',
        label: 'Japón v/s Costa Rica'
      }, {
        id: 'JAPÓN_ESTADOS UNIDOS',
        label: 'Japón v/s Estados Unidos'
      }, {
        id: 'JAPÓN_IRÁN',
        label: 'Japón v/s Irán'
      }, {
        id: 'JAPÓN_ITALIA',
        label: 'Japón v/s Italia'
      }, {
        id: 'JAPÓN_HOLANDA',
        label: 'Japón v/s Holanda'
      }, {
        id: 'JAPÓN_ALEMANIA',
        label: 'Japón v/s Alemania'
      }, {
        id: 'JAPÓN_BÉLGICA',
        label: 'Japón v/s Bélgica'
      }, {
        id: 'JAPÓN_COLOMBIA',
        label: 'Japón v/s Colombia'
      }, {
        id: 'JAPÓN_SUIZA',
        label: 'Japón v/s Suiza'
      }, {
        id: 'JAPÓN_RUSIA',
        label: 'Japón v/s Rusia'
      }, {
        id: 'JAPÓN_BOSNIA',
        label: 'Japón v/s Bosnia'
      }, {
        id: 'JAPÓN_INGLATERRA',
        label: 'Japón v/s Inglaterra'
      }, {
        id: 'JAPÓN_ESPAÑA',
        label: 'Japón v/s España'
      }, {
        id: 'JAPÓN_CHILE',
        label: 'Japón v/s Chile'
      }, {
        id: 'JAPÓN_ECUADOR',
        label: 'Japón v/s Ecuador'
      }, {
        id: 'JAPÓN_HONDURAS',
        label: 'Japón v/s Honduras'
      }, {
        id: 'JAPÓN_CAMERÚN',
        label: 'Japón v/s Camerún'
      }, {
        id: 'JAPÓN_COSTA DE MARFIL',
        label: 'Japón v/s Costa de Marfil'
      }, {
        id: 'JAPÓN_NIGERIA',
        label: 'Japón v/s Nigeria'
      }, {
        id: 'JAPÓN_GHANA',
        label: 'Japón v/s Ghana'
      }, {
        id: 'JAPÓN_ARGELIA',
        label: 'Japón v/s Argelia'
      }, {
        id: 'JAPÓN_PORTUGAL',
        label: 'Japón v/s Portugal'
      }, {
        id: 'JAPÓN_FRANCIA',
        label: 'Japón v/s Francia'
      }, {
        id: 'JAPÓN_CROACIA',
        label: 'Japón v/s Croacia'
      }, {
        id: 'JAPÓN_GRECIA',
        label: 'Japón v/s Grecia'
      }, {
        id: 'JAPÓN_MÉXICO',
        label: 'Japón v/s México'
      }, {
        id: 'JAPÓN_URUGUAY',
        label: 'Japón v/s Uruguay'
      }, {
        id: 'HOLANDA_ARGENTINA',
        label: 'Holanda v/s Argentina'
      }, {
        id: 'HOLANDA_AUSTRALIA',
        label: 'Holanda v/s Australia'
      }, {
        id: 'HOLANDA_BRASIL',
        label: 'Holanda v/s Brasil'
      }, {
        id: 'HOLANDA_COREA DEL SUR',
        label: 'Holanda v/s Corea del Sur'
      }, {
        id: 'HOLANDA_COSTA RICA',
        label: 'Holanda v/s Costa Rica'
      }, {
        id: 'HOLANDA_ESTADOS UNIDOS',
        label: 'Holanda v/s Estados Unidos'
      }, {
        id: 'HOLANDA_IRÁN',
        label: 'Holanda v/s Irán'
      }, {
        id: 'HOLANDA_ITALIA',
        label: 'Holanda v/s Italia'
      }, {
        id: 'HOLANDA_JAPÓN',
        label: 'Holanda v/s Japón'
      }, {
        id: 'HOLANDA_ALEMANIA',
        label: 'Holanda v/s Alemania'
      }, {
        id: 'HOLANDA_BÉLGICA',
        label: 'Holanda v/s Bélgica'
      }, {
        id: 'HOLANDA_COLOMBIA',
        label: 'Holanda v/s Colombia'
      }, {
        id: 'HOLANDA_SUIZA',
        label: 'Holanda v/s Suiza'
      }, {
        id: 'HOLANDA_RUSIA',
        label: 'Holanda v/s Rusia'
      }, {
        id: 'HOLANDA_BOSNIA',
        label: 'Holanda v/s Bosnia'
      }, {
        id: 'HOLANDA_INGLATERRA',
        label: 'Holanda v/s Inglaterra'
      }, {
        id: 'HOLANDA_ESPAÑA',
        label: 'Holanda v/s España'
      }, {
        id: 'HOLANDA_CHILE',
        label: 'Holanda v/s Chile'
      }, {
        id: 'HOLANDA_ECUADOR',
        label: 'Holanda v/s Ecuador'
      }, {
        id: 'HOLANDA_HONDURAS',
        label: 'Holanda v/s Honduras'
      }, {
        id: 'HOLANDA_CAMERÚN',
        label: 'Holanda v/s Camerún'
      }, {
        id: 'HOLANDA_COSTA DE MARFIL',
        label: 'Holanda v/s Costa de Marfil'
      }, {
        id: 'HOLANDA_NIGERIA',
        label: 'Holanda v/s Nigeria'
      }, {
        id: 'HOLANDA_GHANA',
        label: 'Holanda v/s Ghana'
      }, {
        id: 'HOLANDA_ARGELIA',
        label: 'Holanda v/s Argelia'
      }, {
        id: 'HOLANDA_PORTUGAL',
        label: 'Holanda v/s Portugal'
      }, {
        id: 'HOLANDA_FRANCIA',
        label: 'Holanda v/s Francia'
      }, {
        id: 'HOLANDA_CROACIA',
        label: 'Holanda v/s Croacia'
      }, {
        id: 'HOLANDA_GRECIA',
        label: 'Holanda v/s Grecia'
      }, {
        id: 'HOLANDA_MÉXICO',
        label: 'Holanda v/s México'
      }, {
        id: 'HOLANDA_URUGUAY',
        label: 'Holanda v/s Uruguay'
      }, {
        id: 'ALEMANIA_ARGENTINA',
        label: 'Alemania v/s Argentina'
      }, {
        id: 'ALEMANIA_AUSTRALIA',
        label: 'Alemania v/s Australia'
      }, {
        id: 'ALEMANIA_BRASIL',
        label: 'Alemania v/s Brasil'
      }, {
        id: 'ALEMANIA_COREA DEL SUR',
        label: 'Alemania v/s Corea del Sur'
      }, {
        id: 'ALEMANIA_COSTA RICA',
        label: 'Alemania v/s Costa Rica'
      }, {
        id: 'ALEMANIA_ESTADOS UNIDOS',
        label: 'Alemania v/s Estados Unidos'
      }, {
        id: 'ALEMANIA_IRÁN',
        label: 'Alemania v/s Irán'
      }, {
        id: 'ALEMANIA_ITALIA',
        label: 'Alemania v/s Italia'
      }, {
        id: 'ALEMANIA_JAPÓN',
        label: 'Alemania v/s Japón'
      }, {
        id: 'ALEMANIA_HOLANDA',
        label: 'Alemania v/s Holanda'
      }, {
        id: 'ALEMANIA_BÉLGICA',
        label: 'Alemania v/s Bélgica'
      }, {
        id: 'ALEMANIA_COLOMBIA',
        label: 'Alemania v/s Colombia'
      }, {
        id: 'ALEMANIA_SUIZA',
        label: 'Alemania v/s Suiza'
      }, {
        id: 'ALEMANIA_RUSIA',
        label: 'Alemania v/s Rusia'
      }, {
        id: 'ALEMANIA_BOSNIA',
        label: 'Alemania v/s Bosnia'
      }, {
        id: 'ALEMANIA_INGLATERRA',
        label: 'Alemania v/s Inglaterra'
      }, {
        id: 'ALEMANIA_ESPAÑA',
        label: 'Alemania v/s España'
      }, {
        id: 'ALEMANIA_CHILE',
        label: 'Alemania v/s Chile'
      }, {
        id: 'ALEMANIA_ECUADOR',
        label: 'Alemania v/s Ecuador'
      }, {
        id: 'ALEMANIA_HONDURAS',
        label: 'Alemania v/s Honduras'
      }, {
        id: 'ALEMANIA_CAMERÚN',
        label: 'Alemania v/s Camerún'
      }, {
        id: 'ALEMANIA_COSTA DE MARFIL',
        label: 'Alemania v/s Costa de Marfil'
      }, {
        id: 'ALEMANIA_NIGERIA',
        label: 'Alemania v/s Nigeria'
      }, {
        id: 'ALEMANIA_GHANA',
        label: 'Alemania v/s Ghana'
      }, {
        id: 'ALEMANIA_ARGELIA',
        label: 'Alemania v/s Argelia'
      }, {
        id: 'ALEMANIA_PORTUGAL',
        label: 'Alemania v/s Portugal'
      }, {
        id: 'ALEMANIA_FRANCIA',
        label: 'Alemania v/s Francia'
      }, {
        id: 'ALEMANIA_CROACIA',
        label: 'Alemania v/s Croacia'
      }, {
        id: 'ALEMANIA_GRECIA',
        label: 'Alemania v/s Grecia'
      }, {
        id: 'ALEMANIA_MÉXICO',
        label: 'Alemania v/s México'
      }, {
        id: 'ALEMANIA_URUGUAY',
        label: 'Alemania v/s Uruguay'
      }, {
        id: 'BÉLGICA_ARGENTINA',
        label: 'Bélgica v/s Argentina'
      }, {
        id: 'BÉLGICA_AUSTRALIA',
        label: 'Bélgica v/s Australia'
      }, {
        id: 'BÉLGICA_BRASIL',
        label: 'Bélgica v/s Brasil'
      }, {
        id: 'BÉLGICA_COREA DEL SUR',
        label: 'Bélgica v/s Corea del Sur'
      }, {
        id: 'BÉLGICA_COSTA RICA',
        label: 'Bélgica v/s Costa Rica'
      }, {
        id: 'BÉLGICA_ESTADOS UNIDOS',
        label: 'Bélgica v/s Estados Unidos'
      }, {
        id: 'BÉLGICA_IRÁN',
        label: 'Bélgica v/s Irán'
      }, {
        id: 'BÉLGICA_ITALIA',
        label: 'Bélgica v/s Italia'
      }, {
        id: 'BÉLGICA_JAPÓN',
        label: 'Bélgica v/s Japón'
      }, {
        id: 'BÉLGICA_HOLANDA',
        label: 'Bélgica v/s Holanda'
      }, {
        id: 'BÉLGICA_ALEMANIA',
        label: 'Bélgica v/s Alemania'
      }, {
        id: 'BÉLGICA_COLOMBIA',
        label: 'Bélgica v/s Colombia'
      }, {
        id: 'BÉLGICA_SUIZA',
        label: 'Bélgica v/s Suiza'
      }, {
        id: 'BÉLGICA_RUSIA',
        label: 'Bélgica v/s Rusia'
      }, {
        id: 'BÉLGICA_BOSNIA',
        label: 'Bélgica v/s Bosnia'
      }, {
        id: 'BÉLGICA_INGLATERRA',
        label: 'Bélgica v/s Inglaterra'
      }, {
        id: 'BÉLGICA_ESPAÑA',
        label: 'Bélgica v/s España'
      }, {
        id: 'BÉLGICA_CHILE',
        label: 'Bélgica v/s Chile'
      }, {
        id: 'BÉLGICA_ECUADOR',
        label: 'Bélgica v/s Ecuador'
      }, {
        id: 'BÉLGICA_HONDURAS',
        label: 'Bélgica v/s Honduras'
      }, {
        id: 'BÉLGICA_CAMERÚN',
        label: 'Bélgica v/s Camerún'
      }, {
        id: 'BÉLGICA_COSTA DE MARFIL',
        label: 'Bélgica v/s Costa de Marfil'
      }, {
        id: 'BÉLGICA_NIGERIA',
        label: 'Bélgica v/s Nigeria'
      }, {
        id: 'BÉLGICA_GHANA',
        label: 'Bélgica v/s Ghana'
      }, {
        id: 'BÉLGICA_ARGELIA',
        label: 'Bélgica v/s Argelia'
      }, {
        id: 'BÉLGICA_PORTUGAL',
        label: 'Bélgica v/s Portugal'
      }, {
        id: 'BÉLGICA_FRANCIA',
        label: 'Bélgica v/s Francia'
      }, {
        id: 'BÉLGICA_CROACIA',
        label: 'Bélgica v/s Croacia'
      }, {
        id: 'BÉLGICA_GRECIA',
        label: 'Bélgica v/s Grecia'
      }, {
        id: 'BÉLGICA_MÉXICO',
        label: 'Bélgica v/s México'
      }, {
        id: 'BÉLGICA_URUGUAY',
        label: 'Bélgica v/s Uruguay'
      }, {
        id: 'COLOMBIA_ARGENTINA',
        label: 'Colombia v/s Argentina'
      }, {
        id: 'COLOMBIA_AUSTRALIA',
        label: 'Colombia v/s Australia'
      }, {
        id: 'COLOMBIA_BRASIL',
        label: 'Colombia v/s Brasil'
      }, {
        id: 'COLOMBIA_COREA DEL SUR',
        label: 'Colombia v/s Corea del Sur'
      }, {
        id: 'COLOMBIA_COSTA RICA',
        label: 'Colombia v/s Costa Rica'
      }, {
        id: 'COLOMBIA_ESTADOS UNIDOS',
        label: 'Colombia v/s Estados Unidos'
      }, {
        id: 'COLOMBIA_IRÁN',
        label: 'Colombia v/s Irán'
      }, {
        id: 'COLOMBIA_ITALIA',
        label: 'Colombia v/s Italia'
      }, {
        id: 'COLOMBIA_JAPÓN',
        label: 'Colombia v/s Japón'
      }, {
        id: 'COLOMBIA_HOLANDA',
        label: 'Colombia v/s Holanda'
      }, {
        id: 'COLOMBIA_ALEMANIA',
        label: 'Colombia v/s Alemania'
      }, {
        id: 'COLOMBIA_BÉLGICA',
        label: 'Colombia v/s Bélgica'
      }, {
        id: 'COLOMBIA_SUIZA',
        label: 'Colombia v/s Suiza'
      }, {
        id: 'COLOMBIA_RUSIA',
        label: 'Colombia v/s Rusia'
      }, {
        id: 'COLOMBIA_BOSNIA',
        label: 'Colombia v/s Bosnia'
      }, {
        id: 'COLOMBIA_INGLATERRA',
        label: 'Colombia v/s Inglaterra'
      }, {
        id: 'COLOMBIA_ESPAÑA',
        label: 'Colombia v/s España'
      }, {
        id: 'COLOMBIA_CHILE',
        label: 'Colombia v/s Chile'
      }, {
        id: 'COLOMBIA_ECUADOR',
        label: 'Colombia v/s Ecuador'
      }, {
        id: 'COLOMBIA_HONDURAS',
        label: 'Colombia v/s Honduras'
      }, {
        id: 'COLOMBIA_CAMERÚN',
        label: 'Colombia v/s Camerún'
      }, {
        id: 'COLOMBIA_COSTA DE MARFIL',
        label: 'Colombia v/s Costa de Marfil'
      }, {
        id: 'COLOMBIA_NIGERIA',
        label: 'Colombia v/s Nigeria'
      }, {
        id: 'COLOMBIA_GHANA',
        label: 'Colombia v/s Ghana'
      }, {
        id: 'COLOMBIA_ARGELIA',
        label: 'Colombia v/s Argelia'
      }, {
        id: 'COLOMBIA_PORTUGAL',
        label: 'Colombia v/s Portugal'
      }, {
        id: 'COLOMBIA_FRANCIA',
        label: 'Colombia v/s Francia'
      }, {
        id: 'COLOMBIA_CROACIA',
        label: 'Colombia v/s Croacia'
      }, {
        id: 'COLOMBIA_GRECIA',
        label: 'Colombia v/s Grecia'
      }, {
        id: 'COLOMBIA_MÉXICO',
        label: 'Colombia v/s México'
      }, {
        id: 'COLOMBIA_URUGUAY',
        label: 'Colombia v/s Uruguay'
      }, {
        id: 'SUIZA_ARGENTINA',
        label: 'Suiza v/s Argentina'
      }, {
        id: 'SUIZA_AUSTRALIA',
        label: 'Suiza v/s Australia'
      }, {
        id: 'SUIZA_BRASIL',
        label: 'Suiza v/s Brasil'
      }, {
        id: 'SUIZA_COREA DEL SUR',
        label: 'Suiza v/s Corea del Sur'
      }, {
        id: 'SUIZA_COSTA RICA',
        label: 'Suiza v/s Costa Rica'
      }, {
        id: 'SUIZA_ESTADOS UNIDOS',
        label: 'Suiza v/s Estados Unidos'
      }, {
        id: 'SUIZA_IRÁN',
        label: 'Suiza v/s Irán'
      }, {
        id: 'SUIZA_ITALIA',
        label: 'Suiza v/s Italia'
      }, {
        id: 'SUIZA_JAPÓN',
        label: 'Suiza v/s Japón'
      }, {
        id: 'SUIZA_HOLANDA',
        label: 'Suiza v/s Holanda'
      }, {
        id: 'SUIZA_ALEMANIA',
        label: 'Suiza v/s Alemania'
      }, {
        id: 'SUIZA_BÉLGICA',
        label: 'Suiza v/s Bélgica'
      }, {
        id: 'SUIZA_COLOMBIA',
        label: 'Suiza v/s Colombia'
      }, {
        id: 'SUIZA_RUSIA',
        label: 'Suiza v/s Rusia'
      }, {
        id: 'SUIZA_BOSNIA',
        label: 'Suiza v/s Bosnia'
      }, {
        id: 'SUIZA_INGLATERRA',
        label: 'Suiza v/s Inglaterra'
      }, {
        id: 'SUIZA_ESPAÑA',
        label: 'Suiza v/s España'
      }, {
        id: 'SUIZA_CHILE',
        label: 'Suiza v/s Chile'
      }, {
        id: 'SUIZA_ECUADOR',
        label: 'Suiza v/s Ecuador'
      }, {
        id: 'SUIZA_HONDURAS',
        label: 'Suiza v/s Honduras'
      }, {
        id: 'SUIZA_CAMERÚN',
        label: 'Suiza v/s Camerún'
      }, {
        id: 'SUIZA_COSTA DE MARFIL',
        label: 'Suiza v/s Costa de Marfil'
      }, {
        id: 'SUIZA_NIGERIA',
        label: 'Suiza v/s Nigeria'
      }, {
        id: 'SUIZA_GHANA',
        label: 'Suiza v/s Ghana'
      }, {
        id: 'SUIZA_ARGELIA',
        label: 'Suiza v/s Argelia'
      }, {
        id: 'SUIZA_PORTUGAL',
        label: 'Suiza v/s Portugal'
      }, {
        id: 'SUIZA_FRANCIA',
        label: 'Suiza v/s Francia'
      }, {
        id: 'SUIZA_CROACIA',
        label: 'Suiza v/s Croacia'
      }, {
        id: 'SUIZA_GRECIA',
        label: 'Suiza v/s Grecia'
      }, {
        id: 'SUIZA_MÉXICO',
        label: 'Suiza v/s México'
      }, {
        id: 'SUIZA_URUGUAY',
        label: 'Suiza v/s Uruguay'
      }, {
        id: 'RUSIA_ARGENTINA',
        label: 'Rusia v/s Argentina'
      }, {
        id: 'RUSIA_AUSTRALIA',
        label: 'Rusia v/s Australia'
      }, {
        id: 'RUSIA_BRASIL',
        label: 'Rusia v/s Brasil'
      }, {
        id: 'RUSIA_COREA DEL SUR',
        label: 'Rusia v/s Corea del Sur'
      }, {
        id: 'RUSIA_COSTA RICA',
        label: 'Rusia v/s Costa Rica'
      }, {
        id: 'RUSIA_ESTADOS UNIDOS',
        label: 'Rusia v/s Estados Unidos'
      }, {
        id: 'RUSIA_IRÁN',
        label: 'Rusia v/s Irán'
      }, {
        id: 'RUSIA_ITALIA',
        label: 'Rusia v/s Italia'
      }, {
        id: 'RUSIA_JAPÓN',
        label: 'Rusia v/s Japón'
      }, {
        id: 'RUSIA_HOLANDA',
        label: 'Rusia v/s Holanda'
      }, {
        id: 'RUSIA_ALEMANIA',
        label: 'Rusia v/s Alemania'
      }, {
        id: 'RUSIA_BÉLGICA',
        label: 'Rusia v/s Bélgica'
      }, {
        id: 'RUSIA_COLOMBIA',
        label: 'Rusia v/s Colombia'
      }, {
        id: 'RUSIA_SUIZA',
        label: 'Rusia v/s Suiza'
      }, {
        id: 'RUSIA_BOSNIA',
        label: 'Rusia v/s Bosnia'
      }, {
        id: 'RUSIA_INGLATERRA',
        label: 'Rusia v/s Inglaterra'
      }, {
        id: 'RUSIA_ESPAÑA',
        label: 'Rusia v/s España'
      }, {
        id: 'RUSIA_CHILE',
        label: 'Rusia v/s Chile'
      }, {
        id: 'RUSIA_ECUADOR',
        label: 'Rusia v/s Ecuador'
      }, {
        id: 'RUSIA_HONDURAS',
        label: 'Rusia v/s Honduras'
      }, {
        id: 'RUSIA_CAMERÚN',
        label: 'Rusia v/s Camerún'
      }, {
        id: 'RUSIA_COSTA DE MARFIL',
        label: 'Rusia v/s Costa de Marfil'
      }, {
        id: 'RUSIA_NIGERIA',
        label: 'Rusia v/s Nigeria'
      }, {
        id: 'RUSIA_GHANA',
        label: 'Rusia v/s Ghana'
      }, {
        id: 'RUSIA_ARGELIA',
        label: 'Rusia v/s Argelia'
      }, {
        id: 'RUSIA_PORTUGAL',
        label: 'Rusia v/s Portugal'
      }, {
        id: 'RUSIA_FRANCIA',
        label: 'Rusia v/s Francia'
      }, {
        id: 'RUSIA_CROACIA',
        label: 'Rusia v/s Croacia'
      }, {
        id: 'RUSIA_GRECIA',
        label: 'Rusia v/s Grecia'
      }, {
        id: 'RUSIA_MÉXICO',
        label: 'Rusia v/s México'
      }, {
        id: 'RUSIA_URUGUAY',
        label: 'Rusia v/s Uruguay'
      }, {
        id: 'BOSNIA_ARGENTINA',
        label: 'Bosnia v/s Argentina'
      }, {
        id: 'BOSNIA_AUSTRALIA',
        label: 'Bosnia v/s Australia'
      }, {
        id: 'BOSNIA_BRASIL',
        label: 'Bosnia v/s Brasil'
      }, {
        id: 'BOSNIA_COREA DEL SUR',
        label: 'Bosnia v/s Corea del Sur'
      }, {
        id: 'BOSNIA_COSTA RICA',
        label: 'Bosnia v/s Costa Rica'
      }, {
        id: 'BOSNIA_ESTADOS UNIDOS',
        label: 'Bosnia v/s Estados Unidos'
      }, {
        id: 'BOSNIA_IRÁN',
        label: 'Bosnia v/s Irán'
      }, {
        id: 'BOSNIA_ITALIA',
        label: 'Bosnia v/s Italia'
      }, {
        id: 'BOSNIA_JAPÓN',
        label: 'Bosnia v/s Japón'
      }, {
        id: 'BOSNIA_HOLANDA',
        label: 'Bosnia v/s Holanda'
      }, {
        id: 'BOSNIA_ALEMANIA',
        label: 'Bosnia v/s Alemania'
      }, {
        id: 'BOSNIA_BÉLGICA',
        label: 'Bosnia v/s Bélgica'
      }, {
        id: 'BOSNIA_COLOMBIA',
        label: 'Bosnia v/s Colombia'
      }, {
        id: 'BOSNIA_SUIZA',
        label: 'Bosnia v/s Suiza'
      }, {
        id: 'BOSNIA_RUSIA',
        label: 'Bosnia v/s Rusia'
      }, {
        id: 'BOSNIA_INGLATERRA',
        label: 'Bosnia v/s Inglaterra'
      }, {
        id: 'BOSNIA_ESPAÑA',
        label: 'Bosnia v/s España'
      }, {
        id: 'BOSNIA_CHILE',
        label: 'Bosnia v/s Chile'
      }, {
        id: 'BOSNIA_ECUADOR',
        label: 'Bosnia v/s Ecuador'
      }, {
        id: 'BOSNIA_HONDURAS',
        label: 'Bosnia v/s Honduras'
      }, {
        id: 'BOSNIA_CAMERÚN',
        label: 'Bosnia v/s Camerún'
      }, {
        id: 'BOSNIA_COSTA DE MARFIL',
        label: 'Bosnia v/s Costa de Marfil'
      }, {
        id: 'BOSNIA_NIGERIA',
        label: 'Bosnia v/s Nigeria'
      }, {
        id: 'BOSNIA_GHANA',
        label: 'Bosnia v/s Ghana'
      }, {
        id: 'BOSNIA_ARGELIA',
        label: 'Bosnia v/s Argelia'
      }, {
        id: 'BOSNIA_PORTUGAL',
        label: 'Bosnia v/s Portugal'
      }, {
        id: 'BOSNIA_FRANCIA',
        label: 'Bosnia v/s Francia'
      }, {
        id: 'BOSNIA_CROACIA',
        label: 'Bosnia v/s Croacia'
      }, {
        id: 'BOSNIA_GRECIA',
        label: 'Bosnia v/s Grecia'
      }, {
        id: 'BOSNIA_MÉXICO',
        label: 'Bosnia v/s México'
      }, {
        id: 'BOSNIA_URUGUAY',
        label: 'Bosnia v/s Uruguay'
      }, {
        id: 'INGLATERRA_ARGENTINA',
        label: 'Inglaterra v/s Argentina'
      }, {
        id: 'INGLATERRA_AUSTRALIA',
        label: 'Inglaterra v/s Australia'
      }, {
        id: 'INGLATERRA_BRASIL',
        label: 'Inglaterra v/s Brasil'
      }, {
        id: 'INGLATERRA_COREA DEL SUR',
        label: 'Inglaterra v/s Corea del Sur'
      }, {
        id: 'INGLATERRA_COSTA RICA',
        label: 'Inglaterra v/s Costa Rica'
      }, {
        id: 'INGLATERRA_ESTADOS UNIDOS',
        label: 'Inglaterra v/s Estados Unidos'
      }, {
        id: 'INGLATERRA_IRÁN',
        label: 'Inglaterra v/s Irán'
      }, {
        id: 'INGLATERRA_ITALIA',
        label: 'Inglaterra v/s Italia'
      }, {
        id: 'INGLATERRA_JAPÓN',
        label: 'Inglaterra v/s Japón'
      }, {
        id: 'INGLATERRA_HOLANDA',
        label: 'Inglaterra v/s Holanda'
      }, {
        id: 'INGLATERRA_ALEMANIA',
        label: 'Inglaterra v/s Alemania'
      }, {
        id: 'INGLATERRA_BÉLGICA',
        label: 'Inglaterra v/s Bélgica'
      }, {
        id: 'INGLATERRA_COLOMBIA',
        label: 'Inglaterra v/s Colombia'
      }, {
        id: 'INGLATERRA_SUIZA',
        label: 'Inglaterra v/s Suiza'
      }, {
        id: 'INGLATERRA_RUSIA',
        label: 'Inglaterra v/s Rusia'
      }, {
        id: 'INGLATERRA_BOSNIA',
        label: 'Inglaterra v/s Bosnia'
      }, {
        id: 'INGLATERRA_ESPAÑA',
        label: 'Inglaterra v/s España'
      }, {
        id: 'INGLATERRA_CHILE',
        label: 'Inglaterra v/s Chile'
      }, {
        id: 'INGLATERRA_ECUADOR',
        label: 'Inglaterra v/s Ecuador'
      }, {
        id: 'INGLATERRA_HONDURAS',
        label: 'Inglaterra v/s Honduras'
      }, {
        id: 'INGLATERRA_CAMERÚN',
        label: 'Inglaterra v/s Camerún'
      }, {
        id: 'INGLATERRA_COSTA DE MARFIL',
        label: 'Inglaterra v/s Costa de Marfil'
      }, {
        id: 'INGLATERRA_NIGERIA',
        label: 'Inglaterra v/s Nigeria'
      }, {
        id: 'INGLATERRA_GHANA',
        label: 'Inglaterra v/s Ghana'
      }, {
        id: 'INGLATERRA_ARGELIA',
        label: 'Inglaterra v/s Argelia'
      }, {
        id: 'INGLATERRA_PORTUGAL',
        label: 'Inglaterra v/s Portugal'
      }, {
        id: 'INGLATERRA_FRANCIA',
        label: 'Inglaterra v/s Francia'
      }, {
        id: 'INGLATERRA_CROACIA',
        label: 'Inglaterra v/s Croacia'
      }, {
        id: 'INGLATERRA_GRECIA',
        label: 'Inglaterra v/s Grecia'
      }, {
        id: 'INGLATERRA_MÉXICO',
        label: 'Inglaterra v/s México'
      }, {
        id: 'INGLATERRA_URUGUAY',
        label: 'Inglaterra v/s Uruguay'
      }, {
        id: 'ESPAÑA_ARGENTINA',
        label: 'España v/s Argentina'
      }, {
        id: 'ESPAÑA_AUSTRALIA',
        label: 'España v/s Australia'
      }, {
        id: 'ESPAÑA_BRASIL',
        label: 'España v/s Brasil'
      }, {
        id: 'ESPAÑA_COREA DEL SUR',
        label: 'España v/s Corea del Sur'
      }, {
        id: 'ESPAÑA_COSTA RICA',
        label: 'España v/s Costa Rica'
      }, {
        id: 'ESPAÑA_ESTADOS UNIDOS',
        label: 'España v/s Estados Unidos'
      }, {
        id: 'ESPAÑA_IRÁN',
        label: 'España v/s Irán'
      }, {
        id: 'ESPAÑA_ITALIA',
        label: 'España v/s Italia'
      }, {
        id: 'ESPAÑA_JAPÓN',
        label: 'España v/s Japón'
      }, {
        id: 'ESPAÑA_HOLANDA',
        label: 'España v/s Holanda'
      }, {
        id: 'ESPAÑA_ALEMANIA',
        label: 'España v/s Alemania'
      }, {
        id: 'ESPAÑA_BÉLGICA',
        label: 'España v/s Bélgica'
      }, {
        id: 'ESPAÑA_COLOMBIA',
        label: 'España v/s Colombia'
      }, {
        id: 'ESPAÑA_SUIZA',
        label: 'España v/s Suiza'
      }, {
        id: 'ESPAÑA_RUSIA',
        label: 'España v/s Rusia'
      }, {
        id: 'ESPAÑA_BOSNIA',
        label: 'España v/s Bosnia'
      }, {
        id: 'ESPAÑA_INGLATERRA',
        label: 'España v/s Inglaterra'
      }, {
        id: 'ESPAÑA_CHILE',
        label: 'España v/s Chile'
      }, {
        id: 'ESPAÑA_ECUADOR',
        label: 'España v/s Ecuador'
      }, {
        id: 'ESPAÑA_HONDURAS',
        label: 'España v/s Honduras'
      }, {
        id: 'ESPAÑA_CAMERÚN',
        label: 'España v/s Camerún'
      }, {
        id: 'ESPAÑA_COSTA DE MARFIL',
        label: 'España v/s Costa de Marfil'
      }, {
        id: 'ESPAÑA_NIGERIA',
        label: 'España v/s Nigeria'
      }, {
        id: 'ESPAÑA_GHANA',
        label: 'España v/s Ghana'
      }, {
        id: 'ESPAÑA_ARGELIA',
        label: 'España v/s Argelia'
      }, {
        id: 'ESPAÑA_PORTUGAL',
        label: 'España v/s Portugal'
      }, {
        id: 'ESPAÑA_FRANCIA',
        label: 'España v/s Francia'
      }, {
        id: 'ESPAÑA_CROACIA',
        label: 'España v/s Croacia'
      }, {
        id: 'ESPAÑA_GRECIA',
        label: 'España v/s Grecia'
      }, {
        id: 'ESPAÑA_MÉXICO',
        label: 'España v/s México'
      }, {
        id: 'ESPAÑA_URUGUAY',
        label: 'España v/s Uruguay'
      }, {
        id: 'CHILE_ARGENTINA',
        label: 'Chile v/s Argentina'
      }, {
        id: 'CHILE_AUSTRALIA',
        label: 'Chile v/s Australia'
      }, {
        id: 'CHILE_BRASIL',
        label: 'Chile v/s Brasil'
      }, {
        id: 'CHILE_COREA DEL SUR',
        label: 'Chile v/s Corea del Sur'
      }, {
        id: 'CHILE_COSTA RICA',
        label: 'Chile v/s Costa Rica'
      }, {
        id: 'CHILE_ESTADOS UNIDOS',
        label: 'Chile v/s Estados Unidos'
      }, {
        id: 'CHILE_IRÁN',
        label: 'Chile v/s Irán'
      }, {
        id: 'CHILE_ITALIA',
        label: 'Chile v/s Italia'
      }, {
        id: 'CHILE_JAPÓN',
        label: 'Chile v/s Japón'
      }, {
        id: 'CHILE_HOLANDA',
        label: 'Chile v/s Holanda'
      }, {
        id: 'CHILE_ALEMANIA',
        label: 'Chile v/s Alemania'
      }, {
        id: 'CHILE_BÉLGICA',
        label: 'Chile v/s Bélgica'
      }, {
        id: 'CHILE_COLOMBIA',
        label: 'Chile v/s Colombia'
      }, {
        id: 'CHILE_SUIZA',
        label: 'Chile v/s Suiza'
      }, {
        id: 'CHILE_RUSIA',
        label: 'Chile v/s Rusia'
      }, {
        id: 'CHILE_BOSNIA',
        label: 'Chile v/s Bosnia'
      }, {
        id: 'CHILE_INGLATERRA',
        label: 'Chile v/s Inglaterra'
      }, {
        id: 'CHILE_ESPAÑA',
        label: 'Chile v/s España'
      }, {
        id: 'CHILE_ECUADOR',
        label: 'Chile v/s Ecuador'
      }, {
        id: 'CHILE_HONDURAS',
        label: 'Chile v/s Honduras'
      }, {
        id: 'CHILE_CAMERÚN',
        label: 'Chile v/s Camerún'
      }, {
        id: 'CHILE_COSTA DE MARFIL',
        label: 'Chile v/s Costa de Marfil'
      }, {
        id: 'CHILE_NIGERIA',
        label: 'Chile v/s Nigeria'
      }, {
        id: 'CHILE_GHANA',
        label: 'Chile v/s Ghana'
      }, {
        id: 'CHILE_ARGELIA',
        label: 'Chile v/s Argelia'
      }, {
        id: 'CHILE_PORTUGAL',
        label: 'Chile v/s Portugal'
      }, {
        id: 'CHILE_FRANCIA',
        label: 'Chile v/s Francia'
      }, {
        id: 'CHILE_CROACIA',
        label: 'Chile v/s Croacia'
      }, {
        id: 'CHILE_GRECIA',
        label: 'Chile v/s Grecia'
      }, {
        id: 'CHILE_MÉXICO',
        label: 'Chile v/s México'
      }, {
        id: 'CHILE_URUGUAY',
        label: 'Chile v/s Uruguay'
      }, {
        id: 'ECUADOR_ARGENTINA',
        label: 'Ecuador v/s Argentina'
      }, {
        id: 'ECUADOR_AUSTRALIA',
        label: 'Ecuador v/s Australia'
      }, {
        id: 'ECUADOR_BRASIL',
        label: 'Ecuador v/s Brasil'
      }, {
        id: 'ECUADOR_COREA DEL SUR',
        label: 'Ecuador v/s Corea del Sur'
      }, {
        id: 'ECUADOR_COSTA RICA',
        label: 'Ecuador v/s Costa Rica'
      }, {
        id: 'ECUADOR_ESTADOS UNIDOS',
        label: 'Ecuador v/s Estados Unidos'
      }, {
        id: 'ECUADOR_IRÁN',
        label: 'Ecuador v/s Irán'
      }, {
        id: 'ECUADOR_ITALIA',
        label: 'Ecuador v/s Italia'
      }, {
        id: 'ECUADOR_JAPÓN',
        label: 'Ecuador v/s Japón'
      }, {
        id: 'ECUADOR_HOLANDA',
        label: 'Ecuador v/s Holanda'
      }, {
        id: 'ECUADOR_ALEMANIA',
        label: 'Ecuador v/s Alemania'
      }, {
        id: 'ECUADOR_BÉLGICA',
        label: 'Ecuador v/s Bélgica'
      }, {
        id: 'ECUADOR_COLOMBIA',
        label: 'Ecuador v/s Colombia'
      }, {
        id: 'ECUADOR_SUIZA',
        label: 'Ecuador v/s Suiza'
      }, {
        id: 'ECUADOR_RUSIA',
        label: 'Ecuador v/s Rusia'
      }, {
        id: 'ECUADOR_BOSNIA',
        label: 'Ecuador v/s Bosnia'
      }, {
        id: 'ECUADOR_INGLATERRA',
        label: 'Ecuador v/s Inglaterra'
      }, {
        id: 'ECUADOR_ESPAÑA',
        label: 'Ecuador v/s España'
      }, {
        id: 'ECUADOR_CHILE',
        label: 'Ecuador v/s Chile'
      }, {
        id: 'ECUADOR_HONDURAS',
        label: 'Ecuador v/s Honduras'
      }, {
        id: 'ECUADOR_CAMERÚN',
        label: 'Ecuador v/s Camerún'
      }, {
        id: 'ECUADOR_COSTA DE MARFIL',
        label: 'Ecuador v/s Costa de Marfil'
      }, {
        id: 'ECUADOR_NIGERIA',
        label: 'Ecuador v/s Nigeria'
      }, {
        id: 'ECUADOR_GHANA',
        label: 'Ecuador v/s Ghana'
      }, {
        id: 'ECUADOR_ARGELIA',
        label: 'Ecuador v/s Argelia'
      }, {
        id: 'ECUADOR_PORTUGAL',
        label: 'Ecuador v/s Portugal'
      }, {
        id: 'ECUADOR_FRANCIA',
        label: 'Ecuador v/s Francia'
      }, {
        id: 'ECUADOR_CROACIA',
        label: 'Ecuador v/s Croacia'
      }, {
        id: 'ECUADOR_GRECIA',
        label: 'Ecuador v/s Grecia'
      }, {
        id: 'ECUADOR_MÉXICO',
        label: 'Ecuador v/s México'
      }, {
        id: 'ECUADOR_URUGUAY',
        label: 'Ecuador v/s Uruguay'
      }, {
        id: 'HONDURAS_ARGENTINA',
        label: 'Honduras v/s Argentina'
      }, {
        id: 'HONDURAS_AUSTRALIA',
        label: 'Honduras v/s Australia'
      }, {
        id: 'HONDURAS_BRASIL',
        label: 'Honduras v/s Brasil'
      }, {
        id: 'HONDURAS_COREA DEL SUR',
        label: 'Honduras v/s Corea del Sur'
      }, {
        id: 'HONDURAS_COSTA RICA',
        label: 'Honduras v/s Costa Rica'
      }, {
        id: 'HONDURAS_ESTADOS UNIDOS',
        label: 'Honduras v/s Estados Unidos'
      }, {
        id: 'HONDURAS_IRÁN',
        label: 'Honduras v/s Irán'
      }, {
        id: 'HONDURAS_ITALIA',
        label: 'Honduras v/s Italia'
      }, {
        id: 'HONDURAS_JAPÓN',
        label: 'Honduras v/s Japón'
      }, {
        id: 'HONDURAS_HOLANDA',
        label: 'Honduras v/s Holanda'
      }, {
        id: 'HONDURAS_ALEMANIA',
        label: 'Honduras v/s Alemania'
      }, {
        id: 'HONDURAS_BÉLGICA',
        label: 'Honduras v/s Bélgica'
      }, {
        id: 'HONDURAS_COLOMBIA',
        label: 'Honduras v/s Colombia'
      }, {
        id: 'HONDURAS_SUIZA',
        label: 'Honduras v/s Suiza'
      }, {
        id: 'HONDURAS_RUSIA',
        label: 'Honduras v/s Rusia'
      }, {
        id: 'HONDURAS_BOSNIA',
        label: 'Honduras v/s Bosnia'
      }, {
        id: 'HONDURAS_INGLATERRA',
        label: 'Honduras v/s Inglaterra'
      }, {
        id: 'HONDURAS_ESPAÑA',
        label: 'Honduras v/s España'
      }, {
        id: 'HONDURAS_CHILE',
        label: 'Honduras v/s Chile'
      }, {
        id: 'HONDURAS_ECUADOR',
        label: 'Honduras v/s Ecuador'
      }, {
        id: 'HONDURAS_CAMERÚN',
        label: 'Honduras v/s Camerún'
      }, {
        id: 'HONDURAS_COSTA DE MARFIL',
        label: 'Honduras v/s Costa de Marfil'
      }, {
        id: 'HONDURAS_NIGERIA',
        label: 'Honduras v/s Nigeria'
      }, {
        id: 'HONDURAS_GHANA',
        label: 'Honduras v/s Ghana'
      }, {
        id: 'HONDURAS_ARGELIA',
        label: 'Honduras v/s Argelia'
      }, {
        id: 'HONDURAS_PORTUGAL',
        label: 'Honduras v/s Portugal'
      }, {
        id: 'HONDURAS_FRANCIA',
        label: 'Honduras v/s Francia'
      }, {
        id: 'HONDURAS_CROACIA',
        label: 'Honduras v/s Croacia'
      }, {
        id: 'HONDURAS_GRECIA',
        label: 'Honduras v/s Grecia'
      }, {
        id: 'HONDURAS_MÉXICO',
        label: 'Honduras v/s México'
      }, {
        id: 'HONDURAS_URUGUAY',
        label: 'Honduras v/s Uruguay'
      }, {
        id: 'CAMERÚN_ARGENTINA',
        label: 'Camerún v/s Argentina'
      }, {
        id: 'CAMERÚN_AUSTRALIA',
        label: 'Camerún v/s Australia'
      }, {
        id: 'CAMERÚN_BRASIL',
        label: 'Camerún v/s Brasil'
      }, {
        id: 'CAMERÚN_COREA DEL SUR',
        label: 'Camerún v/s Corea del Sur'
      }, {
        id: 'CAMERÚN_COSTA RICA',
        label: 'Camerún v/s Costa Rica'
      }, {
        id: 'CAMERÚN_ESTADOS UNIDOS',
        label: 'Camerún v/s Estados Unidos'
      }, {
        id: 'CAMERÚN_IRÁN',
        label: 'Camerún v/s Irán'
      }, {
        id: 'CAMERÚN_ITALIA',
        label: 'Camerún v/s Italia'
      }, {
        id: 'CAMERÚN_JAPÓN',
        label: 'Camerún v/s Japón'
      }, {
        id: 'CAMERÚN_HOLANDA',
        label: 'Camerún v/s Holanda'
      }, {
        id: 'CAMERÚN_ALEMANIA',
        label: 'Camerún v/s Alemania'
      }, {
        id: 'CAMERÚN_BÉLGICA',
        label: 'Camerún v/s Bélgica'
      }, {
        id: 'CAMERÚN_COLOMBIA',
        label: 'Camerún v/s Colombia'
      }, {
        id: 'CAMERÚN_SUIZA',
        label: 'Camerún v/s Suiza'
      }, {
        id: 'CAMERÚN_RUSIA',
        label: 'Camerún v/s Rusia'
      }, {
        id: 'CAMERÚN_BOSNIA',
        label: 'Camerún v/s Bosnia'
      }, {
        id: 'CAMERÚN_INGLATERRA',
        label: 'Camerún v/s Inglaterra'
      }, {
        id: 'CAMERÚN_ESPAÑA',
        label: 'Camerún v/s España'
      }, {
        id: 'CAMERÚN_CHILE',
        label: 'Camerún v/s Chile'
      }, {
        id: 'CAMERÚN_ECUADOR',
        label: 'Camerún v/s Ecuador'
      }, {
        id: 'CAMERÚN_HONDURAS',
        label: 'Camerún v/s Honduras'
      }, {
        id: 'CAMERÚN_COSTA DE MARFIL',
        label: 'Camerún v/s Costa de Marfil'
      }, {
        id: 'CAMERÚN_NIGERIA',
        label: 'Camerún v/s Nigeria'
      }, {
        id: 'CAMERÚN_GHANA',
        label: 'Camerún v/s Ghana'
      }, {
        id: 'CAMERÚN_ARGELIA',
        label: 'Camerún v/s Argelia'
      }, {
        id: 'CAMERÚN_PORTUGAL',
        label: 'Camerún v/s Portugal'
      }, {
        id: 'CAMERÚN_FRANCIA',
        label: 'Camerún v/s Francia'
      }, {
        id: 'CAMERÚN_CROACIA',
        label: 'Camerún v/s Croacia'
      }, {
        id: 'CAMERÚN_GRECIA',
        label: 'Camerún v/s Grecia'
      }, {
        id: 'CAMERÚN_MÉXICO',
        label: 'Camerún v/s México'
      }, {
        id: 'CAMERÚN_URUGUAY',
        label: 'Camerún v/s Uruguay'
      }, {
        id: 'COSTA DE MARFIL_ARGENTINA',
        label: 'Costa de Marfil v/s Argentina'
      }, {
        id: 'COSTA DE MARFIL_AUSTRALIA',
        label: 'Costa de Marfil v/s Australia'
      }, {
        id: 'COSTA DE MARFIL_BRASIL',
        label: 'Costa de Marfil v/s Brasil'
      }, {
        id: 'COSTA DE MARFIL_COREA DEL SUR',
        label: 'Costa de Marfil v/s Corea del Sur'
      }, {
        id: 'COSTA DE MARFIL_COSTA RICA',
        label: 'Costa de Marfil v/s Costa Rica'
      }, {
        id: 'COSTA DE MARFIL_ESTADOS UNIDOS',
        label: 'Costa de Marfil v/s Estados Unidos'
      }, {
        id: 'COSTA DE MARFIL_IRÁN',
        label: 'Costa de Marfil v/s Irán'
      }, {
        id: 'COSTA DE MARFIL_ITALIA',
        label: 'Costa de Marfil v/s Italia'
      }, {
        id: 'COSTA DE MARFIL_JAPÓN',
        label: 'Costa de Marfil v/s Japón'
      }, {
        id: 'COSTA DE MARFIL_HOLANDA',
        label: 'Costa de Marfil v/s Holanda'
      }, {
        id: 'COSTA DE MARFIL_ALEMANIA',
        label: 'Costa de Marfil v/s Alemania'
      }, {
        id: 'COSTA DE MARFIL_BÉLGICA',
        label: 'Costa de Marfil v/s Bélgica'
      }, {
        id: 'COSTA DE MARFIL_COLOMBIA',
        label: 'Costa de Marfil v/s Colombia'
      }, {
        id: 'COSTA DE MARFIL_SUIZA',
        label: 'Costa de Marfil v/s Suiza'
      }, {
        id: 'COSTA DE MARFIL_RUSIA',
        label: 'Costa de Marfil v/s Rusia'
      }, {
        id: 'COSTA DE MARFIL_BOSNIA',
        label: 'Costa de Marfil v/s Bosnia'
      }, {
        id: 'COSTA DE MARFIL_INGLATERRA',
        label: 'Costa de Marfil v/s Inglaterra'
      }, {
        id: 'COSTA DE MARFIL_ESPAÑA',
        label: 'Costa de Marfil v/s España'
      }, {
        id: 'COSTA DE MARFIL_CHILE',
        label: 'Costa de Marfil v/s Chile'
      }, {
        id: 'COSTA DE MARFIL_ECUADOR',
        label: 'Costa de Marfil v/s Ecuador'
      }, {
        id: 'COSTA DE MARFIL_HONDURAS',
        label: 'Costa de Marfil v/s Honduras'
      }, {
        id: 'COSTA DE MARFIL_CAMERÚN',
        label: 'Costa de Marfil v/s Camerún'
      }, {
        id: 'COSTA DE MARFIL_NIGERIA',
        label: 'Costa de Marfil v/s Nigeria'
      }, {
        id: 'COSTA DE MARFIL_GHANA',
        label: 'Costa de Marfil v/s Ghana'
      }, {
        id: 'COSTA DE MARFIL_ARGELIA',
        label: 'Costa de Marfil v/s Argelia'
      }, {
        id: 'COSTA DE MARFIL_PORTUGAL',
        label: 'Costa de Marfil v/s Portugal'
      }, {
        id: 'COSTA DE MARFIL_FRANCIA',
        label: 'Costa de Marfil v/s Francia'
      }, {
        id: 'COSTA DE MARFIL_CROACIA',
        label: 'Costa de Marfil v/s Croacia'
      }, {
        id: 'COSTA DE MARFIL_GRECIA',
        label: 'Costa de Marfil v/s Grecia'
      }, {
        id: 'COSTA DE MARFIL_MÉXICO',
        label: 'Costa de Marfil v/s México'
      }, {
        id: 'COSTA DE MARFIL_URUGUAY',
        label: 'Costa de Marfil v/s Uruguay'
      }, {
        id: 'NIGERIA_ARGENTINA',
        label: 'Nigeria v/s Argentina'
      }, {
        id: 'NIGERIA_AUSTRALIA',
        label: 'Nigeria v/s Australia'
      }, {
        id: 'NIGERIA_BRASIL',
        label: 'Nigeria v/s Brasil'
      }, {
        id: 'NIGERIA_COREA DEL SUR',
        label: 'Nigeria v/s Corea del Sur'
      }, {
        id: 'NIGERIA_COSTA RICA',
        label: 'Nigeria v/s Costa Rica'
      }, {
        id: 'NIGERIA_ESTADOS UNIDOS',
        label: 'Nigeria v/s Estados Unidos'
      }, {
        id: 'NIGERIA_IRÁN',
        label: 'Nigeria v/s Irán'
      }, {
        id: 'NIGERIA_ITALIA',
        label: 'Nigeria v/s Italia'
      }, {
        id: 'NIGERIA_JAPÓN',
        label: 'Nigeria v/s Japón'
      }, {
        id: 'NIGERIA_HOLANDA',
        label: 'Nigeria v/s Holanda'
      }, {
        id: 'NIGERIA_ALEMANIA',
        label: 'Nigeria v/s Alemania'
      }, {
        id: 'NIGERIA_BÉLGICA',
        label: 'Nigeria v/s Bélgica'
      }, {
        id: 'NIGERIA_COLOMBIA',
        label: 'Nigeria v/s Colombia'
      }, {
        id: 'NIGERIA_SUIZA',
        label: 'Nigeria v/s Suiza'
      }, {
        id: 'NIGERIA_RUSIA',
        label: 'Nigeria v/s Rusia'
      }, {
        id: 'NIGERIA_BOSNIA',
        label: 'Nigeria v/s Bosnia'
      }, {
        id: 'NIGERIA_INGLATERRA',
        label: 'Nigeria v/s Inglaterra'
      }, {
        id: 'NIGERIA_ESPAÑA',
        label: 'Nigeria v/s España'
      }, {
        id: 'NIGERIA_CHILE',
        label: 'Nigeria v/s Chile'
      }, {
        id: 'NIGERIA_ECUADOR',
        label: 'Nigeria v/s Ecuador'
      }, {
        id: 'NIGERIA_HONDURAS',
        label: 'Nigeria v/s Honduras'
      }, {
        id: 'NIGERIA_CAMERÚN',
        label: 'Nigeria v/s Camerún'
      }, {
        id: 'NIGERIA_COSTA DE MARFIL',
        label: 'Nigeria v/s Costa de Marfil'
      }, {
        id: 'NIGERIA_GHANA',
        label: 'Nigeria v/s Ghana'
      }, {
        id: 'NIGERIA_ARGELIA',
        label: 'Nigeria v/s Argelia'
      }, {
        id: 'NIGERIA_PORTUGAL',
        label: 'Nigeria v/s Portugal'
      }, {
        id: 'NIGERIA_FRANCIA',
        label: 'Nigeria v/s Francia'
      }, {
        id: 'NIGERIA_CROACIA',
        label: 'Nigeria v/s Croacia'
      }, {
        id: 'NIGERIA_GRECIA',
        label: 'Nigeria v/s Grecia'
      }, {
        id: 'NIGERIA_MÉXICO',
        label: 'Nigeria v/s México'
      }, {
        id: 'NIGERIA_URUGUAY',
        label: 'Nigeria v/s Uruguay'
      }, {
        id: 'GHANA_ARGENTINA',
        label: 'Ghana v/s Argentina'
      }, {
        id: 'GHANA_AUSTRALIA',
        label: 'Ghana v/s Australia'
      }, {
        id: 'GHANA_BRASIL',
        label: 'Ghana v/s Brasil'
      }, {
        id: 'GHANA_COREA DEL SUR',
        label: 'Ghana v/s Corea del Sur'
      }, {
        id: 'GHANA_COSTA RICA',
        label: 'Ghana v/s Costa Rica'
      }, {
        id: 'GHANA_ESTADOS UNIDOS',
        label: 'Ghana v/s Estados Unidos'
      }, {
        id: 'GHANA_IRÁN',
        label: 'Ghana v/s Irán'
      }, {
        id: 'GHANA_ITALIA',
        label: 'Ghana v/s Italia'
      }, {
        id: 'GHANA_JAPÓN',
        label: 'Ghana v/s Japón'
      }, {
        id: 'GHANA_HOLANDA',
        label: 'Ghana v/s Holanda'
      }, {
        id: 'GHANA_ALEMANIA',
        label: 'Ghana v/s Alemania'
      }, {
        id: 'GHANA_BÉLGICA',
        label: 'Ghana v/s Bélgica'
      }, {
        id: 'GHANA_COLOMBIA',
        label: 'Ghana v/s Colombia'
      }, {
        id: 'GHANA_SUIZA',
        label: 'Ghana v/s Suiza'
      }, {
        id: 'GHANA_RUSIA',
        label: 'Ghana v/s Rusia'
      }, {
        id: 'GHANA_BOSNIA',
        label: 'Ghana v/s Bosnia'
      }, {
        id: 'GHANA_INGLATERRA',
        label: 'Ghana v/s Inglaterra'
      }, {
        id: 'GHANA_ESPAÑA',
        label: 'Ghana v/s España'
      }, {
        id: 'GHANA_CHILE',
        label: 'Ghana v/s Chile'
      }, {
        id: 'GHANA_ECUADOR',
        label: 'Ghana v/s Ecuador'
      }, {
        id: 'GHANA_HONDURAS',
        label: 'Ghana v/s Honduras'
      }, {
        id: 'GHANA_CAMERÚN',
        label: 'Ghana v/s Camerún'
      }, {
        id: 'GHANA_COSTA DE MARFIL',
        label: 'Ghana v/s Costa de Marfil'
      }, {
        id: 'GHANA_NIGERIA',
        label: 'Ghana v/s Nigeria'
      }, {
        id: 'GHANA_ARGELIA',
        label: 'Ghana v/s Argelia'
      }, {
        id: 'GHANA_PORTUGAL',
        label: 'Ghana v/s Portugal'
      }, {
        id: 'GHANA_FRANCIA',
        label: 'Ghana v/s Francia'
      }, {
        id: 'GHANA_CROACIA',
        label: 'Ghana v/s Croacia'
      }, {
        id: 'GHANA_GRECIA',
        label: 'Ghana v/s Grecia'
      }, {
        id: 'GHANA_MÉXICO',
        label: 'Ghana v/s México'
      }, {
        id: 'GHANA_URUGUAY',
        label: 'Ghana v/s Uruguay'
      }, {
        id: 'ARGELIA_ARGENTINA',
        label: 'Argelia v/s Argentina'
      }, {
        id: 'ARGELIA_AUSTRALIA',
        label: 'Argelia v/s Australia'
      }, {
        id: 'ARGELIA_BRASIL',
        label: 'Argelia v/s Brasil'
      }, {
        id: 'ARGELIA_COREA DEL SUR',
        label: 'Argelia v/s Corea del Sur'
      }, {
        id: 'ARGELIA_COSTA RICA',
        label: 'Argelia v/s Costa Rica'
      }, {
        id: 'ARGELIA_ESTADOS UNIDOS',
        label: 'Argelia v/s Estados Unidos'
      }, {
        id: 'ARGELIA_IRÁN',
        label: 'Argelia v/s Irán'
      }, {
        id: 'ARGELIA_ITALIA',
        label: 'Argelia v/s Italia'
      }, {
        id: 'ARGELIA_JAPÓN',
        label: 'Argelia v/s Japón'
      }, {
        id: 'ARGELIA_HOLANDA',
        label: 'Argelia v/s Holanda'
      }, {
        id: 'ARGELIA_ALEMANIA',
        label: 'Argelia v/s Alemania'
      }, {
        id: 'ARGELIA_BÉLGICA',
        label: 'Argelia v/s Bélgica'
      }, {
        id: 'ARGELIA_COLOMBIA',
        label: 'Argelia v/s Colombia'
      }, {
        id: 'ARGELIA_SUIZA',
        label: 'Argelia v/s Suiza'
      }, {
        id: 'ARGELIA_RUSIA',
        label: 'Argelia v/s Rusia'
      }, {
        id: 'ARGELIA_BOSNIA',
        label: 'Argelia v/s Bosnia'
      }, {
        id: 'ARGELIA_INGLATERRA',
        label: 'Argelia v/s Inglaterra'
      }, {
        id: 'ARGELIA_ESPAÑA',
        label: 'Argelia v/s España'
      }, {
        id: 'ARGELIA_CHILE',
        label: 'Argelia v/s Chile'
      }, {
        id: 'ARGELIA_ECUADOR',
        label: 'Argelia v/s Ecuador'
      }, {
        id: 'ARGELIA_HONDURAS',
        label: 'Argelia v/s Honduras'
      }, {
        id: 'ARGELIA_CAMERÚN',
        label: 'Argelia v/s Camerún'
      }, {
        id: 'ARGELIA_COSTA DE MARFIL',
        label: 'Argelia v/s Costa de Marfil'
      }, {
        id: 'ARGELIA_NIGERIA',
        label: 'Argelia v/s Nigeria'
      }, {
        id: 'ARGELIA_GHANA',
        label: 'Argelia v/s Ghana'
      }, {
        id: 'ARGELIA_PORTUGAL',
        label: 'Argelia v/s Portugal'
      }, {
        id: 'ARGELIA_FRANCIA',
        label: 'Argelia v/s Francia'
      }, {
        id: 'ARGELIA_CROACIA',
        label: 'Argelia v/s Croacia'
      }, {
        id: 'ARGELIA_GRECIA',
        label: 'Argelia v/s Grecia'
      }, {
        id: 'ARGELIA_MÉXICO',
        label: 'Argelia v/s México'
      }, {
        id: 'ARGELIA_URUGUAY',
        label: 'Argelia v/s Uruguay'
      }, {
        id: 'PORTUGAL_ARGENTINA',
        label: 'Portugal v/s Argentina'
      }, {
        id: 'PORTUGAL_AUSTRALIA',
        label: 'Portugal v/s Australia'
      }, {
        id: 'PORTUGAL_BRASIL',
        label: 'Portugal v/s Brasil'
      }, {
        id: 'PORTUGAL_COREA DEL SUR',
        label: 'Portugal v/s Corea del Sur'
      }, {
        id: 'PORTUGAL_COSTA RICA',
        label: 'Portugal v/s Costa Rica'
      }, {
        id: 'PORTUGAL_ESTADOS UNIDOS',
        label: 'Portugal v/s Estados Unidos'
      }, {
        id: 'PORTUGAL_IRÁN',
        label: 'Portugal v/s Irán'
      }, {
        id: 'PORTUGAL_ITALIA',
        label: 'Portugal v/s Italia'
      }, {
        id: 'PORTUGAL_JAPÓN',
        label: 'Portugal v/s Japón'
      }, {
        id: 'PORTUGAL_HOLANDA',
        label: 'Portugal v/s Holanda'
      }, {
        id: 'PORTUGAL_ALEMANIA',
        label: 'Portugal v/s Alemania'
      }, {
        id: 'PORTUGAL_BÉLGICA',
        label: 'Portugal v/s Bélgica'
      }, {
        id: 'PORTUGAL_COLOMBIA',
        label: 'Portugal v/s Colombia'
      }, {
        id: 'PORTUGAL_SUIZA',
        label: 'Portugal v/s Suiza'
      }, {
        id: 'PORTUGAL_RUSIA',
        label: 'Portugal v/s Rusia'
      }, {
        id: 'PORTUGAL_BOSNIA',
        label: 'Portugal v/s Bosnia'
      }, {
        id: 'PORTUGAL_INGLATERRA',
        label: 'Portugal v/s Inglaterra'
      }, {
        id: 'PORTUGAL_ESPAÑA',
        label: 'Portugal v/s España'
      }, {
        id: 'PORTUGAL_CHILE',
        label: 'Portugal v/s Chile'
      }, {
        id: 'PORTUGAL_ECUADOR',
        label: 'Portugal v/s Ecuador'
      }, {
        id: 'PORTUGAL_HONDURAS',
        label: 'Portugal v/s Honduras'
      }, {
        id: 'PORTUGAL_CAMERÚN',
        label: 'Portugal v/s Camerún'
      }, {
        id: 'PORTUGAL_COSTA DE MARFIL',
        label: 'Portugal v/s Costa de Marfil'
      }, {
        id: 'PORTUGAL_NIGERIA',
        label: 'Portugal v/s Nigeria'
      }, {
        id: 'PORTUGAL_GHANA',
        label: 'Portugal v/s Ghana'
      }, {
        id: 'PORTUGAL_ARGELIA',
        label: 'Portugal v/s Argelia'
      }, {
        id: 'PORTUGAL_FRANCIA',
        label: 'Portugal v/s Francia'
      }, {
        id: 'PORTUGAL_CROACIA',
        label: 'Portugal v/s Croacia'
      }, {
        id: 'PORTUGAL_GRECIA',
        label: 'Portugal v/s Grecia'
      }, {
        id: 'PORTUGAL_MÉXICO',
        label: 'Portugal v/s México'
      }, {
        id: 'PORTUGAL_URUGUAY',
        label: 'Portugal v/s Uruguay'
      }, {
        id: 'FRANCIA_ARGENTINA',
        label: 'Francia v/s Argentina'
      }, {
        id: 'FRANCIA_AUSTRALIA',
        label: 'Francia v/s Australia'
      }, {
        id: 'FRANCIA_BRASIL',
        label: 'Francia v/s Brasil'
      }, {
        id: 'FRANCIA_COREA DEL SUR',
        label: 'Francia v/s Corea del Sur'
      }, {
        id: 'FRANCIA_COSTA RICA',
        label: 'Francia v/s Costa Rica'
      }, {
        id: 'FRANCIA_ESTADOS UNIDOS',
        label: 'Francia v/s Estados Unidos'
      }, {
        id: 'FRANCIA_IRÁN',
        label: 'Francia v/s Irán'
      }, {
        id: 'FRANCIA_ITALIA',
        label: 'Francia v/s Italia'
      }, {
        id: 'FRANCIA_JAPÓN',
        label: 'Francia v/s Japón'
      }, {
        id: 'FRANCIA_HOLANDA',
        label: 'Francia v/s Holanda'
      }, {
        id: 'FRANCIA_ALEMANIA',
        label: 'Francia v/s Alemania'
      }, {
        id: 'FRANCIA_BÉLGICA',
        label: 'Francia v/s Bélgica'
      }, {
        id: 'FRANCIA_COLOMBIA',
        label: 'Francia v/s Colombia'
      }, {
        id: 'FRANCIA_SUIZA',
        label: 'Francia v/s Suiza'
      }, {
        id: 'FRANCIA_RUSIA',
        label: 'Francia v/s Rusia'
      }, {
        id: 'FRANCIA_BOSNIA',
        label: 'Francia v/s Bosnia'
      }, {
        id: 'FRANCIA_INGLATERRA',
        label: 'Francia v/s Inglaterra'
      }, {
        id: 'FRANCIA_ESPAÑA',
        label: 'Francia v/s España'
      }, {
        id: 'FRANCIA_CHILE',
        label: 'Francia v/s Chile'
      }, {
        id: 'FRANCIA_ECUADOR',
        label: 'Francia v/s Ecuador'
      }, {
        id: 'FRANCIA_HONDURAS',
        label: 'Francia v/s Honduras'
      }, {
        id: 'FRANCIA_CAMERÚN',
        label: 'Francia v/s Camerún'
      }, {
        id: 'FRANCIA_COSTA DE MARFIL',
        label: 'Francia v/s Costa de Marfil'
      }, {
        id: 'FRANCIA_NIGERIA',
        label: 'Francia v/s Nigeria'
      }, {
        id: 'FRANCIA_GHANA',
        label: 'Francia v/s Ghana'
      }, {
        id: 'FRANCIA_ARGELIA',
        label: 'Francia v/s Argelia'
      }, {
        id: 'FRANCIA_PORTUGAL',
        label: 'Francia v/s Portugal'
      }, {
        id: 'FRANCIA_CROACIA',
        label: 'Francia v/s Croacia'
      }, {
        id: 'FRANCIA_GRECIA',
        label: 'Francia v/s Grecia'
      }, {
        id: 'FRANCIA_MÉXICO',
        label: 'Francia v/s México'
      }, {
        id: 'FRANCIA_URUGUAY',
        label: 'Francia v/s Uruguay'
      }, {
        id: 'CROACIA_ARGENTINA',
        label: 'Croacia v/s Argentina'
      }, {
        id: 'CROACIA_AUSTRALIA',
        label: 'Croacia v/s Australia'
      }, {
        id: 'CROACIA_BRASIL',
        label: 'Croacia v/s Brasil'
      }, {
        id: 'CROACIA_COREA DEL SUR',
        label: 'Croacia v/s Corea del Sur'
      }, {
        id: 'CROACIA_COSTA RICA',
        label: 'Croacia v/s Costa Rica'
      }, {
        id: 'CROACIA_ESTADOS UNIDOS',
        label: 'Croacia v/s Estados Unidos'
      }, {
        id: 'CROACIA_IRÁN',
        label: 'Croacia v/s Irán'
      }, {
        id: 'CROACIA_ITALIA',
        label: 'Croacia v/s Italia'
      }, {
        id: 'CROACIA_JAPÓN',
        label: 'Croacia v/s Japón'
      }, {
        id: 'CROACIA_HOLANDA',
        label: 'Croacia v/s Holanda'
      }, {
        id: 'CROACIA_ALEMANIA',
        label: 'Croacia v/s Alemania'
      }, {
        id: 'CROACIA_BÉLGICA',
        label: 'Croacia v/s Bélgica'
      }, {
        id: 'CROACIA_COLOMBIA',
        label: 'Croacia v/s Colombia'
      }, {
        id: 'CROACIA_SUIZA',
        label: 'Croacia v/s Suiza'
      }, {
        id: 'CROACIA_RUSIA',
        label: 'Croacia v/s Rusia'
      }, {
        id: 'CROACIA_BOSNIA',
        label: 'Croacia v/s Bosnia'
      }, {
        id: 'CROACIA_INGLATERRA',
        label: 'Croacia v/s Inglaterra'
      }, {
        id: 'CROACIA_ESPAÑA',
        label: 'Croacia v/s España'
      }, {
        id: 'CROACIA_CHILE',
        label: 'Croacia v/s Chile'
      }, {
        id: 'CROACIA_ECUADOR',
        label: 'Croacia v/s Ecuador'
      }, {
        id: 'CROACIA_HONDURAS',
        label: 'Croacia v/s Honduras'
      }, {
        id: 'CROACIA_CAMERÚN',
        label: 'Croacia v/s Camerún'
      }, {
        id: 'CROACIA_COSTA DE MARFIL',
        label: 'Croacia v/s Costa de Marfil'
      }, {
        id: 'CROACIA_NIGERIA',
        label: 'Croacia v/s Nigeria'
      }, {
        id: 'CROACIA_GHANA',
        label: 'Croacia v/s Ghana'
      }, {
        id: 'CROACIA_ARGELIA',
        label: 'Croacia v/s Argelia'
      }, {
        id: 'CROACIA_PORTUGAL',
        label: 'Croacia v/s Portugal'
      }, {
        id: 'CROACIA_FRANCIA',
        label: 'Croacia v/s Francia'
      }, {
        id: 'CROACIA_GRECIA',
        label: 'Croacia v/s Grecia'
      }, {
        id: 'CROACIA_MÉXICO',
        label: 'Croacia v/s México'
      }, {
        id: 'CROACIA_URUGUAY',
        label: 'Croacia v/s Uruguay'
      }, {
        id: 'GRECIA_ARGENTINA',
        label: 'Grecia v/s Argentina'
      }, {
        id: 'GRECIA_AUSTRALIA',
        label: 'Grecia v/s Australia'
      }, {
        id: 'GRECIA_BRASIL',
        label: 'Grecia v/s Brasil'
      }, {
        id: 'GRECIA_COREA DEL SUR',
        label: 'Grecia v/s Corea del Sur'
      }, {
        id: 'GRECIA_COSTA RICA',
        label: 'Grecia v/s Costa Rica'
      }, {
        id: 'GRECIA_ESTADOS UNIDOS',
        label: 'Grecia v/s Estados Unidos'
      }, {
        id: 'GRECIA_IRÁN',
        label: 'Grecia v/s Irán'
      }, {
        id: 'GRECIA_ITALIA',
        label: 'Grecia v/s Italia'
      }, {
        id: 'GRECIA_JAPÓN',
        label: 'Grecia v/s Japón'
      }, {
        id: 'GRECIA_HOLANDA',
        label: 'Grecia v/s Holanda'
      }, {
        id: 'GRECIA_ALEMANIA',
        label: 'Grecia v/s Alemania'
      }, {
        id: 'GRECIA_BÉLGICA',
        label: 'Grecia v/s Bélgica'
      }, {
        id: 'GRECIA_COLOMBIA',
        label: 'Grecia v/s Colombia'
      }, {
        id: 'GRECIA_SUIZA',
        label: 'Grecia v/s Suiza'
      }, {
        id: 'GRECIA_RUSIA',
        label: 'Grecia v/s Rusia'
      }, {
        id: 'GRECIA_BOSNIA',
        label: 'Grecia v/s Bosnia'
      }, {
        id: 'GRECIA_INGLATERRA',
        label: 'Grecia v/s Inglaterra'
      }, {
        id: 'GRECIA_ESPAÑA',
        label: 'Grecia v/s España'
      }, {
        id: 'GRECIA_CHILE',
        label: 'Grecia v/s Chile'
      }, {
        id: 'GRECIA_ECUADOR',
        label: 'Grecia v/s Ecuador'
      }, {
        id: 'GRECIA_HONDURAS',
        label: 'Grecia v/s Honduras'
      }, {
        id: 'GRECIA_CAMERÚN',
        label: 'Grecia v/s Camerún'
      }, {
        id: 'GRECIA_COSTA DE MARFIL',
        label: 'Grecia v/s Costa de Marfil'
      }, {
        id: 'GRECIA_NIGERIA',
        label: 'Grecia v/s Nigeria'
      }, {
        id: 'GRECIA_GHANA',
        label: 'Grecia v/s Ghana'
      }, {
        id: 'GRECIA_ARGELIA',
        label: 'Grecia v/s Argelia'
      }, {
        id: 'GRECIA_PORTUGAL',
        label: 'Grecia v/s Portugal'
      }, {
        id: 'GRECIA_FRANCIA',
        label: 'Grecia v/s Francia'
      }, {
        id: 'GRECIA_CROACIA',
        label: 'Grecia v/s Croacia'
      }, {
        id: 'GRECIA_MÉXICO',
        label: 'Grecia v/s México'
      }, {
        id: 'GRECIA_URUGUAY',
        label: 'Grecia v/s Uruguay'
      }, {
        id: 'MÉXICO_ARGENTINA',
        label: 'México v/s Argentina'
      }, {
        id: 'MÉXICO_AUSTRALIA',
        label: 'México v/s Australia'
      }, {
        id: 'MÉXICO_BRASIL',
        label: 'México v/s Brasil'
      }, {
        id: 'MÉXICO_COREA DEL SUR',
        label: 'México v/s Corea del Sur'
      }, {
        id: 'MÉXICO_COSTA RICA',
        label: 'México v/s Costa Rica'
      }, {
        id: 'MÉXICO_ESTADOS UNIDOS',
        label: 'México v/s Estados Unidos'
      }, {
        id: 'MÉXICO_IRÁN',
        label: 'México v/s Irán'
      }, {
        id: 'MÉXICO_ITALIA',
        label: 'México v/s Italia'
      }, {
        id: 'MÉXICO_JAPÓN',
        label: 'México v/s Japón'
      }, {
        id: 'MÉXICO_HOLANDA',
        label: 'México v/s Holanda'
      }, {
        id: 'MÉXICO_ALEMANIA',
        label: 'México v/s Alemania'
      }, {
        id: 'MÉXICO_BÉLGICA',
        label: 'México v/s Bélgica'
      }, {
        id: 'MÉXICO_COLOMBIA',
        label: 'México v/s Colombia'
      }, {
        id: 'MÉXICO_SUIZA',
        label: 'México v/s Suiza'
      }, {
        id: 'MÉXICO_RUSIA',
        label: 'México v/s Rusia'
      }, {
        id: 'MÉXICO_BOSNIA',
        label: 'México v/s Bosnia'
      }, {
        id: 'MÉXICO_INGLATERRA',
        label: 'México v/s Inglaterra'
      }, {
        id: 'MÉXICO_ESPAÑA',
        label: 'México v/s España'
      }, {
        id: 'MÉXICO_CHILE',
        label: 'México v/s Chile'
      }, {
        id: 'MÉXICO_ECUADOR',
        label: 'México v/s Ecuador'
      }, {
        id: 'MÉXICO_HONDURAS',
        label: 'México v/s Honduras'
      }, {
        id: 'MÉXICO_CAMERÚN',
        label: 'México v/s Camerún'
      }, {
        id: 'MÉXICO_COSTA DE MARFIL',
        label: 'México v/s Costa de Marfil'
      }, {
        id: 'MÉXICO_NIGERIA',
        label: 'México v/s Nigeria'
      }, {
        id: 'MÉXICO_GHANA',
        label: 'México v/s Ghana'
      }, {
        id: 'MÉXICO_ARGELIA',
        label: 'México v/s Argelia'
      }, {
        id: 'MÉXICO_PORTUGAL',
        label: 'México v/s Portugal'
      }, {
        id: 'MÉXICO_FRANCIA',
        label: 'México v/s Francia'
      }, {
        id: 'MÉXICO_CROACIA',
        label: 'México v/s Croacia'
      }, {
        id: 'MÉXICO_GRECIA',
        label: 'México v/s Grecia'
      }, {
        id: 'MÉXICO_URUGUAY',
        label: 'México v/s Uruguay'
      }, {
        id: 'URUGUAY_ARGENTINA',
        label: 'Uruguay v/s Argentina'
      }, {
        id: 'URUGUAY_AUSTRALIA',
        label: 'Uruguay v/s Australia'
      }, {
        id: 'URUGUAY_BRASIL',
        label: 'Uruguay v/s Brasil'
      }, {
        id: 'URUGUAY_COREA DEL SUR',
        label: 'Uruguay v/s Corea del Sur'
      }, {
        id: 'URUGUAY_COSTA RICA',
        label: 'Uruguay v/s Costa Rica'
      }, {
        id: 'URUGUAY_ESTADOS UNIDOS',
        label: 'Uruguay v/s Estados Unidos'
      }, {
        id: 'URUGUAY_IRÁN',
        label: 'Uruguay v/s Irán'
      }, {
        id: 'URUGUAY_ITALIA',
        label: 'Uruguay v/s Italia'
      }, {
        id: 'URUGUAY_JAPÓN',
        label: 'Uruguay v/s Japón'
      }, {
        id: 'URUGUAY_HOLANDA',
        label: 'Uruguay v/s Holanda'
      }, {
        id: 'URUGUAY_ALEMANIA',
        label: 'Uruguay v/s Alemania'
      }, {
        id: 'URUGUAY_BÉLGICA',
        label: 'Uruguay v/s Bélgica'
      }, {
        id: 'URUGUAY_COLOMBIA',
        label: 'Uruguay v/s Colombia'
      }, {
        id: 'URUGUAY_SUIZA',
        label: 'Uruguay v/s Suiza'
      }, {
        id: 'URUGUAY_RUSIA',
        label: 'Uruguay v/s Rusia'
      }, {
        id: 'URUGUAY_BOSNIA',
        label: 'Uruguay v/s Bosnia'
      }, {
        id: 'URUGUAY_INGLATERRA',
        label: 'Uruguay v/s Inglaterra'
      }, {
        id: 'URUGUAY_ESPAÑA',
        label: 'Uruguay v/s España'
      }, {
        id: 'URUGUAY_CHILE',
        label: 'Uruguay v/s Chile'
      }, {
        id: 'URUGUAY_ECUADOR',
        label: 'Uruguay v/s Ecuador'
      }, {
        id: 'URUGUAY_HONDURAS',
        label: 'Uruguay v/s Honduras'
      }, {
        id: 'URUGUAY_CAMERÚN',
        label: 'Uruguay v/s Camerún'
      }, {
        id: 'URUGUAY_COSTA DE MARFIL',
        label: 'Uruguay v/s Costa de Marfil'
      }, {
        id: 'URUGUAY_NIGERIA',
        label: 'Uruguay v/s Nigeria'
      }, {
        id: 'URUGUAY_GHANA',
        label: 'Uruguay v/s Ghana'
      }, {
        id: 'URUGUAY_ARGELIA',
        label: 'Uruguay v/s Argelia'
      }, {
        id: 'URUGUAY_PORTUGAL',
        label: 'Uruguay v/s Portugal'
      }, {
        id: 'URUGUAY_FRANCIA',
        label: 'Uruguay v/s Francia'
      }, {
        id: 'URUGUAY_CROACIA',
        label: 'Uruguay v/s Croacia'
      }, {
        id: 'URUGUAY_GRECIA',
        label: 'Uruguay v/s Grecia'
      }, {
        id: 'URUGUAY_MÉXICO',
        label: 'Uruguay v/s México'
      }
    ];
  });

}).call(this);

/*
//@ sourceMappingURL=match.js.map
*/