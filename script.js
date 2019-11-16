var id=function(e){return document.getElementById(e);}


function change()
{
	if (id("table1").style.display=="block")
	{
		id("table1").style.display="none";
		id("table2").style.display="block";
		id("table3").style.display="none";
		return;
	}
	if (id("table2").style.display=="block")
	{
		id("table1").style.display="none";
		id("table2").style.display="none";
		id("table3").style.display="block";
		return;
	}
	if (id("table3").style.display=="block")
	{
		id("table1").style.display="block";
		id("table2").style.display="none";
		id("table3").style.display="none";
		return;
	}
	

	
}

setInterval(change, 10000);

