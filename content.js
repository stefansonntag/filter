// on every page try to hide users, threads and forums. doing it this way is not much 
// slower than being selective on the ages where the functions should run and allows for the
// fact that the functions will also run when new lists or page names are intricuduced by the team  
// during an update
chrome.storage.sync.get(['userNames','threadTitles','forumNames','userNamesCheckbox','threadTitlesCheckbox','forumNamesCheckbox'], function(result) {
		hideUser(result.userNames, result.userNamesCheckbox);
		hideThread(result.threadTitles, result.threadTitlesCheckbox);
		hideForum(result.forumNames, result.forumNamesCheckbox);
  });

// filters entries from a particular user  
function hideUser(UserNames,userNamesCheckbox) {

	// if the filter for user is set to active
	if(userNamesCheckbox) {
	
		// save the content from field in an array
		var arrayUserNames = UserNames.split(";");
		var arrayUserNamesLength = arrayUserNames.length;
		// for debugging purposes
		console.log("in hideUser"); 
		// remove row(s) from user(s) when we are in Neue Beiträge, or Liste aller Posts in einem Forum or Pinnwand 
		if ($("#form_posts_list").length) {
			// for each user entered
			for (var i = 0; i < arrayUserNamesLength; i++) {
				// remove blanks at the beginning and end
				var trimmedUserName = arrayUserNames[i].trim(); 
				if(trimmedUserName.length>0) {
					// for debugging purposes
					console.log("hiding user for <TD> '" + trimmedUserName + "'");
					// find in the table the cell (='td') which contains the user name and 
					// if positive (=indexOf), return the pointer to the table row (='closest(tr))
					// and remove that row frm the table in the DOM (=remove())  
					$('td').filter(function() {
						return $(this).text().indexOf(trimmedUserName) === 0;
					}).closest('tr').remove();
				}
			}
		}
	}
}

function hideThread(ThreadTitles, threadTitlesCheckbox) {

	// if the filter for threads is set to active
	if(threadTitlesCheckbox) {

		// save the content from field in an array
		var arrayThreadTitles = ThreadTitles.split(";");
		var arrayThreadTitlesLength = arrayThreadTitles.length;
		// for debugging purposes
		console.log("in hideThread"); 
		// remove row(s) with certain thread title(s)
		// for each thread entered
		for (var i = 0; i < arrayThreadTitlesLength; i++) {
			// remove blanks at the beginning and end
			var trimmedThreadTitle = arrayThreadTitles[i].trim(); 
			if(trimmedThreadTitle.length>0) {
				// for debugging purposes
				console.log("hiding thread for <TD> '" + trimmedThreadTitle + "'");
				// find in the table the cell (='td') which contains the user name and 
				// if positive (=indexOf), return the pointer to the table row (='closest(tr))
				// and remove that row frm the table in the DOM (=remove()). 
				// This function deletes all entries in the overview list when you visit e.g. the Plauderecke Forum
				$('td').filter(function() {
					return $(this).text().indexOf(trimmedThreadTitle) === 0;
				}).closest('tr').remove();
				// for debugging purposes
				console.log("hiding thread for <A> '" + trimmedThreadTitle + "'");
				// find in the table the cell which contains a link to a thread that carries the name of the thread(='A') and 
				// if positive (=indexOf), return the pointer to the table row (='closest(tr))
				// and remove that row frm the table in the DOM (=remove()). 
				// This function deletes all entries in the Neue Beiträge list 
				$('a').filter(function() {
					return $(this).text().indexOf(trimmedThreadTitle) === 0;
				}).closest('tr').remove();
			}
		}	
	}
}

function hideForum(ForumNames, forumNamesCheckbox) {

	// if the filter for forum is set to active
	if(forumNamesCheckbox) {

		// allow field content to be an array with elements separated by ';'
		var arrayForumNames = ForumNames.split(";");
		var arrayForumNamesLength = arrayForumNames.length;
		// for debugging purposes
		console.log("in hideForum"); 
		// remove row(s) with certain forum name
		// for each forum name entered
		for (var i = 0; i < arrayForumNamesLength; i++) {
			// remove blanks at the beginning and end
			var trimmedForumName = arrayForumNames[i].trim(); 
			if(trimmedForumName.length>0) {
				// for debugging purposes
				console.log("hiding forum for <TD> '" + trimmedForumName + "'");
				// find in the table the cell (='td') which contains the forum name and 
				// if positive (=indexOf), return the pointer to the table row (='closest(tr))
				// and remove that row frm the table in the DOM (=remove()). 
				$('td').filter(function() {
					return $(this).text().indexOf(trimmedForumName) === 0;
				}).closest('tr').remove();
				// for debugging purposes
				console.log("hiding forum for <A> '" + trimmedForumName + "'");
				// find in the table the cell which contains a link to a thread that carries the name of the thread(='A') and 
				// if positive (=indexOf), return the pointer to the table row (='closest(tr))
				// and remove that row frm the table in the DOM (=remove()). 
				$('a').filter(function() {
					return $(this).text().indexOf(trimmedForumName) === 0;
				}).closest('tr').remove();
			}
		}	
		// }
	}
}