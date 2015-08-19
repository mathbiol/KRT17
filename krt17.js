console.log('Patricia loaded')

patricia={
    buildUI:function(x){
        // link up to dropbox
        var div0=document.getElementById(x)
        var s = document.createElement('script')
        s.src="https://www.dropbox.com/static/api/2/dropins.js"
        s.id="dropboxjs"
        s.setAttribute('data-app-key','n3ytwi8b1ag1sjo')
        s.onload=function(){
            options = {
                success: function(files) {
                    div0.textContent=""
                    alert("Here's the file link: " + files[0].link)
                },
                cancel: function() {
                    div0.textContent="error :-("
                },
                linkType: "direct",
                multiselect: true,
                //extensions: ['.pdf', '.doc', '.docx'],
            };
            var button = Dropbox.createChooseButton(options);
            button.id="drobBoxChooserButton"
            div0.appendChild(button);
        }
        div0.appendChild(s)
        
        return div0
        }
}