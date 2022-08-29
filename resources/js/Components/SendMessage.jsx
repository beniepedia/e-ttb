import React, { useState } from 'react'
import Input from './Input'
import Label from './Label'
import TextArea from './TextArea'
import Button from './Button'
import { useForm } from '@inertiajs/inertia-react'
import { phoneFormatter, sendWA } from '@/Helper'
import { toast } from 'react-toastify'
import { isEmpty, isNumber, toNumber } from 'lodash'
import CreatableSelect from 'react-select/creatable';
import axios from 'axios'

export default function SendMessage({ customers }) {

    const { data, setData, reset } = useForm({
        phone: '',
        text: ''
    })

    const [processing, setProcessing] = useState(false)

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onHandleClick = () => {

        if (isEmpty(data.phone)) {
            toast.info('Masukkan no tujuan...')
            return
        } else if (isEmpty(data.text)) {
            toast.info('Masukkan isi pesan')
            return
        } else if (!isNumber(toNumber(data.phone))) {
            toast.info('No. Tujuan tidak valid')
            return
        }


        setProcessing(true)

        axios.post(route('whatsapp.sendMessage'), {
            id: phoneFormatter(data.phone),
            message: {
                text: data.text
            }
        }).then(({ data }) => {
            if (data.success) {
                toast.success('Pesan berhasil dikirim...')
                reset()
            } else {
                toast.error('Pesan gagal dikirim...')
            }

            setProcessing(false)
        })



    }
    return (
        <div className='card bg-slate-100 dark:bg-slate-900 shadow-md'>
            <div className="card-body p-3">
                <div className="card-title text-slate-600">Kirim Whatsapp</div>
                <div>
                    <Label>No. Tujuan</Label>
                    <CreatableSelect
                        isClearable
                        options={customers}
                        noOptionsMessage={() => 'Tidak ada pilihan'}
                        placeholder='Pilih Tujuan...'
                        onChange={(e) => setData({ ...data, phone: e.value })}
                        formatCreateLabel={inputValue => '[ Tambah Baru ...] ' + inputValue}
                    />
                </div>
                <div className=''>
                    <Label>Pesan</Label>
                    <TextArea
                        name='text'
                        value={data.text}
                        handleChange={handleChange}
                        placeHolder=''
                    ></TextArea>
                </div>
                <div className='text-right mt-2'>
                    <Button handleClick={onHandleClick} type='button' processing={processing}>Kirim</Button>
                </div>
            </div>
        </div>
    )
}
