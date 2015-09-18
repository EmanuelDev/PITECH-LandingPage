$(document).ready(function() {
    $('.login_link').click(function() {
        $('.toggle').slideToggle();
    });
     
    $(".extra_information").click(function() {
        $(this).next('.description_toggle').slideToggle();
        var $this = $(this);
		$this.toggleClass('.extra_information');
		if($this.hasClass('.extra_information')){
			$this.text('-');			
		}else{
			$this.text('+').css({
                'position': 'relative',
                'float': 'right',
                'bottom': '72px',
                'right': '10px',
                'font-family': 'Raleway',
                'font-weight': '600',
                'font-size': '36px'
            });
		}
    });
     
    $('#viewMore').click(function() {
        $('#hiddenRow').slideToggle();
    });
    
    $(".more_information").click(function() {
        $(this).next('.second_description_toggle').fadeToggle();
        var $this = $(this);
		$this.toggleClass('more_information');
		if($this.hasClass('more_information')){
			$this.text('+');			
		} else {
			$this.text('-').css({
                'position': 'relative',
                'bottom': '-2px',
                'color': '#fff', 
                'background': '#53B8C4',
                'width': '40px',
                'height': '40px',
                'padding': '3px',
                'float': 'left',
                'font-size': '28px',
                'text-align': 'center',
                'cursor': 'pointer',
                'font-family': 'Raleway',
                'font-weight': 'bold'
            });
		}
    });  
    
});

