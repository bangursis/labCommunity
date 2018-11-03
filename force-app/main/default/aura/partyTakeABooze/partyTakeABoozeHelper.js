({
    sendBoozes: function(component) {
        let event = component.getEvent("loadBoozes");
        let boozes = Array.from(component.get("v.boozes"));

        event.setParams({boozes});

        event.fire();
    },

    editBoozes: function(component, boozes, amount){
        let updatedBoozes= [];
        if(amount === 0){
                updatedBoozes = boozes.filter(current => current.Id != bId);
                component.set("v.selectedAmount", updatedBoozes[0].Amount__c);
        }
        
        else
            updatedBoozes = boozes.map(current => {
                if (current.Id == bId) {
                    current.Amount__c = amount
                    component.set("v.selectedAmount", amount);
                }
                return current;
            });

        component.set("v.boozes", updatedBoozes); 
    }
})
