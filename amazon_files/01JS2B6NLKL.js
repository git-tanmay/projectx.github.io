(function(b){var e=window.AmazonUIPageJS||window.P,f=e._namespace||e.attributeErrors,c=f?f("RetailSearchClientSideLoggingAuiAssets"):e;c.guardFatal?c.guardFatal(b)(c,window):c.execute(function(){b(c,window)})})(function(b,e,f){function c(h){h.searchCSL=new function(){var d=this,c=[],b=[],l,m,n,g,k=20,p;d.init=function(a,c,b){a&&c&&!l&&(l=a,d.updateRid(c),b&&(k=b))};d.updateRid=function(a){a&&m!=a&&(d.tx(),m=a,n={})};d.addWlt=function(a){if(a){if(a.call&&(a=a(),!a))return;n[a]||(c.push(a),n[a]=1,d.scheduleTx())}};
d.addAmabotPrerendered=function(a){a&&a.rid&&a.selections&&a.selections.length&&(b.push(a),d.scheduleTx())};d.scheduleTx=function(){if(0==k)d.tx();else{if(!p){var a=e.onbeforeunload;e.onbeforeunload=function(c){g&&(e.clearInterval(g),g=f);d.tx();p=!1;return a&&a.call?a(c):f};p=!0}!g&&0<k&&(g=e.setTimeout(function(){g=f;d.tx()},k))}};d.tx=function(){if(c.length||b.length){var a="/mn/search/csl?";c.length&&(a+="rrid="+m+"&cpt="+l+"&ctw="+c.join("|"),c=[]);if(b.length){var d="";h.each(b,function(a,c){d+=
c.rid+":";h.each(c.selections,function(a,b){b&&(d+=b+(a!=c.selections.length-1?",":""))});d+=a!=b.length-1?".":""});b=[];d&&(a+="?"==a.charAt(a.length-1)?"":"&",a+="amabotSelections="+d)}(new Image).src=a}}};return h.searchCSL}e.$Nav?(e.$SearchJS||(e.$SearchJS=$Nav.make("sx")),$SearchJS.importEvent("jQuery",{as:"$",global:"jQuery"}),$SearchJS.importEvent("jQuery",{global:"jQuery"}),$SearchJS.when("jQuery").run("searchCSL-lib",function(b){b.searchCSL=b.searchCSL||c(b);$SearchJS.publish("search-csl",
b.searchCSL)})):b&&b.when("jQuery").execute(function(e){try{b.register("search-csl",function(){return c(e)})}catch(d){}})});