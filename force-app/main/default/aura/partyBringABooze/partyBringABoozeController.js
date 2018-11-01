({
    init : function(component) {
        let action = component.get('c.boozesToBring');
        action.setStorable();
        $A.enqueueAction(action);

        action.setCallback(this, res => {
            if(res.getState() == "SUCCESS"){
                let boozes = res.getReturnValue();
                component.set("v.boozes", boozes);
            }
        })
    },    

    bring: function(component, event, helper){
        let index = component.find("pickABooze").get("v.value");
        let boozes = component.get("v.boozes");

        let booze = boozes[index || 0];
        let bId = booze.Id;
        let currentAmount = booze.Amount__c;
        let amount = +component.find("amount").get('v.value') + +currentAmount;

        let action = component.get("c.updateABooze");
        action.setParams({
            bId, amount
        });
        $A.enqueueAction(action);

        action.setCallback(this, res =>{
            let evt = $A.get("e.force:showToast");

            if(res.getState() == 'SUCCESS')
            {
                evt.setParams({
                    title : `SUCCESS`,
                    message : `Brah! God, bless his holy soul fo dat buzes`,
                    type : `success`
                });
                helper.bringNotification(component, bId, amount);
            }else{
                evt.setParams({
                    title : `SMTH WENT WRONG`,
                    message : `DA FACK?! DA PARTY IS BULLSHIT`,
                    type : `error`
                });
            }

            evt.fire();
        })
    }
})
