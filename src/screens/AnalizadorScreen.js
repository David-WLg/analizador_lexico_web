import React from 'react'
import Actions from '../components/Actions'
import PanelCode from '../components/PanelCode'


const AnalizadorScreen = () => {


    return (
        <div style={{display: 'flex', flexWrap: 'wrap' }}>
            <PanelCode />
            <Actions />
        </div>
    )
}

export default AnalizadorScreen