const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab_border');
    //Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab_border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}
// Listen fortab clik
tabItems.forEach(item => item.addEventListener('click', selectItem));
