({
    sendBoozes: function(component) {
        let event = component.getEvent("loadBoozes");
        let boozes = Array.from(component.get("v.boozes"));

        event.setParams({boozes});

        event.fire();
    },

    editBoozes: function(component, boozes, amount, bId){
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
    },

    showToast: function(state){
        let title, type, message;
        let evt = $A.get("e.force:showToast");

        if(state == `SUCCESS`){ 
            title = `Enjoy da moment`;
            message = `10q fo' comin'`;
            type = `success`;
        } else {
            title = `SMTH WENT WRONG`;
            message = `DA FACK?! DA PARTY IS BULLSHIT`;
            type = `error`;
        }

        evt.setParams({title, message, type});

        evt.fire();
    }
})
