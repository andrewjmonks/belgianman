(function(){ 
	function loadScript(url, callback) {
		var head = document.getElementsByTagName("head")[0];
		var script = document.createElement("script");
		script.src = url;

		// Attach handlers for all browsers
		var done = false;
		script.onload = script.onreadystatechange = function()
		{
			if( !done && ( !this.readyState 
						|| this.readyState == "loaded" 
						|| this.readyState == "complete") )
			{
				done = true;

				callback();

				// Handle memory leak in IE
				script.onload = script.onreadystatechange = null;
				head.removeChild( script );
			}
		};

		head.appendChild(script);
	}

	if (window.jQuery) {} else {
		var scriptUrl = "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
		loadScript(scriptUrl);
	}

	$("#bandcamp").each(function(index) {
		$(this).height($(this).width());
	})

})();