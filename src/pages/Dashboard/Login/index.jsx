import React from 'react'
import {useForm} from 'react-hook-form'
import Button from '../../../components/Button'
import useFetch from '../../../hooks/useFetch'
import {url} from '../../../config/config.json'

export const Login = () => {
    const {register, handleSubmit} = useForm()
    const { postRequest } = useFetch(
        `${url}/admin/login`
    )
    const onSubmit = (data) => {
        console.log(data)
        let formData = new FormData();
    }

    return (
        <div>
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register('email')} required={true}/>
                <input type="password" {...register('password')} required={true}/>
                <Button type={'Login'} />
            </form>
        </div>
    )
}
