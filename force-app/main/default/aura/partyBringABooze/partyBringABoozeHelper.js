({
    bringNotification : function(component, type, amount) {
        let evt = component.getEvent("bringBoozes");

        evt.setParams({
            bringedAmount : new Map([[type, amount]])
        });

        evt.fire();
    }
})
