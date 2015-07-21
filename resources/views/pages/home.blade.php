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
                    <h3 class="panel-title"><span class="glyphicon glyphicon-home ch-icon"></span> 
                    <a href="" class="btn btn-default btn-xs ch-add-btn"><span class="glyphicon glyphicon-home"></span> Home</a>
                    </h3>
                  </div>
                  <div class="panel-body">
                     <div class="row">
                       <div class="col-md-12">

                         @include('templates.error-report')

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

