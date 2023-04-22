import { React, useEffect,dispatch } from "react";
import Restcard from "./Restcard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
import { restList } from "../Actions/restaction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Restaurant() {
  //create state to hold data from api and useState is set as empty array
  // var [restaurantList, setRestaurant] = useState([])

  // //funtion to call api using async await
  // const fetchData = async () => {
  //   const result = await fetch('/restaurants.json')
  //   result.json().then(
  //       data => {
  //     setRestaurant(data.restaurants)
  //   })
  // }
  
  //to check if fetchData is working
  // console.log(restaurantList);

  //useEffect is a react hook that work first on a loading page 

  const dispatch=useDispatch()

  useEffect(()=>{
   

    dispatch(restList())
  }
  //and empty array added here to stop useEffect from executing infinitely
  ,[])

  const {restaurantList}=useSelector(state=>state.restaurantReducer) 
  
  return (
<div className="bg-dark">
  <Container >
      <Row>
        {
          restaurantList.map(item=>(
    
            <Col className=" p-3 bg-dark " lg={4} md={6}>
            <Restcard restdata={item} ></Restcard>
            </Col>
            
          ))
        }
      </Row>
  </Container>
</div>
  )
      }

export default Restaurant;
