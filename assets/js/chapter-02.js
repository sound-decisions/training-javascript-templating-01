$("document").ready(function() {

	//alert("document is ready");

	// Define formatter(s).
	$.addTemplateFormatter("UpperCase", function(value, options) {
		return value.toUpperCase();
	});	

	$.addTemplateFormatter("MakeHeader", function(value, options) {
		return '<h4>' + value + '</h4>';
	});	



	// Load the template from the external file.
	$("#content-container-external-file").loadTemplate("assets/templates/jQuery-template-01.html", [{
			"name"		: "Jeff Cummings", 
			"phone"		: "902-448-4118", 
			"email"		: "jeffsacummings@hotmail.com", 
			"title"		: "Senior Web Developer", 
			"fulltime"	: true
		}, {
			"name"		: "Brent Lee", 
			"phone"		: "905-336-5956", 
			"email"		: "brent_lee@hotmail.com", 
			"title"		: "Senior Wireless Troubleshooter", 
			"fulltime"	: true		
		}, {
			"name"		: "Jim Cummings", 
			"phone"		: "902-243-2579", 
			"email"		: "jimskippy@hotmail.com", 
			"title"		: "Platoon Chief (Retired)", 
			"fulltime"	: false		
		}, {
			"name"		: "Shirley Cummings", 
			"phone"		: "902-243-2579", 
			"email"		: "jscummings@ns.sympatico.ca", 
			"title"		: "City Hall Desk Staff (Retired)", 
			"fulltime"	: false		
		}, {
			"name"		: "Karis Huxley", 
			"phone"		: "905-639-8814", 
			"email"		: "karis.huxley@hotmail.com", 
			"title"		: "HR Representative", 
			"fulltime"	: false			
		}], {
			isFile		: true
		});

}); // end of - ready function.




function renderTemplates(e) {

	//alert("renderTempaltes");

	$("#content-container").loadTemplate($("#template-01"), [{
		"name"		: "Jeff Cummings", 
		"phone"		: "902-448-4118", 
		"email"		: "jeffsacummings@hotmail.com", 
		"title"		: "Senior Web Developer", 
		"fulltime"	: true
	}, {
		"name"		: "Brent Lee", 
		"phone"		: "905-336-5956", 
		"email"		: "brent_lee@hotmail.com", 
		"title"		: "Senior Wireless Troubleshooter", 
		"fulltime"	: true		
	}, {
		"name"		: "Jim Cummings", 
		"phone"		: "902-243-2579", 
		"email"		: "jimskippy@hotmail.com", 
		"title"		: "Platoon Chief (Retired)", 
		"fulltime"	: false		
	}, {
		"name"		: "Shirley Cummings", 
		"phone"		: "902-243-2579", 
		"email"		: "jscummings@ns.sympatico.ca", 
		"title"		: "City Hall Desk Staff (Retired)", 
		"fulltime"	: false		
	}, {
		"name"		: "Karis Huxley", 
		"phone"		: "905-639-8814", 
		"email"		: "karis.huxley@hotmail.com", 
		"title"		: "HR Representative", 
		"fulltime"	: false		
	}]);

} // end of - function renderTemplates