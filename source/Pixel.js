//Datei erstellt das Rechteck 
//Document Fragment in body erstellen und dann die Tabelle einfügen												
var frag = document.createDocumentFragment();						
var n_zeilen=25;									//Bezeichner für die Zeilen und Spalten
var m_spalten=35;
var zellenhoehe=10;									//Bezeichner für die Zellengroessen
var zellenbreite=15;
var tbl1=document.createElement('TABLE');
											//for-Schleifen generieren n*m Tabellenzellen
for(var i = 0; i < n_zeilen; i++)							//1. Schleife für die Zeilen
{							
	var tr=tbl1.insertRow(); 
	for(var j = 0; j < m_spalten; j++)						//2. Schleife für die Spalten
	{
		var td=tr.insertCell(); 
		td.setAttribute("width", zellenbreite);					//Breite der Tabellenzelle 
		td.setAttribute("height", zellenhoehe);					//Höhe der Tabellenzelle				
		var test = parseInt(Math.random() * 3);
		if ( test === 0)							//If-Anweisung fuer den Hintergrund der Tabellenzellen
			td.setAttribute("style", "background-color:rgb(255,255,255);");
		else if (test === 1)
			td.setAttribute("style", "background-color:rgb(0,0,255);");
		else
			td.setAttribute("style", "background-color:rgb(255,0,0);" );
		tr.appendChild(td);
	}
}
tbl1.appendChild(tr);
frag.appendChild(tbl1);
//var tbl2=document.createElement('TABLE');
//var tr=tbl2.insertRow();
//var text="Anzahl"; 
//var td=tr.insertCell(appendChild(text););
//tr.appendChild(td);  
//tbl2.appendChild(tr);
//frag.appendChild(tbl2);
document.body.appendChild(frag);
