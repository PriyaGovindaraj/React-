import React from 'react';
import axios from 'axios';

import {
  Card,
  CardBody,
  CardHeader,
   Row,
  Col,
   Form,
  FormGroup,
   Button,
} from 'reactstrap';

import Page from 'components/Page';

class Testk extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAddress1=this.onChangeAddress1.bind(this);
        this.onChangeAddress2=this.onChangeAddress2.bind(this); 
        this.onChangeRstate=this.onChangeRstate.bind(this);
        this.onChangeZip=this.onChangeZip.bind(this);
        this.onChangeMobile1=this.onChangeMobile1.bind(this);
        this.onChangeMobile2=this.onChangeMobile2.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            first_name: '',
            last_name: '',
            address_1:'',
            address_2:'',
            rstate:'',
            zip:'',
            mobile_1:'',
            mobile_2:'',
            email:'',
            redirect:false
        }
    }
    componentDidMount() {
      // this is needed, because InfiniteCalendar forces window scroll
      window.scrollTo(0, 0);
    }
    onChangeFirstName(e) {
        this.setState({
          first_name: e.target.value
        });
      }
      onChangeLastName(e) {
        this.setState({
          last_name: e.target.value
        })  
      }
      onChangeAddress1(e) {
        this.setState({
          address_1: e.target.value
        })
      }
      onChangeAddress2(e) {
        this.setState({
          address_2: e.target.value
        })
      }
      onChangeRstate(e){
          this.setState({
              rstate:e.target.value
          })
      }
      onChangeZip(e){
          this.setState({
              zip:e.target.value
          })
      }
      onChangeMobile1(e){
          this.setState({
              mobile_1:e.target.value
          })
      }
      onChangeMobile2(e){
          this.setState({
              mobile_2:e.target.value
          })
      }
      onChangeEmail(e){
          this.setState({
              email:e.target.value
          })
      }
      onSubmit(e) {
        e.preventDefault();
        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            address_1:this.state.address_1,
            address_2:this.state.address_2,
            rstate:this.state.rstate,
            zip:this.state.zip,
            mobile_1:this.state.mobile_1,
            mobile_2:this.state.address_2,
            email:this.state.email          
          };
          axios.post('/customer/add', obj).then(res => console.log(res.data))
        //  .then(() => this.setState({ redirect: true }));
         // this.props.history.push('/displaycustomer');
        console.log(`The values are ${this.state.first_name}, ${this.state.last_name}, ${this.state.address_1},and ${this.state.address_2}`)
        this.setState({
          first_name: '',
          last_name: '',
          address_1: '',
          address_2:'',
          rstate:'',
          zip:'',
          mobile_1:'',
          mobile_2:'',
          email:'',
          })
      }

    render() {
      return (
        <Page title="Create" breadcrumbs={[{name:'Customer',active: true }]}>
            <Row>
                <Col xl={6} lg={12} md={12}>
                <Card>
                    <CardHeader> Customer</CardHeader>
                    <CardBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                            <label>First Name:  </label>
                            <input type="text" className="form-control" required 
                            value={this.state.first_name}
                            onChange={this.onChangeFirstName}/>  
                            </FormGroup>
                            <FormGroup>
                            <label>Last Name: </label>
                            <input type="text" className="form-control" required
                             value={this.state.last_name}
                            onChange={this.onChangeLastName}
                            />
                            </FormGroup>
                            <FormGroup>
                            <label>Address 1:  </label>
                        <input type="text" className="form-control" required
                        value={this.state.address_1}
                        onChange={this.onChangeAddress1}
                        />
                            </FormGroup>
                            <FormGroup>
                            <label>Address 2: </label>
                        <input type="text" className="form-control" required
                        value={this.state.address_2}
                        onChange={this.onChangeAddress2}
                        />
                            </FormGroup>
                            <FormGroup>
                            <label>State: </label>
                        <input type="text" className="form-control" required
                        value={this.state.rstate}
                        onChange={this.onChangeRstate}
                        />
                            </FormGroup>
                            <FormGroup>
                            <label>ZIP: </label>
                        <input type="text" className="form-control" required
                        value={this.state.zip}
                        onChange={this.onChangeZip}
                        />
                            </FormGroup>
                            <FormGroup>
                            <label>Mobile 1: </label>
                        <input type="text" className="form-control" required
                        value={this.state.mobile_1}
                        onChange={this.onChangeMobile1}
                        />
                            </FormGroup>
                            <FormGroup>
                            <label>Mobile 2: </label>
                        <input type="text" className="form-control" required
                        value={this.state.mobile_2}
                        onChange={this.onChangeMobile2}
                        />
                            </FormGroup>
                            <FormGroup>
                            <label>Email : </label>
                        <input type="text" className="form-control" required
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                            </FormGroup>
                            <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Submit</Button>
                            </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            </Page>
      );
    }
  }
  export default Testk;