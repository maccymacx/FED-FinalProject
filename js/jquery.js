//Author: Makayla Lewis
//Date: 30 October 2013
//This website is based on a research paper for Royal Holloway University of London. Due to copyright reasons I am unable to display the paper or the 
//contents of the research within this coursework, thus all content is Lorem.

$(document).ready(function() { //document ready function
	
		var $comic = $('.gallery > img');//saves image to var
		$( '.gallery' ).on('click', 'ul.slides a', function(e){
			var $link = $(this);//saves link to var

			$comic
				.hide()//hide current image
				.attr('src', $link.attr('href'))//add new link and remove href
				.fadeIn();//fade in new image

			return false;// prevents default behaviour

		});	

		$( 'h4.help a').on('click', function(e){
			
			e.preventDefault(); //prevents default behaviour
			var selector = $(this).attr('href');//adds link to var removes href
			$(selector).toggleClass('hidden');//toogles/changes class so that it can be seen

		});

		$( "#accordion" ).accordion( // altered plugin JQueryUI
			{ 
				active: false, // wont be active, open,when page is loaded
				collapsible: true,// encourages collapsible H3 as gallery was breaking it
				heightStyle: 'content'//changed to content as gallery was breaking it
			});
});







