function userNamesCheckboxChanged() {

	// save checkbox state if it was selected/deselected
	var userNamesCheckbox = document.getElementById("userNamesCheckbox").checked;
	chrome.storage.sync.set({'userNamesCheckbox': userNamesCheckbox}, function() {});
}

function threadTitlesCheckboxChanged() {

	// save checkbox state if it was selected/deselected
	var threadTitlesCheckbox = document.getElementById("threadTitlesCheckbox").checked;
	chrome.storage.sync.set({'threadTitlesCheckbox': threadTitlesCheckbox}, function() {});
}

function forumNamesCheckboxChanged() {

	// save checkbox state if it was selected/deselected
	var forumNamesCheckbox = document.getElementById("forumNamesCheckbox").checked;
	chrome.storage.sync.set({'userNamesCheckbox': forumNamesCheckbox}, function() {});
}

function userNamesChanged() {
	// save content of Muesie Field if it was changed
	var userNames = document.getElementById("userNames").value;
	chrome.storage.sync.set({'userNames': userNames}, function() {});
}

function forumNamesChanged() {
	// save content of Muesie Field if it was changed
	var forumNames = document.getElementById("forumNames").value;
	chrome.storage.sync.set({'forumNames': forumNames}, function() {});
}

function threadTitlesChanged() {
	// save content of Thread Field if it was changed
	var threadTitles = document.getElementById("threadTitles").value;
	chrome.storage.sync.set({'threadTitles': threadTitles}, function() {});
}

function saveValues() {

	// get input fields
	var userNames = document.getElementById("userNames").value;
	var forumNames = document.getElementById("forumNames").value;
	var threadTitles = document.getElementById("threadTitles").value;
	var userNamesCheckbox = document.getElementById("userNamesCheckbox").checked;
	var forumNamesCheckbox = document.getElementById("forumNamesCheckbox").checked;
	var threadTitlesCheckbox = document.getElementById("threadTitlesCheckbox").checked;

	// save input to local storage
	chrome.storage.sync.set({'userNames': userNames, 'threadTitles': threadTitles,'userNamesCheckbox': userNamesCheckbox,'threadTitlesCheckbox': threadTitlesCheckbox,'forumNames': forumNames,'forumNamesCheckbox': forumNamesCheckbox}, function() {});

	// reload main content
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'location.reload();'});
		});
	
	// destroy pop-up windwo
	window.close();	
}

function resetValues() {

		// delete all values in fields
		document.getElementById("userNames").value = "";
		document.getElementById("forumNames").value = "";
		document.getElementById("threadTitles").value = "";
		document.getElementById("userNamesCheckbox").checked = true;
		document.getElementById("forumNamesCheckbox").checked = true;
		document.getElementById("threadTitlesCheckbox").checked = true;

		saveValues();
		// destroy pop-up window
		// window.close();	
}

function closeWindow() {

	// destroy pop-up window
	window.close();	
}

function main() {
	

	// populate input fields with values from local storage
	chrome.storage.sync.get(['userNames','threadTitles','userNamesCheckbox','threadTitlesCheckbox','forumNames','forumNamesCheckbox'], function(result) {
		document.getElementById("userNames").value = result.userNames;
		document.getElementById("forumNames").value = result.forumNames;
		document.getElementById("threadTitles").value = result.threadTitles;
		document.getElementById("userNamesCheckbox").checked = result.userNamesCheckbox;
		document.getElementById("forumNamesCheckbox").checked = result.forumNamesCheckbox;
		document.getElementById("threadTitlesCheckbox").checked = result.threadTitlesCheckbox;
	  });
}

document.addEventListener('DOMContentLoaded', function () {
	// Add event listeners once the DOM has fully loaded by listening for the
	// `DOMContentLoaded` event on the document, and adding listeners to
	// specific elements when they trigger.
	document.querySelector('#saveValues').addEventListener('click', saveValues);
	document.querySelector('#resetValues').addEventListener('click', resetValues);
	document.querySelector('#closeWindow').addEventListener('click', closeWindow);
	document.querySelector('#userNamesCheckbox').addEventListener('change', userNamesCheckboxChanged);	
	document.querySelector('#forumNamesCheckbox').addEventListener('change', forumNamesCheckboxChanged);	
	document.querySelector('#threadTitlesCheckbox').addEventListener('change', threadTitlesCheckboxChanged);	
	document.querySelector('#userNames').addEventListener('change', userNamesChanged);	
	document.querySelector('#forumNames').addEventListener('change', forumNamesChanged);	
	document.querySelector('#threadTitles').addEventListener('change', threadTitlesChanged);	

});

main();