({
     switchTab: function(component, event) {
        let selected = event.getSource().get("v.value");
        component.set("v.selectedTab", selected);
        let tabs = component.find('button') ;

        helper.selectTab (tab, selected);
    },

    handleBoozesLoaded : function(component, event){
        component.set(
            "v.boozes", 
            event.getParam("boozes")
        );
    },

    handleBoozesBringed : function(component, event, helper){
        helper.updateBringedAmount(component, event);
    }
})
