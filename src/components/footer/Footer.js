import React,{Component} from 'react';
import './footer.css';


class Footer extends Component{
    render(){
        return(
            <footer>
            <div class="copyright-container" >
              <div class="row">
                <div class="col-lg-6">
                  <section
                    class="widget widget-links widget-light-skin"
                    id="first-column"
                  >
                    <h3 class="widget-title">To contact us</h3>
                    <div class="row">
                      <div class="col-md-12" id="contact-us-center">
                        <div>
                          <div class="d-flex">
                            <p>Telephone number:</p>
                            <a href="tel:+37322430702">
                              <span>
                                &nbsp;+373 22 <span>430 702</span>
                              </span>
                            </a>
                          </div>
                          Opening hours: <br />
                          Monday - Friday: 10:00 - 19:00 <br />
                          Saturnday: 10:00 - 18:00 <br />
                          Sunday: 10:00 - 17:00 <br />
                          <a href="null">info@bikeshop.md</a>
                          <br />
                          <br />
                          <div class="mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-lg-3 col-md-6">
                  <section className="widget widget-links widget-light-skin">
                    <h3 className="widget-title">Catalog</h3>
                    <ul>
                      <li>
                        <a href="null">Bikes</a>
                      </li>
                      <li>
                        <a href="null">Scooters, rollers, skateboards</a>
                      </li>
                      <li>
                        <a href="null">Accessories</a>
                      </li>
                      <li>
                        <a href="null">Spare parts</a>
                      </li>
                      <li>
                        <a href="n">Equipment</a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="col-lg-3 col-md-6">
                  <section className="widget widget-links widget-light-skin">
                    <h3 className="widget-title">Informations</h3>
                    <ul dataInitialHeight="385" className="menu">
                      <li className=" ">
                        <a href="null" target="_self">
                          <span>About us</span>
                        </a>
                      </li>
                      <li className="has-children">
                        <a href="null" target="_self">
                          <span>Brands</span>
                        </a>
                      </li>
                      <li className=" ">
                        <a href="null" target="_self">
                          <span>Warranty & Service</span>
                        </a>
                      </li>
                      <li className="#">
                        <a href="null" target="_self">
                          <span>Bicycle workshop</span>
                        </a>
                      </li>
                      <li class="#">
                        <a href="null" target="_self">
                          <span>Payment and delivery</span>
                        </a>
                      </li>
                      <li className=" ">
                        <a href="null" target="_self">
                          <span>Promotions and discounts</span>
                        </a>
                      </li>
                      <li className=" ">
                        <a href="null" target="_self">
                          <span>News & Reviews</span>
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}
export default Footer;