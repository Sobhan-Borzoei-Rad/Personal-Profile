function Footer() {
    const name = 'Sobhan Borzoei Rad';
    const year = 2026;
    const copyRight = `© ${year} , ${name}, All rights reserved.`;

    return(
        <div>
            <p>{name}</p>
            <p>{year}</p>
            <p>{copyRight}</p>
        </div>
    );
}

export default Footer;