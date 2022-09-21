import React from 'react'
import Button from '@/Components/Button'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import * as Icon from 'react-bootstrap-icons'
import { Link } from "@inertiajs/inertia-react"

const ReceiptIsDone = ({ data, processing, handleClick }) => {
    return (
        <>
            {data.receipt_status.length ? (
                <>
                    <div className='p-3 bg-teal-500 rounded-t-lg text-white font-semibold'>
                        List TTB Selesai
                    </div>
                    <div className="overflow-scroll  rounded-b-lg">

                        {data.receipt_status.map((receipt) => {
                            return (
                                <div tabIndex={0} className="collapse  collapse-arrow" key={receipt.id}>
                                    <input type="checkbox" className='peer' />
                                    <div className="collapse-title bg-white text-black-content peer-checked:bg-amber-200 peer-checked:text-amber-200-content">
                                        No. Register : {receipt.receipt_code}
                                    </div>
                                    <div className="collapse-content bg-white text-white-content peer-checked:bg-amber-100 peer-checked:text-sky-300-content">
                                        <table className='my-5 text-center w-full table-compact'>
                                            <tbody>
                                                <tr>
                                                    <td>No. TTB</td>
                                                    <td>:</td>
                                                    <td>{receipt.receipt_number}</td>
                                                </tr>
                                                <tr>
                                                    <td>Tgl Masuk</td>
                                                    <td>:</td>
                                                    <td>{format(new Date(receipt.delivery_date), 'dd LLLL yyyy', { locale: id })}</td>
                                                </tr>
                                                <tr>
                                                    <td>Customer</td>
                                                    <td>:</td>
                                                    <td>{receipt.customer.name} </td>
                                                </tr>
                                                <tr>
                                                    <td>Teknisi</td>
                                                    <td>:</td>
                                                    <td>{receipt.user.name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Status</td>
                                                    <td>:</td>
                                                    <td>
                                                        <div className={`badge badge-${receipt.status == 'Berhasil' ? 'success' : 'error'}`}>
                                                            {receipt.status}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className='text-right'>
                                            <Link
                                                href={route('receipt.show', receipt.receipt_code)}
                                                className='btn btn-ghost btn-circle mr-3'
                                            >
                                                <Icon.InfoCircleFill className='text-xl text-sky-600' />
                                            </Link>
                                            {
                                                receipt.customer.whatsapp && <Button
                                                    className='btn-success btn-sm'
                                                    processing={processing}
                                                    handleClick={() => handleClick(receipt)}
                                                >
                                                    {
                                                        !processing && <Icon.Whatsapp className='text-xl text-green-700' />
                                                    }&nbsp;&nbsp;Kirim Pesan
                                                </Button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </>
            ) : ''}

        </>

    )
}

export default ReceiptIsDone