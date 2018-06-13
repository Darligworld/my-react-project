import React from 'react';
import PropTypes from 'prop-types';

// export default class Product extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>{this.props.name}</h3>
//                 <h4>{this.props.price} Euro</h4>
//             </div>
//         )
//     }
// }

// function Product(props) {
//   return (
//     <div>
//         <h3>{this.props.name}</h3>
//         <h4>{this.props.price} Euro</h4>
//     </div>
//   );
// }

const Product = (props) => (
  <div className="clearfix">
    <h5><strong>{props.name}</strong></h5>
    <h4>₦ {props.price}</h4>
  </div>
);

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default Product;
