import "./NavBar.css";
import banner from "../components/BANNER.PNG";
import IPX8 from "../components/IPX8.png";
import MAX from "../components/MAX.png";
import BOSE from "../components/BOSE.png";
import FOX from "../components/FOX.png";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaHeart,
  FaChevronDown,
} from "react-icons/fa";

import { IoFilter } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="topbar">
          <p>
            <BsTelephone /> +00123456789
          </p>

          <div className="offer">
            <span>Get 50% Off on Selected Items</span>
            <span>|</span>
            <span>Shop Now</span>
          </div>

          <div className="location">
            <span>
              Eng <FaChevronDown />
            </span>
            <span>
              Location <FaChevronDown />
            </span>
          </div>
        </div>

        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            🛒 <h2>Shopcart</h2>
          </div>

          <ul>
            <li>
              Categories <FaChevronDown />
            </li>
            <li>Deals</li>
            <li>What's New</li>
            <li>Delivery</li>
          </ul>

          <div className="search">
            <input type="text" placeholder="Search Product" />
            <FaSearch />
          </div>

          <div className="icons">
            <span>
              <FaUser /> Account
            </span>

            <span>
              <FaShoppingCart /> Cart
            </span>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="grab">
              Grab Upto 50% Off On
              <br />
              Selected Headphone
            </h1>

            <button>Buy Now</button>
          </div>

          <img src={banner} alt="" />
        </section>

        {/* Filters */}
        <div className="filters">
          <button>
            Headphone Type <FaChevronDown />
          </button>
          <button>
            Price <FaChevronDown />
          </button>
          <button>
            Review <FaChevronDown />
          </button>
          <button>
            Color <FaChevronDown />
          </button>
          <button>
            Material <FaChevronDown />
          </button>
          <button>
            Offer <FaChevronDown />
          </button>
          <button>
            All Filters <IoFilter />
          </button>

          <button className="sort">
            Sort by <FaChevronDown />
          </button>
        </div>

        <h2 className="title">
          <b>Headphones For You!</b>
        </h2>

        {/* Products */}
        <div className="products">
          <div className="card">
            <FaHeart className="heart" />

            <img src={IPX8} alt="" />

            <h3>Wireless Earbuds, IPX8</h3>

            <div className="price-row">
              <p>
                <span className="dollar">$</span>89
                <span className="cent">50</span>
              </p>
            </div>

            <small>Organic Cotton, fairtrade certified</small>

            <div className="rating">★★★★★ (121)</div>

            <button>Add to Cart</button>
          </div>

          <div className="card">
            <FaHeart className="heart" />

            <img src={MAX} alt="" />

            <h3>AirPods Max</h3>

            <div className="price-row">
              <p>
                <span className="dollar">$</span>550
                <span className="cent">34</span>
              </p>
            </div>

            <small>A perfect balance of high-fidelity audio</small>

            <div className="rating">★★★★★ (121)</div>

            <button className="active-btn">Add to Cart</button>
          </div>

          <div className="card">
            <FaHeart className="heart" />

            <img src={BOSE} alt="" />

            <h3>Bose BT Earphones</h3>

            <div className="price-row">
              <p>
                <span className="dollar">$</span>289
                <span className="cent">12</span>
              </p>
            </div>

            <small>Table with air purifier</small>

            <div className="rating">★★★★★ (121)</div>

            <button>Add to Cart</button>
          </div>

          <div className="card">
            <FaHeart className="heart" />

            <img src={FOX} alt="" />

            <h3>VIVEFOX Headphones</h3>

            <div className="price-row">
              <p>
                <span className="dollar">$</span>39
                <span className="cent">58</span>
              </p>
            </div>

            <small>Wired Stereo Headset With Mic</small>

            <div className="rating">★★★★★ (121)</div>

            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
