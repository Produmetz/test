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
			ArrayDividedDifferences[rang]=ArrayDD[0];
			ArrayDD=[];
			rang++;
		};	
	};
function PolinomNewton(x,array_x,array_y)
	{
		let result,i=0;
		DividedDifferences(array_x,array_y);
	    
		result=array_y[0];
		while(i<ArrayDividedDifferences.length-1)
		{
			result=result+Multi(Diff(x,array_x,i),ArrayDividedDifferences[i]);
			i++;
		};
		return result;
	};
	
	let array_x=[-2,-1,-0.5,0.5,1,2];
	let array_y=[27,24,23.25,23.25,24,27];
	let value;
	value=PolinomNewton(-1,array_x,array_y);
	alert(value);