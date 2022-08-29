import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Layout from '@/Layouts/Main';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <div className='mt-7 px-4'>
            <Head title="Register" />

            {/* <ValidationErrors errors={errors} /> */}

            <form onSubmit={submit} noValidate>
                <div>
                    <Label>Nama</Label>

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        className={errors.name && 'input-error'}
                    />
                    <div className="invalid-feedback">
                        {errors.name}
                    </div>
                </div>

                <div className="mt-2">
                    <Label>Email</Label>
                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className={errors.email && 'input-error'}
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                    <div className="invalid-feedback">
                        {errors.email}
                    </div>
                </div>

                <div className="mt-2">
                    <Label>Password</Label>
                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className={errors.password && 'input-error'}
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                    <div className="invalid-feedback">
                        {errors.password}
                    </div>
                </div>

                <div className="mt-2">
                    <Label>Konfirmasi password</Label>

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className={errors.password_confirmation && 'input-error'}
                        handleChange={onHandleChange}
                        required
                    />
                    <div className="invalid-feedback">
                        {errors.password_confirmation}
                    </div>
                </div>

                <div className="flex items-center justify-end mt-8">
                    {/* <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        Already registered?
                    </Link> */}

                    <Button className="ml-4" processing={processing}>
                        Register
                    </Button>
                </div>
            </form>
        </div>
    );
}

Register.layout = page => (
    <Layout
        auth={page.props.auth}
        children={page}
        href={route('dashboard')}
        menu={false}
    />
)

export default Register