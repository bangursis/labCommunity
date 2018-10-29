({
    sendBoozes: function(component) {
        let event = component.getEvent("loadBoozes");
        let boozes = Array.from(component.get("v.boozes"));

        event.setParams({boozes});

        event.fire();
    }
})
