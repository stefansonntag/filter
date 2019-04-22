// on every page called get all values and check if Ausblenden is active
chrome.storage.sync.get(['userNames','threadTitles','forumNames','userNamesCheckbox','threadTitlesCheckbox','forumNamesCheckbox'], function(result) {
		hideUser(result.userNames, result.userNamesCheckbox);
		hideThread(result.threadTitles, result.threadTitlesCheckbox);
		hideForum(result.forumNames, result.forumNamesCheckbox);
  });

function hideUser(UserNames,userNamesCheckbox) {

	if(userNamesCheckbox) {
	
		var arrayUserNames = UserNames.split(";");
		var arrayUserNamesLength = arrayUserNames.length;
		console.log("in hideUser"); 
		// remove row(s) from user(s) when we are in Neue Beiträge, or Liste aller Posts in einem Forum or Pinnwand 
		if ($("#form_posts_list").length) {
			for (var i = 0; i < arrayUserNamesLength; i++) {
				var trimmedUserName = arrayUserNames[i].trim(); 
				if(trimmedUserName.length>0) {
					console.log("hiding user for <TD> '" + trimmedUserName + "'");
					$('td').filter(function() {
						return $(this).text().indexOf(trimmedUserName) === 0;
					}).closest('tr').remove();
				}
			}
		}
	}
}

function hideThread(ThreadTitles, threadTitlesCheckbox) {

	if(threadTitlesCheckbox) {

		// allow field content to be an array with elements separatd by ','
		var arrayThreadTitles = ThreadTitles.split(";");
		var arrayThreadTitlesLength = arrayThreadTitles.length;
		console.log("in hideThread"); 
		// remove row(s) with certain thread title(s) when we are in Forum Liste aller Threads
		// if ($("[id^=thread_]").length) {
			for (var i = 0; i < arrayThreadTitlesLength; i++) {
				var trimmedThreadTitle = arrayThreadTitles[i].trim(); 
				if(trimmedThreadTitle.length>0) {
					console.log("hiding thread for <TD> '" + trimmedThreadTitle + "'");
					$('td').filter(function() {
						return $(this).text().indexOf(trimmedThreadTitle) === 0;
					}).closest('tr').remove();
					console.log("hiding thread for <A> '" + trimmedThreadTitle + "'");
					$('a').filter(function() {
						return $(this).text().indexOf(trimmedThreadTitle) === 0;
					}).closest('tr').remove();
				}
			}	
		// }
	}
}

function hideForum(ForumNames, forumNamesCheckbox) {

	if(forumNamesCheckbox) {

		// allow field content to be an array with elements separatd by ','
		var arrayForumNames = ForumNames.split(";");
		var arrayForumNamesLength = arrayForumNames.length;
		console.log("in hideForum"); 
		// remove row(s) with certain thread title(s) when we are in Forum Liste aller Threads
		// if ($("[id^=thread_]").length) {
			for (var i = 0; i < arrayForumNamesLength; i++) {
				var trimmedForumName = arrayForumNames[i].trim(); 
				if(trimmedForumName.length>0) {
					console.log("hiding forum for <TD> '" + trimmedForumName + "'");
					$('td').filter(function() {
						return $(this).text().indexOf(trimmedForumName) === 0;
					}).closest('tr').remove();
					console.log("hiding forum for <A> '" + trimmedForumName + "'");
					$('a').filter(function() {
						return $(this).text().indexOf(trimmedForumName) === 0;
					}).closest('tr').remove();
				}
			}	
		// }
	}
}