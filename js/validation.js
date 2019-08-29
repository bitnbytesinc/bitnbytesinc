//validation for every webpage's foooter
	function check(y)
	{name1=window.document.jrm.name1.value;
	email1=window.document.jrm.email1.value;
	pnumber1=window.document.jrm.pnumber1.value;
	message1=window.document.jrm.message1.value;


		if(name1=="" && y==1)
		{document.getElementById("pemo").innerHTML="<span style='color:red'> Enter a valid name ...!</span>";}
		else if(email1=="" && y==2)
		{document.getElementById("pemo").innerHTML="<span style='color:red'> Enter a valid email address ...!</span>";}
		else if(pnumber1=="" && y==3)
		{document.getElementById("pemo").innerHTML="<span style='color:red'> Enter a valid phone number ...!</span>";}
		else if(message1=="" && y==4)
		{document.getElementById("pemo").innerHTML="<span style='color:red'> Enter a valid message ...!</span>";}
		else if (y==5)
		{	if(name1=="")
			{document.getElementById("pemo").innerHTML="<span style='color:red'> Enter a valid name ...!</span>";}
			else if(email1=="")
			{document.getElementById("pemo").innerHTML="<span style='color:red'> Enter a valid email address ...!</span>";}
			else if(pnumber1=="")
			{document.getElementById("pemo").innerHTML="<span style='color:red'> Enter a valid phone number ...!</span>";}
			else if(message1=="")
			{document.getElementById("pemo").innerHTML="<span style='color:red'> Enter a valid message ...!</span>";}}
		else
			{document.getElementById("pemo").innerHTML="Get in touch";}

	}
//validation for contact page's form
	function ccheck(x)
	
	{
	name=window.document.erm.name.value;
	email=window.document.erm.email.value;
	subject=window.document.erm.subject.value;
	message=window.document.erm.message.value;
	
	if (name==""&& x==1)
		{document.getElementById("demo").innerHTML="<span style='color:red'> Enter a valid name ...!</span>";}
		else if (email=="" && x==2)
		{document.getElementById("demo").innerHTML="<span style='color:red'> Enter a valid email address ...!</span>";}
		else if (subject=="" && x==3)
		{document.getElementById("demo").innerHTML="<span style='color:red'> Enter a valid subject ...!</span>";}
		else if (message=="" && x==4)
		{document.getElementById("demo").innerHTML="<span style='color:red'> Enter a valid message ...!</span>";}
		else if (x==5)
		{	if (name=="")
			{document.getElementById("demo").innerHTML="<span style='color:red'> Enter a valid name ...!</span>";}
			else if (email=="")
			{document.getElementById("demo").innerHTML="<span style='color:red'> Enter a valid email address ...!</span>";}
			else if (subject=="")
			{document.getElementById("demo").innerHTML="<span style='color:red'> Enter a valid subject ...!</span>";}
			else if (message=="")
			{document.getElementById("demo").innerHTML="<span style='color:red'> Enter a valid message ...!</span>";}
		}
		else
			{document.getElementById("demo").innerHTML="Contact Form";}
	
	}
	
//validation for course page
	function valid(z)
	{name=window.document.prm.name2.value;
	email=window.document.prm.email2.value;
	age=window.document.prm.age.value;
	gender=window.document.prm.gender.value;
	message=window.document.prm.message.value;
	
		if (z==1 && name=="")
		{document.getElementById("amo").innerHTML="<span style='color:red'> Enter a valid name ...!</span>";}
		else if (z==2 && email=="")
		{document.getElementById("amo").innerHTML="<span style='color:red'> Enter a valid email address ...!</span>";}
		else if (z==3)
		{
			if (age=="")
			{document.getElementById("amo").innerHTML="<span style='color:red'> Enter your age ...!</span>";}
			else if (age<=0)
			{document.getElementById("amo").innerHTML="<span style='color:red'> Enter a valid age ...!</span>";}
		}
		else if (z==5 && gender=="")
		{document.getElementById("amo").innerHTML="<span style='color:red'> Please choose your gender ...!</span>";}
		else if (z==6 && message=="")
		{document.getElementById("amo").innerHTML="<span style='color:red'> Please choose your Message ...!</span>";}
		//here it starts
		else if (z==7)
		{	if (name=="")
			{document.getElementById("amo").innerHTML="<span style='color:red'> Enter a valid name ...!</span>";}
			else if (email=="")
			{document.getElementById("amo").innerHTML="<span style='color:red'> Enter a valid email address ...!</span>";}
			else if (age=="")
			{document.getElementById("amo").innerHTML="<span style='color:red'> Enter your age ...!</span>";}
			else if (age<=0)
			{document.getElementById("amo").innerHTML="<span style='color:red'> Enter a valid age ...!</span>";}
			else if (gender=="")
			{document.getElementById("amo").innerHTML="<span style='color:red'> Please choose your gender ...!</span>";}
			else if (message=="")
			{document.getElementById("amo").innerHTML="<span style='color:red'> Please choose your Message ...!</span>";}

		}
		else
		{document.getElementById("amo").innerHTML="Registeration Form";}
		
	}
	
	
	
	
	
	
	
	
	
	