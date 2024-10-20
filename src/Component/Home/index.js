import {Component} from 'react'
import Header from "../Header";
import Nurseries from '../Nurseries';
import AllProductsSection from '../AllProductsSection';
import './index.css'
import Footer from '../Footer';

class Home extends Component{
    render(){
        return(
            <>
            <Header />
            <div className='home-container'>
                <div className="search-container">
                    <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1729353719/searchicon_xhrxrv.png" className="search-icon" alt="search" />
                    <input type="text" className="search-input" />
                    <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1729353856/leaves_tkogg3.png" className="leaves-icon" alt="leaves" />
                </div> 
                <div>
                    <button className='plants-button'>Plants</button>
                    <button className='pots-button'>Pots</button>
                    </div> 
                <div className='filters-prodcuts-container'>
                    <p className='description'>
                    Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
                    </p>
                    <h1>Nursery</h1>
                    {<Nurseries />}
                    {<AllProductsSection/>}
                </div>
            </div>
            <Footer />
            </>
        )
    }

}

export default Home
