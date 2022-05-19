import React, { useContext } from 'react'

import { Table as TableAnt } from 'antd';
import { CodeContext } from '../context/CodeContext';

const columns = [
    {
        title: 'Lexema',
        dataIndex: 'lexema',
        width: 150,
    },
    {
        title: 'Categoria Lexica',
        dataIndex: 'categoria_lexica',
        width: 150,
    }
];


const Table = () => {

    const { results: data} = useContext(CodeContext);

    return (
        <div style={{ padding: '20px 20px 10px 20px' }}>
            <TableAnt
                columns={columns}
                dataSource={data.map( (item, i) => {
                    item.key = i;
                    return item;
                })}
                scroll={{ y: 275 }}
                pagination={false}
            />
        </div>
    )
}

export default Table