import Announcement from "../../components/announcement";
import Categories from "../../components/category";
import Navbar from "../../components/navbar";
import Products from "../../components/product";
import Slider from "../../components/slider";
import Subscription from "../../components/subcription";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <div>
        <Navbar />
        <Announcement />
        <Slider />
        <Categories />
        <Products />
        <Subscription />
        <Footer />
    </div>
  )
}

export default Home