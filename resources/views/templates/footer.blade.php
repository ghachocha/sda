<footer>
         <div class="container">
           <div class="row">
             <div class="col-md-8">
               <p class="ch-footer-links">
                 <a href="{{ URL::to('about/company') }}">About</a>
                 <a href="{{ URL::to('about/support/administrator') }}">FAQs</a>
                 <a href="{{ URL::to('company/contacts') }}">Contact Us</a>
               </p>
             </div><!-- end of col-md-8 -->
             <div class="col-md-4">
                <p class="ch-copyright"><a href="{{ URL::to('') }}">{{ Config::get('constants.SITE_NAME') }}</a> &copy; {{ date('Y') }}. All Rights Reserved.</p>
             </div><!-- end of col-md-4 -->
           </div><!-- end of row -->
         </div><!-- end of container -->
      </footer><!-- end of footer -->