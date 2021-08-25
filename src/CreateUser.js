import React, { Component } from 'react';
import Home from './Home';
import axios from 'axios';
const validateEmail = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const API_URL = 'https://611f50dd9771bf001785c846.mockapi.io/Users';

export default class createUser extends Component {

    constructor() {


        super();

        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            PhoneNumber: '',
            Deparment: '',
            id:'',
            errors: {
                FirstName: '',
                LastName: '',
                Email: '',
                PhoneNumber: '',
                Deparment: ''

            }


        }
    }
 componentDidMount () {

    const id = this.props.match.params.id;
    
    if(id){

    
        this.editUserDetails(id);
    }
 }
  
editUserDetails = async (id) =>{

const {data} = await axios.get(`${API_URL}/${id}`);

this.setState({id:data.id});
this.setState({FirstName:data.FirstName});
this.setState({LastName:data.LastName});
this.setState({Email:data.Email} );
this.setState({PhoneNumber:data.PhoneNumber});
this.setState({Deparment:data.Deparment});


 }
    handlechange = ({ target: { name, value } }) => {

        const errors = { ...this.state.errors };


        switch (name) {
            case 'FirstName': {
                if (!value) {
                    errors.FirstName = 'Name is required';
                } else {
                    errors.FirstName = '';
                }
                break;
            }

            case 'LastName': {
                if (!value) {
                    errors.LastName = 'LastName is required';
                } else {
                    errors.LastName = '';
                }
                break;
            }
            case 'Email': {
                if (!value) {
                    errors.Email = 'Email is required';
                } else if (!validateEmail.test(value)) {
                    errors.Email = 'Email is invalid';
                } else {
                    errors.Email = '';
                }
                break;
            }
            case 'PhoneNumber': {
                if (!value) {
                    errors.PhoneNumber = 'PhoneNumber is required';
                } else {
                    errors.PhoneNumber = '';
                }
                break;
            }
            case 'Deparment': {
                if (!value) {
                    errors.Deparment = 'Deparment is required';
                } else {
                    errors.Deparment = '';
                }
                break;
            }

        }


        this.setState({ [name]: value, errors });


    }
    validation = () => {



        const {
            FirstName,
            LastName,
            Deparment,
            Email,
            PhoneNumber


        } = this.state;

        if (FirstName && LastName && Deparment && Email && PhoneNumber) {


            if (validateEmail.test(Email)) {
                return true;
            }

            return false;
        }
    }

    createUser = async () => {
        const {
            FirstName,
            LastName,
            Deparment,
            Email,
            PhoneNumber


        } = this.state;

        const { data } = await axios.post(API_URL, {
            FirstName,
            LastName,
            Email,
            PhoneNumber,
            Deparment

        })

        if (data) {

            alert("User Details Added Succefully")

            this.setState({FirstName:'' , LastName:'' , Deparment:'' , Email:'', PhoneNumber:''})
        }

        else {

            alert("Error Creating User")
        }


    }


    updateuserDetails = async () =>{

const {id , FirstName, LastName,Email,PhoneNumber,Deparment} = this.state;

const {data} = await axios.put(`${API_URL}/${id}` ,{

    FirstName,
    LastName,
    Email,
    PhoneNumber,
    Deparment

})


if(data){

    alert("User Details Updated succefully");
    this.props.history.push(`/ViewUser`);  

}

else{

    alert("error updating user")
}

    }
    handleSubmit = (event) => {
        event.preventDefault();
debugger
        if (this.validation()) {
          if(this.state.id){

            this.updateuserDetails();
          }

          else{
            this.createUser();
        }
        }
    };

    render() {


        return (

            <>


                <div class="wrapper">
                    <Home />
                    <div class="content-wrapper">

                        <section class="content-header">
                            <div class="container-fluid">
                                <div class="row mb-2">
                                    <div class="col-sm-12">
                                        <h1>Users</h1>
                                    </div>
                                    <div class="col-sm-12">
                                        <ol class="breadcrumb float-sm-right">
                                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                                            <li class="breadcrumb-item active">Users</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="content">
                            <div class="container-fluid">
                                <div class="row">

                                    <div class="col-md-12">
                                        <div class="card card-primary">
                                            <div class="card-header">
                                                <h3 class="card-title">User</h3>
                                            </div>

                                            <form onSubmit={this.handleSubmit}>
                                                <div class="card-body">
                                                    <div class="form-group">
                                                        <label for="Name">FirstName</label>
                                                        <input type="text" name="FirstName" class="form-control" placeholder="Enter Name" value={this.state.FirstName} onChange={this.handlechange} />

                                                        {this.state.errors.FirstName ? (
                                                            <p>{this.state.errors.FirstName}</p>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="Name">LastName</label>
                                                        <input type="text" name="LastName" class="form-control" placeholder="Enter Name" value={this.state.LastName} onChange={this.handlechange} />
                                                        {this.state.errors.LastName ? (
                                                            <p>{this.state.errors.LastName}</p>
                                                        ) : (
                                                            ''
                                                        )}

                                                    </div>

                                                    <div class="form-group">
                                                        <label for="Email">Email</label>
                                                        <input type="email" name="Email" class="form-control" placeholder="Enter Email" value={this.state.Email} onChange={this.handlechange} />
                                                        {this.state.errors.Email ? (
                                                            <p>{this.state.errors.Email}</p>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="PhoneNumber">Phone Number</label>
                                                        <input type="text" name="PhoneNumber" class="form-control" placeholder="Enter PhoneNumber" value={this.state.PhoneNumber} onChange={this.handlechange} />
                                                        {this.state.errors.PhoneNumber ? (
                                                            <p>{this.state.errors.PhoneNumber}</p>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="Department">Department</label>
                                                        <input type="text" name="Deparment" class="form-control" placeholder="Department" value={this.state.Deparment} onChange={this.handlechange} />
                                                        {this.state.errors.Deparment ? (
                                                            <p>{this.state.errors.Deparment}</p>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </div>
                                                    <div class="footer">
                                                        <button type="submit" class="btn btn-primary">Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </>

        )
    }


}