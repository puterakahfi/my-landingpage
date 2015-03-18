
function YukNgaji() {

    this.regenerateForm = function () {
        setTimeout(function () {
            $("input.gsc-search-button").addClass("btn btn-primary btn-md");
        }, 10000);
    };
    
    this.showAboutModal =function(){
        
    };
    
    this.init = function () {
        this.regenerateForm();
    };

}