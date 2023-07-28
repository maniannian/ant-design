"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4613],{752893:function(te,K,R){R.d(K,{Z:function(){return W}});var M=R(667294),H=R(242550),S=R(34203),k=R(998924),$=R(366680),Y=R(215671),O=R(143144),b=R(360136),P=R(973568),N=function(F){(0,b.Z)(w,F);var I=(0,P.Z)(w);function w(){return(0,Y.Z)(this,w),I.apply(this,arguments)}return(0,O.Z)(w,[{key:"render",value:function(){return this.props.children}}]),w}(M.Component),G=N,Z={subtree:!0,childList:!0,attributeFilter:["style","class"]},x=function(I){var w=I.children,D=I.options,B=D===void 0?Z:D,T=I.onMutate,X=T===void 0?function(){}:T,V=(0,$.Z)(X),L=(0,M.useRef)(null),z=M.useRef(null),j=M.isValidElement(w)&&(0,H.Yr)(w),c=j?w==null?void 0:w.ref:null,s=M.useMemo(function(){return(0,H.sQ)(c,z)},[c,z]);return(0,M.useEffect)(function(){if((0,k.Z)()){var u,i=(0,S.Z)(c==null?void 0:c.current)||(0,S.Z)(L==null?void 0:L.current);return i&&"MutationObserver"in window&&(u=new MutationObserver(V),u.observe(i,B)),function(){var f,h;(f=u)===null||f===void 0||f.takeRecords(),(h=u)===null||h===void 0||h.disconnect()}}},[B,c]),w?M.createElement(G,{ref:L},j?M.cloneElement(w,{ref:s}):w):null},W=x},484059:function(te,K,R){R.d(K,{Qd:function(){return L},tv:function(){return z}});var M=R(667294),H=Object.defineProperty,S=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,Y=(c,s,u)=>s in c?H(c,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):c[s]=u,O=(c,s)=>{for(var u in s||(s={}))k.call(s,u)&&Y(c,u,s[u]);if(S)for(var u of S(s))$.call(s,u)&&Y(c,u,s[u]);return c},b=(c,s)=>{var u={};for(var i in c)k.call(c,i)&&s.indexOf(i)<0&&(u[i]=c[i]);if(c!=null&&S)for(var i of S(c))s.indexOf(i)<0&&$.call(c,i)&&(u[i]=c[i]);return u};var P;(c=>{const s=class{constructor(e,t,n,r){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<s.MIN_VERSION||e>s.MAX_VERSION)throw new RangeError("Version value out of range");if(r<-1||r>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let o=[];for(let l=0;l<this.size;l++)o.push(!1);for(let l=0;l<this.size;l++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r==-1){let l=1e9;for(let g=0;g<8;g++){this.applyMask(g),this.drawFormatBits(g);const E=this.getPenaltyScore();E<l&&(r=g,l=E),this.applyMask(g)}}h(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}static encodeText(e,t){const n=c.QrSegment.makeSegments(e);return s.encodeSegments(n,t)}static encodeBinary(e,t){const n=c.QrSegment.makeBytes(e);return s.encodeSegments([n],t)}static encodeSegments(e,t,n=1,r=40,o=-1,a=!0){if(!(s.MIN_VERSION<=n&&n<=r&&r<=s.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");let l,g;for(l=n;;l++){const m=s.getNumDataCodewords(l,t)*8,v=C.getTotalBits(e,l);if(v<=m){g=v;break}if(l>=r)throw new RangeError("Data too long")}for(const m of[s.Ecc.MEDIUM,s.Ecc.QUARTILE,s.Ecc.HIGH])a&&g<=s.getNumDataCodewords(l,m)*8&&(t=m);let E=[];for(const m of e){i(m.mode.modeBits,4,E),i(m.numChars,m.mode.numCharCountBits(l),E);for(const v of m.getData())E.push(v)}h(E.length==g);const y=s.getNumDataCodewords(l,t)*8;h(E.length<=y),i(0,Math.min(4,y-E.length),E),i(0,(8-E.length%8)%8,E),h(E.length%8==0);for(let m=236;E.length<y;m^=253)i(m,8,E);let A=[];for(;A.length*8<E.length;)A.push(0);return E.forEach((m,v)=>A[v>>>3]|=m<<7-(v&7)),new s(l,t,A,o)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n==0&&r==0||n==0&&r==t-1||n==t-1&&r==0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let n=t;for(let o=0;o<10;o++)n=n<<1^(n>>>9)*1335;const r=(t<<10|n)^21522;h(r>>>15==0);for(let o=0;o<=5;o++)this.setFunctionModule(8,o,f(r,o));this.setFunctionModule(8,7,f(r,6)),this.setFunctionModule(8,8,f(r,7)),this.setFunctionModule(7,8,f(r,8));for(let o=9;o<15;o++)this.setFunctionModule(14-o,8,f(r,o));for(let o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,f(r,o));for(let o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,f(r,o));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let n=0;n<12;n++)e=e<<1^(e>>>11)*7973;const t=this.version<<12|e;h(t>>>18==0);for(let n=0;n<18;n++){const r=f(t,n),o=this.size-11+n%3,a=Math.floor(n/3);this.setFunctionModule(o,a,r),this.setFunctionModule(a,o,r)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){const o=Math.max(Math.abs(r),Math.abs(n)),a=e+r,l=t+n;0<=a&&a<this.size&&0<=l&&l<this.size&&this.setFunctionModule(a,l,o!=2&&o!=4)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!=1)}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){const t=this.version,n=this.errorCorrectionLevel;if(e.length!=s.getNumDataCodewords(t,n))throw new RangeError("Invalid argument");const r=s.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t],o=s.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t],a=Math.floor(s.getNumRawDataModules(t)/8),l=r-a%r,g=Math.floor(a/r);let E=[];const y=s.reedSolomonComputeDivisor(o);for(let m=0,v=0;m<r;m++){let p=e.slice(v,v+g-o+(m<l?0:1));v+=p.length;const U=s.reedSolomonComputeRemainder(p,y);m<l&&p.push(0),E.push(p.concat(U))}let A=[];for(let m=0;m<E[0].length;m++)E.forEach((v,p)=>{(m!=g-o||p>=l)&&A.push(v[m])});return h(A.length==a),A}drawCodewords(e){if(e.length!=Math.floor(s.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let t=0;for(let n=this.size-1;n>=1;n-=2){n==6&&(n=5);for(let r=0;r<this.size;r++)for(let o=0;o<2;o++){const a=n-o,g=(n+1&2)==0?this.size-1-r:r;!this.isFunction[g][a]&&t<e.length*8&&(this.modules[g][a]=f(e[t>>>3],7-(t&7)),t++)}}h(t==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let o=0;o<this.size;o++){let a=!1,l=0,g=[0,0,0,0,0,0,0];for(let E=0;E<this.size;E++)this.modules[o][E]==a?(l++,l==5?e+=s.PENALTY_N1:l>5&&e++):(this.finderPenaltyAddHistory(l,g),a||(e+=this.finderPenaltyCountPatterns(g)*s.PENALTY_N3),a=this.modules[o][E],l=1);e+=this.finderPenaltyTerminateAndCount(a,l,g)*s.PENALTY_N3}for(let o=0;o<this.size;o++){let a=!1,l=0,g=[0,0,0,0,0,0,0];for(let E=0;E<this.size;E++)this.modules[E][o]==a?(l++,l==5?e+=s.PENALTY_N1:l>5&&e++):(this.finderPenaltyAddHistory(l,g),a||(e+=this.finderPenaltyCountPatterns(g)*s.PENALTY_N3),a=this.modules[E][o],l=1);e+=this.finderPenaltyTerminateAndCount(a,l,g)*s.PENALTY_N3}for(let o=0;o<this.size-1;o++)for(let a=0;a<this.size-1;a++){const l=this.modules[o][a];l==this.modules[o][a+1]&&l==this.modules[o+1][a]&&l==this.modules[o+1][a+1]&&(e+=s.PENALTY_N2)}let t=0;for(const o of this.modules)t=o.reduce((a,l)=>a+(l?1:0),t);const n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return h(0<=r&&r<=9),e+=r*s.PENALTY_N4,h(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}static getNumRawDataModules(e){if(e<s.MIN_VERSION||e>s.MAX_VERSION)throw new RangeError("Version number out of range");let t=(16*e+128)*e+64;if(e>=2){const n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return h(208<=t&&t<=29648),t}static getNumDataCodewords(e,t){return Math.floor(s.getNumRawDataModules(e)/8)-s.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*s.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let t=[];for(let r=0;r<e-1;r++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let o=0;o<t.length;o++)t[o]=s.reedSolomonMultiply(t[o],n),o+1<t.length&&(t[o]^=t[o+1]);n=s.reedSolomonMultiply(n,2)}return t}static reedSolomonComputeRemainder(e,t){let n=t.map(r=>0);for(const r of e){const o=r^n.shift();n.push(0),t.forEach((a,l)=>n[l]^=s.reedSolomonMultiply(a,o))}return n}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return h(n>>>8==0),n}finderPenaltyCountPatterns(e){const t=e[1];h(t<=this.size*3);const n=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};let u=s;u.MIN_VERSION=1,u.MAX_VERSION=40,u.PENALTY_N1=3,u.PENALTY_N2=3,u.PENALTY_N3=40,u.PENALTY_N4=10,u.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],u.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],c.QrCode=u;function i(e,t,n){if(t<0||t>31||e>>>t)throw new RangeError("Value out of range");for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function f(e,t){return(e>>>t&1)!=0}function h(e){if(!e)throw new Error("Assertion error")}const d=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}static makeBytes(e){let t=[];for(const n of e)i(n,8,t);return new d(d.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!d.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let n=0;n<e.length;){const r=Math.min(e.length-n,3);i(parseInt(e.substr(n,r),10),r*3+1,t),n+=r}return new d(d.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!d.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t=[],n;for(n=0;n+2<=e.length;n+=2){let r=d.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n))*45;r+=d.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n+1)),i(r,11,t)}return n<e.length&&i(d.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n)),6,t),new d(d.Mode.ALPHANUMERIC,e.length,t)}static makeSegments(e){return e==""?[]:d.isNumeric(e)?[d.makeNumeric(e)]:d.isAlphanumeric(e)?[d.makeAlphanumeric(e)]:[d.makeBytes(d.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)i(e,8,t);else if(e<16384)i(2,2,t),i(e,14,t);else if(e<1e6)i(6,3,t),i(e,21,t);else throw new RangeError("ECI assignment value out of range");return new d(d.Mode.ECI,0,t)}static isNumeric(e){return d.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return d.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(const r of e){const o=r.mode.numCharCountBits(t);if(r.numChars>=1<<o)return 1/0;n+=4+o+r.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)!="%"?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2);return t}};let C=d;C.NUMERIC_REGEX=/^[0-9]*$/,C.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,C.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",c.QrSegment=C})(P||(P={})),(c=>{let s;(u=>{const i=class{constructor(h,d){this.ordinal=h,this.formatBits=d}};let f=i;f.LOW=new i(0,1),f.MEDIUM=new i(1,0),f.QUARTILE=new i(2,3),f.HIGH=new i(3,2),u.Ecc=f})(s=c.QrCode||(c.QrCode={}))})(P||(P={})),(c=>{let s;(u=>{const i=class{constructor(h,d){this.modeBits=h,this.numBitsCharCount=d}numCharCountBits(h){return this.numBitsCharCount[Math.floor((h+7)/17)]}};let f=i;f.NUMERIC=new i(1,[10,12,14]),f.ALPHANUMERIC=new i(2,[9,11,13]),f.BYTE=new i(4,[8,16,16]),f.KANJI=new i(8,[8,10,12]),f.ECI=new i(7,[0,0,0]),u.Mode=f})(s=c.QrSegment||(c.QrSegment={}))})(P||(P={}));var N=P;var G={L:N.QrCode.Ecc.LOW,M:N.QrCode.Ecc.MEDIUM,Q:N.QrCode.Ecc.QUARTILE,H:N.QrCode.Ecc.HIGH},Z=128,x="L",W="#FFFFFF",F="#000000",I=!1,w=4,D=.1;function B(c,s=0){const u=[];return c.forEach(function(i,f){let h=null;i.forEach(function(d,C){if(!d&&h!==null){u.push(`M${h+s} ${f+s}h${C-h}v1H${h+s}z`),h=null;return}if(C===i.length-1){if(!d)return;h===null?u.push(`M${C+s},${f+s} h1v1H${C+s}z`):u.push(`M${h+s},${f+s} h${C+1-h}v1H${h+s}z`);return}d&&h===null&&(h=C)})}),u.join("")}function T(c,s){return c.slice().map((u,i)=>i<s.y||i>=s.y+s.h?u:u.map((f,h)=>h<s.x||h>=s.x+s.w?f:!1))}function X(c,s,u,i){if(i==null)return null;const f=u?w:0,h=c.length+f*2,d=Math.floor(s*D),C=h/s,e=(i.width||d)*C,t=(i.height||d)*C,n=i.x==null?c.length/2-e/2:i.x*C,r=i.y==null?c.length/2-t/2:i.y*C;let o=null;if(i.excavate){let a=Math.floor(n),l=Math.floor(r),g=Math.ceil(e+n-a),E=Math.ceil(t+r-l);o={x:a,y:l,w:g,h:E}}return{x:n,y:r,h:t,w:e,excavation:o}}var V=function(){try{new Path2D().addPath(new Path2D)}catch(c){return!1}return!0}();function L(c){const s=c,{value:u,size:i=Z,level:f=x,bgColor:h=W,fgColor:d=F,includeMargin:C=I,style:e,imageSettings:t}=s,n=b(s,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),r=t==null?void 0:t.src,o=(0,M.useRef)(null),a=(0,M.useRef)(null),[l,g]=(0,M.useState)(!1);(0,M.useEffect)(()=>{if(o.current!=null){const A=o.current,m=A.getContext("2d");if(!m)return;let v=N.QrCode.encodeText(u,G[f]).getModules();const p=C?w:0,U=v.length+p*2,_=X(v,i,C,t),Q=a.current,J=_!=null&&Q!==null&&Q.complete&&Q.naturalHeight!==0&&Q.naturalWidth!==0;J&&_.excavation!=null&&(v=T(v,_.excavation));const q=window.devicePixelRatio||1;A.height=A.width=i*q;const ee=i/U*q;m.scale(ee,ee),m.fillStyle=h,m.fillRect(0,0,U,U),m.fillStyle=d,V?m.fill(new Path2D(B(v,p))):v.forEach(function(ne,re){ne.forEach(function(oe,se){oe&&m.fillRect(se+p,re+p,1,1)})}),J&&m.drawImage(Q,_.x+p,_.y+p,_.w,_.h)}}),(0,M.useEffect)(()=>{g(!1)},[r]);const E=O({height:i,width:i},e);let y=null;return r!=null&&(y=M.createElement("img",{src:r,key:r,style:{display:"none"},onLoad:()=>{g(!0)},ref:a})),M.createElement(M.Fragment,null,M.createElement("canvas",O({style:E,height:i,width:i,ref:o},n)),y)}function z(c){const s=c,{value:u,size:i=Z,level:f=x,bgColor:h=W,fgColor:d=F,includeMargin:C=I,imageSettings:e}=s,t=b(s,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let n=N.QrCode.encodeText(u,G[f]).getModules();const r=C?w:0,o=n.length+r*2,a=X(n,i,C,e);let l=null;e!=null&&a!=null&&(a.excavation!=null&&(n=T(n,a.excavation)),l=M.createElement("image",{xlinkHref:e.src,height:a.h,width:a.w,x:a.x+r,y:a.y+r,preserveAspectRatio:"none"}));const g=B(n,r);return M.createElement("svg",O({height:i,width:i,viewBox:`0 0 ${o} ${o}`},t),M.createElement("path",{fill:h,d:`M0,0 h${o}v${o}H0z`,shapeRendering:"crispEdges"}),M.createElement("path",{fill:d,d:g,shapeRendering:"crispEdges"}),l)}var j=c=>{const s=c,{renderAs:u}=s,i=b(s,["renderAs"]);return u==="svg"?React.createElement(z,O({},i)):React.createElement(L,O({},i))}}}]);
