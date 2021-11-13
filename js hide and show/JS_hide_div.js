// javascript hide div
<script>
	document.getElementById("id").style.display = "none";  //hide
	document.getElementById("id").style.display = "block"; //show
	document.getElementById("id").style.display = ""; 	   //show
</script>

// html
<html>
	<div id="id" style="display:none">
    <div id="id" style="display:block">
</html>

// jquery
<script>
	$("#id").hide();      
	$("#id").show();
</script>