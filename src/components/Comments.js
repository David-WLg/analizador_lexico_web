import React, { useContext } from 'react'
import { Table as TableAnt } from 'antd';
import { CodeContext } from '../context/CodeContext';

const columns = [
    {
        title: 'Comentarios',
        dataIndex: 'comment',
        width: 150,
    }
];


const Comments = () => {

    const {comments: data} = useContext( CodeContext );

    return (
        <div style={{ padding: '10px 20px 20px 20px' }}>
            <TableAnt
                columns={columns}
                dataSource={data.map( (item, i) => {
                    return {key: i, comment: item }
                })}
                scroll={{ y: 120 }}
                pagination={false}
            />
        </div>
    )
}

export default Comments