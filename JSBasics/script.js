//Decision making:
/*var age=18;
if (age<13){
    console.log("minor");
}else if (age>18){
    console.log("major");
}

//condition?true:false
age>=18?console.log("major"):console.log("minor");
*/

//Function
/*function zainab(firstName,Lastname){
    console.log(firstName+' '+Lastname);
}
zainab('Zainab','Noorain');
*/

//Array
/*var name=["Zainy",'Utthu','Tin Tin'];
console.log(name[2]);
console.log(name,length);

names.push("Kutti");
names.unshift("Meow");
names.pop();
console.log(names);
*/

var bill=[124,48,268];
var tip=[0,0,0];
var amt=[0,0,0];
for(i=0;i<3;i++)
{
    if(bill[i]<50)
    {
        tip[i]=0.2*bill[i];
        amt[i]=bill[i]+tip[i];
    }
    else if(bill[i]>=50 && bill[i]<200)
    {
        tip[i]=0.15*bill[i];
        amt[i]=bill[i]+tip[i];
    }
    else
    {
        tip[i]=0.1*bill[i];
        amt[i]=bill[i]+tip[i];       
    }
}
console.log(tip);
console.log(amt);