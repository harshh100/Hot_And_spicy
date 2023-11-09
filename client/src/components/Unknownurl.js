import React from 'react'
import { Link } from 'react-router-dom'

function Unknownurl() {
    return (
        <div className='err'>
            <center>
                <p className='err_404'>Error 404</p>
                <div>
                    <Link to='/'>Back To Home</Link>
                </div>
            </center>
        </div>
    )
}

export default Unknownurl