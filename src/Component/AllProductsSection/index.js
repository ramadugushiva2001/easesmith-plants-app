import FiltersSection from '../FiltersSection'
import Products from '../Product'
import './index.css'

const AllProductsSection = ()=>(
    <div className="all-products-container">
        <FiltersSection />
        <Products/>
    </div>
)

export default AllProductsSection

