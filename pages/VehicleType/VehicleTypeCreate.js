import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { getColor } from 'utils/colors';

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardGroup,
  CardDeck,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Badge,
  Button,
} from 'reactstrap';

import {
  MdInsertChart,
  MdBubbleChart,
  MdPieChart,
  MdShowChart,
  MdPersonPin,
  MdRateReview,
  MdThumbUp,
  MdShare,
} from 'react-icons/lib/md';

import InfiniteCalendar from 'react-infinite-calendar';

import { Line, Bar } from 'react-chartjs-2';

import {
  supportTicketsData,
  productsData,
  userProgressTableData,
  avatarsData,
  todosData,
  chartjs,
} from 'demos/dashboardPage';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';

import Page from 'components/Page';

import SupportTicket from 'components/SupportTicket';
import ProductMedia from 'components/ProductMedia';
import UserProgressTable from 'components/UserProgressTable';

import { AnnouncementCard, TodosCard } from 'components/Card';

import { NumberWidget, IconWidget } from 'components/Widget';

import MapWithBubbles from 'components/MapWithBubbles';
import HorizontalAvatarList from 'components/HorizontalAvatarList';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);
export default class VehicleTypeCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          redirect: false
        };
        this.onChangeVehicleBody = this.onChangeVehicleBody.bind(this);
          this.onChangeVehicleMake = this.onChangeVehicleMake.bind(this);
          this.onChangeVehicleModel = this.onChangeVehicleModel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
          vehicle_body: '',
          vehicle_make: '',
          vehicle_model:''
        }
    }
    componentDidMount() {
      // this is needed, because InfiniteCalendar forces window scroll
      window.scrollTo(0, 0);
    }
    onChangeVehicleBody(e) {
        this.setState({
          vehicle_body: e.target.value
        });
      }
      onChangeVehicleMake(e) {
        this.setState({
          vehicle_make: e.target.value
        });
      }
        
      onChangeVehicleModel(e) {
        this.setState({
          vehicle_model: e.target.value
        }); 
      }


      onSubmit(e) {
        e.preventDefault();
        const obj = {
             vehicle_body: this.state.vehicle_body,
             vehicle_make: this.state.vehicle_make,
             vehicle_model: this.state.vehicle_model
             };

              axios.post('/vehicletype/add',obj)
              .then(res => console.log(res.data))
              .then(() => this.setState({ redirect: true }));
              console.log(`The values are ${this.state.vehicle_body}, ${this.state.vehicle_make} and ${this.state.vehicle_model}`)
              
              this.setState({
                  vehicle_body:"",
                  vehicle_make:"",
                  vehicle_model:"",
                })
      }
      render() {
        const { redirect } = this.state;
        if (redirect) {
          return <Redirect to="/vehicle-type-list" />;
        }
  
      return (
        <Page title="Create" breadcrumbs={[{name:'Vehicle Type',active: true }]}>
            <Row>
                <Col xl={6} lg={12} md={12}>
                <Card>
                    <CardHeader> Vehicle Type</CardHeader>
                    <CardBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                            <label>Vehicle Body:  </label>
                        <input type="text" className="form-control" 
                        value={this.state.vehicle_body}
                        onChange={this.onChangeVehicleBody}/>
                            </FormGroup>
                            <FormGroup>
                            <label>Vehicle Make: </label>
                        <input type="text" className="form-control"
                        value={this.state.vehicle_make}
                        onChange={this.onChangeVehicleMake}/>                    
                            </FormGroup>
                            <FormGroup>
                            <label>Vehicle Model: </label>
                        <input type="text" className="form-control"
                        value={this.state.vehicle_model}
                        onChange={this.onChangeVehicleModel}/>
                    
                            </FormGroup>
<Button>Add</Button>
                        </Form>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            </Page>
      );
    }
  }


