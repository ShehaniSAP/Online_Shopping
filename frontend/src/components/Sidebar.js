import React from 'react';
import "./style.css"
import {Link} from 'react-router-dom';
import Estilo from './Estilo.jpg';
import Header from './Header';


const Sidebar =({children})=>(

    
   <div>
<aside class="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1">
  <i class="uil-bars close-aside d-md-none d-lg-none" data-close="show-side-navigation1"></i>
  <div class="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
    <img
         class="rounded-pill img-fluid"
         width="160"
         src={Estilo}
         
         alt=""/>
    <div class="ms-2">
      <h5 class="fs-6 mb-0">
        <Link></Link>
      </h5>
      <p class="mt-1 mb-0"></p>
    </div>
  </div>

  <div class="search position-relative text-center px-4 py-3 mt-2">
    
  </div>

  <ul class="categories list-unstyled">
    <li class="has-dropdown">
      <i class="uil-estate fa-fw"></i><Link style={{color:"#ffffff",fontSize:"22px"}} to="/"> Dashboard</Link>
      
    </li>
    <li class="">
      <i class="uil-folder"></i><Link to="/add">Add Employee</Link>
    </li>
    <li class="has-dropdown">
      <i class="uil-calendar-alt" ></i><Link to="/view">Employee List</Link>
      
    </li>
    <li class="has-dropdown">
      <i class="uil-envelope-download fa-fw"></i><Link to="/"> Approve Leaves</Link>
       
    </li>
    <li class="has-dropdown">
      <i class="uil-shopping-cart-alt"></i><Link to="/addSalary">Salary</Link>
      
    </li>
    <li class="has-dropdown">
      <i class="uil-bag"></i><Link to="/"> Search</Link>
      
    </li>
    <li class="">
      <i class="uil-setting"></i><Link to="/"> Attendence</Link>
      
   </li>
    <li class="has-dropdown">
      <i class="uil-panel-add"></i><Link to="/report"> Report</Link>
      
    </li>
    <li class="">
      <i class="uil-map-marker"></i><Link> My Profile</Link>
    </li>
  </ul>
</aside>

<section id="wrapper">
  {/* <nav class="navbar navbar-expand-md">
    <div class="container-fluid mx-2">
      <div class="navbar-header">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggle-navbar" aria-controls="toggle-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <i class="uil-bars text-white"></i>
        </button>
        <Link class="navbar-brand">WS<span class="main-color">Shopping</span></Link>
      </div>
      
    </div>
  </nav> */}
  <Header/>
    
  <div class="p-4">
    <div class="welcome">
      <div class="content rounded-3 p-3">
          <div class="body-bg"> 
      <div>{children}</div>
      </div>

      </div>
      
   </div>
    
  </div>
</section>

</div>
);
export default Sidebar;