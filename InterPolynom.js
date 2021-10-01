function SymbolKronecker (i,j){if(i==j){return 1;}else{return 0;};};
function AntiSymbolKronecker (i,j){if(i!=j){return 1;}else{return 0;};};
function NtF(x,a){return Number((x).toFixed(a));};
function Multi(x,y)
	{
		let result;
		result=Number((x*y).toFixed(5));
		return result;
	};
function NumMinusArray(x,array,l)
	{ let result=1,i=0;
		while(i<array.length)
		{
			if(i==l){i++;}else{
			result=NtF((result*(x-array[i])),5);
			i++;};
		};
		return result;
	};
function  PolinomLagrangia(x,array_x,array_y)
	{ 
		let sresult;
		let result=0;
		for(let i=0;i<array_x.length;i++)
			{
				sresult=NumMinusArray(x,array_x,i);
				sresult=sresult/NumMinusArray(array_x[i],array_x,i);
				sresult=sresult*array_y[i]
				result=result+sresult;
				sresult=0;
			};
		return result;
	};
	let array_x=[-2,0,2];
	let array_y=[4,0,4];
	
	let value;
	value=PolinomLagrangia(3,array_x,array_y);
	value=Math.round(value);
	if(value==9){alert("Всё работает!!!");};