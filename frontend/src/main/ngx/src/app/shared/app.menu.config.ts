import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  {
    id: 'CONSULT', name: 'CONSULT', icon: 'remove_red_eye', opened: true,
    items: [
      { id: 'candidates', name: 'CANDIDATES', icon: 'people', route: '/main/candidates' },
      { id: 'candidates-cv2', name: 'CANDIDATES2', icon: 'people', route: '/main/candidates-cv2' },
      { id: 'offers', name: 'OFFERS', icon: 'article', route: '/main/offers' },
      
    ]
  },
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
 
 
  
 
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
