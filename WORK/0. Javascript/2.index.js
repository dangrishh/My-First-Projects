console.log('My First JS');

let x = 90 + "bayabas";

//integer
//string
// float
// boolean true or false

let intergervalue = 20;
document.write((typeof intergervalue) + '<br>');

let stringvalue = "bayabas";
document.write((typeof stringvalue) + '<br>');

let booleanvalue = false;
document.write((typeof booleanvalue) + '<br>');


//------------------------INTEGER-------------

let y = 100 + 20;

let z = "maraming " + "bayabas" + " at ito ang mga bayabas ";

document.write(z + y + '<br>');

//-------------------ARRAY-------------------

let arrval = [1,2,3,4,5];

document.write('Index 0: ' + arrval[0] + '<br>');
document.write('Index 1: ' + arrval[1] + '<br>');
document.write('Index 2: ' + arrval[2] + '<br>');
document.write('Index 3: ' + arrval[3] + '<br>');
document.write('Index 4: ' + arrval[4] + '<br>');
document.write('<br>');


//--------------ARRAY METHOD---------------

let prutas = [' bayabas' , ' saging' , ' mansanas' , ' pinya' , 
' manga'];

prutas.toString()

document.write('toString() method: '+ prutas.toString() + '<br>');
document.write('<br>');

document.write('toString() method: '+ prutas.join("!") + '<br>');
document.write('<br>');

//----------------- POP - nagbabawas pero ang huli binabawas niya

let popval = prutas.pop();

document.write('pop() method: '+ popval + '<br>');
document.write('pop() method: '+ prutas + '<br>');
document.write('<br>');

//----------------- PUSH - nagdadagdag sa huli pero binilang niya
let pushval = prutas.push('duhat'); 

document.write('pop() method: '+ pushval + '<br>');
document.write('pop() method: '+ prutas + '<br>');
document.write('<br>');

//----------------- SHIFT - nagbabawas pero ang unahan ang binabawas
let shiftval = prutas.shift();

document.write('pop() method: '+ shiftval + '<br>');
document.write('pop() method: '+ prutas + '<br>');
document.write('<br>');

//----------------- UNSHIFT - nagdadagdag sa unahan pero binilang
let unshiftval = prutas.unshift('Buko');

document.write('pop() method: '+ unshiftval + '<br>');
document.write('pop() method: '+ prutas + '<br>');
document.write('<br>');

//-------------------------- ARRAY MARGIN -----------------------

let gulay = [' kangkong' , ' talbos' , ' ampalaya' , ' upo' , 
' kalabasa'];

let bahaykubo = prutas.concat(gulay);

document.write('Marging/concat() method: ' + bahaykubo + '<br>');



