import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import LinkSide from '../LinkSide';
import Empty from '../Empty';
import { Link } from '@inertiajs/inertia-react';

export default function CustomerList({ customers }) {


    return (
        <>
            {
                customers.length ? customers.map((customer, i) => {
                    return (

                        <div className='flex items-center justify-between py-2 border-t border-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700' key={i}>
                            <div className='flex items-center mx-5'>
                                <img src="https://placeimg.com/80/80/people" className='w-11 rounded-full' />

                                <div className='ml-4 pb-1'>
                                    <h2 className='text-lg'>{customer.name}</h2>
                                    <p className='text-xs'>{customer.phone}</p>
                                </div>
                            </div>
                            <div className='mr-4 flex gap-3'>

                                <LinkSide href={'telp:' + customer.phone} children={<Icon.TelephoneForwardFill className='text-2xl text-slate-600' />} />
                                {customer.whatsapp && <LinkSide href={'https://wa.me/' + customer.whatsapp} children={<Icon.Whatsapp className='text-2xl text-green-600' />} />}
                                <Link href={route('customer.show', customer.id)}>
                                    <Icon.InfoCircleFill className='text-2xl text-sky-600' />
                                </Link>
                            </div>
                        </div>
                    );
                }) : <Empty />
            }

        </>
    )
}
