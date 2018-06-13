import React, { Component } from 'react';
import OrderItem from './OrderItem';
import Header from './Components/Header';
import Footer from './Components/Footer';

import './App.css';

class App extends Component {
  state = { totale: 0 }

  quantitaCambiata(amount) {
    //console.log(this.state.totale + amount);
    this.setState({
      totale: parseFloat((this.state.totale + amount).toFixed(2))
    })
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <br />
        <div className="container">
         <div class="row">
          <div class="col-sm-6 col-md-4">
           <div class="thumbnail">
          <OrderItem
            image="./images/maize.jpg"
            product="GMO Maize"
            price={250}
            onQuantityChange={this.quantitaCambiata.bind(this)}
          />
          </div>
          </div>
          <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
          <OrderItem
            image="./images/okra 2.jpg"
            product="Okra"
            price={200}
            onQuantityChange={amount => this.setState({
              totale: parseFloat((this.state.totale + amount).toFixed(2))
            })}
          />
          </div>
          </div>
          <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
          <OrderItem
            image="./images/cassava.jpg"
            product="Cassava cuttings"
            price={140}
            onQuantityChange={this.quantitaCambiata.bind(this)}
          />
          </div>
          </div>
          </div>

          <div className="row">
          <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
          <OrderItem
            image="./images/apple.jpg"
            product="Pineapple stem"
            price={50}
            onQuantityChange={amount => this.setState({
              totale: parseFloat((this.state.totale + amount).toFixed(2))
            })}
          />
          </div>
          </div>
          <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
          <OrderItem
            image="./images/fertiliz.jpg"
            product="NPK fertilizer"
            price={300}
            onQuantityChange={amount => this.setState({
              totale: parseFloat((this.state.totale + amount).toFixed(2))
            })}
          />
          </div>
          </div>
          <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
          <OrderItem
            image="./images/palm.jpg"
            product="GMO Palm seeds"
            price={350}
            onQuantityChange={amount => this.setState({
              totale: parseFloat((this.state.totale + amount).toFixed(2))
            })}
          />
          </div>
          </div>
          </div>

          <div className="row">
          <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
          <OrderItem
            image="./images/ferti.png"
            product="Sodium Fertilizer"
            price={100}
            onQuantityChange={amount => this.setState({
              totale: parseFloat((this.state.totale + amount).toFixed(2))
            })}
          />
          </div>
          </div>
          <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
          <OrderItem
            image="./images/water kit.jpg"
            product="Watering can kit"
            price={500}
            onQuantityChange={amount => this.setState({
              totale: parseFloat((this.state.totale + amount).toFixed(2))
            })}
          />
          </div>
          </div>
          <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
          <OrderItem
            image="./images/cide.jpg"
            product="Herbicide"
            price={400}
            onQuantityChange={amount => this.setState({
              totale: parseFloat((this.state.totale + amount).toFixed(2))
            })}
          />
          </div>
          </div>
          </div>

        </div>
        <div className="container pull-center">
          <h3>Total: ₦ {this.state.totale}  </h3>
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
