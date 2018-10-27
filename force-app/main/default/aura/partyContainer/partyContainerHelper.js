({
    selectTab : function(tabs, selected) {
        tabs.forEach(tab => {
              let current = tab.get('v.value');

              selected == current ? $A.util.addClass(tab, 'selectedTab') : $A.util.removeClass(tab, 'selectedTab');
          });
    }
})
