import React from 'react'
import { BellFill } from 'react-bootstrap-icons'

const Notifications = ({ children }) => {
    return (
        <div className='dropdown dropdown-end'>
            <label tabIndex="0" className='mr-3 btn-ghost btn btn-circle '>
                <BellFill className='text-xl text-slate-200' />
            </label>

            <ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 shadow bg-base-100 w-60'>
                <li>
                    <div className='py-4'>Fitur belum bisa digunakan</div>
                </li>
            </ul>
        </div>
    )
}

export default Notifications