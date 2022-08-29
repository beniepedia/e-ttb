import React, { useState } from 'react'
import Layout from '@/Layouts/Main'
import Input from '@/Components/Input'
import Button from '@/Components/Button'
import { Head, useForm, Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import * as Icon from 'react-bootstrap-icons'
import Select from '@/Components/Select';
import Label from '@/Components/Label';
import TextArea from '@/Components/TextArea';
import SelectMulti from '@/Components/SelectMulti';
import ImageUpload from '@/Components/Receipts/ImageUpload';



const ReceiptAdd = ({ customers }) => {

    const option = [
        {
            label: 'Printer',
            value: 'Printer'
        },
        {
            label: 'Cartrigde',
            value: 'Cartridge'
        },
        {
            label: 'Toner',
            value: 'Toner'
        }
    ]

    const optionsKelengkapan = [
        {
            label: 'Kabel USB',
            value: 'Kabel_usb'
        },
        {
            label: 'Kabel Listrik',
            value: 'kabel_listrik'
        },
        {
            label: 'Kotak',
            value: 'kotak'
        }
    ]


    const { data, setData, post, errors, processing } = useForm({
        receipt_number: '',
        customer_id: '',
        kelengkapan: '',
        kerusakan: '',
        description: '',
        details: [{
            type: '',
            category: 'printer'
        }],
        photo: null
    });

    const [saveImage, setSaveImage] = useState({
        image_src: '',
        image_name: '',
        image_data: ''
    });

    function handleAdd() {
        setData({ ...data, details: [...data.details, { type: '', category: 'printer' }] })
    };


    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    }

    const handleChangeDynamic = (event, index) => {
        let details = data.details;
        details[index][event.target.name] = event.target.value;
        setData({ ...data, details });
    }

    const handleUpload = (e) => {
        let uploaded = e.target.files[0];

        setSaveImage({
            image_src: URL.createObjectURL(uploaded),
            image_name: uploaded.name,
            image_data: uploaded
        });

        setData('photo', uploaded);

    }

    function handleSelect(selectOption) {
        let selected = [];
        selectOption.map(val => {
            selected.push(val.label)
        })

        setData('kelengkapan', selected);

    }

    function handleRemove() {
        const details = data.details;
        details.splice(details, 1);
        setData({ ...data, details })
    }

    function handleSubmit(e) {
        e.preventDefault();

        post(route('receipts'), {
            preserveScroll: true
        })
    }

    return (
        <div>
            <Head title='Tambah TTB Baru'></Head>
            <div className='bg-slate-300 p-4'>
                <h2 className='font-semibold text-slate-600'>BUAT TTB BARU</h2>
            </div>

            <div className='p-4'>
                <form onSubmit={handleSubmit}>
                    <div className='flex gap-3'>
                        <div className=''>
                            <Label>Nomor Kartu</Label>
                            <Input
                                type='number'
                                name="receipt_number"
                                className={errors.receipt_number && 'input-error'}
                                handleChange={onHandleChange}
                                value={data.receipt_number}>

                            </Input>
                            {errors.receipt_number && <div className="invalid-feedback">
                                {errors.receipt_number}
                            </div>}
                        </div>

                        <div className='form-control w-full pr-14'>
                            <Label>Pelanggan</Label>
                            <div className="input-group">
                                <Select name='customer_id' className={errors.customer_id && 'select-error'} handleChange={onHandleChange}>
                                    <option value="">Pilih</option>
                                    {
                                        customers.map((value, index) => {
                                            return (
                                                <option value={value.id} key={index}>{value.name}</option>

                                            )
                                        })
                                    }
                                </Select>
                                <Link href={route('customers.create')} className="btn">
                                    <Icon.PlusLg className='text-xl' />
                                </Link>

                            </div>
                            {errors.customer_id && <div className="invalid-feedback">
                                {errors.customer_id}
                            </div>}
                        </div>

                    </div>

                    <div className=''>
                        <Label>Kelengkapan</Label>

                        <SelectMulti
                            // name="kelengkapan"
                            // value={data.kelengkapan}
                            option={optionsKelengkapan}
                            isMulti={true}
                            onHandleChange={handleSelect}
                        >

                        </SelectMulti>
                    </div>

                    <div className='mb-4'>
                        <Label>Kerusakan</Label>
                        <Input
                            name='kerusakan'
                            value={data.kerusakan}
                            handleChange={onHandleChange}
                            className={errors.kerusakan && 'input-error'}
                        >
                        </Input>
                        {errors.kerusakan && <div className="invalid-feedback">
                            {errors.kerusakan}
                        </div>}
                    </div>

                    <hr className='my-4 border-slate-400' />

                    {
                        data.details.map((value, i) => {
                            return (

                                <div className='flex gap-3 mb-2' key={i}>
                                    <div>
                                        <Select name='category' handleChange={(e => { handleChangeDynamic(e, i) })}>
                                            {
                                                option.map((val, index) => {
                                                    return (

                                                        <option value={val.value} key={index}>{val.label}</option>

                                                    )
                                                })
                                            }
                                        </Select>
                                    </div>
                                    <div className='flex-1'>
                                        <Input
                                            value={value.type}
                                            name='type'
                                            handleChange={(e => { handleChangeDynamic(e, i) })}
                                            required={true}
                                            placeHolder='Masukkan tipe barang '
                                        />

                                    </div>
                                    <div>
                                        {
                                            i > 0 ?
                                                (<button type='button' className='flex justify-center items-center hover:btn-error transition-all btn-circle' onClick={handleRemove} ><Icon.DashCircleFill className='text-xl text-red-700' /></button>)
                                                : (<button type='button' className='flex justify-center items-center text-green-700 btn-circle hover:btn-success transition-all' onClick={handleAdd} ><Icon.PlusCircleFill className='text-xl' /></button>)
                                        }
                                    </div>


                                </div>
                            )
                        }
                        )
                    }

                    <hr className='mt-4 border-slate-400' />

                    <div>
                        <Label>Keterangan</Label>
                        <TextArea handleChange={onHandleChange} name='description' value={data.description}></TextArea>
                    </div>

                    <div className='relative'>
                        <ImageUpload
                            handleChange={handleUpload}
                            src={saveImage.image_src}
                            name={saveImage.image_name}
                        />
                        {errors.photo && (<div className="invalid-feedback absolute -bottom-4">
                            {errors.photo}
                        </div>)}
                    </div>

                    <div className='mt-10'>
                        <Button className='btn-success btn-block shadow hover:bg-green-300' processing={processing}>SIMPAN</Button>
                    </div>
                </form>
            </div>

        </div >
    )

}

ReceiptAdd.layout = page => <Layout auth={page.props.auth} children={page} href={route('receipts')} menu={false} />

export default ReceiptAdd;
