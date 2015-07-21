@extends('index')


@section('content')

<section role="sg_page">

      <div class="container">
        <div class="row ch-margin-center">
           <div class="col-md-6" id="ch-logo-container">
             {!! HTML::image('assets/images/system/sda-logo.png','Seventh Day Adventist Church Logo',array('class'=>'ch-home-logo')) !!}
           </div><!-- end of col-md-2 -->
           <div class="col-md-6">
                 
                 <?php
                    $email_address = array(
                        'placeholder'=>'Email address',
                        'class'=>'form-control ch-input-feedback-left',
                        'required'=>TRUE
                      );

                    $password = array(
                        'placeholder'=>'Password',
                        'class'=>'form-control ch-input-feedback-left',
                        'required'=>TRUE
                      );
                 ?>
                 {!! Form::open(array('url'=>'authentication','id'=>'ch-login-form')) !!}
                 <h1>Mwenge SDA Church Directory</h1>
                 <div class="form-group has-feedback">
                   <span class="glyphicon glyphicon-user form-control-feedback ch-feedback-icon-left"></span>
                   {!! Form::label('','') !!}
                   {!! Form::email('email_address',null,$email_address) !!}
                 </div><!-- end of form-group -->
                 
                 <div class="form-group has-feedback">
                   <span class="glyphicon glyphicon-lock form-control-feedback ch-feedback-icon-left"></span>
                 {!! Form::label('','') !!}
                 {!! Form::password('password', $password) !!}
                 </div><!-- end of form-group -->

                 <div class="checkbox ch-checkbox">
                   <label>{!! Form::checkbox('remember_me',true) !!} Remember me</label>
                 </div><!-- end of checkbox -->
                 
                 <a href="{{ URL::to('forgot/password') }}" class="ch-margin-bottom" id="ch-forgot-password-link">Forgot your password?</a>
                 <input type="submit" class="btn btn-warning ch-block ch_btn-stretch" value="Sign in">
                 {!! Form::close() !!}
                 
                 @include('templates.error-report')
             
           </div><!-- end of col-md-6 -->
          
        </div><!-- end of row -->

      </div><!-- end of sg_main_content -->

   </section><!-- end of page -->

@include('templates.footer')

@stop
