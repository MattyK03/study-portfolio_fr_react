import "../styles/contacts.css";

const Contacts = () => {
    return (  
        <section className="contacts">
            <div className="container">
                <div className="contacts__content">
                    <h1 className="projects__title">Contacts</h1>
                    <h2 className="contact__name">Location</h2>
                    <p className="contact__text">
                        Moscow, Russia
                    </p>
                    <h2 className="contact__name">Telegram/Discord</h2>
                    <p className="contact__text">
                        <a href="tel:+79297925635">+7(929)-XXX-XX-XX</a>
                    </p>
                    <h2 className="contact__name">Email</h2>
                    <p className="contact__text">
                        <a href="mailto:Email">maskXXXX@gmail.com</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default Contacts;
