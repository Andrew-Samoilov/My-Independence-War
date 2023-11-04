'use client'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string
    email: string
    phone: string
    message: string
}

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">

            {/* register your input into the hook by invoking the "register" function */}
            <div className="flex flex-col">
                <label>Name</label>
                <input placeholder="Enter you name" {...register("name", { required: true })} className="border-2" />
            </div>
            <div className="flex flex-col">
                <label>Email</label>
                <input placeholder="Enter e-mail" {...register("email")} className="border-2" />
            </div>
            <div className="flex flex-col">
                <label>Phone</label>
                <input placeholder="Enter you phone" {...register("phone")} className="border-2" />
            </div>
            <div className="flex flex-col">
                <label>Message</label>
                <textarea placeholder="Enter message" {...register("message", { required: true })} className="border-2" />
            </div>


            <input type="submit" className="flex self-center bg-neutral-200 font-bold text-main-color px-4 py-2 rounded-md" />
        </form>

        // <form className="space-y-4 mx-6">
        //     <input
        //         className="border-2 border-gray-200 w-2/3"
        //         type="text"
        //         placeholder="Name"
        //     />
        //     <input
        //         className="border-2 border-gray-200 w-2/3 mr-2"
        //         type="email"
        //         placeholder="Email"
        //     />
        //     <input
        //         className="border-2 border-gray-200 w-2/3"
        //         type="text"
        //         placeholder="Phone number"
        //     />
        //     <textarea
        //         className="border-2 border-gray-200 w-full"
        //         placeholder="Message"
        //     />
        //     <button className="bg-neutral-200 font-bold text-main-color px-4 py-2 rounded-md">Submit</button>
        // </form>
    )
}
