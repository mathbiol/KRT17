console.log('krt17.js loaded')
//

krt17=function(div){
    if(div){
        if(typeof(div)=='string'){
            div=document.getElementById(div)
        }
        // cBio summary for KRT17 results
        $('<div id="cBiokrt17svg"><h4 id=""><a href="http://bit.ly/1MDHW95" target="_blank">cBioPortal as of Aug 18, 2015</a>:</h4></div>').appendTo(div)
        $.get('krt17crosscancerhistogram.svg').then(function(x){
            $('svg',x).appendTo(cBiokrt17svg)
        })
        // navigate cBio
        $('<div id="cBioNav"><h2 style="color:maroon">Analysis of current cBio data for KRT17</h2><p id="processing_cBio" style="color:red">processing ...</p>hide <input type="checkbox"  id="hideCBioNavOl" onchange="krt17.hideCBioNav(this)"><ol id="cBioNavOl"></ol></div>').appendTo(div)
        cbio.getTypesOfCancer(function(x){
            x=cbio.table(x) // tab structure
            $("#processing_cBio").remove()
            /*// sort names
            ind=jmat.range(0,x.name.length-1)
            ind.sort(function(a,b){
                JSON.stringify([x.name[a],x.name[b]].sort())==JSON.stringify([x.name[a],x.name[b]])
            }) */
            
            // list results
            
            for(var i=0; i<x.name.length;i++){
                $('<li> <input id="cBioTumorCheck_'+i+'" type="checkbox" onchange="krt17.cbioAnalysisTumor(this,'+i+')"> '+x.name[i]+'</li>').appendTo(cBioNavOl)
            }
            4
        })

        // navigate icgc

        krt17.geneId="ENSG00000128422" // it would be nice to know how to find this programatically
        $('<div id="IcgcNav"><h2 style="color:maroon">Analysis of current ICGC data for KRT17</h2><p id="processing_ICGC" style="color:red">processing ...</p><div id="geneIdDiv">Information about Gene '+krt17.geneId+' ( hide <input type="checkbox" onchange="krt17.hideGenePre(this)"> )<pre id="geneIdPre"></pre></div>ICGC projects ( hide <input type="checkbox" onchange="krt17.hideIcgcProjects(this)"><ol id="IcgcNavOl"></ol></div>').appendTo(div)

        //https://dcc.icgc.org/api/v1/genes/ENSG00000128422

        $.getJSON('https://dcc.icgc.org/api/v1/genes/'+krt17.geneId).then(function(x){
            //lala=x;console.log('done')
            geneIdPre.innerHTML=JSON.stringify(x,null,3)
            
        })

        // projects

        //$('<input ty id="ICGCprojects">ICGC projects ( hide <input type="checkbox" onchange="krt17.hideIcgcProjects(this)"></div><ol id="IcgcNavOl"></ol></div>').appendTo(IcgcNav)








        4
    }


}

krt17.cbioAnalysisTumor=function(that,i){
    var li = document.getElementById(that.id)
    if((li.checked)&&($('div',that.parentElement).length==0)){
        $('<div style="color:blue">['+Date()+'] Analysis displayed here or accumulated elsewhere.</div>').appendTo(that.parentElement)
        that.parentElement.style.color="blue"
    }else{
        if(li.checked){
            $('div',that.parentElement).show()
        }else{
            $('div',that.parentElement).hide()
        }
    }

    4
}

krt17.hideCBioNav=function(that){
    var lis = $('li',that.parentElement)
    if(that.checked){
        lis.map(function(i){
            var li=lis[i]
            if(li.style.color=="blue"){
                $(li).show()
            }else{
                $(li).hide()
            }
        })
    } else {
        $(lis).show()
    }
    4

}

krt17.hideGenePre=function(that){
    4
    if(that.checked){
        $(geneIdPre).hide()
    }else{
        $(geneIdPre).show()
    }
    // geneIdPre
}