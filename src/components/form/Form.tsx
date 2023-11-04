'use client'
import { useForm, SubmitHandler, Resolver } from "react-hook-form"

type Inputs = {
    name: string
    email: string
    message: string
    check: boolean
}

const resolver: Resolver<Inputs> = async (values) => {
    return {
        values: values.name ? values : {},
        errors: !values.name
            ? {
                name: {
                    type: "required",
                    message: "This is required.",
                },
            }
            : {},
    }
}

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>({ resolver })
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="my-6 lg:max-w-xl mx-auto">
            <h2 className="text-center">Send me a message</h2>
            <div className="flex flex-col lg:w-1/2">
                <label>Name*</label>
                <input placeholder="Enter you name" {...register("name", { required: true })} className="border-2" />
                {errors?.name && <p>{errors.name.message}</p>}
            </div>
            <div className="flex flex-col lg:w-1/2">
                <label>Email</label>
                <input placeholder="Enter you e-mail" {...register("email")} className="border-2" />
            </div>
            <div className="flex flex-col col-span-2">
                <label>Message</label>
                <textarea placeholder="Enter message" {...register("message", { required: true })} className="border-2" />
            </div>
            <div className="flex flex-row">
                <input type="checkbox" {...register("check")} className="mr-2" />
                <label>Send me a copy of this message</label>
            </div>
            <input type="submit" className="bg-neutral-200 font-bold text-main-color px-4 py-2 rounded-md" />
        </form>

    )
}
