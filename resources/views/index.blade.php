<!DOCTYPE html>
<html lang="en">
    <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
       <title>{{ $page_title }} | {{ Config::get('constants.SITE_NAME') }} </title>
       <?php $css_files = array('bootstrap.min.css','bootstrap-theme.min.css','style.css'); ?>
       @foreach($css_files as $file)
         {!! HTML::style('assets/css/'.$file) !!}
       @endforeach
       <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
    </head>
    <body>
        
         @yield('content')

    <?php $js_files = array('jquery.min.js','bootstrap.min.js','script.js'); ?>
    @foreach($js_files as $file)
        {!! HTML::script('assets/css/'.$file) !!}
    @endforeach
    </body>
</html>
