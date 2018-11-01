({
     switchTab: function(component, event) {
        let selected = event.getSource().get("v.value");
        component.set("v.selectedTab", selected);
        let tabs = component.find('button') ;

        helper.selectTab (tab, selected);
    },
    handleBoozesLoaded : function(component, event){
        console.log(event.getParams("boozes"));
    },

    handleBoozesBringed : function(component){
        console.log("bringed");
    }
})
