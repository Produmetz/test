function NtF(x,a){return Number((x).toFixed(a));};
function ArrayMinusElement(array){let result=[],i=0; while(i<(array.length-1)){result[i]=array[i];};return result;};
let ArrayDividedDifferences=[];

function Multi(x,y)
	{
		let result;
		result=Number((x*y).toFixed(8));
		return result;
	};

function DD(x_1,x_2,y_1,y_2)
	{
		let result;
		result=(y_2-y_1)/(x_2-x_1);
		result=NtF(result,10);
		return result;
	};

function Diff(x,array_x,n)
	{ 
		let result=1,i=0,turn;let k=array_x.length;
		while(n+i<k)
		{
			turn=NtF((x-array_x[k-i-1]),8);
			result=Multi(result,turn);i++;
		};
		return result;
	};	
function DividedDifferences(array_x,array_y)
	{ 
	let result,ArrayDD=[],rang=0,arrayyy=array_y;
	while(rang<array_x.length)
		{
			let i=0;
			while((i+1)<arrayyy.length)
				{
					ArrayDD[i]=DD(array_x[i],array_x[i+1+rang],arrayyy[i],arrayyy[i+1]);i++;
				};
			if(rang<array_x.length-1)
			{
			arrayyy=ArrayDD;
			ArrayDividedDifferences[rang]=ArrayDD[arrayyy.length-1];
			ArrayDD=[];
			rang++;
			}else{rang++;};
		};	
	};
	
function Oper(x)
	{
		let result;
		result=NtF(Math.asin(x),8);
		return result;
	};
 	
function PolinomNewton(x,array_x,array_y)
	{
		let result;let i;let n=array_x.length-1;
		DividedDifferences(array_x,array_y);
		i=0; 
		result=array_y[array_x.length-1];
		while(i<ArrayDividedDifferences.length-1)
		{
			result=result+Multi(Diff(x,array_x,n-i,i),ArrayDividedDifferences[i]);
			i++;
		};
		return NtF(result,8);
	};
	
	let array_x=[-0.9, -0.7, -0.3 ,0.1 ,0.5 ,0.8] ; ;
	let array_y=[];
	let valueP=[];let valueF=[];
	
function Fill(a,b,h){	let k=0,i=0;let valueX;
	
	while(i<array_x.length){array_y[i]=Oper(array_x[i]);i++};
	valueX=a;
	while(valueX<=b)
		{
			valueP[k]=PolinomNewton(valueX,array_x,array_y);
			valueF[k]=Oper(valueX);
		
			k++;
			valueX=NtF(valueX+h,3);
		};
	valueX=a;k=0;
	while(valueX<=b)
		{
			array_x[k]=valueX;
			valueX=NtF(valueX+h,3);
			k++;
};	};

////////////////////////////////////////////////////////////
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");


function Max(array)
	{
		let result=array[0];let i=0;
		while(i<array.length){if(array[i]>result){result=array[i]};};
		return result;
	};
function Min(array)
	{
		let result=array[0];let i=0;
		while(i<array.length){if(array[i]<result){result=array[i]};};
		return result;
	};	

function DrawPoint(x,y,color)
	{
		
		context.beginPath();
		context.fillStyle = color;
		context.fillRect(x-1, y-1, 2, 2);
		context.closePath();
	};
	function DrawLine(x,y,x1,y1,color)
	{
		
		context.beginPath();
		context.strokeStyle = color;
		context.lineWidth = 0.1;
		context.moveTo(x,y);
		context.lineTo(x1,y1);
		context.stroke();
		context.closePath();
	};	
function DrawArray(array_x,array_y,scale,color)
	{
		let result,i=0;
		while(i<array_x.length)
			{
				DrawPoint(500+Math.round(array_x[i]/scale),400-Math.round(array_y[i]/scale),color);
				DrawLine(500+Math.round(array_x[i]/scale),400-Math.round(array_y[i]/scale),500+Math.round(array_x[i+1]/scale),400-Math.round(array_y[i+1]/scale),color)
				i++;
			};
	};

DrawLine(1,400,999,400);
DrawLine(500,1,500,799);
Fill(-1,1,0.05);
DrawArray(array_x,valueP,0.005,'red');
DrawArray(array_x,valueF,0.005,'blue');
DrawPoint(500,400,'black')

