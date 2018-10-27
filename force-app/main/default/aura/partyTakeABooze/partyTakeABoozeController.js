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
                
                console.log(component.get("v.selectedAmount"));
            }
        })
    },

    setAmount: function(component, event){
        let amount = event.getSource().get('v.value');
        component.set("v.selectedAmount", amount);
        console.log(component.get("v.selectedAmount"));
    }
})
