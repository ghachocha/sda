@extends('index')


@section('content')
<section role="sg_page">

       @include('templates.user-account-header')

      <div class="container">
        <div class="row">
          <div class="col-md-4">

             @include('templates.user-account-nav')
             
          </div><!-- end of col-md-4 -->
          <div class="col-md-8">
             <div>
               <div class="panel panel-default ch-panel">
                  <div class="panel-heading ch-panel-heading">
                    <h3 class="panel-title"><span class="glyphicon glyphicon-plus"></span> New Member <span class="glyphicon glyphicon-home ch-icon"></span> 
                    <a href="" class="btn btn-default btn-xs ch-add-btn"><span class="glyphicon glyphicon-home"></span> Home</a>
                    </h3>
                  </div>
                  <div class="panel-body">
                     <div class="row">
                       <div class="col-md-12">

                         @include('templates.error-report')

                       </div><!-- end of col-md-12 -->
                     </div><!-- end of row -->
                     <div class="row">
                       <div class="col-md-12">
                         <?php
                            $first_name = array(
                                'placeholder'=>'First name',
                                'class'=>'form-control',
                                'required'=>TRUE
                              );

                            $middle_name = array(
                                'placeholder'=>'Middle name',
                                'class'=>'form-control'
                              );

                            $last_name = array(
                                'placeholder'=>'Last name',
                                'class'=>'form-control',
                                'required'=>TRUE
                              );

                            $membership_id = array(
                                'placeholder'=>'Membership ID',
                                'class'=>'form-control',
                                'required'=>TRUE
                              );

                            $physical_address = array(
                                'placeholder'=>'Physical address',
                                'class'=>'form-control',
                                'required'=>TRUE
                              );

                            $member_photo = array(
                                'required'=>TRUE 
                            );
                         ?>

                         {!! Form::open(array('url'=>'authentication')) !!}

                         {!! Form::label('','') !!}
                         {!! Form::text('first_name',null,$first_name) !!}

                         {!! Form::label('','') !!}
                         {!! Form::text('middle_name',null,$middle_name) !!}

                         {!! Form::label('','') !!}
                         {!! Form::text('last_name',null,$last_name) !!}

                         {!! Form::label('','') !!}
                         {!! Form::text('membership_id',null,$membership_id) !!}

                         {!! Form::label('','') !!}
                         {!! Form::text('physical_address',null,$physical_address) !!}

                         <fieldset class="sg_fieldset">
                            <legend class="sg_legend">Upload Member Photograph</legend>
                           
                            {!! Form::file('member_photo',$member_photo) !!}
                         </fieldset>
                         
                         <div class="ch-form-controls">
                                 <button type="reset" class="btn btn-default ch-form-control-left">Clear</button>
                                 <button type="submit" class="btn btn-warning ch-form-control-left"><span class="glyphicon glyphicon-floppy-disk"></span> Save</button>
                               </div><!-- end of sg_form_controls -->
                         {!! Form::close() !!}

                       </div><!-- end of col-md-12 -->
                     </div><!-- end of row -->

                     

                  </div><!-- end of panel-body-->
               </div><!-- end of panel -->
             </div><!-- end of sg_profile_form -->
          </div><!-- end of col-md-4 -->
        </div><!-- end of row -->

      </div><!-- end of sg_main_content -->

      @include('templates.footer')

   </section><!-- end of page -->

   <div class="sg_overlay">
         @include('templates.confirmation-alert')
  </div><!-- end of sg_overlay -->

@stop

