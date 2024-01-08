import Contacts from "@/components/contacts/Contacts";
import ContactForm from "@/components/form/Form";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contacts',
}

export default function ContactPage() {
    return (
        <section>
            <h1 className="text-center py-4">Contact us page</h1>
            <Contacts
                styleUl='pb-2'
                styleLink='flex items-center justify-center p-4'
            />
            <hr />
            <ContactForm/>
        </section>
    )
}
