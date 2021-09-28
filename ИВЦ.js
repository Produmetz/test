function NtF(x,a){return Number((x).toFixed(a));};

function Oper(x,a)
	{
		let result;
		if(a==1){
	   
		result=Number((Math.acos(Number((x**2).toFixed(9)))).toFixed(9));
		result=result-x;
		return result;}
		else if(a==2){result=x-NtF(Math.sinh(x),9);return NtF(result,9);}
		else if(a==3){result=NtF(x**4,9)-13*NtF(x**2,9)+36-NtF(x**(-1),9);return result;}
		else if(a==4){
		 result=NtF(x**3,9)-3*x;
		 result=result-2*NtF(Math.E**(-x),9);
		 return result;
		}
		else if(a==5){result=NtF(Math.cos(NtF(x**2,9)),9)-10*x;return result;}
		else if(a==6){result=NtF(Math.E**x,7)-NtF(Math.acos(NtF(x**(1/2),8)),8);return result;}
		else if(a==7){result=NtF(NtF(Math.log(x),8)**2,8)-NtF(x**(-1),9);return result;}
		else if(a==8){result=1;return result;}
		else if(a==9){return result;}
		else if(a==10){return result;}
	 
	 };
function Multi(x,y)
	{
		let result;
		result=Number((x*y).toFixed(9));
		return result;
	};
let a,b,ksi,epsilon,length,n,N;
    a=Number(prompt('Нижняя граница',-1));
	b=Number(prompt('Верхняя граница',1));
	epsilon=1/(10**Number(prompt('Отрицательная степень десятки для точности',4)));
	n=Number(prompt('Номер функции',1));
	N=n;
	epsilon=2*epsilon;
	length=Math.abs(b-a);
	ksi=(Number((b-a).toFixed(9))/2)+a;
	while((Oper(ksi,N)!=0)&&(length>epsilon))
	{
		if(Multi(Oper(ksi,N),Oper(a,N))<0)
		{
			b=ksi
		} 
		else
		{
			a=ksi;
		};
		length=Math.abs(b-a);
		ksi=(Number((b-a).toFixed(9))/2)+a;
		
	};
	alert (NtF(ksi,9));
	