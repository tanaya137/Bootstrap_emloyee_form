function myFunction() {
    var firstname=document.getElementById("firstname").value;
    var lastname=document.getElementById("lastname").value;
    var email=document.getElementById("email").value;
    var addressline1=document.getElementById("addressline1").value;
    var addressline2=document.getElementById("addressline2").value;
    var city=document.getElementById("city").value;
    var state=document.getElementById("state").value;
    var zipcode=document.getElementById("zipcode").value;
    var succ=document.getElementById("succ");  

    if(firstname =="" || lastname =="" || email =="" || addressline1 =="" || addressline2 =="" || city =="" || state =="" ||zipcode =="")
    {
        alert('Please fill the form correctly');
    }
    else
    {
        alert('firstname:'+firstname + '        ' + 'lastname:'+lastname + '        ' + 'eamil:'+email+ '        ' + 'addressline1:'+addressline1 + '        ' + 'addressline2:'+addressline2 + '        ' + 'city:'+city+ '        ' + 'state:'+state+ '        ' + 'zipcode:'+zipcode + '');

        succ.classList.remove("d-none");
       
    }
}