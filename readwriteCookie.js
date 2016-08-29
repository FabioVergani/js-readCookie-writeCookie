var w=window;
var Storage=w.localStorage||false;
var isoffline=String(w.location).indexOf('file://')!==-1;


 function readCookie(a) {
  var r=null,n=a,m,e,l,i,j;
  if(isoffline){
	 if((e=Storage)!==false){e.setItem(n,1);};
	 r=true;
  }else{
    for(i=0,n+='=',m=document.cookie.split(';'),l=m.length;i<l;++i){
      e=m[i];
		while(e.charAt(0)===' '){e=e.substring(1,j=e.length);};
      if(e.indexOf(n)===0){r=e.substring(n.length,j);break;};
    };
  };
  return r;
 }

 function writeCookie(a,b,c){
	var n=a,o=b,i=c;
	document.cookie=n+'='+(i>0?o+';\u0020expires='+((o=new Date).setTime(o.getTime()+i),o).toGMTString():o)+';\u0020path=/';
	return isoffline?((o=Storage)!==false?o.getItem(n)===1:o):readCookie(n);
 }


//#Usage;
if(writeCookie('confirmed',666,31536000000)){//365*(24*60*60*1000),/365*86400000 = 31536000000
 console.info("write");
}else{
 console.warn("nowrite");
};
console.log(readCookie('confirmed'));
