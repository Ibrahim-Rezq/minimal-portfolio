'use client'
import React from 'react'
import { toast } from 'react-toastify'
import { useForm, SubmitHandler } from 'react-hook-form'

type TemplateParams = {
    from_name: 'hima'
    from_email: 'ovic'
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, deleniti.'
}

const SendData = {
    service_id: 'service_6fu3n4f', //'YOUR_SERVICE_ID',
    template_id: 'template_7hsffjj', //'YOUR_TEMPLATE_ID',
    user_id: '4kj6tLNkKTSTSRPK2', //'YOUR_PUBLIC_KEY',
    template_params: {
        to_name: 'Ibrahim',
        from_name: 'hima',
        from_email: 'ovic',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, deleniti.',
    },
}
const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TemplateParams>()

    const onSubmit: SubmitHandler<TemplateParams> = (data) => {
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...SendData,
                template_params: { ...SendData.template_params, ...data },
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Oops... ' + JSON.stringify(response))
                }
                return response.json()
            })
            .then(() => {
                toast('Your mail is sent!')
            })
            .catch((error) => {
                toast('Oops... ' + error.message)
            })
    }
    return (
        <div className='max-w-2xl w-full py-6'>
            <h4 className='text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 ms-2'>
                Contact Me
            </h4>
            <form
                className='flex flex-col gap-4 w-full'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex justify-between gap-4 flex-col md:flex-row'>
                    <label className='form-control w-full max-w-xs'>
                        {/* {errors.from_name && (
                            <div className='label'>
                                <span className='label-text-alt'>
                                    {errors.from_name.message}
                                </span>
                            </div>
                        )} */}
                        <input
                            type='text'
                            placeholder='Your Name'
                            {...register('from_name', { required: true })}
                            className={`input input-bordered w-full max-w-xs ms-2 ${
                                errors.from_name ? 'input-error' : ''
                            }`}
                        />
                    </label>
                    <label className='form-control w-full max-w-xs'>
                        {/* {errors.from_email && (
                            <div className='label'>
                                <span className='label-text-alt'>
                                    {errors.from_email.message}
                                </span>
                            </div>
                        )} */}
                        <input
                            type='email'
                            placeholder='email@provider.com'
                            {...register('from_email', { required: true })}
                            className={`input input-bordered w-full max-w-xs ms-2 ${
                                errors.from_email ? 'input-error' : ''
                            }`}
                        />
                    </label>
                </div>
                <label className='form-control'>
                    {/* {errors.message && (
                        <div className='label'>
                            <span className='label-text-alt'>
                                {errors.message.message}
                            </span>
                        </div>
                    )} */}
                    <textarea
                        className={`textarea min-h-72 mx-2 ${
                            errors.message ? 'textarea-error' : ''
                        }`}
                        placeholder='Message'
                        {...register('message', {
                            required: true,
                            minLength: 50,
                        })}
                    />
                </label>
                <span className='divider before:shadow after:shadow'></span>
                <button className='btn btn-primary'>Send</button>
            </form>
        </div>
    )
}

export default ContactForm
