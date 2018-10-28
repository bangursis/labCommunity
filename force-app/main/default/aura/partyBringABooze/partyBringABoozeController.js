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

    bring: function(component){
        let index = component.find("pickABooze").get("v.value");
        let boozes = component.get("v.boozes");

        let booze = boozes[index || 0];
        let bId = booze.Id;
        let amount = component.find("amount").get('v.value');

        let action = component.get("c.updateABooze");
        action.setParams({
            bId, amount
        });
        $A.enqueueAction(action);

        action.setCallback(this, res =>{
            console.log(res.getState());
        })
    }
})
