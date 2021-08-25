import React, { Component } from 'react';
import Home from './Home';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'https://611f50dd9771bf001785c846.mockapi.io/Users';

export default class viewuser extends Component {

constructor(){

super();

this.state ={

Users: []

}


}

componentDidMount() {

    this.getUser();
}

getUser = async () => {

const { data } = await axios.get(API_URL);

this.setState({Users:data})


}


deleteUser = async (id) => {

   const data =  await axios.delete(`${API_URL}/${id}`);

   if(data){


    alert("Details deleted Succefully")
    this.getUser();
   }

   else{


    alert("Error Deleting data");
   }
}

render(){
    return(
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
                        <section class="content-header">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <h3 class="card-title"></h3>


                                        </div>

                                        <div class="card-body table-responsive p-0">
                                            <table class="table table-hover text-nowrap">
                                                <thead>
                                                    <tr>

                                                        <th>FirstName</th>
                                                        <th>LastName</th>
                                                        <th>Email</th>
                                                        <th>PhoneNumber</th>
                                                        <th>Department</th>
                                                        <th>Edit</th>
                                                        <th>Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.Users.map(user => {
                                                        return (
                                                            <tr key={user.id}>
                                                                <td>{user.FirstName}</td>
                                                                <td>{user.LastName}</td>
                                                                <td>{user.Email}</td>
                                                                <td>{user.PhoneNumber}</td>
                                                                <td>{user.Deparment}</td>
                                                                <td>
                                                                    <Link to={`EditUser/${user.id}`}>
                                                                    <i class="fa fa-pencil-square-o" aria-hidden="true" >Edit</i>
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <i class="" aria-hidden="true" onClick={() => this.deleteUser(user.id)}>Delete</i>
                                                                </td>
                                                            </tr>


                                                        );
                                                    })}



                                                </tbody>
                                            </table>
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
