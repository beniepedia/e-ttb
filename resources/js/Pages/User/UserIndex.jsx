import React from 'react'
import Layout from '@/Layouts/Main'
import Input from '@/Components/Input'
import Label from '@/Components/Label'
import Button from '@/Components/Button'
import { useForm, usePage } from '@inertiajs/inertia-react'
import { replace } from 'lodash'

const UserIndex = () => {
    const { auth } = usePage().props

    const { data, setData, processing, post, errors, reset, clearErrors } = useForm({
        current_password: "",
        new_password: "",
        confirm_password: '',

    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data)
        post(route('change_password'), {
            preserveScroll: true,
            preserveState: true,
            replace: true,
            onSuccess: () => {
                clear()
            }
        })
    }

    const clear = () => {
        reset();
        clearErrors();
    }

    return (
        <div className='px-4 py-6'>
            <div className='avatar flex justify-center'>
                <div className='w-1/2 md:w-1/3 lg:w-1/5 rounded-full border-white border-4 shadow-lg'>
                    <img src={'/images/assets/profile_default.png'} alt='profile image' />
                </div>
            </div>

            {/* Display Name */}
            <div className='text-center mt-5 mb-10'>
                <p className='text-2xl'>{auth.user.name.toUpperCase()}</p>
                <p className='text-xl'>{auth.user.email}</p>
            </div>

            <p className='font-semibold'>Ganti Password</p>
            <div className="divider my-1"></div>

            <form onSubmit={handleSubmit}>
                <div>
                    <Label>Password Sekarang</Label>
                    <Input
                        type='password'
                        name='current_password'
                        value={data.current_password}
                        handleChange={handleChange}
                        className={errors.current_password && 'input-error'}
                        isFocused={true}
                        autoComplete="new-password"
                    ></Input>
                    <div className="invalid-feedback">
                        {errors.current_password}
                    </div>
                </div>
                <div>
                    <Label>Password Baru</Label>
                    <Input
                        type='password'
                        name='new_password'
                        value={data.new_password}
                        handleChange={handleChange}
                        className={errors.new_password && 'input-error'}
                        autoComplete="new-password"
                    ></Input>
                    <div className="invalid-feedback">
                        {errors.new_password}
                    </div>
                </div>
                <div>
                    <Label>Konfirmasi Password Baru</Label>
                    <Input
                        type='password'
                        name='confirm_password'
                        value={data.confirm_password}
                        handleChange={handleChange}
                        className={errors.confirm_password && 'input-error'}
                        autoComplete="new-password"
                    ></Input>
                    <div className="invalid-feedback">
                        {errors.confirm_password}
                    </div>
                </div>
                <div className='mt-5'>
                    <Button type='submit' className='w-full' processing={processing}>UPDATE</Button>
                </div>
            </form>
        </div>
    )
}

UserIndex.layout = page => <Layout
    auth={page.props.auth}
    children={page}
    href={route('dashboard')}
    menu={false}
/>

export default UserIndex;
