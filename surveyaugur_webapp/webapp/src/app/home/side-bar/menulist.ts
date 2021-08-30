export class MenuItem {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = '',
    ) {}
}

export const menuList = [
new MenuItem('Create Survey','home/createsurvey','CreateSurvey','mode'),
new MenuItem('Dashboard','home/dashboard','Dashboard','dashboard'),
new MenuItem('Surveys','home/surveys','Surveys','assignment'),
new MenuItem('User Profile','home/profile','UserProfile','person'),
new MenuItem('Question Groups','home/questiongroups','Questiongroups','groups'),
new MenuItem('Request','home/request','Request','swipe'),
new MenuItem('Share','home/share','Share','share'),
new MenuItem('Logout','login','Logout','logout')

];



