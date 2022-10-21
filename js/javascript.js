
let preTrago;
let trago;
let endulzante;
let prepaComida;
let comida;
let cantidadComida;
let tipoSalsa;

function bienvenida() {
	let nombre = prompt('Hola Soy BebiCom ¿cual es tu nombre?');
	let horarioCo = prompt('Hola ' + nombre + ' Que deseas adquirir \n1-Desayuno\n2-Almuerzo');
	return horarioCo;
}

let horario = bienvenida();
bienvenida();
for (let i = 0; i < 1; i++) {
	switch (horario) {
		case 'desayuno':
		case '1':
			preTrago = prompt('Bienvenido ' + nombre + ' ¿deseas comprar una bebida para su desayuno?');
			if (preTrago == 'Si' || preTrago == 'si' || preTrago == 'SI') {
				trago = prompt('¿Que bebida deseas?\n 1-Cafe\n 2-Te\n 3-Capuccino\n 4-Chocolatte\n 5-Cafe con leche\n 6-Cafe descafeinado\n 7-Mate cocido');
				if (trago == '1' || trago == 'cafe') {
					alert('Su pedido esta siendo preparado');
					endulzante = prompt('¿deseas ponerle Azucar o edulcorante?');
					if (endulzante == 'azucar') {
						alert('Aqui tienes dos sobres de azucar\nDisfruta de tu cafe');
					} else if (endulzante == 'edulcorante') {
						alert('Aqui tienes dos sobres de edulcorante\nDisfruta de tu cafe')
					} else if (endulzante == 'no' || endulzante == 'No' || endulzante == 'NO') {
						alert('Disfruta de tu Cafe');
					}
				}
				else if (trago == '2' || trago == 'te') {
					alert('Su pedido esta siendo preparado');
					endulzante = prompt('¿deseas ponerle Azucar o edulcorante?');
					if (endulzante == 'azucar') {
						alert('Aqui tienes dos sobres de azucar\nDisfruta de tu te');
					} else if (endulzante == 'edulcorante') {
						alert('Aqui tienes dos sobres de edulcorante\nDisfruta de tu te')
					} else if (endulzante == 'no' || endulzante == 'No' || endulzante == 'NO') {
						alert('Disfruta de tu Te');
					}
				}
				else if (trago == '3' || trago == 'capuccino') {
					alert('Su pedido esta siendo preparado');
					endulzante = prompt('¿deseas ponerle Azucar o edulcorante?');
					if (endulzante == 'azucar') {
						alert('Aqui tienes dos sobres de azucar\nDisfruta de tu capuccino');
					} else if (endulzante == 'edulcorante') {
						alert('Aqui tienes dos sobres de edulcorante\nDisfruta de tu capuccino')
					} else if (endulzante == 'no' || endulzante == 'No' || endulzante == 'NO') {
						alert('Disfruta de tu Capuccino');
					}
				}
				else if (trago == '4' || trago == 'chocolatte') {
					alert('Su pedido esta siendo preparado');
					endulzante = prompt('¿deseas ponerle Azucar o edulcorante?');
					if (endulzante == 'azucar') {
						alert('Aqui tienes dos sobres de azucar\nDisfruta de tu chocolatte');
					} else if (endulzante == 'edulcorante') {
						alert('Aqui tienes dos sobres de edulcorante\nDisfruta de tu chocolatte');
					} else if (endulzante == 'no' || endulzante == 'No' || endulzante == 'NO') {
						alert('Disfruta de tu chocolatte');
					}
				}
				else if (trago == '5' || trago == 'cafe con leche') {
					alert('Su pedido esta siendo preparado');
					endulzante = prompt('¿deseas ponerle Azucar o edulcorante?');
					if (endulzante == 'azucar') {
						alert('Aqui tienes dos sobres de azucar\nDisfruta de tu cafe con leche');
					} else if (endulzante == 'edulcorante') {
						alert('Aqui tienes dos sobres de edulcorante\nDisfruta de tu cafe con leche')
					} else if (endulzante == 'no' || endulzante == 'No' || endulzante == 'NO') {
						alert('Disfruta de tu Cafe con leche');
					}
				}
				else if (trago == '6' || trago == 'descafeinado') {
					alert('Su pedido esta siendo preparado');
					endulzante = prompt('¿deseas ponerle Azucar o edulcorante?');
					if (endulzante == 'azucar') {
						alert('Aqui tienes dos sobres de azucar\nDisfruta de tu descafeinado');
					} else if (endulzante == 'edulcorante') {
						alert('Aqui tienes dos sobres de edulcorante\nDisfruta de tu descafeinado')
					} else if (endulzante == 'no' || endulzante == 'No' || endulzante == 'NO') {
						alert('Disfruta de tu Descafeinado');
					}
				}
				else if (trago == '7' || trago == 'mate cocido') {
					alert('Su pedido esta siendo preparado');
					endulzante = prompt('¿deseas ponerle Azucar o edulcorante?');
					if (endulzante == 'azucar') {
						alert('Aqui tienes dos sobres de azucar\nDisfruta de tu te');
					} else if (endulzante == 'edulcorante') {
						alert('Aqui tienes dos sobres de edulcorante\nDisfruta de tu te')
					} else if (endulzante == 'no' || endulzante == 'No' || endulzante == 'NO') {
						alert('Disfruta de tu Mate cocido');
					}
				}
			}
			else if (preTrago == 'No' || preTrago == 'no' || preTrago == 'NO') {
				alert('cagate de sed');
			}

			prepaComida = prompt('¿desearia algo para comer en su desayuno?');

			if (prepaComida == 'si') {
				comida = parseInt(prompt('¿Que comida deseas?\n 1-medialunas\n 2-criollos\n 3-sandwinch de jamon y queso\n 4-Postre\n 5-porcion de tarta de fruta'));

				if (comida == '1') {
					cantidadComida = parseInt(prompt('bueno ,¿cuantas medialunas va a querer?'));
					if (cantidadComida == 1) {
						alert('Su pedido esta siendo preparado');
						alert('Aqui tiene su medialuna \nGracias por tu compra');
					}
					else if (cantidadComida > 1) {
						alert('Su pedido esta siendo preparado');
						alert('Aqui tiene sus ' + cantidadComida + ' medialunas \nGracias por tu compra');
					}
				}
				else if (comida == '2') {
					cantidadComida = prompt('¿cuantos criollos va a querer?')
					if (cantidadComida == 1) {
						alert('Su pedido esta siendo preparado');
						alert('Aqui tiene su criollo \nGracias por tu compra');
					}
					else if (cantidadComida > 1) {
						alert('Su pedido esta siendo preparados');
						alert('Aqui tiene sus ' + cantidadComida + ' criollos \nGracias por tu compra');
					}
				}
				else if (comida == '3') {
					cantidadComida = prompt('¿cuantos sandwichs vas a querer?')
					if (cantidadComida == 1) {
						alert('Su pedido esta siendo preparado');
						alert('Aqui tiene su sandwich \nGracias por tu compra');
					}
					else if (cantidadComida > 1) {
						alert('Su pedido esta siendo preparado');
						alert('Aqui tiene sus ' + cantidadComida + ' sandwichs \nGracias por tu compra');
					}
				}
				else if (comida == '4') {
					cantidadComida = prompt('¿cuantos postres va a querer?')
					if (cantidadComida == 1) {
						alert('Su pedido esta siendo preparado');
						alert('Aqui tiene su postre \nGracias por tu compra');
					}
					else if (cantidadComida > 1) {
						alert('Su pedido esta siendo preparado');
						alert('Aqui tiene sus ' + cantidadComida + ' postres \nGracias por tu compra');
					}
				}
				else if (comida == '5') {
					cantidadComida = prompt('bueno, ¿cuantas porciones de tartas va a querer?')
					if (cantidadComida == 1) {
						alert('Su pedido esta siendo preparado');
						alert('Aqui tiene su porcion de tarta de fruta \nGracias por tu compra');
					}
					else if (cantidadComida > 1) {
						alert('Su pedido esta siendo preparado');
						alert('Aqui tiene sus ' + cantidadComida + ' porciones de tarta de fruta \nGracias por tu compra');
					}
				}
			} else if (prepaComida == 'no') {
				alert('Gracias por tu tiempo\nDisfruta de tu dia!');
			};
			break;

		case 'almuerzo':
		case '2':
			preTrago = prompt('Bienvenido ' + nombre + ' ¿deseas comprar una bebida para su almuerzo?');
			if (preTrago == 'Si' || preTrago == 'si' || preTrago == 'SI') {
				trago = prompt('¿Que bebida deseas?\n1-Coca Cola\n2-Sprite\n3-Cerveza o pinta\n 4-Vino\n 5-Agua saborizada\n 6-Agua\n 7-Soda');
				if (trago == '1' || trago == 'coca' || trago == 'coca cola') {
					alert('Su bebida esta siendo preparada');
					alert('Disfruta de tu Coca cola');
				}
				else if (trago == '2' || trago == 'sprite' || trago == 'Sprite') {
					alert('Su bebida esta siendo preparada');
					alert('Disfruta de tu sprite');
				}
				else if (trago == '3' || trago == 'Cerveza' || trago == 'cerveza' || trago == 'pinta') {
					alert('Su bebida esta siendo preparada');
					alert('Disfruta de tu Cerveza');
				}
				else if (trago == '4' || trago == 'Vino' || trago == 'vino') {
					alert('Su bebida esta siendo preparada');
					alert('Disfruta de tu vino');
				}
				else if (trago == '5' || trago == 'Agua saborizada' || trago == 'agua saborizada') {
					alert('Su bebida esta siendo preparada');
					alert('Disfruta de su Agua saborizada');
				}
				else if (trago == '6' || trago == 'agua' || trago == 'Agua') {
					alert('Su bebida esta siendo preparada');
					alert('Disfruta de tu Agua');
				}
				else if (trago == '7' || trago == 'Soda' || trago == 'soda') {
					alert('Su bebida esta siendo preparada');
					alert('Disfruta de tu soda');
				}
				else {
					alert('esa bebida u opcion no esta disponible')
				}
			}
			else if (preTrago == 'No' || preTrago == 'no' || preTrago == 'NO') {
				alert('ojala te ahogues');
			}

			prepaComida = prompt('¿desearia algo para comer en tu almuerzo?');

			if (prepaComida == 'si') {
				comida = parseInt(prompt('¿Que comida deseas?\n 1-pastas con salsa\n 2-carne al horno con ensalada\n 3-lomito con fritas\n 4-milanesa con fritas\n 5-porcion de tarta de verdura'));

				if (comida == '1') {
					tipoSalsa = prompt('¿que tipo de salsa deseas?\n1-salsa roja\n2-salsa blanca')
					switch (tipoSalsa) {
						case '1':
							alert('Su plato esta siendo preparado');
							alert('Disfruta de tu plato de pastas con salsa roja');
							break;
						case '2':
							alert('Su plato esta siendo preparado');
							alert('Disfruta de tu plato de pastas con salsa blanca');
					}
				}
				else if (comida == '2') {
					alert('Su plato esta siendo preparado');
					alert('Disfruta de tu plato de carne al horno con ensalada');
				}
				else if (comida == '3') {
					alert('Su plato esta siendo preparado');
					alert('Disfruta de tu lomito con fritas');
				}
				else if (comida == '4') {
					alert('Su plato esta siendo preparado');
					alert('Disfruta de tu milanesa con fritas');
				}
				else if (comida == '5') {
					alert('Su plato esta siendo preparado');
					alert('Disfruta de tu porcion detarta de verdura');
				}
				else {
					alert('ese plato u opcion no esta disponible');
				}

			}else if (prepaComida =='no' && (preTrago == 'Si' || preTrago == 'si' || preTrago == 'SI')) {
				alert('Gracias por tu compra \nDisfruta de tu bebida');
			} 
			else if (prepaComida == 'no') {
				alert('Gracias por tu tiempo\nDisfruta de tu dia!');
			};
			break;
		default:
			alert('esa opcion es incorrecta');
	}

}
