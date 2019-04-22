# filter
0.	Allgemeines
	Der Muesi Filter ist eine Erweiterung für den Browser von Google der unter dem Namen Chrome bekannt ist. Es ist mit ca 80% Marktanteil der verbreiteste Browser weltweit, siehe https://www.w3schools.com/browsers/default.asp. Google Chrome verfügt über ein Feature, das es ermöglicht, selber sogenannte Extensions zu schreiben, die die Funktionalität des Browsers erweitern. Der Muesi Filter ist eine solche Extension, die ich geschrieben habe, weil es mir lästig war, in den Forenlisten immer Einträge angezeigt zu bekommen, die mich nicht interessieren. Die Extension bietet die Möglichkeit, die Namen von Benutzern, Foren, sowie die Titel von Threads anzugeben, die in den Übersichtslisten danach nicht mehr angezeigt werden sollen. Dazu verändert sie die Seiten, nachdem (!!) sie von muenchnersingles.de heruntergeladen wurden, und löscht zur Laufzeit die entsprechenden Einträge aus den Listen. 
	
	WICHTIG: Die Erweiterung löscht keine Daten von irgendwlechen Servers oder von Eureom Rechner, sie unterdrückt nur die Anzeige bestiemnr User und Posts und das auch nur solange wie ihr das wollt! Die Erweiterung kann nichts verändern, was bei den Muenchner Singles gespeichert ist! 
	
	Für die Web Entwickler unter euch: die Extension modifiziert das DOM, nachdem sämtliche Inhalte in den Browser transferiert wurde, mit Hilfe von jQuery, also absolute Standards, die seit Jahren angewerdet werden. 

1. 	Installation

	a) Google Chrome hier herunterladen: https://www.google.com/chrome/ und installieren.

	b) Folgende Seite aufrufen: https://github.com/stefansonntag/filter/blob/master/Muesi.crx und per Klick auf den Download Button die Datei auf den eigenen Rechner herunterladen

	c) In den Ordner für Downloads gehen, mit der rechten Maustaste auf die zuvor heruntergeladene Datei muesi.crx klicken und in dem daraufhin sich öffneneden Menu die Option "Öffnen mit" anklicken. Google Chrome auswähren und dann wird die Erweiterung installiert. Wenn Ihr die Erweiterung wieder löaschen wollte: einfach chrome://extensions/ in die Adresszeile von Chrome eingeben und dann bei Muesi Filter auf "entfernen" klicken. 

2. 	Bekannte Beschränkungen

	a) Die Erweiterung läuft nur auf Laptops bzw Desktop PC / Mac's, sie läuft nicht auf iPhones / iPad, oder irgendwelchen Geräter unter Andriod (Smartphone, Tablet). Das liegt daran, dass Google die Funktionalität von Erweiterungen ausschliesslich auf Desktop Rechnern anbietet

	b) Es ist möglich, dass die Paginierung manchmal etwas komisch aussieht. Wenn ihr z.B. unter "Neue Beiträge" geht und beispielsweise die Plauderecke unterdrückt, dort aber auf der ersten Seite normalerweise bis auf einen Eintrag nur Posts aus der Plauderecke stehen, dann sieht Eure Anzeige so aus, dass auf Eurer Seite 1 nur 1 Eintrag steht, nämlich der einzige, der nicht gefiltert wird. Das liegt daran, dass die Erweiterung nur im Browser läuft und keine Daten serverseitig modifizieren kann, also auch nicht die Paginierung auf Basis der gefilterten Posts berechnen berechnen kann. Gleiches gilt für die abwechselnde Schattierung in den Listen: normalerweise sehr ihr dort die Posts abwechselnd grau und weiß hinterlegt. Wenn ihr einen Eintrag filtert, dann kann es also passieren, dass künftig zwei oder mehr aufeinander angezeigte Posts grau bzw weiß hinterlangeigt werde und nicht mehr abwechselnd.

	c) Es werden zwar Posts unterdrückt, nicht aber deren Zitate.  

	d) Wenn irh die Filtereinstellungen das erste Mal nach der Installation aufruft, dann kann es sein, dass in den Eingabefelder "undefined" steht. Das ist nicht weiter schlimm, ihr könnt die Einträge einfach überschreiben bzw löschen. Das ist nur meiner Faulheit anzulasten, alle Möglichkeiten durchzutesten, in denen es zu nicht sauber initialisierten Variable kommen kann (was im Kontext von Webrowsers umfangreicher ist ist als bei herkömmlichen Programmen)

3. 	Sonstiges

	
