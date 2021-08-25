import React from 'react';
import Home from './Home';
import axios from 'axios'

const API_URL = 'https://611f50dd9771bf001785c846.mockapi.io/Profile';

export default class profile extends React.Component{

constructor(){


    super();
    this.state ={
        Name:'',
        Designation:'',
        Usertype:'',
        id:'' ,
        show:false,
        profile:true  
    }
}

componentDidMount(){
    const id = this.props.match.params.id;

   if(id){

    this.getUser(id);
   }


}


getUser = async (id) => {

const {data} =  await axios.get(`${API_URL}/${id}`);
 this.setState({Name:data.Name})
 this.setState({Designation:data.Designation})
 this.setState({Usertype:data.Usertype})
 this.setState({id:data.id})
}

EditProfile = event =>{


    event.preventDefault();

    this.setState({show:true} )
    this.setState({profile:false} )
}

handleChange = ({target:{name , value}}) =>{


    this.setState({[name] :value })
}

handleSubmit = event =>{

    event.preventDefault();

    this.updateProfile();
}

updateProfile = async () =>{

    const { id,Name,Designation, Usertype} = this.state;

    const {data} = await axios.put(`${API_URL}/${id}` , {

        Name,
        Designation,
        Usertype
    })

    if(data){


        alert("Profile Updated Successfully");

        this.setState({show:false});
        this.setState({profile:true} )
        this.getUser();
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
                <h1>Profile</h1>
            </div>
            <div class="col-sm-12">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Profile</li>
                </ol>
            </div>
        </div>
    </div>
</section>

        <section class="content">
      <div class="container-fluid">
        <div class="row">
        {this.state.profile ? 
          <div class="col-md-3">
            <div class="card card-primary card-outline">
              <div class="card-body box-profile">
                <div class="text-center">
                  {/* <img class="profile-user-img img-fluid img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture" /> */}
                </div>

                <h3 class="profile-username text-center">{this.state.Name}</h3>

    

                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item">
                    <b>{this.state.Usertype}</b> 
                  </li>
                  <li class="list-group-item">
                    <b>{this.state.Designation}</b> 
                  </li>
                 
                </ul>

             <button class="btn btn-primary btn-block" onClick ={this.EditProfile}><b>Edit Profile</b> </button>
               
              </div>
            </div>
</div>
: <> </>}   
{this.state.show ? 
<div class="col-md-9">
    <div class="card">     
      <div class="card-body">
        <div class="tab-content">
         
            <form class="form-horizontal" onSubmit={this.handleSubmit}>
              <div class="form-group row">
                <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" name="Name" value={this.state.Name}  class="form-control"  placeholder="Name" onChange={this.handleChange} />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputEmail" class="col-sm-2 col-form-label">Designation</label>
                <div class="col-sm-10">
                <input type="text" name="Designation" value={this.state.Designation}  class="form-control"  placeholder="Designation" onChange={this.handleChange} />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputName2" class="col-sm-2 col-form-label">Usertype</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="Usertype" value={this.state.Usertype} placeholder="Usertype"  onChange={this.handleChange} />
                </div>
              </div>
              <div class="form-group row">
                <div class="offset-sm-2 col-sm-10">
                  <button type="submit" class="btn btn-danger">Submit</button>
                </div>
              </div>
            </form>
        
      </div>
    </div>
  </div>
</div>
     : <> </>}       
       
      </div>
      </div>
    </section>
    </div>
    </div>
        </>
    )
}
}