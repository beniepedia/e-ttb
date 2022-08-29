import React, { useEffect, useState } from 'react'
import Layouts from '@/Layouts/Main'
import { Inertia } from '@inertiajs/inertia'
import axios from 'axios'
import Button from '@/Components/Button'
import { usePage } from '@inertiajs/inertia-react'


const WhatsappIndex = () => {

    const { session } = usePage().props;


    let imgFail = 'images/assets/fail.png';
    let imgSuccess = 'images/assets/success.png';
    let loader = 'images/assets/loader.gif';

    const [info, setInfo] = useState('TIDAK ADA SESI');
    const [isConnected, setIsConnected] = useState(false);
    const [loading, setLoading] = useState(false);
    const [qrcode, setQrcode] = useState(loader);
    const [sessname, setSessname] = useState(session);

    const [autoUpdate, setAutoUpdate] = useState(false);

    useEffect(() => {
        if (!sessname == '') {
            sessionFind()
        }

    }, [])

    useEffect(() => {

        if (autoUpdate) {
            let start = setInterval(() => {
                checkSessionStatus()
            }, 5000)

            return () => clearInterval(start)
        }

    }, [autoUpdate])

    // cek update
    const checkSessionStatus = () => {
        axios.post(route('whatsapp.status'),
            { sessname }
        ).then(({ data }) => {
            let res = data.data;

            if (data.success) {
                if (res.status == 'authenticated') {
                    Authenticate()
                }
            } else {
                setSessname('')
                NoSession()
                deleteSession()
            }
        })
    }

    const sessionFind = () => {
        axios.post(route('whatsapp.find'), {
            sessname
        }).then(({ data }) => {
            if (data.success) {
                Authenticate()
            } else {
                NoSession()
            }
        }).catch(error => {
            ServerDown()

        })
    }

    const Authenticate = () => {
        setQrcode(imgSuccess)
        setInfo('TERHUBUNG')
        setIsConnected(true)
        setAutoUpdate(false)
    }

    const ServerDown = () => {
        setQrcode(imgFail)
        setInfo('SERVER DOWN')
        setIsConnected(false)
        setAutoUpdate(false)
    }

    const NoSession = () => {
        setQrcode(loader)
        setInfo('TIDAK ADA SESI')
        setIsConnected(false)
        setAutoUpdate(false)
    }

    // delete session
    const deleteSession = () => {
        setLoading(true)
        axios.post(route('whatsapp.delete'), {
            sessname
        }).then(({ data }) => {
            console.log(data)
            if (data.success) {
                NoSession()
            }
            setLoading(false)
        })
    }

    // submit session
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)


        axios.post(route('whatsapp.addsession'), {
            sessname
        }).then((res) => {
            let status = res.data.success
            let qr = res.data.data.qr
            if (status) {
                setQrcode(qr);
                setInfo('SCAN ME');
                setLoading(false)
                setAutoUpdate(true)
            } else {
                ServerDown()
            }
        });

    }

    const saveSession = () => {
        Inertia.post(route('whatsapp.sessionStore'), { session: sessname }, {
            preserveState: true,
            replace: true,
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='my-8 flex justify-center mx-20 md:mx-10'>
                <div className='flex gap-2 flex-col w-full md:w-1/3'>
                    <div className=' rounded-lg shadow overflow-hidden'>
                        <img src={qrcode} alt={qrcode} className='border-white bg-slate-100 border-8 w-full' />

                        <div className='bg-sky-300 py-4 text-center'>
                            <h1 className='font-semibold text-xl text-slate-700'>{info}</h1>
                        </div>
                    </div>
                    {
                        !autoUpdate && (!isConnected ? (<>
                            <input value={sessname} type="text" className='input input-bordered mt-8' onChange={(e) => setSessname(e.target.value)} placeholder="Masukkan nama sesi" />

                            <Button type='submit' processing={loading}>{loading ? 'please wait' : 'tambah sesi'}</Button>
                        </>) : <Button type='button' className='btn-error' processing={loading} handleClick={deleteSession}>HAPUS SESI</Button>)

                    }

                </div>
            </div>
        </form>
    )
}

WhatsappIndex.layout = page => <Layouts auth={page.props.auth} children={page} />

export default WhatsappIndex