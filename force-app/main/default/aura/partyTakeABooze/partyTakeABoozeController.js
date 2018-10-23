({
    onInit : function(component) {
        let action = component.get("c.checkBoozes");
        action.setStorable();
        $A.enqueueAction(action);

        action.setCallback(this, res => {
            if(res.getState() == "SUCCESS"){
                component.set("v.boozes", res.getReturnValue());
            }
        })
    }
})
