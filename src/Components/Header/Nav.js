import React from 'react';

class Nav extends React.Component {
  render() {
    return(

      <div>
        <nav id="main" class='navbar-default'>
          <div class='container-fluid'>
            <div class='navbar-header'>
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Brand</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Shopping Cart</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">User Management<span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">User Account</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Logout</a></li>
                </ul>
               </li>
              </ul>
            </div>
          </div>
       </nav>
      </div>

    );

  }
}

export default Nav;
