const pontuacaoUsuario = 1001

/*if (pontuacaoUsuario >= 1000) {return 'Usuário Vip'}
else {return 'Usuário normal'}*/

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário normal'
console.log(nivelUsuario)