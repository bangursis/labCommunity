({
    onInit : function(component) {
        let action = component.get("c.checkBoozes");
        $A.enqueueAction(action);

        action.setCallback(this, res => {
            if(res.getState() == "SUCCESS"){
                console.log(res.getReturnValue());
                component.set("v.boozes", res.getReturnValue());
            }
        })
    }
})
