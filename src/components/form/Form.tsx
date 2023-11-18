'use client'
import { useForm } from "react-hook-form"
import { sendEmail } from './send-email';

export type FormData = {
    name: string
    email: string
    message: string
    check: boolean
}


export default function ContactForm() {

    function onSubmit(data: FormData) {
        console.log(`form`, data);
        sendEmail(data);
    }

    const {
        register,
        handleSubmit,
    } = useForm<FormData>()

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="my-6 lg:max-w-xl mx-auto">
            <h2 className="text-center">Send me a message</h2>
            <div className="flex flex-col lg:w-1/2">
                <label>Name*</label>
                <input placeholder="Enter you name"
                    {...register("name", { required: true })}
                    className="border-2 p-2" />
            </div>
            <div className="flex flex-col lg:w-1/2">
                <label>Email</label>
                <input placeholder="example@domain.com"
                    {...register("email")}
                    className="border-2 p-2" />
            </div>
            <div className="flex flex-col col-span-2">
                <label>Message</label>
                <textarea placeholder="Type your message"
                    {...register("message", { required: true })}
                    className="border-2 p-2" />
            </div>
            <div className="flex flex-row">
                <input type="checkbox" {...register("check")} className="mr-2 p-2" />
                <label>Send me a copy of this message</label>
            </div>
            <input type="submit" className="bg-neutral-200 font-bold text-main-color px-4 py-2 rounded-md" />
        </form>
    )
}
