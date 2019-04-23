# Müsi Filter
1.	Allgemeines

	Der Muesi Filter ist eine Erweiterung für den Browser von Google der unter dem Namen Chrome bekannt ist. Es ist mit ca 80% Marktanteil der verbreiteste Browser weltweit, siehe https://www.w3schools.com/browsers/default.asp. Google Chrome verfügt über ein Feature, das es ermöglicht, selber sogenannte Extensions zu schreiben, die die Funktionalität des Browsers erweitern. Der Muesi Filter ist eine solche Extension, die ich geschrieben habe, weil es mir lästig war, in den Forenlisten immer Einträge angezeigt zu bekommen, die mich nicht interessieren. Die Extension bietet die Möglichkeit, die Namen von Benutzern, Foren, sowie die Titel von Threads anzugeben, die in den Übersichtslisten danach nicht mehr angezeigt werden sollen. Dazu verändert sie die Seiten, nachdem (!!) sie von muenchnersingles.de heruntergeladen wurden, und löscht zur Laufzeit die entsprechenden Einträge aus den Listen. 
	
	WICHTIG: Die Extension löscht keine Daten von irgendwelchen Servern oder von Eurem Rechner, sie unterdrückt nur die Anzeige bestimmter User und Posts und das auch nur solange, wie ihr das wollt bzw. eingeschaltet habt! Die Extension kann nichts an Daten verändern, die auf den Servern von muenchnersingles.de gespeichert sind! 
	
	Für die Web Entwickler unter euch: die Extension modifiziert das DOM und löscht mit Hilfe von jQuery ein paar HTML Tabellen, also absolute Standards, die seit Jahren angewerdet werden. 

2. 	Installation

	a) Google Chrome hier herunterladen: https://www.google.com/chrome/ und installieren.

	b) Folgende Seite aufrufen: https://github.com/stefansonntag/filter/blob/master/Muesi.crx und per Klick auf den Download Button die Datei auf den eigenen Rechner herunterladen

	c) In den Ordner für Downloads gehen, mit der rechten Maustaste auf die zuvor heruntergeladene Datei muesi.crx klicken und in dem daraufhin sich öffnendem Menu die Option "Öffnen mit" anklicken, Google Chrome auswählen und dann wird die Extension installiert. Alternativ könnt ihr "chrome://extensions/" in die Addresszeile von Chrome eingeben und dann auf die sich öffnene Seite die zuvor herunter gelandene Datei "muesi.crx" ziehen. Falls Ihr die Extension wieder löschen wollt: einfach "chrome://extensions/" in die Addresszeile von Chrome eingeben und dann bei Muesi Filter auf "Entfernen" klicken. 

3. 	Bekannte Beschränkungen

	a) Die Extension läuft nur auf Laptops bzw Desktop PC / Mac's, sie läuft nicht auf iPhones / iPad, oder irgendwelchen Geräten unter Andriod (Smartphone, Tablet). Das liegt daran, dass Google die Funktionalität von Chrome Extensions ausschliesslich auf Desktop Rechnern anbietet

	b) Es ist möglich, dass die Paginierung manchmal etwas komisch aussieht. Wenn ihr z.B. unter "Neue Beiträge" geht und beispielsweise die Plauderecke unterdrückt, dort aber auf der ersten Seite ungefiltert bis auf einen Eintrag nur Posts aus der Plauderecke stehen, dann sieht Eure Anzeige so aus, dass auf Eurer Seite 1 nur 1 Eintrag steht, nämlich der einzige, der nicht gefiltert wird. Das liegt daran, dass die Erweiterung nur im Browser läuft und keine Daten serverseitig modifizieren kann, also auch nicht die Paginierung auf Basis der gefilterten Posts berechnen berechnen kann. Gleiches gilt für die abwechselnde Schattierung in den Listen: normalerweise sehr ihr dort die Posts abwechselnd grau und weiß hinterlegt. Wenn ihr einen Eintrag filtert, dann kann es also passieren, dass künftig zwei oder mehr aufeinander angezeigte Posts grau bzw weiß hinterlangeigt werde und nicht mehr abwechselnd.

	c) Es werden zwar Posts unterdrückt, nicht aber deren Zitate.  

	d) Wenn ihr die Filtereinstellungen das erste Mal nach der Installation aufruft, dann kann es sein, dass in den Eingabefelder "undefined" steht. Das ist nicht weiter schlimm, ihr könnt die Einträge einfach überschreiben bzw löschen. Das ist nur meiner Faulheit anzulasten, alle Möglichkeiten durchzutesten, in denen es zu nicht sauber initialisierten Variable kommen kann.

	e) Wenn Ihr auf "Neue Beiträge" seid, der gelbe Eintrag "Neue Beträge wurden geschrieben" erscheint und ihr klickt darauf, dann seht ihr den Eintrag unabhängig davon, ob ihr ihn gefiltert habt oder nicht. Um ihn auszublenden müsst ihr die Seite übrr den Browser neu laden. 

4. 	Sonstiges

	Wer mitentwickeln möchte, immer gerne. Einfach das repo forken und los gehts ...

5. Sicherheit

	Die Extension ermittelt keine anderen Daten als für den Zweck, für den sie geschrieben wurde. Es ist kein Trojaner oder sonst etwas. Ich habe den Source Code mit Absicht so weit wie es programmiertechnisch sinnvoll ist im Klartext geschrieben, also sprechende Variablennamen, Kommentare im Source Code, keine Verwendung von uglify.js oder ähnlichem, damit alles nachvollziehbar ist. Wenn die Zeit es erlaubt, erstelle ich auch noch einen Architekturplan, der erklärt, was genau zu welchem Zeitpunkt passiert. Das hilft mir, meine Gedanken genauer zu strukturieren und gibt Euch hoffentlich das Vertrauen, dass hinter der Extension kein Teufelszeugs steckt. Könnte man ja nachvollziehbarerweise meinen, weil sie im Browser der bösen Tante Google läuft ;-)

	Um sich den Source Code der installerten Erweiterung auf cdem eigenen Rechner anzusehen (denn die crx datei zum installieren könnte ja theoretisch etwas ganz Anderes enthalten als der im repo veröffentlichte Source Code, z.B einen Trojaner): https://gist.github.com/paulirish/78d6c1406c901be02c2d beschreibt, wie man das machen kann

6. Bedienungstips

	a) Man kann eine Tastenkkombination festlegen, die das Filterfenster aufruft, so dass man nicht immer mit der Maus auf das kleine Icon zielen muss. Dazu in die Verwaltung von Extensions ("chrome://extensions") gehen, auf das Menu links klicken (die drei waagerechten Striche lins oben), dann Tastenkombination und dann in das Feld "tastenkombination" gehen und die Tastaturfolge drücken, beu mit z.B. Control - M (Command M auf dem Mac) 

	b) Wenn der Filter aktiv ist, also Einträge in den Listen unterdrückt, dann seht ihr auf dem Icon "EIN" geschrieben. Was "AUS" bedeutet, ist hoffentlicvh klar :-). EIN ist der Filter immer dann, wenn mindestens eines der 3 Häkchen gesetzt ist und in einem Feld, dessen Häkchen gesetzt ist, mindestens 1 Filterbegriff steht (Minimum 1 Zeichen)

	c) Der Filter unterscheidet Gross- und Kleinschreibung. Wenn Ihr also den Thread "Guten Morgen" herausfiltern wollt, müsst ihr es genau so schreiben; "Guten Morgen" wird zu keinem Ergebnis führen. Was aber funktioniert, ist dass nur der ersten Buchstaben dessen, was gefiltert werden soll, angegeben werden. Wenn ihr also nach "Guten Morgen" filtert, werden auch Threads wie "Guten Morgen....","Guten Morgen allerseits" usw. in der Anzeige unterdrückt. Für Benutzernamen gilt die gleiche Funktionsweise.

	d) Die einfachste Art, wie man Benutzername und/oder Thread Titel ohne Tippfehler in die Felder einträgt ist, in den Listen (z.B. in Neue Beiträge, geht aber auch jede andere Liste) mit der Maus über den Benutzernamen bzw Threadtitel zu fahren, dann recht Maustaste und "kopieren" (nicht Link Adresse Kopieren!), dann das Filterfenster öffnen und den Inhalt in das entsprechende Feld hineinzukopieren, wiederum mit rchter Maustates und dann "Einfügen" auswählen
	
