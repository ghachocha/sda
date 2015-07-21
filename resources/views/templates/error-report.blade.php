@if($errors->all() != null || Session::get('error_messages'))
 <div class="alert alert-danger alert-dismissible sg_messages_box">
    <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
    @foreach($errors->all() as $error)
      <p class="sg_error_message"><img width="20" height="20" src="{{ asset('assets/img/system-img/cancel.png') }}"> {{ $error }}</p>
    @endforeach
    @if(Session::get('error_messages') != null)
      @foreach(Session::get('error_messages') as $message)
      <p class="sg_error_message"><img width="20" height="20" src="{{ asset('assets/img/system-img/cancel.png') }}"> {{ $message }}</p>
      @endforeach
    @endif
 </div><!-- end of sg_messages_box -->
 @endif

 @if(Session::get('success_messages'))
  <div class="alert alert-success alert-dismissible sg_messages_box">
    <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
    @foreach(Session::get('success_messages') as $message)
      <p class="sg_success_message"><img width="20" height="20" src="{{ asset('assets/img/system-img/ok.png') }}"> {{ $message }}</p>
    @endforeach
 </div><!-- end of sg_messages_box -->
 @endif