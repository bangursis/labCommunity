({
    selectTab : function(tabs, selected) {
        tabs.forEach(tab => {
              let current = tab.get('v.value');

              selected == current ? $A.util.addClass(tab, 'selectedTab') : $A.util.removeClass(tab, 'selectedTab');
          });
    },

    updateBringedAmount : function(component, event){
        let boozes = component.get("v.boozes");
        let bringedBoozes = event.getParam("bringedAmount");

        boozes.map( booze => {
            if(bringedBoozes.has(booze.Id)){
                booze.Amount__c = bringedBoozes.get(booze.Id)
            }
        });

        component.set("v.boozes", boozes);
    }
})
