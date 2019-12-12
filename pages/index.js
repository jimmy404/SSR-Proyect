import MasterPage from '../componentes/Master';
import fetch from 'isomorphic-unfetch';
import Precio from '../componentes/Precio';
import Noticias from '../componentes/Noticias';

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
                <Precio
                precio={props.precioBitcoin}
                />
            </div>
            <div className="col-md-8">
            <h2>Noticias sobre el Bitcoin</h2>
            <Noticias
                noticias={props.noticias}/>
            </div>
            <div className="col-md-4">
            <h2>Proximos Eventos Bitcoin</h2>
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {
    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    const noticias = await fetch('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=5bdc8077784142db9ac390ab5b8fd753&language=es');

    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();
        return{
        precioBitcoin: resPrecio.data.quotes.USD,
        noticias : resNoticias.articles
    }
}

export default Index;