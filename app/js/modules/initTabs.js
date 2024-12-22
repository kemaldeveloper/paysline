import { Tab } from 'bootstrap';

export const initTabs = () => {
  const triggerTabList = document.querySelectorAll('#nav-tab button');

  if (triggerTabList.length === 0) return;

  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new Tab(triggerEl);

    triggerEl.addEventListener('click', event => {
      event.preventDefault();
      tabTrigger.show();
    });
  });

  console.log(triggerTabList);
};
