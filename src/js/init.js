'use strict';

function buildHTML(divId){
	// build out the HTML structure
	var $holder = $('#' + divId);
	$holder.html('');
	
	var $thumbs = $('<div>', {id: 'thumbnails'});
	
	var $ul_area = $('<div>', {id: 'upload_area'});
	
	// put this inside upload area
	// TODO hide this until it needs to be shown
	var $controls = $('<div>', {id:
	'controls'});

	// TODO create longer list of buttons and iteratively add them all to controls; allow user to select buttons
	var $rotate = $('<button>', {
			'type': 'button', 
			'class': 'btn btn-info btn-sm'})
		.html('rotate')
		.click(function(){
			$("#imageToEdit").cropper("rotate", 90);
		}); // TODO pull out this function elsewhere
		
	$controls.append($rotate);

	var $done = $('<button>', {
			'type': 'button',
			'class':'btn btn-info btn-sm'})
		.html('done editing')
		.click(closeEditor);
		
	$controls.append($done);
	
	var $file = $('<input>', {
			'type': 'file', 
			'id': 'file_to_upload'
		});
	
	var $preview = $('<div>', {id: 'preview_div'});
	
	 
	$ul_area.append($controls, $file, $preview);
	$holder.append($thumbs, $ul_area); 
}

function setupCropper(){
	// TODO base this on the current document.ready function in the old multiple_image_upload.js
	console.log("this will set up the cropper functions.");
	
}

function closeEditor(){
	// TODO import this from the old file
	console.log("close editor");
}

function initializeMultiUpload(divId){
	buildHTML(divId);
	setupCropper();
}