import { Link } from 'react-router-dom';
import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
//import Pagei from '../../components/Page';

import axios from 'axios';
import { Redirect } from 'react-router-dom';

//const tableTypes = ['', 'bordered', 'striped', 'hover'];

export default class VehicleTypeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicletypes:[],
        redirect: false
    };
    //this.delete = this.delete.bind(this);
     
}
componentDidMount(){
    
    axios.get('/vehicletype')
.then(res=>{
    const vehicletypes=res.data;
    this.setState({ vehicletypes });
})
}


  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
        <Page title="Vehicle Type" breadcrumbs={[{name:'List',active: true }]}>
            <Row>
              <Col xl={12} lg={12} md={12}>
              <input className="search form-control" type="text" placeholder="Search.."/>
              </Col>
            </Row>
            <Row>
                <Col xl={12} lg={12} md={12}>
                <Card>
                    <CardHeader> Vehicle Type List</CardHeader>
                    <CardBody>
                    <Table id="userTbl">
                <thead>
                  <tr>
                    <th scope="col">Vehicle Body</th>
                    <th scope="col">Vehicle Make</th>
                    <th scope="col">Vehicle Model</th>
                    <th scope="col" colSpan="2">Action</th>
                    <th>  <Link to={"/create_vehicletype"} className="btn btn-primary">Add</Link></th>
                    </tr>
                    </thead>
                    <tbody id="IndexVehicleTypeTable">
              { this.state.vehicletypes.map(vehicletype =>
        <tr>
          <td>
            {vehicletype.vehicle_body}
          </td>
          <td>
            {vehicletype.vehicle_make}
          </td>
          <td>
            {vehicletype.vehicle_model}
          </td>
          <td>
            <Link to={"/edit_vehicletype/"+vehicletype._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
          <button onClick={(e) => { if (window.confirm('Are you sure to delete this item?')) (axios.get('/vehicletype/delete/'+vehicletype._id)).then(()=> this.setState({redirect: true})); }} className="btn btn-danger">Delete</button>
         </td>
        </tr>
              )
            }
            </tbody>
            </Table>
    </CardBody>
    </Card>
    </Col>
    </Row>
    </Page>
    );
  }
}
