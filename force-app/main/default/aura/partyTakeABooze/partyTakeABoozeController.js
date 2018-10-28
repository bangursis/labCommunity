({
    onInit : function(component) {
        let action = component.get('c.checkBoozes');
        action.setStorable();
        $A.enqueueAction(action);

        action.setCallback(this, res => {
            if(res.getState() == "SUCCESS"){
                let boozes = res.getReturnValue();
                component.set("v.boozes", boozes);
                component.set("v.selectedAmount", boozes[0].Amount__c);
                
            }
        })
    },

    setAmount: function(component, event){
        let boozes = component.get("v.boozes");
        let index = event.getSource().get('v.value');
        component.set("v.selectedAmount", boozes[index].Amount__c);
    },

    take : function(component){
        let index = component.find("pickABooze").get("v.value");
        let boozes = component.get("v.boozes");

        let booze = boozes[index || 0];
        let bId = booze.Id;
        let amount = component.get("v.selectedAmount") - component.find("pickedAmount").get('v.value');

        let action = component.get("c.updateABooze");
        action.setParams({
            bId, amount
        });
        $A.enqueueAction(action);

        action.setCallback(this, res => {
            if(res.getState() == 'SUCCESS'){
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

            else{
                let evt = $A.get("e.force:showToast");
                evt.setParams({
                    title : `SMTH WENT WRONG`,
                    message : `DA FACK?! DA PARTY IS BULLSHIT`,
                    type : `error`
                });
                evt.fire();
            }
        });
    }
})
 