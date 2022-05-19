
import { FileOutlined, FolderOpenOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useContext, useEffect, useRef } from 'react'
import { CodeContext } from '../context/CodeContext'
import './Actions.css'
import Comments from './Comments'
import Table from './Table'
import { analizar } from '../grammar/main'
import { insertTable } from '../helpers/helpers'

const Actions = () => {

    const { clean, openFile, codeState, loadResults, loadComments, results } = useContext(CodeContext);

    const file = useRef();

    const handleAnalizar = () => {
        if (codeState.trim() === '') return;

        const [resultados, comentarios] = analizar(codeState);
        loadResults(resultados);
        loadComments(comentarios);
    }

    useEffect(() => {
        if (results.length === 0) return;

        const insertData = async () => {
            await insertTable( results );
            
        }

        insertData();
    }, [results])


    return (
        <div className='actions'>
            <div className='actions__buttons'>

                <div>
                    <Button type="primary" shape="round" icon={<FileOutlined />} onClick={clean} />

                    <Button type="primary" shape="round" icon={<FolderOpenOutlined />} onClick={() => {
                        file?.current.click();
                    }} />

                    <input
                        type='file'
                        ref={file} style={{ display: 'none' }}
                        onChange={openFile}
                    />
                </div>


                <Button
                    type="primary"
                    shape="round"
                    icon={<PlayCircleOutlined />}
                    style={{ display: 'flex', alignItems: 'center' }}
                    onClick={handleAnalizar}
                >
                    Analizar
                </Button>


            </div>

            <div className='actions__tables'>
                <Table />
                <Comments />
            </div>



        </div>
    )
}

export default Actions