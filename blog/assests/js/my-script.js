/**
 * Created by Web App Develop-PHP on 12/10/2017.
 */


//
// var btnElement = document.getElementById('btn');
//
// btnElement.onclick =function () {  //anonamas function
//
//     var firstNameValue= document.getElementById('firstName').value;
// //              alert(firstNameValue);
//
//     var lastNameValue= document.getElementById('lastName').value;
// //               alert(lastNameValue);
//
//     var fullName=firstNameValue+ ' ' +lastNameValue;
// //               alert(fullNameValue);
//
//     document.getElementById('fullName').value = fullName;
//
//
//
//
//
// };


var btnElement =document.getElementById('Substraction');

btnElement.onclick = function () {
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    var result = firstNumber-secondNumber;

    document.getElementById('result').value= result;


};





//function demo() {
////                document.write('Hello Dhaka');
//
//
//                var  firstName ='Muntasir';
//                var lastName = 'Billah';
//                var fullName= firstName+' '+lastName;
//                document.write(fullName);
//
//            }
//                document.write('<br>========<br>');
//            demo();
//
//            document.write('<br>========<br>');
//            demo();
//argument vs parameter.

//            function demo(firstName,lastName) {
//
//                var fullName= firstName+' '+lastName;
//                document.write(fullName);
//
//            }
//            document.write('<br>========<br>');
//            demo('Muntasir Billah','Munna');
//
//            document.write('<br>========<br>');
//            demo('Zuthika','Zuthi');



//            var paragraphElement = document.getElementsByTagName('p');
////            document.write(paragraphElement[0].innerHTML);
//
//            for( var key=0; key<paragraphElement.length;key++){
//                document.write(paragraphElement[key].innerHTML+'<br>');
//
//            }








<!---->
//            var Data=new Array(x);
//            var b=Array(x);
//            var a=[10,20,30,40,50];//array declaretion.

//
//            var data=[];
//
//            data[0]=10;
//            data[1]=20;
//            data[2] =30;
//
//            data['name']='Riya';
//            data['city']='Dhaka';
//            data['country']='Bangladesh';

//            document.write(data['name']); //single data output dekhanor jonno.//index number bole dite hbe.

//            for(var key in a){
//                document.write(a[key]+'<br>');
//            }

//array 3 types:numeric ,associative,multidimentional.


//            var data = ['Riya','Diya','Bangladesh'];

//            document.write(data.length);//no of index.
//            document.write(data.length-1);// max no of index.


