(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[866],{44431:function(e,r,n){var t;!function(i){"use strict";var o,u=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,s=Math.ceil,f=Math.floor,c="[BigNumber Error] ",l=c+"Number primitive has more than 15 significant digits: ",a=1e14,h=14,g=9007199254740991,p=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],w=1e7,m=1e9;function d(e){var r=0|e;return e>0||e===r?r:r-1}function v(e){for(var r,n,t=1,i=e.length,o=e[0]+"";t<i;){for(r=e[t++]+"",n=h-r.length;n--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function N(e,r){var n,t,i=e.c,o=r.c,u=e.s,s=r.s,f=e.e,c=r.e;if(!u||!s)return null;if(n=i&&!i[0],t=o&&!o[0],n||t)return n?t?0:-s:u;if(u!=s)return u;if(n=u<0,t=f==c,!i||!o)return t?0:!i^n?1:-1;if(!t)return f>c^n?1:-1;for(s=(f=i.length)<(c=o.length)?f:c,u=0;u<s;u++)if(i[u]!=o[u])return i[u]>o[u]^n?1:-1;return f==c?0:f>c^n?1:-1}function b(e,r,n,t){if(e<r||e>n||e!==f(e))throw Error(c+(t||"Argument")+("number"==typeof e?e<r||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function O(e){var r=e.c.length-1;return d(e.e/h)==r&&e.c[r]%2!=0}function E(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function y(e,r,n){var t,i;if(r<0){for(i=n+".";++r;i+=n);e=i+e}else if(++r>(t=e.length)){for(i=n,r-=t;--r;i+=n);e+=i}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}o=function e(r){var n,t,i,o=M.prototype={constructor:M,toString:null,valueOf:null},A=new M(1),_=20,S=4,P=-7,R=21,D=-1e7,B=1e7,L=!1,x=1,U=0,C={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},I="0123456789abcdefghijklmnopqrstuvwxyz",T=!0;function M(e,r){var n,o,s,c,a,p,w,m,d=this;if(!(d instanceof M))return new M(e,r);if(null==r){if(e&&!0===e._isBigNumber)return d.s=e.s,void(!e.c||e.e>B?d.c=d.e=null:e.e<D?d.c=[d.e=0]:(d.e=e.e,d.c=e.c.slice()));if((p="number"==typeof e)&&0*e==0){if(d.s=1/e<0?(e=-e,-1):1,e===~~e){for(c=0,a=e;a>=10;a/=10,c++);return void(c>B?d.c=d.e=null:(d.e=c,d.c=[e]))}m=String(e)}else{if(!u.test(m=String(e)))return i(d,m,p);d.s=45==m.charCodeAt(0)?(m=m.slice(1),-1):1}(c=m.indexOf("."))>-1&&(m=m.replace(".","")),(a=m.search(/e/i))>0?(c<0&&(c=a),c+=+m.slice(a+1),m=m.substring(0,a)):c<0&&(c=m.length)}else{if(b(r,2,I.length,"Base"),10==r&&T)return j(d=new M(e),_+d.e+1,S);if(m=String(e),p="number"==typeof e){if(0*e!=0)return i(d,m,p,r);if(d.s=1/e<0?(m=m.slice(1),-1):1,M.DEBUG&&m.replace(/^0\.0*|\./,"").length>15)throw Error(l+e)}else d.s=45===m.charCodeAt(0)?(m=m.slice(1),-1):1;for(n=I.slice(0,r),c=a=0,w=m.length;a<w;a++)if(n.indexOf(o=m.charAt(a))<0){if("."==o){if(a>c){c=w;continue}}else if(!s&&(m==m.toUpperCase()&&(m=m.toLowerCase())||m==m.toLowerCase()&&(m=m.toUpperCase()))){s=!0,a=-1,c=0;continue}return i(d,String(e),p,r)}p=!1,(c=(m=t(m,r,10,d.s)).indexOf("."))>-1?m=m.replace(".",""):c=m.length}for(a=0;48===m.charCodeAt(a);a++);for(w=m.length;48===m.charCodeAt(--w););if(m=m.slice(a,++w)){if(w-=a,p&&M.DEBUG&&w>15&&(e>g||e!==f(e)))throw Error(l+d.s*e);if((c=c-a-1)>B)d.c=d.e=null;else if(c<D)d.c=[d.e=0];else{if(d.e=c,d.c=[],a=(c+1)%h,c<0&&(a+=h),a<w){for(a&&d.c.push(+m.slice(0,a)),w-=h;a<w;)d.c.push(+m.slice(a,a+=h));a=h-(m=m.slice(a)).length}else a-=w;for(;a--;m+="0");d.c.push(+m)}}else d.c=[d.e=0]}function k(e,r,n,t){var i,o,u,s,f;if(null==n?n=S:b(n,0,8),!e.c)return e.toString();if(i=e.c[0],u=e.e,null==r)f=v(e.c),f=1==t||2==t&&(u<=P||u>=R)?E(f,u):y(f,u,"0");else if(o=(e=j(new M(e),r,n)).e,s=(f=v(e.c)).length,1==t||2==t&&(r<=o||o<=P)){for(;s<r;f+="0",s++);f=E(f,o)}else if(r-=u,f=y(f,o,"0"),o+1>s){if(--r>0)for(f+=".";r--;f+="0");}else if((r+=o-s)>0)for(o+1==s&&(f+=".");r--;f+="0");return e.s<0&&i?"-"+f:f}function G(e,r){for(var n,t=1,i=new M(e[0]);t<e.length;t++){if(!(n=new M(e[t])).s){i=n;break}r.call(i,n)&&(i=n)}return i}function F(e,r,n){for(var t=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,t++);return(n=t+n*h-1)>B?e.c=e.e=null:n<D?e.c=[e.e=0]:(e.e=n,e.c=r),e}function j(e,r,n,t){var i,o,u,c,l,g,w,m=e.c,d=p;if(m){e:{for(i=1,c=m[0];c>=10;c/=10,i++);if((o=r-i)<0)o+=h,u=r,w=(l=m[g=0])/d[i-u-1]%10|0;else if((g=s((o+1)/h))>=m.length){if(!t)break e;for(;m.length<=g;m.push(0));l=w=0,i=1,u=(o%=h)-h+1}else{for(l=c=m[g],i=1;c>=10;c/=10,i++);w=(u=(o%=h)-h+i)<0?0:l/d[i-u-1]%10|0}if(t=t||r<0||null!=m[g+1]||(u<0?l:l%d[i-u-1]),t=n<4?(w||t)&&(0==n||n==(e.s<0?3:2)):w>5||5==w&&(4==n||t||6==n&&(o>0?u>0?l/d[i-u]:0:m[g-1])%10&1||n==(e.s<0?8:7)),r<1||!m[0])return m.length=0,t?(r-=e.e+1,m[0]=d[(h-r%h)%h],e.e=-r||0):m[0]=e.e=0,e;if(0==o?(m.length=g,c=1,g--):(m.length=g+1,c=d[h-o],m[g]=u>0?f(l/d[i-u]%d[u])*c:0),t)for(;;){if(0==g){for(o=1,u=m[0];u>=10;u/=10,o++);for(u=m[0]+=c,c=1;u>=10;u/=10,c++);o!=c&&(e.e++,m[0]==a&&(m[0]=1));break}if(m[g]+=c,m[g]!=a)break;m[g--]=0,c=1}for(o=m.length;0===m[--o];m.pop());}e.e>B?e.c=e.e=null:e.e<D&&(e.c=[e.e=0])}return e}function q(e){var r,n=e.e;return null===n?e.toString():(r=v(e.c),r=n<=P||n>=R?E(r,n):y(r,n,"0"),e.s<0?"-"+r:r)}return M.clone=e,M.ROUND_UP=0,M.ROUND_DOWN=1,M.ROUND_CEIL=2,M.ROUND_FLOOR=3,M.ROUND_HALF_UP=4,M.ROUND_HALF_DOWN=5,M.ROUND_HALF_EVEN=6,M.ROUND_HALF_CEIL=7,M.ROUND_HALF_FLOOR=8,M.EUCLID=9,M.config=M.set=function(e){var r,n;if(null!=e){if("object"!=typeof e)throw Error(c+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(b(n=e[r],0,m,r),_=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(b(n=e[r],0,8,r),S=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((n=e[r])&&n.pop?(b(n[0],-m,0,r),b(n[1],0,m,r),P=n[0],R=n[1]):(b(n,-m,m,r),P=-(R=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if((n=e[r])&&n.pop)b(n[0],-m,-1,r),b(n[1],1,m,r),D=n[0],B=n[1];else{if(b(n,-m,m,r),!n)throw Error(c+r+" cannot be zero: "+n);D=-(B=n<0?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if((n=e[r])!==!!n)throw Error(c+r+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw L=!n,Error(c+"crypto unavailable");L=n}else L=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(b(n=e[r],0,9,r),x=n),e.hasOwnProperty(r="POW_PRECISION")&&(b(n=e[r],0,m,r),U=n),e.hasOwnProperty(r="FORMAT")){if("object"!=typeof(n=e[r]))throw Error(c+r+" not an object: "+n);C=n}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(n=e[r])||/^.?$|[+\-.\s]|(.).*\1/.test(n))throw Error(c+r+" invalid: "+n);T="0123456789"==n.slice(0,10),I=n}}return{DECIMAL_PLACES:_,ROUNDING_MODE:S,EXPONENTIAL_AT:[P,R],RANGE:[D,B],CRYPTO:L,MODULO_MODE:x,POW_PRECISION:U,FORMAT:C,ALPHABET:I}},M.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!M.DEBUG)return!0;var r,n,t=e.c,i=e.e,o=e.s;e:if("[object Array]"=={}.toString.call(t)){if((1===o||-1===o)&&i>=-m&&i<=m&&i===f(i)){if(0===t[0]){if(0===i&&1===t.length)return!0;break e}if((r=(i+1)%h)<1&&(r+=h),String(t[0]).length==r){for(r=0;r<t.length;r++)if((n=t[r])<0||n>=a||n!==f(n))break e;if(0!==n)return!0}}}else if(null===t&&null===i&&(null===o||1===o||-1===o))return!0;throw Error(c+"Invalid BigNumber: "+e)},M.maximum=M.max=function(){return G(arguments,o.lt)},M.minimum=M.min=function(){return G(arguments,o.gt)},M.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return f(Math.random()*e)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(e){var n,t,i,o,u,l=0,a=[],g=new M(A);if(null==e?e=_:b(e,0,m),o=s(e/h),L)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(o*=2));l<o;)(u=131072*n[l]+(n[l+1]>>>11))>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),n[l]=t[0],n[l+1]=t[1]):(a.push(u%1e14),l+=2);l=o/2}else{if(!crypto.randomBytes)throw L=!1,Error(c+"crypto unavailable");for(n=crypto.randomBytes(o*=7);l<o;)(u=281474976710656*(31&n[l])+1099511627776*n[l+1]+4294967296*n[l+2]+16777216*n[l+3]+(n[l+4]<<16)+(n[l+5]<<8)+n[l+6])>=9e15?crypto.randomBytes(7).copy(n,l):(a.push(u%1e14),l+=7);l=o/7}if(!L)for(;l<o;)(u=r())<9e15&&(a[l++]=u%1e14);for(o=a[--l],e%=h,o&&e&&(u=p[h-e],a[l]=f(o/u)*u);0===a[l];a.pop(),l--);if(l<0)a=[i=0];else{for(i=-1;0===a[0];a.splice(0,1),i-=h);for(l=1,u=a[0];u>=10;u/=10,l++);l<h&&(i-=h-l)}return g.e=i,g.c=a,g}}(),M.sum=function(){for(var e=1,r=arguments,n=new M(r[0]);e<r.length;)n=n.plus(r[e++]);return n},t=function(){var e="0123456789";function r(e,r,n,t){for(var i,o,u=[0],s=0,f=e.length;s<f;){for(o=u.length;o--;u[o]*=r);for(u[0]+=t.indexOf(e.charAt(s++)),i=0;i<u.length;i++)u[i]>n-1&&(null==u[i+1]&&(u[i+1]=0),u[i+1]+=u[i]/n|0,u[i]%=n)}return u.reverse()}return function(t,i,o,u,s){var f,c,l,a,h,g,p,w,m=t.indexOf("."),d=_,N=S;for(m>=0&&(a=U,U=0,t=t.replace(".",""),g=(w=new M(i)).pow(t.length-m),U=a,w.c=r(y(v(g.c),g.e,"0"),10,o,e),w.e=w.c.length),l=a=(p=r(t,i,o,s?(f=I,e):(f=e,I))).length;0==p[--a];p.pop());if(!p[0])return f.charAt(0);if(m<0?--l:(g.c=p,g.e=l,g.s=u,p=(g=n(g,w,d,N,o)).c,h=g.r,l=g.e),m=p[c=l+d+1],a=o/2,h=h||c<0||null!=p[c+1],h=N<4?(null!=m||h)&&(0==N||N==(g.s<0?3:2)):m>a||m==a&&(4==N||h||6==N&&1&p[c-1]||N==(g.s<0?8:7)),c<1||!p[0])t=h?y(f.charAt(1),-d,f.charAt(0)):f.charAt(0);else{if(p.length=c,h)for(--o;++p[--c]>o;)p[c]=0,c||(++l,p=[1].concat(p));for(a=p.length;!p[--a];);for(m=0,t="";m<=a;t+=f.charAt(p[m++]));t=y(t,l,f.charAt(0))}return t}}(),n=function(){function e(e,r,n){var t,i,o,u,s=0,f=e.length,c=r%w,l=r/w|0;for(e=e.slice();f--;)s=((i=c*(o=e[f]%w)+(t=l*o+(u=e[f]/w|0)*c)%w*w+s)/n|0)+(t/w|0)+l*u,e[f]=i%n;return s&&(e=[s].concat(e)),e}function r(e,r,n,t){var i,o;if(n!=t)o=n>t?1:-1;else for(i=o=0;i<n;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function n(e,r,n,t){for(var i=0;n--;)e[n]-=i,i=e[n]<r[n]?1:0,e[n]=i*t+e[n]-r[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(t,i,o,u,s){var c,l,g,p,w,m,v,N,b,O,E,y,A,_,S,P,R,D=t.s==i.s?1:-1,B=t.c,L=i.c;if(!B||!B[0]||!L||!L[0])return new M(t.s&&i.s&&(B?!L||B[0]!=L[0]:L)?B&&0==B[0]||!L?0*D:D/0:NaN);for(b=(N=new M(D)).c=[],D=o+(l=t.e-i.e)+1,s||(s=a,l=d(t.e/h)-d(i.e/h),D=D/h|0),g=0;L[g]==(B[g]||0);g++);if(L[g]>(B[g]||0)&&l--,D<0)b.push(1),p=!0;else{for(_=B.length,P=L.length,g=0,D+=2,(w=f(s/(L[0]+1)))>1&&(L=e(L,w,s),B=e(B,w,s),P=L.length,_=B.length),A=P,E=(O=B.slice(0,P)).length;E<P;O[E++]=0);R=L.slice(),R=[0].concat(R),S=L[0],L[1]>=s/2&&S++;do{if(w=0,(c=r(L,O,P,E))<0){if(y=O[0],P!=E&&(y=y*s+(O[1]||0)),(w=f(y/S))>1)for(w>=s&&(w=s-1),v=(m=e(L,w,s)).length,E=O.length;1==r(m,O,v,E);)w--,n(m,P<v?R:L,v,s),v=m.length,c=1;else 0==w&&(c=w=1),v=(m=L.slice()).length;if(v<E&&(m=[0].concat(m)),n(O,m,E,s),E=O.length,-1==c)for(;r(L,O,P,E)<1;)w++,n(O,P<E?R:L,E,s),E=O.length}else 0===c&&(w++,O=[0]);b[g++]=w,O[0]?O[E++]=B[A]||0:(O=[B[A]],E=1)}while((A++<_||null!=O[0])&&D--);p=null!=O[0],b[0]||b.splice(0,1)}if(s==a){for(g=1,D=b[0];D>=10;D/=10,g++);j(N,o+(N.e=g+l*h-1)+1,u,p)}else N.e=l,N.r=+p;return N}}(),i=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,n=/^\.([^.]+)$/,t=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,u,s,f){var l,a=s?u:u.replace(i,"");if(t.test(a))o.s=isNaN(a)?null:a<0?-1:1;else{if(!s&&(a=a.replace(e,(function(e,r,n){return l="x"==(n=n.toLowerCase())?16:"b"==n?2:8,f&&f!=l?e:r})),f&&(l=f,a=a.replace(r,"$1").replace(n,"0.$1")),u!=a))return new M(a,l);if(M.DEBUG)throw Error(c+"Not a"+(f?" base "+f:"")+" number: "+u);o.s=null}o.c=o.e=null}}(),o.absoluteValue=o.abs=function(){var e=new M(this);return e.s<0&&(e.s=1),e},o.comparedTo=function(e,r){return N(this,new M(e,r))},o.decimalPlaces=o.dp=function(e,r){var n,t,i,o=this;if(null!=e)return b(e,0,m),null==r?r=S:b(r,0,8),j(new M(o),e+o.e+1,r);if(!(n=o.c))return null;if(t=((i=n.length-1)-d(this.e/h))*h,i=n[i])for(;i%10==0;i/=10,t--);return t<0&&(t=0),t},o.dividedBy=o.div=function(e,r){return n(this,new M(e,r),_,S)},o.dividedToIntegerBy=o.idiv=function(e,r){return n(this,new M(e,r),0,1)},o.exponentiatedBy=o.pow=function(e,r){var n,t,i,o,u,l,a,g,p=this;if((e=new M(e)).c&&!e.isInteger())throw Error(c+"Exponent not an integer: "+q(e));if(null!=r&&(r=new M(r)),u=e.e>14,!p.c||!p.c[0]||1==p.c[0]&&!p.e&&1==p.c.length||!e.c||!e.c[0])return g=new M(Math.pow(+q(p),u?2-O(e):+q(e))),r?g.mod(r):g;if(l=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new M(NaN);(t=!l&&p.isInteger()&&r.isInteger())&&(p=p.mod(r))}else{if(e.e>9&&(p.e>0||p.e<-1||(0==p.e?p.c[0]>1||u&&p.c[1]>=24e7:p.c[0]<8e13||u&&p.c[0]<=9999975e7)))return o=p.s<0&&O(e)?-0:0,p.e>-1&&(o=1/o),new M(l?1/o:o);U&&(o=s(U/h+2))}for(u?(n=new M(.5),l&&(e.s=1),a=O(e)):a=(i=Math.abs(+q(e)))%2,g=new M(A);;){if(a){if(!(g=g.times(p)).c)break;o?g.c.length>o&&(g.c.length=o):t&&(g=g.mod(r))}if(i){if(0===(i=f(i/2)))break;a=i%2}else if(j(e=e.times(n),e.e+1,1),e.e>14)a=O(e);else{if(0===(i=+q(e)))break;a=i%2}p=p.times(p),o?p.c&&p.c.length>o&&(p.c.length=o):t&&(p=p.mod(r))}return t?g:(l&&(g=A.div(g)),r?g.mod(r):o?j(g,U,S,undefined):g)},o.integerValue=function(e){var r=new M(this);return null==e?e=S:b(e,0,8),j(r,r.e+1,e)},o.isEqualTo=o.eq=function(e,r){return 0===N(this,new M(e,r))},o.isFinite=function(){return!!this.c},o.isGreaterThan=o.gt=function(e,r){return N(this,new M(e,r))>0},o.isGreaterThanOrEqualTo=o.gte=function(e,r){return 1===(r=N(this,new M(e,r)))||0===r},o.isInteger=function(){return!!this.c&&d(this.e/h)>this.c.length-2},o.isLessThan=o.lt=function(e,r){return N(this,new M(e,r))<0},o.isLessThanOrEqualTo=o.lte=function(e,r){return-1===(r=N(this,new M(e,r)))||0===r},o.isNaN=function(){return!this.s},o.isNegative=function(){return this.s<0},o.isPositive=function(){return this.s>0},o.isZero=function(){return!!this.c&&0==this.c[0]},o.minus=function(e,r){var n,t,i,o,u=this,s=u.s;if(r=(e=new M(e,r)).s,!s||!r)return new M(NaN);if(s!=r)return e.s=-r,u.plus(e);var f=u.e/h,c=e.e/h,l=u.c,g=e.c;if(!f||!c){if(!l||!g)return l?(e.s=-r,e):new M(g?u:NaN);if(!l[0]||!g[0])return g[0]?(e.s=-r,e):new M(l[0]?u:3==S?-0:0)}if(f=d(f),c=d(c),l=l.slice(),s=f-c){for((o=s<0)?(s=-s,i=l):(c=f,i=g),i.reverse(),r=s;r--;i.push(0));i.reverse()}else for(t=(o=(s=l.length)<(r=g.length))?s:r,s=r=0;r<t;r++)if(l[r]!=g[r]){o=l[r]<g[r];break}if(o&&(i=l,l=g,g=i,e.s=-e.s),(r=(t=g.length)-(n=l.length))>0)for(;r--;l[n++]=0);for(r=a-1;t>s;){if(l[--t]<g[t]){for(n=t;n&&!l[--n];l[n]=r);--l[n],l[t]+=a}l[t]-=g[t]}for(;0==l[0];l.splice(0,1),--c);return l[0]?F(e,l,c):(e.s=3==S?-1:1,e.c=[e.e=0],e)},o.modulo=o.mod=function(e,r){var t,i,o=this;return e=new M(e,r),!o.c||!e.s||e.c&&!e.c[0]?new M(NaN):!e.c||o.c&&!o.c[0]?new M(o):(9==x?(i=e.s,e.s=1,t=n(o,e,0,3),e.s=i,t.s*=i):t=n(o,e,0,x),(e=o.minus(t.times(e))).c[0]||1!=x||(e.s=o.s),e)},o.multipliedBy=o.times=function(e,r){var n,t,i,o,u,s,f,c,l,g,p,m,v,N,b,O=this,E=O.c,y=(e=new M(e,r)).c;if(!E||!y||!E[0]||!y[0])return!O.s||!e.s||E&&!E[0]&&!y||y&&!y[0]&&!E?e.c=e.e=e.s=null:(e.s*=O.s,E&&y?(e.c=[0],e.e=0):e.c=e.e=null),e;for(t=d(O.e/h)+d(e.e/h),e.s*=O.s,(f=E.length)<(g=y.length)&&(v=E,E=y,y=v,i=f,f=g,g=i),i=f+g,v=[];i--;v.push(0));for(N=a,b=w,i=g;--i>=0;){for(n=0,p=y[i]%b,m=y[i]/b|0,o=i+(u=f);o>i;)n=((c=p*(c=E[--u]%b)+(s=m*c+(l=E[u]/b|0)*p)%b*b+v[o]+n)/N|0)+(s/b|0)+m*l,v[o--]=c%N;v[o]=n}return n?++t:v.splice(0,1),F(e,v,t)},o.negated=function(){var e=new M(this);return e.s=-e.s||null,e},o.plus=function(e,r){var n,t=this,i=t.s;if(r=(e=new M(e,r)).s,!i||!r)return new M(NaN);if(i!=r)return e.s=-r,t.minus(e);var o=t.e/h,u=e.e/h,s=t.c,f=e.c;if(!o||!u){if(!s||!f)return new M(i/0);if(!s[0]||!f[0])return f[0]?e:new M(s[0]?t:0*i)}if(o=d(o),u=d(u),s=s.slice(),i=o-u){for(i>0?(u=o,n=f):(i=-i,n=s),n.reverse();i--;n.push(0));n.reverse()}for((i=s.length)-(r=f.length)<0&&(n=f,f=s,s=n,r=i),i=0;r;)i=(s[--r]=s[r]+f[r]+i)/a|0,s[r]=a===s[r]?0:s[r]%a;return i&&(s=[i].concat(s),++u),F(e,s,u)},o.precision=o.sd=function(e,r){var n,t,i,o=this;if(null!=e&&e!==!!e)return b(e,1,m),null==r?r=S:b(r,0,8),j(new M(o),e,r);if(!(n=o.c))return null;if(t=(i=n.length-1)*h+1,i=n[i]){for(;i%10==0;i/=10,t--);for(i=n[0];i>=10;i/=10,t++);}return e&&o.e+1>t&&(t=o.e+1),t},o.shiftedBy=function(e){return b(e,-9007199254740991,g),this.times("1e"+e)},o.squareRoot=o.sqrt=function(){var e,r,t,i,o,u=this,s=u.c,f=u.s,c=u.e,l=_+4,a=new M("0.5");if(1!==f||!s||!s[0])return new M(!f||f<0&&(!s||s[0])?NaN:s?u:1/0);if(0==(f=Math.sqrt(+q(u)))||f==1/0?(((r=v(s)).length+c)%2==0&&(r+="0"),f=Math.sqrt(+r),c=d((c+1)/2)-(c<0||c%2),t=new M(r=f==1/0?"5e"+c:(r=f.toExponential()).slice(0,r.indexOf("e")+1)+c)):t=new M(f+""),t.c[0])for((f=(c=t.e)+l)<3&&(f=0);;)if(o=t,t=a.times(o.plus(n(u,o,l,1))),v(o.c).slice(0,f)===(r=v(t.c)).slice(0,f)){if(t.e<c&&--f,"9999"!=(r=r.slice(f-3,f+1))&&(i||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(j(t,t.e+_+2,1),e=!t.times(t).eq(u));break}if(!i&&(j(o,o.e+_+2,0),o.times(o).eq(u))){t=o;break}l+=4,f+=4,i=1}return j(t,t.e+_+1,S,e)},o.toExponential=function(e,r){return null!=e&&(b(e,0,m),e++),k(this,e,r,1)},o.toFixed=function(e,r){return null!=e&&(b(e,0,m),e=e+this.e+1),k(this,e,r)},o.toFormat=function(e,r,n){var t,i=this;if(null==n)null!=e&&r&&"object"==typeof r?(n=r,r=null):e&&"object"==typeof e?(n=e,e=r=null):n=C;else if("object"!=typeof n)throw Error(c+"Argument not an object: "+n);if(t=i.toFixed(e,r),i.c){var o,u=t.split("."),s=+n.groupSize,f=+n.secondaryGroupSize,l=n.groupSeparator||"",a=u[0],h=u[1],g=i.s<0,p=g?a.slice(1):a,w=p.length;if(f&&(o=s,s=f,f=o,w-=o),s>0&&w>0){for(o=w%s||s,a=p.substr(0,o);o<w;o+=s)a+=l+p.substr(o,s);f>0&&(a+=l+p.slice(o)),g&&(a="-"+a)}t=h?a+(n.decimalSeparator||"")+((f=+n.fractionGroupSize)?h.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):h):a}return(n.prefix||"")+t+(n.suffix||"")},o.toFraction=function(e){var r,t,i,o,u,s,f,l,a,g,w,m,d=this,N=d.c;if(null!=e&&(!(f=new M(e)).isInteger()&&(f.c||1!==f.s)||f.lt(A)))throw Error(c+"Argument "+(f.isInteger()?"out of range: ":"not an integer: ")+q(f));if(!N)return new M(d);for(r=new M(A),a=t=new M(A),i=l=new M(A),m=v(N),u=r.e=m.length-d.e-1,r.c[0]=p[(s=u%h)<0?h+s:s],e=!e||f.comparedTo(r)>0?u>0?r:a:f,s=B,B=1/0,f=new M(m),l.c[0]=0;g=n(f,r,0,1),1!=(o=t.plus(g.times(i))).comparedTo(e);)t=i,i=o,a=l.plus(g.times(o=a)),l=o,r=f.minus(g.times(o=r)),f=o;return o=n(e.minus(t),i,0,1),l=l.plus(o.times(a)),t=t.plus(o.times(i)),l.s=a.s=d.s,w=n(a,i,u*=2,S).minus(d).abs().comparedTo(n(l,t,u,S).minus(d).abs())<1?[a,i]:[l,t],B=s,w},o.toNumber=function(){return+q(this)},o.toPrecision=function(e,r){return null!=e&&b(e,1,m),k(this,e,r,2)},o.toString=function(e){var r,n=this,i=n.s,o=n.e;return null===o?i?(r="Infinity",i<0&&(r="-"+r)):r="NaN":(null==e?r=o<=P||o>=R?E(v(n.c),o):y(v(n.c),o,"0"):10===e&&T?r=y(v((n=j(new M(n),_+o+1,S)).c),n.e,"0"):(b(e,2,I.length,"Base"),r=t(y(v(n.c),o,"0"),10,e,i,!0)),i<0&&n.c[0]&&(r="-"+r)),r},o.valueOf=o.toJSON=function(){return q(this)},o._isBigNumber=!0,null!=r&&M.set(r),M}(),o.default=o.BigNumber=o,void 0===(t=function(){return o}.call(r,n,r,e))||(e.exports=t)}()},4942:function(e,r,n){"use strict";function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}n.d(r,{Z:function(){return t}})}}]);