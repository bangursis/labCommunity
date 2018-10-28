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
        let booze = component.get("v.boozes")[index || 0];
        let bId = booze.Id;
        let amount = component.get("v.selectedAmount") - component.find("pickedAmount").get('v.value');

        console.log(`${bId}    ${amount}`);

        let action = component.get("c.pickABooze");
        action.setParams({
            bId, amount
        });
        $A.enqueueAction(action);

        action.setCallback(this, res => {
            console.log(res.getState());
        })
    }
})
 