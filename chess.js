


class Vector
{
 constructor(){
 
 let Value=[];
 
 
 };	
 getMultiply(constant){	let result=[]; for (let i=0;i<Vector.length;i++){result[i]=this.Value[i]*constant};return result;};
}

function SummaArray(Array1,Array2,Lenght1,Lenght2)
	{
		let Summa=[];
		let raz=Lenght2-Lenght1;
		
		if(Lenght1>Lenght2)
			{
				
				for(let i=1;i<(Lenght1-Lenght2)+1;i++){Array2[Lenght2+i]=0;};
			};
		if(Lenght2>Lenght1)
			{
				
				for(let i=1;i<(raz+1);i++){Array1[Lenght1+i]=0;};
			};
		for(let i=0;i<Lenght1;i++){Summa[i]=Number(Array1[i])+Number(Array2[i])};
		return Summa;
	};
function ArrayMultiplicationByNumber(number,array){let resArr=[]; for(let i=0;i<array.length;i++){resArr[i]=array[i]*number};return resArr;}; 
class Figure
	{
		constructor(name,color)
		{
		 
		
		 this.Color=color;
		 this.Name=name;
		
		};
		getMaybeMove(LotMaybeMove){let MaybeMove=[];for(let i=0;i<LotMaybeMove;i++){MaybeMove[i]=[0,0,0]};return MaybeMove};
	
	};

	class WhitePawn extends Figure {constructor(){super('Pawn','White');};
		getMaybeMoveThisFigure()
		{ 
		    let MaybeMoveThisFigure=[];
			
			MaybeMoveThisFigure[0]=[0,0,1];
			MaybeMoveThisFigure[1]=[1,0,1];
			MaybeMoveThisFigure[2]=[1,-1,1];
			MaybeMoveThisFigure[3]=[0,-1,1];
			MaybeMoveThisFigure[4]=[-1,-1,1];
			MaybeMoveThisFigure[5]=[-1,0,1];
			MaybeMoveThisFigure[6]=[-1,1,1];
			MaybeMoveThisFigure[7]=[0,1,1];
			MaybeMoveThisFigure[8]=[1,1,1];
			MaybeMoveThisFigure[9]=[0,0,2];
			
			return MaybeMoveThisFigure;
		};
		getLotMaybeMove(){return 10;};
	}

	class WhiteRook extends Figure {constructor(){super('Rook','White');};
	getMaybeMoveThisFigure()
		{ 
		    let MaybeMoveThisFigure=[];
			
			MaybeMoveThisFigure[0]=[1,0,0];
			MaybeMoveThisFigure[1]=[-1,0,0];
			MaybeMoveThisFigure[2]=[0,-1,0];
			MaybeMoveThisFigure[3]=[0,1,0];
			MaybeMoveThisFigure[4]=[0,0,1];
			MaybeMoveThisFigure[5]=[0,0,-1];
			
			
			return MaybeMoveThisFigure;
		};getLotMaybeMove(){return 6;};
	};

	class WhiteKnight extends Figure {constructor(){super('Knight','White');}
		getMaybeMoveThisFigure()
		{ 
		    let MaybeMoveThisFigure=[];
			
			MaybeMoveThisFigure[0]=[2,0,1];
			MaybeMoveThisFigure[1]=[2,0,-1];
			MaybeMoveThisFigure[2]=[2,-1,0];
			MaybeMoveThisFigure[3]=[2,1,0];
			MaybeMoveThisFigure[4]=[0,2,1];
			MaybeMoveThisFigure[5]=[-1,2,0];
			MaybeMoveThisFigure[6]=[1,2,0];
			MaybeMoveThisFigure[7]=[0,2,-1];
			MaybeMoveThisFigure[8]=[0,1,2];
			MaybeMoveThisFigure[9]=[0,-1,2];
			MaybeMoveThisFigure[10]=[1,0,2];
			MaybeMoveThisFigure[11]=[-1,0,2];
			MaybeMoveThisFigure[12]=[0,-1,-2];
			MaybeMoveThisFigure[13]=[0,1,-2];
			MaybeMoveThisFigure[14]=[-1,0,-2];
			MaybeMoveThisFigure[15]=[1,0,-2];
			MaybeMoveThisFigure[16]=[0,-2,1];
			MaybeMoveThisFigure[17]=[0,-2,-1];
			MaybeMoveThisFigure[18]=[1,-2,0];
			MaybeMoveThisFigure[19]=[-1,-2,0];
			MaybeMoveThisFigure[20]=[-2,0,1];
			MaybeMoveThisFigure[21]=[-2,0,-1];
			MaybeMoveThisFigure[22]=[-2,1,0];
			MaybeMoveThisFigure[23]=[-2,-1,0];
			
			return MaybeMoveThisFigure;
		};
		getLotMaybeMove(){return 24;};}

	class WhiteBishop extends Figure {constructor(){super('Bishop','White');}
		
		getMaybeMoveThisFigure()
		{ 
		    let MaybeMoveThisFigure=[];
			MaybeMoveThisFigure[0]=[1,1,0];
			MaybeMoveThisFigure[1]=[1,-1,0];
			MaybeMoveThisFigure[2]=[-1,-1,0];
			MaybeMoveThisFigure[3]=[-1,1,0];
			MaybeMoveThisFigure[4]=[0,1,-1];
			MaybeMoveThisFigure[5]=[0,-1,-1];
			MaybeMoveThisFigure[6]=[-1,0,-1];
			MaybeMoveThisFigure[7]=[1,0,-1];
			MaybeMoveThisFigure[8]=[-1,0,1];
			MaybeMoveThisFigure[9]=[1,0,1];
			MaybeMoveThisFigure[10]=[0,-1,1];
			MaybeMoveThisFigure[11]=[0,1,1];
			
			
			return MaybeMoveThisFigure;};
			
		getLotMaybeMove(){return 12;};
		};

	class WhiteTriort extends Figure {constructor(){super('Triort','White');}
	getMaybeMoveThisFigure()
		{ 
		    let MaybeMoveThisFigure=[];
			MaybeMoveThisFigure[0]=[1,1,1];
			MaybeMoveThisFigure[1]=[1,1,-1];
			MaybeMoveThisFigure[2]=[1,-1,-1];
			MaybeMoveThisFigure[3]=[-1,-1,-1];
			MaybeMoveThisFigure[4]=[-1,-1,1];
			MaybeMoveThisFigure[5]=[-1,1,1];
			MaybeMoveThisFigure[6]=[1,-1,1];
			MaybeMoveThisFigure[7]=[-1,1,-1];
			
			return MaybeMoveThisFigure;};
			
		getLotMaybeMove(){return 8;};
		};
	
	class WhiteQueen extends Figure {constructor(){super('Queen','White');}
	getMaybeMoveThisFigure()
		{ 
		    let MaybeMoveThisFigure=[];
			MaybeMoveThisFigure[0]=[1,1,1];
			MaybeMoveThisFigure[1]=[1,1,-1];
			MaybeMoveThisFigure[2]=[1,-1,-1];
			MaybeMoveThisFigure[3]=[-1,-1,-1];
			MaybeMoveThisFigure[4]=[-1,-1,1];
			MaybeMoveThisFigure[5]=[-1,1,1];
			MaybeMoveThisFigure[6]=[1,-1,1];
			MaybeMoveThisFigure[7]=[-1,1,-1];
			MaybeMoveThisFigure[8]=[1,1,0];
			MaybeMoveThisFigure[9]=[1,-1,0];
			MaybeMoveThisFigure[10]=[-1,-1,0];
			MaybeMoveThisFigure[11]=[-1,1,0];
			MaybeMoveThisFigure[12]=[0,1,-1];
			MaybeMoveThisFigure[13]=[0,-1,-1];
			MaybeMoveThisFigure[14]=[-1,0,-1];
			MaybeMoveThisFigure[15]=[1,0,-1];
			MaybeMoveThisFigure[16]=[-1,0,1];
			MaybeMoveThisFigure[17]=[1,0,1];
			MaybeMoveThisFigure[18]=[0,-1,1];
			MaybeMoveThisFigure[19]=[0,1,1];
			MaybeMoveThisFigure[20]=[1,0,0];
			MaybeMoveThisFigure[21]=[-1,0,0];
			MaybeMoveThisFigure[22]=[0,-1,0];
			MaybeMoveThisFigure[23]=[0,1,0];
			MaybeMoveThisFigure[24]=[0,0,1];
			MaybeMoveThisFigure[25]=[0,0,-1];
			
			return MaybeMoveThisFigure;};
			
		getLotMaybeMove(){return 26;};
		};
	
	class WhiteKing extends Figure {constructor(){super('King','White');}
	getMaybeMoveThisFigure()
		{ 
		     let MaybeMoveThisFigure=[];
			MaybeMoveThisFigure[0]=[1,1,1];
			MaybeMoveThisFigure[1]=[1,1,-1];
			MaybeMoveThisFigure[2]=[1,-1,-1];
			MaybeMoveThisFigure[3]=[-1,-1,-1];
			MaybeMoveThisFigure[4]=[-1,-1,1];
			MaybeMoveThisFigure[5]=[-1,1,1];
			MaybeMoveThisFigure[6]=[1,-1,1];
			MaybeMoveThisFigure[7]=[-1,1,-1];
			MaybeMoveThisFigure[8]=[1,1,0];
			MaybeMoveThisFigure[9]=[1,-1,0];
			MaybeMoveThisFigure[10]=[-1,-1,0];
			MaybeMoveThisFigure[11]=[-1,1,0];
			MaybeMoveThisFigure[12]=[0,1,-1];
			MaybeMoveThisFigure[13]=[0,-1,-1];
			MaybeMoveThisFigure[14]=[-1,0,-1];
			MaybeMoveThisFigure[15]=[1,0,-1];
			MaybeMoveThisFigure[16]=[-1,0,1];
			MaybeMoveThisFigure[17]=[1,0,1];
			MaybeMoveThisFigure[18]=[0,-1,1];
			MaybeMoveThisFigure[19]=[0,1,1];
			MaybeMoveThisFigure[20]=[1,0,0];
			MaybeMoveThisFigure[21]=[-1,0,0];
			MaybeMoveThisFigure[22]=[0,-1,0];
			MaybeMoveThisFigure[23]=[0,1,0];
			MaybeMoveThisFigure[24]=[0,0,1];
			MaybeMoveThisFigure[25]=[0,0,-1];
			return MaybeMoveThisFigure;};
			
		getLotMaybeMove(){return 26;};
	;}
	
	

	
	class BlackPawn extends Figure {constructor(){super('Pawn','Black');};getMaybeMoveThisFigure()
		{ 
		    let MaybeMoveThisFigure=[];
			
			MaybeMoveThisFigure[0]=[0,0,-1];
			MaybeMoveThisFigure[1]=[1,0,-1];
			MaybeMoveThisFigure[2]=[1,-1,-1];
			MaybeMoveThisFigure[3]=[0,-1,-1];
			MaybeMoveThisFigure[4]=[-1,-1,-1];
			MaybeMoveThisFigure[5]=[-1,0,-1];
			MaybeMoveThisFigure[6]=[-1,1,-1];
			MaybeMoveThisFigure[7]=[0,1,-1];
			MaybeMoveThisFigure[8]=[1,1,-1];
			MaybeMoveThisFigure[9]=[0,0,-2];
			
			return MaybeMoveThisFigure;
		};getLotMaybeMove(){return 10;};};

	class BlackRook extends Figure {constructor(){super('Rook','Black');};
		getMaybeMoveThisFigure()
		{ 
		    let MaybeMoveThisFigure=[];
			
			MaybeMoveThisFigure[0]=[1,0,0];
			MaybeMoveThisFigure[1]=[-1,0,0];
			MaybeMoveThisFigure[2]=[0,-1,0];
			MaybeMoveThisFigure[3]=[0,1,0];
			MaybeMoveThisFigure[4]=[0,0,1];
			MaybeMoveThisFigure[5]=[0,0,-1];
			
			
			return MaybeMoveThisFigure;
		};getLotMaybeMove(){return 6;};};

	class BlackKnight extends Figure {constructor(){super('Knight','Black');};
		getMaybeMoveThisFigure()
		{ 
		    let MaybeMoveThisFigure=[];
			
			MaybeMoveThisFigure[0]=[2,0,1];
			MaybeMoveThisFigure[1]=[2,0,-1];
			MaybeMoveThisFigure[2]=[2,-1,0];
			MaybeMoveThisFigure[3]=[2,1,0];
			MaybeMoveThisFigure[4]=[0,2,1];
			MaybeMoveThisFigure[5]=[-1,2,0];
			MaybeMoveThisFigure[6]=[1,2,0];
			MaybeMoveThisFigure[7]=[0,2,-1];
			MaybeMoveThisFigure[8]=[0,1,2];
			MaybeMoveThisFigure[9]=[0,-1,2];
			MaybeMoveThisFigure[10]=[1,0,2];
			MaybeMoveThisFigure[11]=[-1,0,2];
			MaybeMoveThisFigure[12]=[0,-1,-2];
			MaybeMoveThisFigure[13]=[0,1,-2];
			MaybeMoveThisFigure[14]=[-1,0,-2];
			MaybeMoveThisFigure[15]=[1,0,-2];
			MaybeMoveThisFigure[16]=[0,-2,1];
			MaybeMoveThisFigure[17]=[0,-2,-1];
			MaybeMoveThisFigure[18]=[1,-2,0];
			MaybeMoveThisFigure[19]=[-1,-2,0];
			MaybeMoveThisFigure[20]=[-2,0,1];
			MaybeMoveThisFigure[21]=[-2,0,-1];
			MaybeMoveThisFigure[22]=[-2,1,0];
			MaybeMoveThisFigure[23]=[-2,-1,0];
			
			return MaybeMoveThisFigure;
		};
		getLotMaybeMove(){return 24;};}

	class BlackBishop extends Figure {constructor(){super('Bishop','Black');};
	getMaybeMoveThisFigure()
		{ 
		    let MaybeMoveThisFigure=[];
			MaybeMoveThisFigure[0]=[1,1,0];
			MaybeMoveThisFigure[1]=[1,-1,0];
			MaybeMoveThisFigure[2]=[-1,-1,0];
			MaybeMoveThisFigure[3]=[-1,1,0];
			MaybeMoveThisFigure[4]=[0,1,-1];
			MaybeMoveThisFigure[5]=[0,-1,-1];
			MaybeMoveThisFigure[6]=[-1,0,-1];
			MaybeMoveThisFigure[7]=[1,0,-1];
			MaybeMoveThisFigure[8]=[-1,0,1];
			MaybeMoveThisFigure[9]=[1,0,1];
			MaybeMoveThisFigure[10]=[0,-1,1];
			MaybeMoveThisFigure[11]=[0,1,1];
			
			
			return MaybeMoveThisFigure;};
			
		getLotMaybeMove(){return 12;};
		};

	class BlackTriort extends Figure {constructor(){super('Triort','Black');};
	getMaybeMoveThisFigure()
		{ 
		    let MaybeMoveThisFigure=[];
			MaybeMoveThisFigure[0]=[1,1,1];
			MaybeMoveThisFigure[1]=[1,1,-1];
			MaybeMoveThisFigure[2]=[1,-1,-1];
			MaybeMoveThisFigure[3]=[-1,-1,-1];
			MaybeMoveThisFigure[4]=[-1,-1,1];
			MaybeMoveThisFigure[5]=[-1,1,1];
			MaybeMoveThisFigure[6]=[1,-1,1];
			MaybeMoveThisFigure[7]=[-1,1,-1];
			
			return MaybeMoveThisFigure;};
			
		getLotMaybeMove(){return 8;};
		};
	
	class BlackQueen extends Figure {constructor(){super('Queen','Black');};
	
	getMaybeMoveThisFigure()
		{ 
		    let MaybeMoveThisFigure=[];
			MaybeMoveThisFigure[0]=[1,1,1];
			MaybeMoveThisFigure[1]=[1,1,-1];
			MaybeMoveThisFigure[2]=[1,-1,-1];
			MaybeMoveThisFigure[3]=[-1,-1,-1];
			MaybeMoveThisFigure[4]=[-1,-1,1];
			MaybeMoveThisFigure[5]=[-1,1,1];
			MaybeMoveThisFigure[6]=[1,-1,1];
			MaybeMoveThisFigure[7]=[-1,1,-1];
			MaybeMoveThisFigure[8]=[1,1,0];
			MaybeMoveThisFigure[9]=[1,-1,0];
			MaybeMoveThisFigure[10]=[-1,-1,0];
			MaybeMoveThisFigure[11]=[-1,1,0];
			MaybeMoveThisFigure[12]=[0,1,-1];
			MaybeMoveThisFigure[13]=[0,-1,-1];
			MaybeMoveThisFigure[14]=[-1,0,-1];
			MaybeMoveThisFigure[15]=[1,0,-1];
			MaybeMoveThisFigure[16]=[-1,0,1];
			MaybeMoveThisFigure[17]=[1,0,1];
			MaybeMoveThisFigure[18]=[0,-1,1];
			MaybeMoveThisFigure[19]=[0,1,1];
			MaybeMoveThisFigure[20]=[1,0,0];
			MaybeMoveThisFigure[21]=[-1,0,0];
			MaybeMoveThisFigure[22]=[0,-1,0];
			MaybeMoveThisFigure[23]=[0,1,0];
			MaybeMoveThisFigure[24]=[0,0,1];
			MaybeMoveThisFigure[25]=[0,0,-1];
			
			return MaybeMoveThisFigure;};
			
		getLotMaybeMove(){return 26;};
		};
	
	class BlackKing extends Figure {constructor(){super('King','Black');};
	getMaybeMoveThisFigure()
		{ 
		    let MaybeMoveThisFigure=[];
			MaybeMoveThisFigure[0]=[1,1,1];
			MaybeMoveThisFigure[1]=[1,1,-1];
			MaybeMoveThisFigure[2]=[1,-1,-1];
			MaybeMoveThisFigure[3]=[-1,-1,-1];
			MaybeMoveThisFigure[4]=[-1,-1,1];
			MaybeMoveThisFigure[5]=[-1,1,1];
			MaybeMoveThisFigure[6]=[1,-1,1];
			MaybeMoveThisFigure[7]=[-1,1,-1];
			MaybeMoveThisFigure[8]=[1,1,0];
			MaybeMoveThisFigure[9]=[1,-1,0];
			MaybeMoveThisFigure[10]=[-1,-1,0];
			MaybeMoveThisFigure[11]=[-1,1,0];
			MaybeMoveThisFigure[12]=[0,1,-1];
			MaybeMoveThisFigure[13]=[0,-1,-1];
			MaybeMoveThisFigure[14]=[-1,0,-1];
			MaybeMoveThisFigure[15]=[1,0,-1];
			MaybeMoveThisFigure[16]=[-1,0,1];
			MaybeMoveThisFigure[17]=[1,0,1];
			MaybeMoveThisFigure[18]=[0,-1,1];
			MaybeMoveThisFigure[19]=[0,1,1];
			MaybeMoveThisFigure[20]=[1,0,0];
			MaybeMoveThisFigure[21]=[-1,0,0];
			MaybeMoveThisFigure[22]=[0,-1,0];
			MaybeMoveThisFigure[23]=[0,1,0];
			MaybeMoveThisFigure[24]=[0,0,1];
			MaybeMoveThisFigure[25]=[0,0,-1];
			return MaybeMoveThisFigure;};
			
		getLotMaybeMove(){return 26;};
	;}
	
	
	 
	 let Pole=[];
	 
	 function FillPole(){	 
	 
	for (let x=0;x<6;x++){Pole[x]=[];for(let y=0;y<6;y++){Pole[x][y]=[];for(let z=0;z<8;z++){Pole[x][y][z]=null;};};};};
	 FillPole();
	 for (let x=0;x<6;x++){Pole[x]=[];for(let y=0;y<6;y++){Pole[x][y]=[];for(let z=0;z<8;z++)
	 {
		if(((x==0)&&((y==0)||(y==5))&&(z==0))||((x==5)&&((y==0)||(y==5))&&(z==0))){Pole[x][y][z]=new WhiteRook;};
        if(((x==0)&&((y==0)||(y==5))&&(z==7))||((x==5)&&((y==0)||(y==5))&&(z==7))){Pole[x][y][z]=new BlackRook;};	
        if((((x==1)||(x==4))&&((y==0)||(y==5))&&(z==0))||(((y==1)||(y==4))&&((x==0)||(x==5))&&(z==0))){Pole[x][y][z]=new WhiteKnight;};	
		if((((x==1)||(x==4))&&((y==0)||(y==5))&&(z==7))||(((y==1)||(y==4))&&((x==0)||(x==5))&&(z==7))){Pole[x][y][z]=new BlackKnight;};	
		if((((((x==0)||(x==5))&&((y==2)||(y==3))&&(z==0)))||(((y==0)||(y==5))&&((x==2)||(x==3))&&(z==0)))||(((x==1)||(x==4))&&((y==1)||(y==4))&&(z==0))){Pole[x][y][z]=new WhiteBishop;};
		if((((((x==0)||(x==5))&&((y==2)||(y==3))&&(z==7)))||(((y==0)||(y==5))&&((x==2)||(x==3))&&(z==7)))||(((x==1)||(x==4))&&((y==1)||(y==4))&&(z==7))){Pole[x][y][z]=new BlackBishop;};
		if(((((x==2)||(x==3))&&((y==1)||(y==4)))||(((y==2)||(y==3))&&((x==1)||(x==4))))&&(z==0)){Pole[x][y][z]=new WhiteTriort;};
		if(((((x==2)||(x==3))&&((y==1)||(y==4)))||(((y==2)||(y==3))&&((x==1)||(x==4))))&&(z==7)){Pole[x][y][z]=new BlackTriort;};
		if(((((x==2)||(x==3))&&(y==2))||((y==3)&&(x==2)))&&(z==0)){Pole[x][y][z]=new WhiteQueen;};
		if(((((x==2)||(x==3))&&(y==2))||((y==3)&&(x==2)))&&(z==7)){Pole[x][y][z]=new BlackQueen;};
		if((x==3)&&(y==3)&&(z==0)){Pole[x][y][z]=new WhiteKing;};
		if((x==3)&&(y==3)&&(z==7)){Pole[x][y][z]=new BlackKing;};
		if(z==1){Pole[x][y][z]=new WhitePawn};
		if(z==6){Pole[x][y][z]=new BlackPawn};
	 };};};

	 
	
	function MaybeMoves(x,y,z,Pole)
		{   
		    
			
		    let j=0;
			let k=1;
		    let MaybePositions=[];
			let x_1;let y_1;let z_1;
		    let Position=[x,y,z];
			let MaybePosition=[];
			let TTT=Pole[x][y][z];
			let what=[];
			if(Pole[x][y][z]!=null){
			what=TTT.getMaybeMoveThisFigure();
			let Max_i=Pole[x][y][z].getLotMaybeMove();
			if((Pole[x][y][z].Name=='Pawn')&&(Pole[x][y][z].Color=='White'))
			{
				for(let i=0;i<10;i++)
				{ 
			        what2=what[i];
					MaybePosition=SummaArray(Position,what2,3,3);
					x_1=MaybePosition[0];	y_1=MaybePosition[1];	z_1=MaybePosition[2];
					if ((x_1 < 6) &&(y_1 < 6) && (z_1 < 8)&& (x_1 >-1) && (y_1 >-1) && (z_1 >-1))
					{
						if(((i==0)||(i==9))&&(Pole[x_1][y_1][z_1]==null)&&(z==1)){MaybePositions[j]=MaybePosition;j++}
						else if((Pole[x_1][y_1][z_1]==null)&&(i==0)){MaybePositions[j]=MaybePosition;j++}
						else if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='Black')&&(i!=0)&&(i!=9)){MaybePositions[j]=MaybePosition;j++};
					};
				};
			};
			if((Pole[x][y][z].Name=='Pawn')&&(Pole[x][y][z].Color=='Black'))
			{
				for(let i=0;i<10;i++)
				{ 
			        what2=what[i];
					MaybePosition=SummaArray(Position,what2,3,3);
					x_1=MaybePosition[0];	y_1=MaybePosition[1];	z_1=MaybePosition[2];
					if ((x_1 < 6) &&(y_1 < 6) && (z_1 < 8)&& (x_1 >-1) && (y_1 >-1) && (z_1 >-1))
					{
						if(((i==0)||(i==9))&&(Pole[x_1][y_1][z_1]==null)&&(z==6)){MaybePositions[j]=MaybePosition;j++}
						else if((Pole[x_1][y_1][z_1]==null)&&(i==0)){MaybePositions[j]=MaybePosition;j++};
						if(((i!=0)||(i!=9))&&(Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='White')&&(i!=0)&&(i!=9)){MaybePositions[j]=MaybePosition;j++};
					};
				};
			};
			if((Pole[x][y][z].Name=='Rook')&&(Pole[x][y][z].Color=='White'))
			{
				for(let i=0;i<6;i++)
				{ 
				while(k<9)
					{
			        what2=ArrayMultiplicationByNumber(k,what[i])
					MaybePosition=SummaArray(Position,what2,3,3);
					x_1=MaybePosition[0];	y_1=MaybePosition[1];	z_1=MaybePosition[2];
					if ((x_1 < 6) &&(y_1 < 6) && (z_1 < 8)&& (x_1 >-1) && (y_1 >-1) && (z_1 >-1))
					{
						if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='Black')){MaybePositions[j]=MaybePosition;j++;k=9;}
						else if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='White')){k=9;}
						else if((Pole[x_1][y_1][z_1]==null)||(Pole[x_1][y_1][z_1]==undefined)){MaybePositions[j]=MaybePosition;j++;k++;};	
					}else{k=9;};
					};
					k=1;
				};
			};
			if((Pole[x][y][z].Name=='Rook')&&(Pole[x][y][z].Color=='Black'))
			{
				for(let i=0;i<6;i++)
				{ 
				while(k<9){
			        what2=ArrayMultiplicationByNumber(k,what[i])
					MaybePosition=SummaArray(Position,what2,3,3);
					x_1=MaybePosition[0];	y_1=MaybePosition[1];	z_1=MaybePosition[2];
					if ((x_1 < 6) &&(y_1 < 6) && (z_1 < 8)&& (x_1 >-1) && (y_1 >-1) && (z_1 >-1))
					{
						
						if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='White')){MaybePositions[j]=MaybePosition;j++;k=9;}
						else if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='Black')){k=9;}
						else{MaybePositions[j]=MaybePosition;j++,k++;};
						
					
				}else{k=9;};};k=1;
				};
				
			};
			if((Pole[x][y][z].Name=='Knight')&&(Pole[x][y][z].Color=='White'))
			{
				for(let i=0;i<24;i++)
				{ 
			        what2=what[i];
					MaybePosition=SummaArray(Position,what2,3,3);
					x_1=MaybePosition[0];	y_1=MaybePosition[1];	z_1=MaybePosition[2];
					if ((x_1 < 6) &&(y_1 < 6) && (z_1 < 8)&& (x_1 >-1) && (y_1 >-1) && (z_1 >-1))
					{
						
						if((Pole[x_1][y_1][z_1]==null)){MaybePositions[j]=MaybePosition;j++};
						if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='Black')){MaybePositions[j]=MaybePosition;j++};
					};
				};
			};
			if((Pole[x][y][z].Name=='Knight')&&(Pole[x][y][z].Color=='Black'))
			{
				for(let i=0;i<24;i++)
				{ 
			        what2=what[i];
					MaybePosition=SummaArray(Position,what2,3,3);
					x_1=MaybePosition[0];	y_1=MaybePosition[1];	z_1=MaybePosition[2];
					if ((x_1 < 6) &&(y_1 < 6) && (z_1 < 8)&& (x_1 >-1) && (y_1 >-1) && (z_1 >-1))
					{
						
						if((Pole[x_1][y_1][z_1]==null)){MaybePositions[j]=MaybePosition;j++};
						if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='White')){MaybePositions[j]=MaybePosition;j++};
					};
				};
			};
			if((Pole[x][y][z].Name=='Bishop')&&(Pole[x][y][z].Color=='White'))
			{
				for(let i=0;i<12;i++)
				{ 
				while(k<9){
			        what2=ArrayMultiplicationByNumber(k,what[i])
					MaybePosition=SummaArray(Position,what2,3,3);
					x_1=MaybePosition[0];	y_1=MaybePosition[1];	z_1=MaybePosition[2];
					if ((x_1 < 6) &&(y_1 < 6) && (z_1 < 8)&& (x_1 >-1) && (y_1 >-1) && (z_1 >-1))
					{
						
						if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='Black')){MaybePositions[j]=MaybePosition;j++;k=9;}else if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='White')){k=9;}else{MaybePositions[j]=MaybePosition;j++,k++;};
						
					
				}else{k=9;};};k=1;
				};
			};
			if((Pole[x][y][z].Name=='Bishop')&&(Pole[x][y][z].Color=='Black'))
			{
				for(let i=0;i<12;i++)
				{ 
				while(k<9){
			        what2=ArrayMultiplicationByNumber(k,what[i])
					MaybePosition=SummaArray(Position,what2,3,3);
					x_1=MaybePosition[0];	y_1=MaybePosition[1];	z_1=MaybePosition[2];
					if ((x_1 < 6) &&(y_1 < 6) && (z_1 < 8)&& (x_1 >-1) && (y_1 >-1) && (z_1 >-1))
					{
						
						if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='White')){MaybePositions[j]=MaybePosition;j++;k=9;}else if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='Black')){k=9;}else{MaybePositions[j]=MaybePosition;j++,k++;};
						
					
				}else{k=9;};};k=1;
				};
			};
			if((Pole[x][y][z].Name=='Triort')&&(Pole[x][y][z].Color=='White'))
			{
				for(let i=0;i<8;i++)
				{ 
				while(k<9){
			        what2=ArrayMultiplicationByNumber(k,what[i])
					MaybePosition=SummaArray(Position,what2,3,3);
					x_1=MaybePosition[0];	y_1=MaybePosition[1];	z_1=MaybePosition[2];
					if ((x_1 < 6) &&(y_1 < 6) && (z_1 < 8)&& (x_1 >-1) && (y_1 >-1) && (z_1 >-1))
					{
						if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='Black')){MaybePositions[j]=MaybePosition;j++;k=9;}else if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='White')){k=9;}else{MaybePositions[j]=MaybePosition;j++,k++;};
						
					
				}else{k=9;};};k=1;
				};
			};
			if((Pole[x][y][z].Name=='Triort')&&(Pole[x][y][z].Color=='Black'))
			{
				for(let i=0;i<8;i++)
				{ 
				while(k<9){
			        what2=ArrayMultiplicationByNumber(k,what[i])
					MaybePosition=SummaArray(Position,what2,3,3);
					x_1=MaybePosition[0];	y_1=MaybePosition[1];	z_1=MaybePosition[2];
					if ((x_1 < 6) &&(y_1 < 6) && (z_1 < 8)&& (x_1 >-1) && (y_1 >-1) && (z_1 >-1))
					{
						
						if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='White')){MaybePositions[j]=MaybePosition;j++;k=9;}else if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='Black')){k=9;}else{MaybePositions[j]=MaybePosition;j++,k++;};
						
					
				}else{k=9;};};k=1;
				};
			};
			if((Pole[x][y][z].Name=='Queen')&&(Pole[x][y][z].Color=='White'))
			{
				for(let i=0;i<26;i++)
				{ 
				let k=1;
				while(k<9){
			        what2=ArrayMultiplicationByNumber(k,what[i])
					MaybePosition=SummaArray(Position,what2,3,3);
					x_1=MaybePosition[0];	y_1=MaybePosition[1];	z_1=MaybePosition[2];
					if ((x_1 < 6) &&(y_1 < 6) && (z_1 < 8)&& (x_1 >-1) && (y_1 >-1) && (z_1 >-1))
					{
						if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='Black')){MaybePositions[j]=MaybePosition;j++;k=9;}else if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='White')){k=9;}else{MaybePositions[j]=MaybePosition;j++,k++;};
						
						
						
					
				}else{k=9;};};k=1;
				};
			};
			if((Pole[x][y][z].Name=='Queen')&&(Pole[x][y][z].Color=='Black'))
			{
				for(let i=0;i<26;i++)
				{ 
				while(k<9){
			        what2=ArrayMultiplicationByNumber(k,what[i])
					MaybePosition=SummaArray(Position,what2,3,3);
					x_1=MaybePosition[0];	y_1=MaybePosition[1];	z_1=MaybePosition[2];
					if ((x_1 < 6) &&(y_1 < 6) && (z_1 < 8)&& (x_1 >-1) && (y_1 >-1) && (z_1 >-1))
					{
						
						if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='White')){MaybePositions[j]=MaybePosition;j++;k=9;}else if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='Black')){k=9;}else{MaybePositions[j]=MaybePosition;j++,k++;};
						
					
				}else{k=9;};};k=1;
				};
			};
			if((Pole[x][y][z].Name=='King')&&(Pole[x][y][z].Color=='White'))
			{
				for(let i=0;i<26;i++)
				{ 
			        what2=what[i];
					MaybePosition=SummaArray(Position,what2,3,3);
					x_1=MaybePosition[0];	y_1=MaybePosition[1];	z_1=MaybePosition[2];
					if ((x_1 < 6) &&(y_1 < 6) && (z_1 < 8)&& (x_1 >-1) && (y_1 >-1) && (z_1 >-1))
					{
						
						if((Pole[x_1][y_1][z_1]==null)){MaybePositions[j]=MaybePosition;j++};
						if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='Black')){MaybePositions[j]=MaybePosition;j++};
						
					};
				};
			};
			if((Pole[x][y][z].Name=='King')&&(Pole[x][y][z].Color=='Black'))
			{
				for(let i=0;i<26;i++)
				{ 
			        what2=what[i];
					MaybePosition=SummaArray(Position,what2,3,3);
					x_1=MaybePosition[0];	y_1=MaybePosition[1];	z_1=MaybePosition[2];
					if ((x_1 < 6) &&(y_1 < 6) && (z_1 < 8)&& (x_1 >-1) && (y_1 >-1) && (z_1 >-1))
					{
						
						if((Pole[x_1][y_1][z_1]==null)){MaybePositions[j]=MaybePosition;j++};
						if((Pole[x_1][y_1][z_1]!=null)&&(Pole[x_1][y_1][z_1].Color=='White')){MaybePositions[j]=MaybePosition;j++};
					};
				};
			};
			return MaybePositions;}else{return alert('Клетка пуста');};
		}; 
		
function WhatFigure(x,y,z,Pole){let answer;if (Pole[x][y][z]!=null){answer =Pole[x][y][z].Color+Pole[x][y][z].Name;}else{answer='Nothing'};return answer;};
	
function Move(x,y,z,x_1,y_1,z_1,Pole){ 
		Pole[x_1][y_1][z_1]=Pole[x][y][z];Pole[x][y][z]=null; return Pole;};
	

//////////////////////////////////////////////////////////////////////////////////////////	

let con_x,con_y
let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");
  
  function DrawPoleSixBySix_1(x,y)
  {
	 
	 context.strokeRect(x-1,y-1,182,182); 
	 context.fillStyle = "rgba(0,1,0,0.1)"
	 context.fillRect(x,y,180,180);
	 context.fillStyle='White';
	 for(let i=0;i<3;i++)
	 {
		 for(let j=0;j<3;j++)
		{
		 let x_1=x+60*i;let y_1=y+60*j;
		 context.fillRect(x_1,y_1,30,30);
		}
	 };
	 for(let i=0;i<3;i++)
	 {
		 for(let j=0;j<3;j++)
		{
		 let x_1=x+30+60*i;let y_1=y+30+60*j;
		 context.fillRect(x_1,y_1,30,30);
		}
	 };
  };
  function DrawPoleSixBySix_2(x,y)
  {
	 
	 context.strokeRect(x-1,y-1,182,182); 
	 context.fillStyle='rgba(0,1,0,0.1)';
	 context.fillRect(x,y,180,180);
	 context.fillStyle='White';
	 for(let i=0;i<3;i++)
	 {
		 for(let j=0;j<3;j++)
		{
		 let x_1=x+60*i;let y_1=y+30+60*j;
		 context.fillRect(x_1,y_1,30,30);
		}
	 };
	 for(let i=0;i<3;i++)
	 {
		 for(let j=0;j<3;j++)
		{
		 let x_1=x+30+60*i;let y_1=y+60*j;
		 context.fillRect(x_1,y_1,30,30);
		}
	 };
  };
  function DrawPole(x,y)
	{
		for(let i=0;i<4;i++)
	    {
			if((i==0)||(i==2)){DrawPoleSixBySix_2(x+242*i,y)}else{DrawPoleSixBySix_1(x+242*i,y)};	
		};
		for(let i=0;i<4;i++)
	    {
			if((i==0)||(i==2)){DrawPoleSixBySix_2(x+242*i,y+242)}else{DrawPoleSixBySix_1(x+242*i,y+242)};
			
		};
	};
   

DrawPole(20,10)	
con_x=20;con_y=10;	
function ArrayPoleDraw(con_x,con_y){
	let PoleDraw=[];
	
	 for (let x=0;x<6;x++){PoleDraw[x]=[];for(let y=0;y<6;y++){PoleDraw[x][y]=[];for(let z=0;z<8;z++)
		{
			if(z<4){PoleDraw[x][y][z]=[con_x+30*x+242*z,con_y+30*y];}else{PoleDraw[x][y][z]=[con_x+30*x+242*(z-4),con_y+30*y+242]};
};};};return PoleDraw;};	
	 
let	PoleDraw=ArrayPoleDraw(con_x,con_y) ;
	
	function DrawPawn(x_1,y_1,color)	
	{
		 let cx = document.querySelector("canvas").getContext("2d");
		let  img = document.createElement("img");
       if(color=='White'){img.src = "PawnWhite.png";}else{img.src = "PawnBlack.png";};
       img.addEventListener("load", function() {
    
      cx.drawImage(img, x_1+5.5, y_1+2,18,25);
  });
	};
	function DrawRook(x_1,y_1,color)	
	{
		 let cx = document.querySelector("canvas").getContext("2d");
		let  img = document.createElement("img");
       if(color=='White'){img.src = "RookWhite.png";}else{img.src = "RookBlack.png";};
       img.addEventListener("load", function() {
    
      cx.drawImage(img, x_1+5.5, y_1+2,18,25);
  });
	};
	function DrawBishop(x_1,y_1,color)	
	{
		 let cx = document.querySelector("canvas").getContext("2d");
		let  img = document.createElement("img");
       if(color=='White'){img.src = "BishopWhite.png";}else{img.src = "BishopBlack.png";};
       img.addEventListener("load", function() {
    
      cx.drawImage(img, x_1+5.5, y_1+2,18,25);
	});
	};
	function DrawKhight(x_1,y_1,color)	
	{
		 let cx = document.querySelector("canvas").getContext("2d");
		let  img = document.createElement("img");
       if(color=='White'){img.src = "KnightWhite.png";}else{img.src = "KnightBlack.png";};
       img.addEventListener("load", function() {
    
      cx.drawImage(img, x_1+5.5, y_1+2,18,25);
  });
	};
	function DrawTriort(x_1,y_1,color)	
	{
		 let cx = document.querySelector("canvas").getContext("2d");
		let  img = document.createElement("img");
       if(color=='White'){img.src = "TriortWhite.png";}else{img.src = "TriortBlack.png";};
       img.addEventListener("load", function() {
    
      cx.drawImage(img, x_1+5.5, y_1+2,18,25);
  });
	};
	function DrawQueen(x_1,y_1,color)	
	{
		 let cx = document.querySelector("canvas").getContext("2d");
		let  img = document.createElement("img");
       if(color=='White'){img.src = "QueenWhite.png";}else{img.src = "QueenBlack.png";};
       img.addEventListener("load", function() {
    
      cx.drawImage(img, x_1+5.5, y_1+2,18,25);
  });
	};
	function DrawKing(x_1,y_1,color)	
	{
		 let cx = document.querySelector("canvas").getContext("2d");
		let  img = document.createElement("img");
       if(color=='White'){img.src = "KingWhite.png";}else{img.src = "KingBlack.png";};
       img.addEventListener("load", function() {
    
      cx.drawImage(img, x_1+5.5, y_1+2,18,25);
	 });};
	 
	 
	 
	 
	function DrawNothing(x_1,y_1)
	{
		let cx = document.querySelector("canvas").getContext("2d");
		let  img = document.createElement("img");
		img.src = "Nothing.png";
		img.addEventListener("load", function() {
		cx.drawImage(img, x_1+5.5, y_1+2,18,25);
	 });
	};
	
	
	
	
	
	
	function DrawFigure(name,color,x_1,y_1)
	{
	if(name=='Pawn'){DrawPawn(x_1,y_1,color);};
	if(name=='Rook'){DrawRook(x_1,y_1,color);};
	if(name=='Bishop'){DrawBishop(x_1,y_1,color);};
	if(name=='Knight'){DrawKhight(x_1,y_1,color);};
	if(name=='Triort'){DrawTriort(x_1,y_1,color);};
	if(name=='Queen'){DrawQueen(x_1,y_1,color);};
	if(name=='King'){DrawKing(x_1,y_1,color);};
	};
   





	
DrawPole(20,10);	
con_x=20;con_y=10;	
	
function DrawPoleNowMoment(Pole){
    let name;
	
	let color;
	let x_1=0;let y_1=0;
    context.clearRect(0, 0, canvas.width, canvas.height);
	DrawPole(con_x,con_y);
for (let x=0;x<6;x++){for(let y=0;y<6;y++){for(let z=0;z<8;z++)
	{
		if(Pole[x][y][z]!=null)
		{
			name=Pole[x][y][z].Name;
			color=Pole[x][y][z].Color;
			x_1=PoleDraw[x][y][z][0];y_1=PoleDraw[x][y][z][1];
			DrawFigure(name,color,x_1,y_1);
		};
        
	};	
};};};



function DrawGreenSquare(x_1,y_1)
	{
	 context.beginPath();
	 context.strokeStyle ="rgba(255,165,0,1)";
	 context.lineWidth=3;
	 
     context.strokeRect(x_1+2,y_1+2,25,25);	 
	 context.closePath();
	};
	
function DrawMaybeMoves(x,y,z)
	{   
		context.beginPath();
        
	    let PoleDraw=ArrayPoleDraw(con_x,con_y);
	    let x_1=0;let y_1=0;	
		let x_2;let y_2;let z_2;
		let arrr=MaybeMoves(x,y,z,Pole);
		for(let i=0;i<arrr.length;i++)
		{
			x_2=arrr[i][0];y_2=arrr[i][1];z_2=arrr[i][2];
			x_1=PoleDraw[x_2][y_2][z_2][0];y_1=PoleDraw[x_2][y_2][z_2][1];
			context.strokeStill="Green";
			context.lineWidth=3;
			
			context.strokeRect(x_1+2,y_1+2,25,25);	 
		};
		 context.closePath();
	};	
	
////////////////////////////////////////////////////////////////////
let x_mouse;let y_mouse;


let question;






let Before2=false;
let Before=true;
let startMove=null;
DrawPoleNowMoment(Pole);
function PositionClick(x_mouse,y_mouse)
	{ 
	    let ClickPosition;
		for (let x=0;x<6;x++){for(let y=0;y<6;y++){for(let z=0;z<8;z++)
		{
			let g=PoleDraw[x][y][z][0];let h=PoleDraw[x][y][z][1];
			if(((g<x_mouse)&&(g+30>x_mouse))&&((h<y_mouse)&&(h+30>y_mouse))){ ClickPosition=[x,y,z];};
		};};};
		return ClickPosition;
	};		


document.addEventListener("mousedown", function(e)
{
	if(Before2)
	{
		let finishMove=null;
		let did=0;
		Before2=false;
		Before=true;
		x_mouse=e.pageX; y_mouse=e.pageY;
		finishMove=PositionClick(x_mouse,y_mouse);
		let arrayMM=MaybeMoves(startMove[0],startMove[1],startMove[2],Pole);
		for(let i=0;i<arrayMM.length;i++){
		if((arrayMM[i][0]==finishMove[0])&&(arrayMM[i][1]==finishMove[1])&&(arrayMM[i][2]==finishMove[2])){
		Move(startMove[0],startMove[1],startMove[2],finishMove[0],finishMove[1],finishMove[2],Pole);
		DrawPoleNowMoment(Pole);}else{did++;};
		};
		if(did==arrayMM.length){DrawPoleNowMoment(Pole); alert('Impossible move!');};
	}
	else if(Before)
	{
		Before=false;
		Before2=true;
		x_mouse=e.pageX; y_mouse=e.pageY;
		startMove=PositionClick(x_mouse,y_mouse);
		 context.clearRect(0, 0, canvas.width, canvas.height);
		 DrawPoleNowMoment(Pole);
		DrawMaybeMoves(startMove[0],startMove[1],startMove[2]);
	};
	
});	

