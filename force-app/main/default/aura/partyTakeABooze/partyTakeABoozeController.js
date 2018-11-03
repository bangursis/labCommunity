({
    onInit : function(component, event, helper) {
        let action = component.get('c.checkBoozes');
        let boozes = component.get("v.boozes");
        action.setStorable();

        if( boozes == null || !(Array.isArray(boozes)) || boozes.length < 1)
            $A.enqueueAction(action);
        else
            component.set("v.selectedAmount", boozes[0].Amount__c);

        action.setCallback(this, res => {
            if(res.getState() == "SUCCESS"){
                let boozes = res.getReturnValue();
                component.set("v.boozes", boozes);
                component.set("v.selectedAmount", boozes[0].Amount__c);
                helper.sendBoozes(component);
            }
        })
    },

    setAmount: function(component, event){
        let boozes = component.get("v.boozes");
        let index = event.getSource().get('v.value');
        component.set("v.selectedAmount", boozes[index].Amount__c);
    },

    take : function(component, event, helper){
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
            let state = res.getState();

            if(state == 'SUCCESS'){
                helper.editBoozes(component, boozes, amount, bId);
            }

            helper.showToast(state);
        });
    }
})
 