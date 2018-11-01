({
    bringNotification : function(type, amount) {
        let evt = $A.get("e.c:bringBoozes");

        evt.setParams({
            bringedAmount : new Map([[type, amount]])
        });

        evt.fire();
    }
})
