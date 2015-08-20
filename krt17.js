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
            $('<div id="cBioNav"><h2 style="color:maroon">Analysis of current cBio data for KRT17</h2><ol id="cBioNavOl"></ol></div>').appendTo(div)
            x=cbio.table(x) // tab structure
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