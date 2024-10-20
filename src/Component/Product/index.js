import React, { Component } from 'react';
import ProductItem from '../ProductItem';
import './index.css';

const plantsList=[
    {
      "id": 1,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 2,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 3,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 4,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 5,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 6,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 7,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 8,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 9,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 10,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 11,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 12,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 13,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 14,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 15,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 16,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 17,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 18,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 19,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 20,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 21,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 22,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 23,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 24,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 25,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 26,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 27,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 28,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 29,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 30,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 31,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 32,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 33,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 34,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 35,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 36,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 37,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 38,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 39,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 40,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 41,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 42,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 43,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 44,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 45,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 46,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 47,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 48,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 49,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 50,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 51,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 52,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 53,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 54,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 55,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 56,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 57,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 58,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 59,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 60,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 61,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    },
    {
      "id": 62,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404284/plant_2_ldvnrg.png"
    },
    {
      "id": 63,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404293/plant_3_ndpzjz.png"
    },
    {
      "id": 64,
      "name": "Monsterra",
      "price": 299,
      "imageUrl": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729404226/plant_1_sodbzo.png"
    }
]  

class Products extends Component {
    state = {currentPage: 1,itemsPerPage: 8};
  
    handlePageChange = (pageNumber) => {
      this.setState({ currentPage: pageNumber });
    };
  
    renderPaginationButtons = () => {
      const { itemsPerPage } = this.state;
      const totalPages = Math.ceil(plantsList.length / itemsPerPage);
      const pageNumbers = [];
  
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
  
      return pageNumbers.map((number) => (
        <button
          key={number}
          className={`page-button ${this.state.currentPage === number ? 'active' : ''}`}
          onClick={() => this.handlePageChange(number)}
        >
          {number}
        </button>
      ));
    };
  
    render() {
      const { currentPage, itemsPerPage } = this.state;
  
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = plantsList.slice(indexOfFirstItem, indexOfLastItem);
  
      return (
        <div>
          <div className="sort-by-options">
            <p>{plantsList.length} products</p>
            <button className="sort-by-button">SORT BY</button>
          </div>
  
          <ul className='plants-list-container'>
            {currentItems.map((item) => (
              <ProductItem key={item.id} plantDetails={item} />
            ))}
          </ul>
  
          <div className="pagination">
            <p>prev</p>
            {this.renderPaginationButtons()}
            <p>next</p>
          </div>
        </div>
      )
    }
  }
  
  export default Products
  