function NtF(x,a){return Number((x).toFixed(a));};
function ArrayMinusElement(array){let result=[],i=0; while(i<(array.length-1)){result[i]=array[i];};return result;};
let ArrayDividedDifferences=[];

function Multi(x,y)
	{
		let result;
		result=Number((x*y).toFixed(10));
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
		let result=1,i=0;
		while(i<n+1)
		{
			result=Multi(result,(x-array_x[i]));i++;
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
			arrayyy=ArrayDD;
			ArrayDividedDifferences[rang]=ArrayDD[arrayyy.length-1];
			ArrayDD=[];
			rang++;
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
		let result;let i=0;i=ArrayDividedDifferences.length;i=i-1;
		DividedDifferences(array_x,array_y);
	    
		result=array_y[array_x.length-1];
		while(i>0)
		{
			result=result+Multi(Diff(x,array_x,i),ArrayDividedDifferences[i]);
			i--;
		};
		return NtF(result,10);
	};
	
	let array_x=[-0.9, -0.7, -0.3 ,0.1 ,0.5 ,0.8] ;
	let array_y=[];
	let valueP=[];let valueF=[];
	let k=0,i=0;let valueX;
	
	while(i<array_x.length){array_y[i]=Oper(array_x[i]);i++};
	valueX=-1;
	while(valueX<=1)
		{
			valueP[k]=PolinomNewton(valueX,array_x,array_y);
			valueF[k]=Oper(valueX);
		
			k++;
			valueX=NtF(valueX+0.05,3);
		};
	valueX=-1;k=0;
	while(valueX<=1)
		{
			array_x[k]=valueX;
			valueX=NtF(valueX+0.05,3);
			k++;
		};	

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
function DrawArray(array_x,array_y,scale,color)
	{
		let result,i=0;
		while(i<array_x.length)
			{
				DrawPoint(500+Math.round(array_x[i]/scale),400+Math.round(array_y[i]/scale),color);i++;
			};
	};
DrawArray(array_x,valueP,0.009,'red');
