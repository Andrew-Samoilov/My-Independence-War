import Contacts from "@/components/contacts/Contacts";

export default function ContactPage() {
    return (
        <section>
            <h1 className="text-2xl text-center py-4">Contacts</h1>
            <Contacts
                styleUl='pb-2'
                styleLink='flex items-center justify-center p-4'
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, aliquid! Dolorum, sed atque! Similique reiciendis eum dicta dolore, praesentium delectus accusantium facere consectetur ad repudiandae ullam dolores magnam dolorum asperiores?</p>

            <h2 className="text-xl">Form</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aliquam provident tenetur? Similique eos delectus assumenda sequi ipsa incidunt cumque officia deserunt. Perspiciatis officia soluta dignissimos sapiente voluptates, magnam hic.</p>
        </section>
    )
}
