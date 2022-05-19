const { categorias } = require("./categorias");


class Nodo{

    constructor(lexema, codigoCategoria){
        this.lexema = lexema;
        this.codigo_categoria = codigoCategoria;
        this.categoria_lexica = categorias.find( item => item.codigo === codigoCategoria ).categoria;
        this.codigo = null;
    }

}

module.exports = Nodo;