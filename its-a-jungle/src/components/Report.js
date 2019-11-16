import React from "react";

import axios, { put } from "axios";

import { Button, Grid, Container, Step, Form, Checkbox, Transition, Image } from 'semantic-ui-react'

import { success } from '../assets/success.svg'

import Swal from 'sweetalert2'

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          key: 'picture',
          icon: 'camera',
          title: 'Picture',
          description: 'Take a picture',
        },
        {
          key: 'Report',
          icon: 'clipboard outline',
          title: 'Report',
          description: 'Send the report',
          disabled: true,
        },
        /*         {
                  key: 'confirm',
                  icon: 'info',
                  title: 'Confirm report',
                  disabled: true,
                }, */
      ],
      activeIndex: 0,
      formLoading: false,
      lat: null,
      lng: null,
    };
  }

  fileInputRef = React.createRef();

  onFormSubmit = e => {
    e.preventDefault();
    this.fileUpload(this.state.file).then(response => {
      console.log(response.data);
    });
  };

  fileChange = e => {
    this.setState({ file: e.target.files[0] }, () => {
      console.log("File chosen: ", this.state.file);
    });

    this.changeActiveIndex(this.state.activeIndex + 1);
  };

  sendReport = (e) => {
    e.preventDefault();
    this.setState({
      formLoading: true,
    })    

    setTimeout(() => this.changeActiveIndex(0), 2000);

    setTimeout(() =>
      Swal.fire(
        'Success!',
        'Your report has been sent.',
        'success'
      )
      , 2000);

  }

  fileUpload = file => {
    const url = "/some/path/to/post";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "Content-type": "multipart/form-data"
      }
    };
    return put(url, formData, config);
  };

  fileExport = file => {
    console.log("File export")
  };

  cameraForm = () => {
    return (
      <div>
        <Button
          size="large"
          content="Choose an image"
          labelPosition="left"
          icon="file image"
          onClick={() => this.fileInputRef.current.click()}
        />
        <input
          ref={this.fileInputRef}
          type="file"
          hidden
          onChange={this.fileChange}
        />
      </div>
    )
  }
  
  storeLocation = (position) => {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    console.log(`longitude: ${ lng } | latitude: ${ lat }`);
    return {'lat':lat, 'lng':lng};
  } 


  reportForm = () => {
    let loading = this.state.formLoading;
    
    if (navigator.geolocation) {
      let coords = navigator.geolocation.getCurrentPosition(this.storeLocation);
      console.log(coords);
      if (coords && coords.lat && coords.lng) {
        this.setState({
          lat: coords.lat,
          lng: coords.lng,
        });
      }
    }

    return (
      <div>
        <Form loading={loading}>
          <Form.Group widths='equal'>
            <Form.Field >
              <label>First Name</label>
              <input placeholder='First Name' />
            </Form.Field>
            <Form.Field >
              <label>Last Name</label>
              <input placeholder='Last Name' />
            </Form.Field>
          </Form.Group>
          <Form.Field required={true}>
            <label>Address</label>
            <input placeholder='Address' />
          </Form.Field>
          <Form.TextArea required={true} label='About' placeholder='Tell us more about the issue...' />
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button
            type='submit'
            onClick={this.sendReport}
          >Submit</Button>
        </Form>
      </div>
    )
  }

  changeActiveIndex = (index) => {

    if (this.state.activeIndex === index) {
      return;
    }

    let newSteps = this.state.steps;
    newSteps.forEach(function (step) {
      if (step.active) {
        delete step.active;
      }
    });
    newSteps.forEach(function (step) {
      if (!step.disabled) {
        Object.assign(step, { disabled: true });
      }
    });
    if (newSteps[index]) {
      newSteps[index].active = true
      newSteps[index].disabled = false

    };
    newSteps[this.state.activeIndex].completed = true;
    console.log(newSteps);
    this.setState({
      steps: newSteps,
      activeIndex: index,
    })
  }

  fetchActiveComponent = () => {
    this.changeActiveIndex(this.state.activeIndex);
    console.log(this.state.activeIndex);

    if (this.state.activeIndex === 0) {
      return this.cameraForm();
    } else if (this.state.activeIndex === 1) {
      return this.reportForm();
    } else if (this.state.activeIndex === 2) {
      return this.finishForm();
    }
  }

  render() {
    const { file } = this.state;

    return (
      <div>
        <Grid centered textAlign='center' columns={1} padded="vertically" style={{ height: '100vh' }}>
          <Grid.Row centered style={{ height: '90%' }} textAlign='center' verticalAlign="middle">
            <Grid.Column textAlign='center'>
              {this.fetchActiveComponent()}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row verticalAlign="bottom" textAlign='center' style={{ height: '10%' }}>
            <Grid.Column>
              <Container fluid textAlign='center'>
                <Step.Group items={this.state.steps} />
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Report;
