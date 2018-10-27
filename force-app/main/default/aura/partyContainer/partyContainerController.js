({
     switchTab: function(component, event) {
        let selected = event.getSource().get("v.value");
        component.set("v.selectedTab", selected);
        let tabs = component.find('button') ;

          tabs.forEach(tab => {
              let current = tab.get('v.value');

              selected == current ? $A.util.addClass(tab, 'selectedTab') : $A.util.removeClass(tab, 'selectedTab');
          });
    },
})
