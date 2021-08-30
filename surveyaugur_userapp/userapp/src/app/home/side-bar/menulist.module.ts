export class MenuItem {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = '',
    ) {}
}

export const menuList = [

new MenuItem('Userprofile','home/profile','UserProfile','person'),
new MenuItem('Activesurvey','home/activesurvey','Activesurvey','tungsten'),
new MenuItem('Logout','login','Logout','logout')


];



