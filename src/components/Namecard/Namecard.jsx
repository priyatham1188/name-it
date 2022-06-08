import React from 'react'
import './Namecard.css';
const nameCheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain='

const Namecard = ({ suggestedname }) => {
    return (
        <a href={`${nameCheapUrl}${suggestedname}`} className='link' target='_blank'>
            <div className='namecard'>
                <p className='names'>{suggestedname}</p>

            </div>
        </a>

    )
}

export default Namecard;