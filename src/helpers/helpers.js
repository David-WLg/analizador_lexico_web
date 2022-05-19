import { categorias } from "../grammar/categorias";


//const url = 'http://localhost:8080';
const url = 'https://analizador-backend-node-mysql.herokuapp.com';

export const showTable = async (name) => {
    const result = await fetch(`${url}/api/query/${name}`);
    const data = await result.json();

    return data;
}

const addCode = ( arr ) => {
    categorias.forEach( categoria => {
        const arrFiltered = arr.filter( item => categoria.codigo === item.codigo_categoria );
        arrFiltered.forEach( (item, i) => {
            item.codigo = item.codigo_categoria + (i+1);
        })
    })

    return arr;
}

export const insertTable = async ( results ) => {

    const arr = addCode( results )

    const result = await fetch(`${url}/api/query`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            simbols: arr
        }),

    });
    const data = await result.json();
    return data.ok;
}

export const selectColumns = (type) => {

    let columns = [];

    if (type === 'CATEGORIA_LEXICA') {
        columns = [
            {
                title: 'Codigo',
                dataIndex: 'codigo',
                width: 150,
            },
            {
                title: 'Categoria Lexica',
                dataIndex: 'nombre',
                width: 150,
            }
        ]
    }
    if (type === 'TABLA_SIMBOLOS') {
        columns = [
            {
                title: 'Lexema',
                dataIndex: 'lexema',
                width: 150,
            },
            {
                title: 'Codigo Categoria',
                dataIndex: 'codigo_categoria',
                width: 150,
            },
            {
                title: 'Codigo',
                dataIndex: 'codigo',
                width: 150,
            }
        ]
    }
    if (type === 'TABLA') {
        columns = [
            {
                title: 'Lexema',
                dataIndex: 'lexema',
                width: 150,
            },
            {
                title: 'Codigo Categoria',
                dataIndex: 'codigo_categoria',
                width: 150,
            },
            {
                title: 'Categoria Lexica',
                dataIndex: 'categoria_lexica',
                width: 150,
            },
            {
                title: 'Codigo',
                dataIndex: 'codigo',
                width: 150,
            }
        ]
    }

    return columns;
}