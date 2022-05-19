
const parser = require('./gramatica')



export const analizar = (codigo) => {

    return parser.parse(codigo);

}
