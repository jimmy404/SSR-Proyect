import Link from 'next/link';


const Nosotros = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Inicio</a></Link></li>
            <li><Link href="/Nosotros"><a>Nosotros</a></Link></li>
        </ul>
        <p>Hola desde Nosotros</p>
    </div>
)
export default Nosotros;