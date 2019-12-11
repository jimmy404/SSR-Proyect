import Link from 'next/link';


const Navegacion = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Inicio</a></Link></li>
            <li><Link href="/Nosotros"><a>Nosotros</a></Link></li>
        </ul>
    </div>
);

export default Navegacion;