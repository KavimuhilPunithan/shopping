import React, { Component } from "react";


class ProductPreview extends Component {
    render() {
        let preview = this.props.preview.map((value, index) => {
            return(
                <div className="single-wid-product" key={index}>
                <a href="single-product.html">
                    <img src={value.image} alt=""className="product-thumb" /></a>
                <h2><a >{value.name}</a></h2>
                <div className="product-wid-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <div className="product-wid-price">
                    <ins>{value.discount_price}</ins> <del>{value.actual_price}</del>
                </div>
            </div>

            )
        })
        return (
           <div>
             {preview}
           </div>
        )
    }
}
export default ProductPreview;