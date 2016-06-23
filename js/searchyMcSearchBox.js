
(function( $ ) {
 
  $.fn.searchBox = function(options) {

    var settings = $.extend({
      appendTo: "body",
      dates: false,
      draggable: false,
      posts : [],
      idx : {},
      floatingBtn: false
    }, options );
    
    $(settings.appendTo).append('<div class="search-background"><div class="search-cover"><div class="search-box"><div class="col-md-12 col-lg 12 col-sm-12 col-xs-12 input-group"><input type="text" class="form-control search-input" placeholder="Search Notes" autocomplete="off"><span class="search-addon input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div><span class="search-input-cover"></span><div class="search-bottom" class="col-md-12 col-lg 12 col-sm-12 col-xs-12"></div></div></div></div>')

    if (settings.floatingBtn) {
      $(settings.appendTo).append('<button class="search-button"><i class="glyphicon glyphicon-search"></i></button>')
      $(".search-button").click(function() {
        $(".search-background").fadeToggle(100, function() {
        if ($(".search-background").css('display') !== "none") {
          $(".search-input").focus();
        }
        else {
          $(".search-input").blur();
        }        
      });
    })
    }
                                
    
    var selectPost = function(id) {
      $(".search-result").each(function() {
        $(this).removeClass("selected");
        if ($(this).attr("data-search-id") == id) {
          $(this).addClass("selected");
        }
      })    

      var post = settings.posts[id];

      $(".search-results-preview").empty();
      $(".search-results-preview").append('<h5 class="text-center"><strong>Preview</strong></h5><div class="search-preview-container"></div>');
      $(".search-preview-container").append(post.html);
      if (settings.dates) {
        $(".search-results-preview").append('<h5 class="results-preview-meta">' + post.date.toLocaleDateString() + "</h5>");
      }
      $('.search-input').focus();
    }
    
    if (settings.draggable) {
      $(".search-box").draggable({
        containment: ".search-background",
        handle: ".search-input-cover"
      }); // make search-bar draggable
    }
    $(document).keydown(function(e) {
      if (e.which == 32) { // spacebar
        if (e.shiftKey) {    
          e.preventDefault();
          $(".search-background").fadeToggle(100, function() {
            if ($(".search-background").css('display') !== "none") {
              $(".search-input").focus();
            }
            else {
              $(".search-input").blur();
            }
          })
        }
      }
      else if ($(".search-background").css('display') !== "none") {
        if (e.which == 40 || (e.which == 9 && e.shiftKey === false)) { // down arrow
          e.preventDefault();
          var index = -1;
          var max = -1;
          $(".search-result").each(function() {
            if ($(this).attr("data-search-index") > max) {
              max = $(this).attr("data-search-index");
            }          
            if ($(this).hasClass("selected")) {
              $(this).removeClass("selected");
              index = $(this).attr("data-search-index");
            }
          })
          index++;
          if (index > max) {
            index = 0;
          }
          selectPost($("[data-search-index="+ index + "]").attr("data-search-id"));

        }
        else if (e.which == 38 || (e.which == 9 && e.shiftKey === true)) { // up arrow

          e.preventDefault();
          var index = -1;
          var max = -1;
          $(".search-result").each(function() {
            if ($(this).attr("data-search-index") > max) {
              max = $(this).attr("data-search-index");
            }
            if ($(this).hasClass("selected")) {
              $(this).removeClass("selected");
              index = $(this).attr("data-search-index");
            }
          })
          index--;
          if (index < 0) {
            index = max;
          }

          selectPost($("[data-search-index="+ index + "]").attr("data-search-id"));
        }
        else if (e.which == 13) {
          console.log($(".search-result.selected").children('a').attr("href"));
          var href = $(".search-result.selected").children('a').attr("href");
          $(".search-bottom").empty();
          $('.search-background').hide()
            window.location = href;          
        }
      }

    }); // watch for SHIFT + SPACE and arrow up and down

    $(".search-background").on("click",function(e) {
      if (e.target == $(this)[0]) {
        $(this).fadeToggle(100, function() {
          $("#search-input").blur();
        });
      }
    }); // close when you click outside of 

    $(".search-input-cover").on("click",function(e) { 
      $(".search-input").focus();
    }); // focus on input box when you click anywhere on the search bar

    $(".search-input").on("input",function(e) {
      $(".search-bottom").empty();
      var results = settings.idx.search($(this).val());
      if (results.length > 0) {
        $(".search-bottom").empty();
        $(".search-bottom").append('<div class="search-results"><div><h5 class="search-results-title"><strong>Results:</strong><span class="pull-right>"'+ results.length +'</span></h5></div></div><div class="search-results-preview"></div>')
        var i = 0;
        for (var result of results) {
          var post = settings.posts[result.ref]
          var striped = "";
          if ((i % 2) == 1) {
             striped = "striped";
          }
          $(".search-results").append('<div class="search-result '+ striped + '" data-search-index="'+ i +'" data-search-id="'+ result.ref +'"><h5>' + post.title + "</h5><a href='"+post.url+"'><i class='fa fa-arrow-circle-right'></i></a></div>")
          if (i == 0) {
            selectPost(result.ref);
          }
          i++;
        }
      }
    });

    $(".search-input").keydown(function(e) {
      if (e.which == 40 || e.which == 38) {
        e.preventDefault();
      }
    });



    $(document).on('click',".search-result",function(e) {
      var id = $(e.target).attr("data-search-id")
      if (id === undefined) {
        id = $(e.target).parent().attr("data-search-id")
      }
      selectPost(id);
    });
    return this;

  };

}( jQuery ));
