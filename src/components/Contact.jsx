function Contact() {
    const email = 'sobhanborzouirad@gmail.com';
    const github = 'GitHub: https://github.com/Sobhan-Borzoei-Rad';
    const phoneNumber = "0921 033 4397";
    return (
        <div>
            <a href="mailto:sobhanborzouirad@gmail.com">{email}</a>
            <br />
            <a href={github}>
                Sobhan-Borzoei-Rad
            </a>
            <br />
            <a href="tel:+989210334397">{phoneNumber}</a>
        </div>
    );
}

export default Contact;