import Contacts from "@/components/contacts/Contacts";
import ContactForm from "@/components/form/Form";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contacts',
}

export default function ContactPage() {
    return (
        <section>
            <h1 className="text-center py-4">Contact me</h1>
            <Contacts
                styleUl='pb-2'
                styleLink='flex items-center justify-center p-4'
            />
            <hr />
            {/* <h2 className="text-xl text-center">Form</h2> */}
            {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aliquam provident tenetur? Similique eos delectus assumenda sequi ipsa incidunt cumque officia deserunt. Perspiciatis officia soluta dignissimos sapiente voluptates, magnam hic.</p> */}
            <ContactForm/>
        </section>
    )
}
