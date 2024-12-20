import { Tab } from 'bootstrap';

export const initTabs = () => {
  const triggerTabList = document.querySelectorAll('#nav-tab button');

  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new Tab(triggerEl);

    triggerEl.addEventListener('click', event => {
      event.preventDefault();
      tabTrigger.show();
    });
  });

  console.log(triggerTabList);
};
