import react ,{useState, useEffect} from "react";
import {Axios} from "axios";
import {random, commerce} from "faker"
import {Col, Row, Container} from "reactstrap"

const apiKey = "563492ad6f9170000100000177c6a4a427ae4c1a8a6554ca7eb633ef";

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"

const BuyPage = () => {

  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get(url,{
      header: {
        Authorization: apiKey
      }
    })
    
    const {photos} = data;
  }
  

  useEffect(() => {
    fetchPhotos()
  }, []);

}
export default BuyPage;
