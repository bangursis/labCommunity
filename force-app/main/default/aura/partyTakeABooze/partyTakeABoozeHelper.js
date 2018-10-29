({
    sendBoozes: function(component) {
        let event = component.getEvent("loadBoozes");
        let boozes = component.get("v.boozes");

        event.setParams({boozes});

        event.fire();
    }
})
