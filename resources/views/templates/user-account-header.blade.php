<header role="ch-header">  
  <div class="container ch-nav-container ch-custom-green">
     <div class="row ch-nav-row ch-primary-nav">
        <div class="col-md-12">
           <nav class="navbar navbar-pills navbar-staic-top ch-nav-bar" role="navigation">
              <div class="container-fluid">
                 <div class="navbar-header">
                   <button type="button" class="navbar-toggle ch-navbar-toggle" data-toggle="collapse" data-target="#ch-main-nav">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar sg_icon_bar"></span>
                      <span class="icon-bar sg_icon_bar"></span>
                      <span class="icon-bar sg_icon_bar"></span>
                   </button>
                   <!-- <a class="navbar-brand" href="{{ URL::to('') }}">{!! HTML::image('assets/images/system/sda-logo.png','Seventh Day Adventist Church Logo',array('id'=>'ch-nav-logo')) !!}</a> -->
                 </div><!-- end of navbar-header -->
                 
                 <div class="collapse navbar-collapse" id="ch-main-nav">
                   <ul class="nav navbar-nav navbar-right">
                     <li role="presentation" class="dropdown"><a href="#" class="ch-account-avatar ch-custom-orange ch-color-white dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-user"></span>
                       <ul class="dropdown-menu">
                         <li><a href="{{ URL::to('user/logout') }}"><span class="glyphicon glyphicon-log-out ch-icon"></span> Sign Out</a></li>
                       </ul>
                       </a>
                     </li>
                   </ul>
                 </div><!-- end of navbar-collapse -->
              </div><!-- end of container-fluid -->
              
           </nav>
        </div><!-- end of col-md-12 -->
     </div><!-- end of row -->
  </div><!-- end of container -->
</header><!-- end of header -->