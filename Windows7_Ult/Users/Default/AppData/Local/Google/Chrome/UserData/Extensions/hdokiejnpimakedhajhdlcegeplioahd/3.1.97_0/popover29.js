var g_advarray={advident:{img:"images/ad_ident.png",rollover:"adroll_ident.png",rollout:"ad_ident.png",txt:gs("Identities"),hidden:getBG().LPISLOC||getBG().g_hideidentities,click:function(b){mainaction();b.preventDefault()}},advseccheck:{img:"images/ad_seccheck.png",rollover:"adroll_seccheck.png",rollout:"ad_seccheck.png",txt:gs("Security Check"),hidden:getBG().LPISLOC||getBG().g_hideseccheck,click:function(b){getBG().openseccheck();getBG().closePop();b.preventDefault()}},advprint:{img:"images/ad_print.png",
rollover:"adroll_print.png",rollout:"ad_print.png",txt:gs("Print"),hidden:getBG().LPISLOC,click:function(b){getBG().doprintchoose();getBG().closePop();b.preventDefault()}},advrefresh:{img:"images/ad_refresh.png",rollover:"adroll_refresh.png",rollout:"ad_refresh.png",txt:gs("Refresh"),hidden:getBG().LPISLOC,click:function(b){getBG().refreshsites();getBG().closePop();b.preventDefault()}},advimport:{img:"images/ad_import.png",rollover:"adroll_import.png",rollout:"ad_import.png",txt:gs("Import"),hidden:getBG().LPISLOC,
click:function(b){getBG().openimport();getBG().closePop();b.preventDefault()}},advexport:{img:"images/ad_export.png",rollover:"adroll_export.png",rollout:"ad_export.png",txt:gs("Export"),hidden:0,click:function(b){getBG().doexportchoose();getBG().closePop();b.preventDefault()}},advdelcache:{img:"images/ad_delcache.png",rollover:"adroll_delcache.png",rollout:"ad_delcache.png",txt:gs("Delete Cache"),hidden:getBG().LPISLOC,click:function(b){getBG().clearCache(!1);getBG().closePop();b.preventDefault()}},
advsess:{img:"images/ad_sess.png",rollover:"adroll_sess.png",rollout:"ad_sess.png",txt:gs("Sessions"),hidden:getBG().LPISLOC||getBG().g_hidesessions,click:function(b){getBG().opensessions();getBG().closePop();b.preventDefault()}},advprefs:{img:"images/ad_prefs.png",rollover:"adroll_prefs.png",rollout:"ad_prefs.png",txt:gs("Preferences"),hidden:0,click:function(b){getBG().openprefs();getBG().closePop();b.preventDefault()}}};
if(document.getElementById("advtable")){var d=document,tr=null,acol=0,i;for(i in g_advarray){var c=g_advarray[i];if(!c.hidden){0==acol%4&&(tr=d.createElement("tr"),d.getElementById("advtable").appendChild(tr));var td=d.createElement("td"),a=d.createElement("a");a.setAttribute("id",i);a.setAttribute("href","#");td.appendChild(a);var img=d.createElement("img");img.setAttribute("id",i+"img");img.setAttribute("src",c.img);a.appendChild(img);var s=d.createElement("span");s.innerHTML=c.txt;a.innerHTML+=
"<br/>";a.appendChild(s);tr.appendChild(td);td.setAttribute("rollover",c.rollover);td.setAttribute("rollout",c.rollout);td.setAttribute("img",i+"img");a.addEventListener("mouseover",function(b){null!=b.relatedTarget&&"TD"==b.relatedTarget.nodeName&&(document.getElementById(b.relatedTarget.getAttribute("img")).src="images/"+b.relatedTarget.getAttribute("rollover"))});a.addEventListener("mouseout",function(b){null!=b.relatedTarget&&"TD"==b.relatedTarget.nodeName&&(document.getElementById(b.relatedTarget.getAttribute("img")).src=
"images/"+b.relatedTarget.getAttribute("rollout"))});td.addEventListener("click",c.click);acol++}}}getBG().g_hidevault&&document.getElementById("vaultbtn")&&(document.getElementById("vaultbtn").style.display="none");$("#searchinput").watermark({html:gs("Search All Data"),cls:"waterclass"});