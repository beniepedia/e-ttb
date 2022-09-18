import React, { useEffect, useState } from 'react'
import Layouts from '@/Layouts/Main'
import axios from 'axios'
import Button from '@/Components/Button'
import { toast } from "@/Components/Alert"
import { usePage } from '@inertiajs/inertia-react'


const WhatsappIndex = () => {
    const { auth } = usePage().props

    let imgFail = '/images/assets/fail.png';
    let imgSuccess = '/images/assets/success.png';
    let loader = '/images/assets/loader.gif';

    const [info, setInfo] = useState('CONNECTING...');
    const [loading, setLoading] = useState(false);
    const [qrcode, setQrcode] = useState(loader);
    const [retry, setRetry] = useState(0);

    const [autoUpdate, setAutoUpdate] = useState(false);

    useEffect(() => {
        connect()
    }, [])

    useEffect(() => {

        if (retry >= 5) return connectRetry()

        if (autoUpdate) {
            let start = setInterval(() => {
                checkStatus()
            }, 5000)

            return () => {
                clearInterval(start)
            }
        }


    }, [autoUpdate, retry])



    // cek update
    const checkStatus = () => {

        axios.post(route('whatsapp.status')).then(res => {

            let response = res.data;

            if (response.success) {
                Authenticate()
            }
        }).catch((err) => {
            console.log("server error");
            ServerDown()
        }).finally(() => {
            setRetry(prev => prev + 1)
        })
    }

    const connect = () => {
        setLoading(true)
        axios.post(route('whatsapp.connect')).then((res) => {
            setRetry(0)
            let success = res.data.success
            let qr = res.data.data.qr

            if (success) {
                if (!qr) {
                    return Authenticate()
                }

                setQrcode(qr);
                setInfo('SCAN ME');
                setAutoUpdate(true)

            }
        }).catch(error => {
            ServerDown()

        }).finally(() => {
            setLoading(false)
        })
    }

    const Authenticate = () => {
        setQrcode(imgSuccess)
        setInfo('TERHUBUNG')
        setAutoUpdate(false)
    }

    const ServerDown = () => {
        setQrcode(imgFail)
        setInfo('SERVER DOWN')
        setAutoUpdate(false)
    }

    const NoSession = () => {
        setQrcode(loader)
        setInfo('CONNECTING...')
        setAutoUpdate(false)
        setRetry(0)
    }

    const connectRetry = () => {
        setQrcode(loader)
        setInfo('TIME OUT')
        setAutoUpdate(false)
    }



    // delete session
    const logout = () => {
        if (auth.user.user_type !== "admin") {
            toast.error("Tidak memiliki akses untuk tindakan ini...")
            return
        }

        setLoading(true)
        axios.delete(route('whatsapp.logout')).then(({ data }) => {
            console.log(data)
            if (data.success) {
                NoSession()
            } else {
                { toast.error("Terjadi kesalahan saat logout...") }
            }
            // setLoading(false)
        }).catch(() => {
            ServerDown()
        }).finally(() => {
            setLoading(false)
        })
    }


    return (

        <div className='my-8 flex justify-center mx-20 md:mx-10'>
            <div className='flex gap-2 flex-col w-full md:w-1/3'>
                <div className=' rounded-lg shadow overflow-hidden'>
                    <img src={qrcode} alt={qrcode} className='border-white bg-slate-100 border-8 w-full' />

                    <div className='bg-sky-300 py-4 text-center'>
                        <h1 className='font-semibold text-xl text-slate-700'>{info}</h1>
                    </div>
                </div>
                {
                    info == "TIME OUT" || info == "CONNECTING..." ? (<Button
                        className="btn-success mt-3"
                        handleClick={() => connect()}
                        processing={loading}
                    >Reconnect</Button>) : ''
                }

                {
                    info == "TERHUBUNG" && (<Button
                        className="btn-error mt-3"
                        handleClick={() => logout()}
                        processing={loading}
                    >LOGOUT</Button>)
                }

            </div>
        </div>
    )
}

WhatsappIndex.layout = page => <Layouts auth={page.props.auth} children={page} />

export default WhatsappIndex