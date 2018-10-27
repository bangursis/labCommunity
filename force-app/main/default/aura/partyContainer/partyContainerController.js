({
     switchTab: function(component, event) {
        component.set("v.selectedTab", event.getSource().get("v.value"));
    },

    handeTableSelection: function(component, event) {
          let tabs = component.find('button') ;

          tabs.forEach(tab => {
              let selected = event.getSource().get('v.value');
              let current = tab.get('v.value');

              selected == current ? $A.util.addClass('selectedTab') : $A.util.removeClass('selectedTab');
              console.log($A.util.hasClass(tab, 'selectedTab') + current);
          });
    },

})
