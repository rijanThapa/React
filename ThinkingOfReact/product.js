import React from 'react';
import './product.css';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',    
      showStocked: false,
    };
  }

  handleSearchChange = (event) => {
   
    this.setState({ searchText: event.target.value });
  };

  handleCheckboxChange = () => {
    
    this.setState((prevState) => ({ showStocked: !prevState.showStocked }));
  };

  render() {
    const productsData = [
     
      {
        category: "Sporting Goods",
        products: [
          { price: "$49.99", stocked: true, name: "Football" },
          { price: "$9.99", stocked: true, name: "Baseball" },
          { price: "$29.99", stocked: false, name: "Basketball" }
        ]
      },
      {
        category: "Electronics",
        products: [
          { price: "$99.99", stocked: true, name: "iPod Touch" },
          { price: "$399.99", stocked: false, name: "iPhone 5" },
          { price: "$199.99", stocked: true, name: "Nexus 7" }
        ]
      }
    ];

   
    const filteredProducts = productsData.map((categoryData) => ({
      category: categoryData.category,
      products: categoryData.products.filter((product) =>
        product.name.toLowerCase().includes(this.state.searchText.toLowerCase())
      ).filter((product) =>
        this.state.showStocked ? product.stocked : true
      ),
    }));

    return (
      <div className="containerbox">
        <input
          type="text"
          className="inputfield"
          placeholder="Search..."
          value={this.state.searchText}
          onChange={this.handleSearchChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.showStocked}
            onChange={this.handleCheckboxChange}
          />
          Only show products in stock
        </label>
        <div className="titleslide">
          <h5>Name</h5>
          <h5>Price</h5>
        </div>
        {filteredProducts.map((categoryData) => (
          <div key={categoryData.category}>
            <h3>{categoryData.category}</h3>
            {categoryData.products.map((product) => (
              <div className="leftside" key={product.name}>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
