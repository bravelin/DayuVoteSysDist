(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19bb0347"],{"15c2":function(t,e,a){"use strict";var i=a("db4b"),r=a("5fe5"),o=a("b146");t.exports=function(t){var e=i(this),a=o(e.length),n=arguments.length,s=r(n>1?arguments[1]:void 0,a),l=n>2?arguments[2]:void 0,c=void 0===l?a:r(l,a);while(c>s)e[s++]=t;return e}},"1c74":function(t,e,a){var i=a("b2f5");i(i.P,"Array",{fill:a("15c2")}),a("644a")("fill")},"1f57":function(t,e,a){var i;(function(e,a){t.exports=a()})(0,function(){function t(t){this.mode=a.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,i=this.data.length;e<i;e++){var r=[],o=this.data.charCodeAt(e);o>65536?(r[0]=240|(1835008&o)>>>18,r[1]=128|(258048&o)>>>12,r[2]=128|(4032&o)>>>6,r[3]=128|63&o):o>2048?(r[0]=224|(61440&o)>>>12,r[1]=128|(4032&o)>>>6,r[2]=128|63&o):o>128?(r[0]=192|(1984&o)>>>6,r[1]=128|63&o):r[0]=o,this.parsedData.push(r)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,a=this.parsedData.length;e<a;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var a=new t(e);this.dataList.push(a),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,a){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++){this.modules[i]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[i][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,a),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,a)},setupPositionProbePattern:function(t,e){for(var a=-1;a<=7;a++)if(!(t+a<=-1||this.moduleCount<=t+a))for(var i=-1;i<=7;i++)e+i<=-1||this.moduleCount<=e+i||(this.modules[t+a][e+i]=0<=a&&a<=6&&(0==i||6==i)||0<=i&&i<=6&&(0==a||6==a)||2<=a&&a<=4&&2<=i&&i<=4)},getBestMaskPattern:function(){for(var t=0,e=0,a=0;a<8;a++){this.makeImpl(!0,a);var i=n.getLostPoint(this);(0==a||t>i)&&(t=i,e=a)}return e},createMovieClip:function(t,e,a){var i=t.createEmptyMovieClip(e,a),r=1;this.make();for(var o=0;o<this.modules.length;o++)for(var n=o*r,s=0;s<this.modules[o].length;s++){var l=s*r,c=this.modules[o][s];c&&(i.beginFill(0,100),i.moveTo(l,n),i.lineTo(l+r,n),i.lineTo(l+r,n+r),i.lineTo(l,n+r),i.endFill())}return i},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=n.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var a=0;a<t.length;a++){var i=t[e],r=t[a];if(null==this.modules[i][r])for(var o=-2;o<=2;o++)for(var s=-2;s<=2;s++)this.modules[i+o][r+s]=-2==o||2==o||-2==s||2==s||0==o&&0==s}},setupTypeNumber:function(t){for(var e=n.getBCHTypeNumber(this.typeNumber),a=0;a<18;a++){var i=!t&&1==(e>>a&1);this.modules[Math.floor(a/3)][a%3+this.moduleCount-8-3]=i}for(a=0;a<18;a++){i=!t&&1==(e>>a&1);this.modules[a%3+this.moduleCount-8-3][Math.floor(a/3)]=i}},setupTypeInfo:function(t,e){for(var a=this.errorCorrectLevel<<3|e,i=n.getBCHTypeInfo(a),r=0;r<15;r++){var o=!t&&1==(i>>r&1);r<6?this.modules[r][8]=o:r<8?this.modules[r+1][8]=o:this.modules[this.moduleCount-15+r][8]=o}for(r=0;r<15;r++){o=!t&&1==(i>>r&1);r<8?this.modules[8][this.moduleCount-r-1]=o:r<9?this.modules[8][15-r-1+1]=o:this.modules[8][15-r-1]=o}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var a=-1,i=this.moduleCount-1,r=7,o=0,s=this.moduleCount-1;s>0;s-=2){6==s&&s--;while(1){for(var l=0;l<2;l++)if(null==this.modules[i][s-l]){var c=!1;o<t.length&&(c=1==(t[o]>>>r&1));var u=n.getMask(e,i,s-l);u&&(c=!c),this.modules[i][s-l]=c,r--,-1==r&&(o++,r=7)}if(i+=a,i<0||this.moduleCount<=i){i-=a,a=-a;break}}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,a,i){for(var r=u.getRSBlocks(t,a),o=new d,s=0;s<i.length;s++){var l=i[s];o.put(l.mode,4),o.put(l.getLength(),n.getLengthInBits(l.mode,t)),l.write(o)}var c=0;for(s=0;s<r.length;s++)c+=r[s].dataCount;if(o.getLengthInBits()>8*c)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*c+")");o.getLengthInBits()+4<=8*c&&o.put(0,4);while(o.getLengthInBits()%8!=0)o.putBit(!1);while(1){if(o.getLengthInBits()>=8*c)break;if(o.put(e.PAD0,8),o.getLengthInBits()>=8*c)break;o.put(e.PAD1,8)}return e.createBytes(o,r)},e.createBytes=function(t,e){for(var a=0,i=0,r=0,o=new Array(e.length),s=new Array(e.length),l=0;l<e.length;l++){var u=e[l].dataCount,d=e[l].totalCount-u;i=Math.max(i,u),r=Math.max(r,d),o[l]=new Array(u);for(var h=0;h<o[l].length;h++)o[l][h]=255&t.buffer[h+a];a+=u;var f=n.getErrorCorrectPolynomial(d),g=new c(o[l],f.getLength()-1),p=g.mod(f);s[l]=new Array(f.getLength()-1);for(h=0;h<s[l].length;h++){var v=h+p.getLength()-s[l].length;s[l][h]=v>=0?p.get(v):0}}var m=0;for(h=0;h<e.length;h++)m+=e[h].totalCount;var w=new Array(m),_=0;for(h=0;h<i;h++)for(l=0;l<e.length;l++)h<o[l].length&&(w[_++]=o[l][h]);for(h=0;h<r;h++)for(l=0;l<e.length;l++)h<s[l].length&&(w[_++]=s[l][h]);return w};for(var a={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},r={L:1,M:0,Q:3,H:2},o={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},n={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(n.getBCHDigit(e)-n.getBCHDigit(n.G15)>=0)e^=n.G15<<n.getBCHDigit(e)-n.getBCHDigit(n.G15);return(t<<10|e)^n.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(n.getBCHDigit(e)-n.getBCHDigit(n.G18)>=0)e^=n.G18<<n.getBCHDigit(e)-n.getBCHDigit(n.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return n.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,a){switch(t){case o.PATTERN000:return(e+a)%2==0;case o.PATTERN001:return e%2==0;case o.PATTERN010:return a%3==0;case o.PATTERN011:return(e+a)%3==0;case o.PATTERN100:return(Math.floor(e/2)+Math.floor(a/3))%2==0;case o.PATTERN101:return e*a%2+e*a%3==0;case o.PATTERN110:return(e*a%2+e*a%3)%2==0;case o.PATTERN111:return(e*a%3+(e+a)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new c([1],0),a=0;a<t;a++)e=e.multiply(new c([1,s.gexp(a)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case a.MODE_NUMBER:return 10;case a.MODE_ALPHA_NUM:return 9;case a.MODE_8BIT_BYTE:return 8;case a.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case a.MODE_NUMBER:return 12;case a.MODE_ALPHA_NUM:return 11;case a.MODE_8BIT_BYTE:return 16;case a.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case a.MODE_NUMBER:return 14;case a.MODE_ALPHA_NUM:return 13;case a.MODE_8BIT_BYTE:return 16;case a.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),a=0,i=0;i<e;i++)for(var r=0;r<e;r++){for(var o=0,n=t.isDark(i,r),s=-1;s<=1;s++)if(!(i+s<0||e<=i+s))for(var l=-1;l<=1;l++)r+l<0||e<=r+l||0==s&&0==l||n==t.isDark(i+s,r+l)&&o++;o>5&&(a+=3+o-5)}for(i=0;i<e-1;i++)for(r=0;r<e-1;r++){var c=0;t.isDark(i,r)&&c++,t.isDark(i+1,r)&&c++,t.isDark(i,r+1)&&c++,t.isDark(i+1,r+1)&&c++,0!=c&&4!=c||(a+=3)}for(i=0;i<e;i++)for(r=0;r<e-6;r++)t.isDark(i,r)&&!t.isDark(i,r+1)&&t.isDark(i,r+2)&&t.isDark(i,r+3)&&t.isDark(i,r+4)&&!t.isDark(i,r+5)&&t.isDark(i,r+6)&&(a+=40);for(r=0;r<e;r++)for(i=0;i<e-6;i++)t.isDark(i,r)&&!t.isDark(i+1,r)&&t.isDark(i+2,r)&&t.isDark(i+3,r)&&t.isDark(i+4,r)&&!t.isDark(i+5,r)&&t.isDark(i+6,r)&&(a+=40);var u=0;for(r=0;r<e;r++)for(i=0;i<e;i++)t.isDark(i,r)&&u++;var d=Math.abs(100*u/e/e-50)/5;return a+=10*d,a}},s={glog:function(t){if(t<1)throw new Error("glog("+t+")");return s.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return s.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},l=0;l<8;l++)s.EXP_TABLE[l]=1<<l;for(l=8;l<256;l++)s.EXP_TABLE[l]=s.EXP_TABLE[l-4]^s.EXP_TABLE[l-5]^s.EXP_TABLE[l-6]^s.EXP_TABLE[l-8];for(l=0;l<255;l++)s.LOG_TABLE[s.EXP_TABLE[l]]=l;function c(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var a=0;while(a<t.length&&0==t[a])a++;this.num=new Array(t.length-a+e);for(var i=0;i<t.length-a;i++)this.num[i]=t[i+a]}function u(t,e){this.totalCount=t,this.dataCount=e}function d(){this.buffer=[],this.length=0}c.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),a=0;a<this.getLength();a++)for(var i=0;i<t.getLength();i++)e[a+i]^=s.gexp(s.glog(this.get(a))+s.glog(t.get(i)));return new c(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=s.glog(this.get(0))-s.glog(t.get(0)),a=new Array(this.getLength()),i=0;i<this.getLength();i++)a[i]=this.get(i);for(i=0;i<t.getLength();i++)a[i]^=s.gexp(s.glog(t.get(i))+e);return new c(a,0).mod(t)}},u.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],u.getRSBlocks=function(t,e){var a=u.getRsBlockTable(t,e);if(void 0==a)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var i=a.length/3,r=[],o=0;o<i;o++)for(var n=a[3*o+0],s=a[3*o+1],l=a[3*o+2],c=0;c<n;c++)r.push(new u(s,l));return r},u.getRsBlockTable=function(t,e){switch(e){case r.L:return u.RS_BLOCK_TABLE[4*(t-1)+0];case r.M:return u.RS_BLOCK_TABLE[4*(t-1)+1];case r.Q:return u.RS_BLOCK_TABLE[4*(t-1)+2];case r.H:return u.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},d.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var a=0;a<e;a++)this.putBit(1==(t>>>e-a-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var h=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function f(){return"undefined"!=typeof CanvasRenderingContext2D}function g(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var a=e.toString().match(/android ([0-9]\.[0-9])/i);a&&a[1]&&(t=parseFloat(a[1]))}return t}var p=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){var e=this._htOption,a=this._el,i=t.getModuleCount();Math.floor(e.width/i),Math.floor(e.height/i);function r(t,e){var a=document.createElementNS("http://www.w3.org/2000/svg",t);for(var i in e)e.hasOwnProperty(i)&&a.setAttribute(i,e[i]);return a}this.clear();var o=r("svg",{viewBox:"0 0 "+String(i)+" "+String(i),width:"100%",height:"100%",fill:e.colorLight});o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),a.appendChild(o),o.appendChild(r("rect",{fill:e.colorLight,width:"100%",height:"100%"})),o.appendChild(r("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var n=0;n<i;n++)for(var s=0;s<i;s++)if(t.isDark(n,s)){var l=r("use",{x:String(s),y:String(n)});l.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),o.appendChild(l)}},t.prototype.clear=function(){while(this._el.hasChildNodes())this._el.removeChild(this._el.lastChild)},t}(),v="svg"===document.documentElement.tagName.toLowerCase(),m=v?p:f()?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){var e=1/window.devicePixelRatio,a=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,i,r,o,n,s,l,c,u){if("nodeName"in t&&/img/i.test(t.nodeName))for(var d=arguments.length-1;d>=1;d--)arguments[d]=arguments[d]*e;else"undefined"==typeof c&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);a.apply(this,arguments)}}function i(t,e){var a=this;if(a._fFail=e,a._fSuccess=t,null===a._bSupportDataURI){var i=document.createElement("img"),r=function(){a._bSupportDataURI=!1,a._fFail&&a._fFail.call(a)},o=function(){a._bSupportDataURI=!0,a._fSuccess&&a._fSuccess.call(a)};return i.onabort=r,i.onerror=r,i.onload=o,void(i.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===a._bSupportDataURI&&a._fSuccess?a._fSuccess.call(a):!1===a._bSupportDataURI&&a._fFail&&a._fFail.call(a)}var r=function(t,e){this._bIsPainted=!1,this._android=g(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return r.prototype.draw=function(t){var e=this._elImage,a=this._oContext,i=this._htOption,r=t.getModuleCount(),o=i.width/r,n=i.height/r,s=Math.round(o),l=Math.round(n);e.style.display="none",this.clear();for(var c=0;c<r;c++)for(var u=0;u<r;u++){var d=t.isDark(c,u),h=u*o,f=c*n;a.strokeStyle=d?i.colorDark:i.colorLight,a.lineWidth=1,a.fillStyle=d?i.colorDark:i.colorLight,a.fillRect(h,f,o,n),a.strokeRect(Math.floor(h)+.5,Math.floor(f)+.5,s,l),a.strokeRect(Math.ceil(h)-.5,Math.ceil(f)-.5,s,l)}this._bIsPainted=!0},r.prototype.makeImage=function(){this._bIsPainted&&i.call(this,t)},r.prototype.isPainted=function(){return this._bIsPainted},r.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},r.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},r}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,a=this._el,i=t.getModuleCount(),r=Math.floor(e.width/i),o=Math.floor(e.height/i),n=['<table style="border:0;border-collapse:collapse;">'],s=0;s<i;s++){n.push("<tr>");for(var l=0;l<i;l++)n.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+r+"px;height:"+o+"px;background-color:"+(t.isDark(s,l)?e.colorDark:e.colorLight)+';"></td>');n.push("</tr>")}n.push("</table>"),a.innerHTML=n.join("");var c=a.childNodes[0],u=(e.width-c.offsetWidth)/2,d=(e.height-c.offsetHeight)/2;u>0&&d>0&&(c.style.margin=d+"px "+u+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();function w(t,e){for(var a=1,i=_(t),o=0,n=h.length;o<=n;o++){var s=0;switch(e){case r.L:s=h[o][0];break;case r.M:s=h[o][1];break;case r.Q:s=h[o][2];break;case r.H:s=h[o][3];break}if(i<=s)break;a++}if(a>h.length)throw new Error("Too long data");return a}function _(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}return i=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:r.H},"string"===typeof e&&(e={text:e}),e)for(var a in e)this._htOption[a]=e[a];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(m=p),this._android=g(),this._el=t,this._oQRCode=null,this._oDrawing=new m(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},i.prototype.makeCode=function(t){this._oQRCode=new e(w(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},i.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},i.prototype.clear=function(){this._oDrawing.clear()},i.CorrectLevel=r,i})},a42d:function(t,e,a){},c84b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page detail-page"},[a("div",{staticClass:"wrap",staticStyle:{display:"none"}},[0==t.actTime.type?a("div",{staticClass:"act-time"},[t._v("活动时间: "+t._s(t.actTime.time))]):t._e(),1==t.actTime.type?a("div",{staticClass:"act-time"},[t._v("投票时间: "+t._s(t.actTime.time2))]):t._e()]),a("div",{staticClass:"top-players-title"},[t._v("<< 网络人气榜 >>")]),a("ul",{staticClass:"top-players"},t._l(t.topRankList,function(e){return a("li",{key:e.id},[a("div",{style:{"background-image":"url("+e.logo+")"}}),a("div",[t._v(t._s(e.name))]),a("div",[t._v(t._s(e.totalVotes)+"票")])])}),0),a("div",{staticClass:"player-info-content"},[a("div",[a("div",[t._v("名称："+t._s(t.playerName))]),a("div",[t._v("编号："+t._s(t.playerNo))])]),a("div",[t._v("参赛宣言："+t._s(t.address))]),a("label",[t._v("选手介绍")])]),a("div",{staticClass:"wrap"},[a("wv-grid",[a("wv-grid-item",{staticClass:"g1"},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("当前票数")]),a("span",{attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.totalVotes))])]),a("wv-grid-item",{staticClass:"g2"},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("与上一名差票")]),a("span",{attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.rankGap)+"票")])]),a("wv-grid-item",{staticClass:"g3"},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("当前排名")]),a("span",{attrs:{slot:"label"},slot:"label"},[t._v("第"+t._s(t.rank)+"名")])])],1)],1),a("div",{staticClass:"wrap images-wrap"},t._l(t.playerPics,function(t,e){return a("img",{key:e,attrs:{src:t}})}),0),t.introduce?a("div",{staticClass:"info-content",domProps:{innerHTML:t._s(t.introduce)}}):t._e(),a("div",{staticClass:"join-btn",class:{disabled:!t.actTime.canSign},on:{click:function(e){return t.toSign()}}},[t._v("我也要参加")]),a("div",{staticClass:"btns"},[a("div",{staticClass:"vote-btn",class:{disabled:!t.canVote},on:{click:function(e){return t.doVote()}}},[a("i",{staticClass:"ali-icon-dianzan"}),t._v(t._s(t.voteText))]),a("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true || canReward"}],staticClass:"reawrd-btn",on:{click:function(e){return t.doClickRewardBtn()}}},[a("i",{staticClass:"zuanshi"}),t._v("送钻石")]),a("div",{staticClass:"poster-btn",on:{click:function(e){return t.doShowPoster()}}},[a("i",{staticClass:"ali-icon-tupian"}),t._v("生成海报")])]),a("Preview",{attrs:{"is-show":t.showPreview,list:t.previewList,index:t.previewIndex},on:{"update:isShow":function(e){t.showPreview=e},"update:is-show":function(e){t.showPreview=e}}}),a("div",{ref:"reawrdPop",staticClass:"reward-pop-wrap",on:{click:function(e){return t.doHideRewardPop()}}},[a("div",{on:{click:function(e){return t.doReward(e)}}},[t._v("送钻可加票"),a("br"),t._v("请助我一臂之力~")])]),a("div",{ref:"posterPOp",staticClass:"poster-pop-wrap",on:{click:function(e){return t.doHidePosterPop()}}},[a("div",{on:{click:function(e){return t.doClickPopContent(e)}}},[a("canvas",{ref:"cvs"}),a("i",{on:{click:function(e){return t.doHidePosterPop()}}},[t._v("×")]),a("img",{ref:"poster"})])]),a("div",{attrs:{id:"link-qrcode"}})],1)},r=[],o=(a("11ac"),a("7364"),a("1c74"),a("cb63")),n=a("f1ed"),s=a("46f1"),l=a("e6c4"),c=a("9dfe"),u=a("1f57"),d=a.n(u),h={1:"投TA一票",2:"已投票",3:"再投一票",4:"正在投票"},f={name:"Detail",components:{Preview:l["a"]},computed:{actClosed:function(){return"5"==this.$store.state.act.status},actTime:function(){var t=this.$store.state.act,e="yyyy-MM-dd hh:mm",a=Object(n["c"])(t.signUpStartTime,e),i=Object(n["c"])(t.signUpEndTime,e),r=Object(n["c"])(t.voteStartTime,e),o=Object(n["c"])(t.voteEndTime,e),s=new Date,l=s.getTime()>t.signUpStartTime.getTime()&&s.getTime()<t.signUpEndTime.getTime();return r==a&&o==i?{type:0,time:r+" ~ "+o,canSign:l}:{type:1,time1:a+" ~ "+i,time2:r+" ~ "+o,canSign:l}},deltX:function(){var t=this.$store.state.winWidth;return t=t>680?680:t,t/2-75},actStatus:function(){return this.$store.state.act.status}},data:function(){return{topRankList:[],showPreview:!1,previewList:[],previewIndex:0,images:null,playerId:"",playerName:"",playerNo:"",introduce:"",totalVotes:0,address:"",rank:0,rankGap:0,playerStatusText:"",playerPics:[],canVote:!1,disabledVoteText:"",voteText:h["1"],inVote:!1,canReward:!1,disabledRewardText:""}},created:function(){var t=this,e=t.$route.query;t.playerId=e.pId,t.playerId?(t.getPlayerDetail(),t.getRank(),t.getCanReawrd()):(Object(c["Toast"])({message:"链接缺少参数!",type:"text",duration:1e3}),setTimeout(function(){t.$router.back()},1e3))},mounted:function(){var t=this;t.$nextTick(function(){t.$store.commit("switchLoading",!1),document.body.addEventListener("click",t.doHandleClickImage),setTimeout(function(){t.initPreview()},1500),t.playerName&&t.doDrawPoster(),setTimeout(function(){t.$emit("checkstatus")},2e3)})},methods:{doClickPopContent:function(t){t&&t.stopPropagation()},toSign:function(){var t=this;t.actTime.canSign&&0!=t.actStatus&&5!=t.actStatus&&t.$router.push({name:"sign",query:{actId:t.$store.state.act.id}})},doShowPoster:function(){var t=this,e=t.$refs.posterPOp;e.classList.add("show"),setTimeout(function(){e.classList.add("active")},300)},doHidePosterPop:function(){var t=this,e=t.$refs.posterPOp;e.classList.remove("active"),setTimeout(function(){e.classList.remove("show")},300)},doDrawPoster:function(){var t=this,e=t.$store.state,a=t.$refs.cvs,i=a.getContext("2d");a.width=.98*e.winWidth,a.height=.9*e.winHeight;var r=50,o=a.width/2,n=e.act.title;if(i.fillStyle="#3399cc",i.rect(0,0,a.width,a.height),i.fill(),i.font="bold 18px Arial",i.textAlign="center",i.textBaseline="bottom",i.fillStyle="#3d3d3d",n.length>21){var s=n.substr(0,21),l=n.substr(21);i.fillText(s,o,r),r+=30,i.fillText(l,o,r)}else i.fillText(n,o,r);if(t.playerPics.length){r+=20;var c=new Image;c.setAttribute("crossOrigin","Anonymous"),c.onload=function(){i.drawImage(c,o-80,r,160,160),r+=188,t.drawNextPoster(e,a,i,o,r)},c.src=t.playerPics[0]}else r+=30,t.drawNextPoster(e,a,i,o,r)},drawNextPoster:function(t,e,a,i,r){var o=this,n=o.$store.state.act;a.fillStyle="#222",a.font="normal 16px Arial",a.fillText("编号：".concat(o.playerNo),i,r);var s=location.origin+"/client/detail?pId="+o.playerId+"&actId="+n.id;o.qrCode=new d.a("link-qrcode",{width:150,height:150,text:s,render:"canvas"},500),r+=30,a.beginPath(),a.fillStyle="#fff",a.rect(i-60-5,r-5,130,130),a.fill(),setTimeout(function(){var t=document.querySelector("#link-qrcode>img");a.drawImage(t,i-60,r,120,120),r+=168,a.fillStyle="#2d2d2d",a.font="normal 18px Arial",a.fillText("长按二维码给我投票吧！",i,r),o.$refs.poster.src=e.toDataURL("image/png")},300)},doClickRewardBtn:function(){var t=this;t.canReward?t.doReward():Object(c["Toast"])({message:t.disabledRewardText,type:"text",duration:1e3})},doReward:function(t){var e=this;t&&t.stopPropagation(),e.$router.push({name:"reward",query:{actId:e.$store.state.act.id,pId:e.playerId}})},doHideRewardPop:function(){var t=this,e=t.$refs.reawrdPop;e.classList.remove("active"),setTimeout(function(){e.classList.remove("show")},300)},doShowRewardPop:function(){var t=this,e=t.$refs.reawrdPop;e.classList.add("show"),setTimeout(function(){e.classList.add("active")},300)},getCanReawrd:function(){var t=this;Object(n["f"])()?t.$ajax({url:s["a"].canReward+"".concat(t.$store.state.act.id,"/").concat(t.playerId)}).then(function(e){200==e.code&&(t.canReward=e.data,t.disabledRewardText=e.message)}):(t.canReward=!1,t.disabledRewardText="请在微信中打开链接进行打赏!")},getPlayerDetail:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this;e.$ajax({url:s["a"].getActPlayer+e.playerId}).then(function(a){if(200==a.code){var i=a.data;if(e.playerName=i.name,e.playerNo=i.no,e.introduce=i.introduce,e.totalVotes=i.totalVotes,e.address=i.address||"",i.pictures){var r=JSON.parse(i.pictures);e.playerPics=r.map(function(t){return Object(o["b"])(t)})}"0"==i.status?e.playerStatusText="该选手已删除!":"1"==i.status?e.playerStatusText="还需等待管理员的审核!":"3"==i.status?e.playerStatusText="该选手已被管理员禁止投票!":"4"==i.status&&(e.playerStatusText="该选手未通过管理员的审核!");var n=e.$store.state.userId;n?t||e.getCanVote():(e.canVote=!1,e.disabledVoteText="未能识别当前用户!");var l=location,c=e.$store.state.act;e.$emit("share",{name:"detail"+e.playerId,shareConfig:{title:c.title,desc:"我是".concat(e.playerName,"，编号：").concat(e.playerNo,"，正在参加").concat(c.title,",请为我加油！"),link:l.origin+"/client/detail?pId="+e.playerId+"&actId="+c.id,imgUrl:e.playerPics[0],success:function(){e.$ajax({url:s["a"].addShareCount,method:"post",data:{id:e.playerId},params:{verifyType:"client"}})}}}),e.$refs.cvs&&e.doDrawPoster()}})},getCanVote:function(){var t=this,e=t.$store.state;t.$ajax({url:s["a"].canVote,method:"post",params:{verifyType:"client"},data:{actId:e.act.id,playerId:t.playerId,userId:e.userId}}).then(function(e){if(200==e.code){var a=e.data;a.result?(t.canVote=!0,t.disabledVoteText=""):(t.canVote=!1,t.disabledVoteText=a.message,Object(c["Toast"])({message:a.message,type:"text",duration:1e3}))}})},doVote:function(){var t=this,e=t.$store.state;if(t.inVote)Object(c["Toast"])({message:"正在投票...",type:"text",duration:1e3});else{if(!t.canVote)return e.userId?Object(c["Toast"])({message:t.disabledVoteText,type:"text",duration:1e3}):void(Object(n["f"])()?Object(c["Toast"])({message:"投票系统未能识别您是谁!Sorry!",type:"text",duration:1e3}):Object(c["Toast"])({message:"请在微信中打开链接进行投票!",type:"text",duration:1e3}));t.inVote=!0,t.voteText=h["4"],t.$store.commit("switchLoading",!0),t.$ajax({url:s["a"].vote,method:"post",params:{verifyType:"client"},data:{actId:e.act.id,playerId:t.playerId,userId:e.userId}}).then(function(e){if(200==e.code){t.inVote=!1,t.$store.commit("switchLoading",!1),Object(c["Toast"])({message:e.message,type:"text",duration:1e3});var a=e.data;a.result&&(t.getPlayerDetail(!0),t.getRank(),t.$emit("update")),a.again?(t.voteText=h["3"],t.disabledVoteText=""):(t.voteText=h["2"],t.canVote=!1,t.disabledVoteText=a.againMessage)}})}},getRank:function(){var t=this,e=t.$store;t.$ajax({url:s["a"].getActPlayers+e.state.act.id,params:{pageSize:5e3,page:1,order:"totalVotes",orderDir:"DESC"}}).then(function(e){if(200==e.code){for(var a=e.data,i=0,r=a.dataList,o=[],n=null,s=0;s<r.length&&s<5;s++)n=r[s],o.push({name:n.name,totalVotes:n.totalVotes,id:n.id,actId:n.actId,logo:n.pictures?JSON.parse(n.pictures)[0]:""});for(t.topRankList=o;i<r.length;i++)if(r[i].id==t.playerId)break;if(i<r.length)if(t.rank=i+1,0==i)t.rankGap=0;else{var l=r[i-1],c=r[i];t.rankGap=l.totalVotes-c.totalVotes}}})},initPreview:function(){for(var t,e=this,a=document.querySelectorAll("img"),i=[],r=null,o=0;o<a.length;o++){for(r=a[o],t=0;t<i.length;t++)if(i[t]==r.src)break;t==i.length&&i.push(r.src)}0!=i.length&&(e.images=i,e.getImageSize(0))},getImageSize:function(t){var e=this,a=e.images[t],i=new Image;i.onload=function(){e.previewList.push({src:a,w:this.width,h:this.height}),t<e.images.length-1&&e.getImageSize(t+1)},i.src=a},doHandleClickImage:function(t){var e=this,a=t.target;if(!e.showPreview&&/img/i.test(a.tagName)&&"pswp__img"!=a.className){e.previewIndex=0;for(var i=0;i<e.previewList.length;i++)if(e.previewList[i].src==a.src){e.previewIndex=i;break}e.showPreview=!0}}},beforeDestroy:function(){var t=this;document.body.removeEventListener("click",t.doHandleClickImage)}},g=f,p=(a("ed23"),a("6691")),v=Object(p["a"])(g,i,r,!1,null,null,null);e["default"]=v.exports},ed23:function(t,e,a){"use strict";var i=a("a42d"),r=a.n(i);r.a}}]);