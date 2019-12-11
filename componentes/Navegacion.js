import Link from 'next/link';


const Navegacion = () => (
    <nav className="navbar navbar-expand navbar-dark bg-warning">
        <div className="container">
            <Link href="/"><a className="navbar-brand">TodoBitcoin</a></Link>
            <div className="collapse navbar-collapse"></div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link href="/"><a className="nav-link">Inicio</a></Link>
                </li>
                <li className="nav-item">
                <Link href="/Nosotros"><a className="nav-link">Nosotros</a></Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navegacion;