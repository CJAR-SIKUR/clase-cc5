
var a,b,c;
for(var i=1; i<998;i++){
	for(var j=i+1; j+i<1000;j++){
			k=1000-(i+j);
			if((k>(j-i))&&(k<(i+j))&&(i*i + j*j)==(k*k)){
				a=i;b=j;c=k;
				var v=[a,b,c];
				console.log(v);}
			
		}
	}

