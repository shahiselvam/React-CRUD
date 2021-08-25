
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link}  from 'react-router-dom';


const API_URL = 'https://611f50dd9771bf001785c846.mockapi.io/Profile'


export default function Home(){

  const [User, userDetails] = useState(null);
  const [Id, UserId] = useState(null);

   useEffect ( async () => {
    
    const {data} = await axios.get(`${API_URL}/${1}`);
 
    userDetails(data.Name);
    UserId(data.id);




  })

    return(
     <>


  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <div class="sidebar">
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
       
        </div>
        <div class="info">
          <Link to={`profile/${Id}`} >
         <a href="#" class="d-block">  Profile {User}</a>
          </Link>
        </div>
      </div>
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
         
          <li class="nav-item">
            <a href="/createUser" class="nav-link">
             
              <i class="nav-icon fa fa-users"></i>
              <p>
                Create User
                
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="/viewuser" class="nav-link">
            <i class="nav-icon fa fa-user-circle"></i>
              <p>
                View User
                
              </p>
            </a>
          </li>
          
         
            </ul>
          
      </nav>
      
    </div>  
  </aside>

  
     </>

    )
}

