import React, { useEffect, useState } from 'react'
import { Head, usePage, Link } from '@inertiajs/inertia-react'
import Layout from '@/Layouts/Main'
import * as Icon from 'react-bootstrap-icons'
import CardInfo from '@/Components/Dashboard/CardInfo'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { greetings } from '@/Helper'
import { toast } from 'react-toastify'
import Button from '@/Components/Button'
import SendMessage from '@/Components/SendMessage'
import axios from 'axios'


const Dashboard = () => {
    const { data } = usePage().props

    const [processing, setProcessing] = useState(false)

    const onclick = (value) => {
        setProcessing(true)

        let greet = greetings();

        let message = `Selamat ${greet}, Kami informasikan bahwa tanda terima atas *${value.customer.name}* sudah selesai.`;

        axios.post(route('whatsapp.sendMessage'), {
            id: value.customer.whatsapp,
            message: {
                text: message
            }
        }).then(({ data }) => {

            if (data.success) {
                toast.success("Pesan berhasil dikirim...")
            } else {
                toast.error("Pesan gagal dikirim...")
            }

            setProcessing(false)
        });

    }


    return (
        <>
            <Head title="Dashboard" />

            <div className="py-5 px-3">
                <div className="carousel carousel-center space-x-4 py-2">
                    <div className="carousel-item ">
                        <CardInfo
                            title={data.receipt_today}
                            subtitle='TTB BARU'
                            className=' bg-gradient-to-br from-white via-green-100 to-green-300'
                        >
                            <Icon.JournalCheck className='text-7xl text-green-500 dark:text-slate-700' />
                        </CardInfo>
                    </div>
                    <div className="carousel-item ">
                        <CardInfo
                            title={data.receipt_active}
                            subtitle='TTB AKTIF'
                            className='bg-gradient-to-br from-white via-sky-100 to-sky-300 '
                        >
                            <Icon.JournalAlbum className='text-7xl text-sky-500 dark:text-slate-700' />
                        </CardInfo>
                    </div>
                    <div className="carousel-item ">
                        <CardInfo
                            title={data.receipt_total}
                            subtitle='TOTAL TTB'
                            className='bg-gradient-to-br from-white via-violet-100 to-violet-300'
                        >
                            <Icon.Journals className='text-7xl text-violet-500 dark:text-slate-700' />
                        </CardInfo>
                    </div>

                    <div className="carousel-item ">
                        <CardInfo
                            title={data.customer_total}
                            subtitle='CUSTOMER'
                            className='bg-gradient-to-br from-white via-amber-100 to-amber-300'
                        >
                            <Icon.PersonBadgeFill className='text-7xl text-amber-500 dark:text-slate-700' />
                        </CardInfo>
                    </div>
                </div>

                <div className='my-8'>
                    <h2 className='text-md my-3'>TTB SELESAI</h2>
                    <div className="overflow-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <td>KODE TTB</td>
                                    <td>TGL MASUK</td>
                                    <td>CUSTOMER</td>
                                    <td>TEKNISI</td>
                                    <td>STATUS</td>
                                    <td className='text-center'>AKSI</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.receipt_status.length ?
                                        data.receipt_status.map((value, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{value.receipt_code}</td>
                                                    <td>{format(new Date(value.delivery_date), 'dd LLLL yyyy', { locale: id })}</td>
                                                    <td>{value.customer.name}</td>
                                                    <td>{value.handle_by}</td>
                                                    <td>{value.status}</td>
                                                    <td className='flex justify-center'>
                                                        <Link
                                                            href={route('receipt.show', value.receipt_code)}
                                                            className='btn btn-ghost btn-circle'
                                                        >
                                                            <Icon.InfoCircleFill className='text-xl text-sky-600' />
                                                        </Link>

                                                        {
                                                            value.customer.whatsapp && <Button
                                                                className='btn-ghost btn-md btn-circle'
                                                                processing={processing}
                                                                handleClick={() => onclick(value)}
                                                            >
                                                                {
                                                                    !processing && <Icon.Whatsapp className='text-xl text-green-700' />
                                                                }
                                                            </Button>
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        }) :
                                        <tr>
                                            <td colSpan={6} align="center">Tidak ada data</td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='mt-10'>
                    <SendMessage customers={data.customers} />
                </div>
            </div>
        </>
    );
}

Dashboard.layout = page => <Layout
    auth={page.props.auth}
    errors={page.props.errors}
    children={page} />

export default Dashboard;