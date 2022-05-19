import React, { useEffect, useState } from 'react'
import { Table as TableAnt } from 'antd';
import { Select } from 'antd';
import { selectColumns, showTable } from '../helpers/helpers';
import './QueryScreen.css'

const { Option } = Select;

const QueryScreen = () => {

    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [table, setTable] = useState('CATEGORIA_LEXICA');

    useEffect(() => {
        const getData = async () => {
            const resp = await showTable(table);
            if (resp.ok) {
                setData(resp.result);
            }
        }
        getData();
    }, [table])


    useEffect(() => {
        if (data.length !== 0) {
            setColumns( selectColumns( table ));
        }

    }, [data])


    function handleChange(value) {
        setTable(value);
    }

    return (
        <div className='query'>
            <div className='query__descripcion'>
                <p>
                    SELECT * FROM
                </p>
                <Select defaultValue="CATEGORIA_LEXICA" style={{ width: 200, margin: 0 }} onChange={handleChange}>
                    <Option value="CATEGORIA_LEXICA">CATEGORIA_LEXICA</Option>
                    <Option value="TABLA_SIMBOLOS">TABLA_SIMBOLOS</Option>
                    <Option value="TABLA">TABLA</Option>
                </Select>
            </div>
            <TableAnt
                className='query_table'
                columns={columns}
                dataSource={data.map((item, i) => {
                    item.key = i;
                    return item;
                })}
                scroll={{ y: 300 }}
                pagination={false}
            />
        </div>
    )
}

export default QueryScreen