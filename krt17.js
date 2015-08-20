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
        cbio.getTypesOfCancer(function(x){
            $('<div id="cBioNav"><ol id="cBioNavOl"></ol></div>').appendTo(div)
            x=cbio.table(x) // tab structure
            /*// sort names
            ind=jmat.range(0,x.name.length-1)
            ind.sort(function(a,b){
                JSON.stringify([x.name[a],x.name[b]].sort())==JSON.stringify([x.name[a],x.name[b]])
            }) */
            
            // list results

            for(var i=0; i<x.name.length;i++){
                $('<li> <input id="cBioTumorCheck_'+i+'" type="checkbox"> '+x.name[i]+'</li>').appendTo(cBioNavOl)
            }
            4
        })


        4
    }


}