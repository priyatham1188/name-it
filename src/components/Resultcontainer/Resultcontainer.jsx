import React from 'react'
import Namecard from '../Namecard/Namecard'
import './Resultcontainer.css'

const Resultcontainer = ({ suggestednames }) => {

    const suggestednamearr = suggestednames.map(suggestedname => {
        return <Namecard key={suggestedname} suggestedname={suggestedname}></Namecard>
    })

    return (
        <div className='results'>
            {suggestednamearr}
        </div>
    )
}

export default Resultcontainer;