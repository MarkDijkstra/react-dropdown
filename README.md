# react-dropdown
![npm](https://img.shields.io/npm/v/@markdijkstra/react-dropdown)
![NPM](https://img.shields.io/npm/l/@markdijkstra/react-dropdown)
![GitHub issues](https://img.shields.io/github/issues/MarkDijkstra/react-dropdown)
![CircleCI](https://img.shields.io/circleci/build/github/MarkDijkstra/react-dropdown)

React dropdown component


### How install


```npm
npm i @markdijkstra/react-dropdown

npm i react-router-dom
npm i prop-types
npm i feather-icons-react
```


### How to use


```jsx
import {Dropdown} from '@markdijkstra/react-dropdown'


const MenuData = [
    {
        route: '/profile',
        label: 'Profile',
    },
    {
        route: '/profile/notifications',
        label: 'Notifications',
    },
    {
        route: '/profile/settings',
        label: 'Profile Settings',
    },
    {
        divider: true,        
    },
    {
        route: '/logout',
        label: 'Logout',
    }
];

const OptionsData = [
    {
        allowClickOutside: false,
        closeIcon: 'chevron-up',
        openIcon: 'chevron-down',
        wrapperClass: 'dd__wrapper',
        triggerClass: 'dd__trigger',
        contentClass: 'dd__content'
    }
];

<Dropdown items={MenuData} buttonLabel='John Doe'
          className="dropdown" options={OptionsData}/>


### Closed state

<div class="dd__wrapper closed">
    <div class="dd__trigger">
        <span>John Doe</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down ">
            <g>
            <polyline points="6 9 12 15 18 9"></polyline>
            </g>
        </svg>
    </div>
</div>

### Open state

<div class="dd__wrapper open">
    <div class="dd__trigger">
        <span>John Doe</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up">
            <g>
            <polyline points="6 9 12 15 18 9"></polyline>
            </g>
        </svg>
    </div>
    <div class="dd__content">
        <a href="/profile">Profile</a>
        <a href="/profile/notifications">Notifications</a>
        <a href="/profile/settings">Settings</a>        
        <hr>
        <a href="/logout">Logout</a>
    </div>
</div>

```


### Options

| option             | description                                               |
| ------------------ | --------------------------------------------------------- |
| allowClickOutside  | Allow the menu to stay open if you click outside the menu, when it is not set to true it will be set to false as default. |
| closeIcon          | Close icon (we use feater icons)                          |
| openIcon           | Open icon (we use feater icons)                           |
| wrapperClass       | Wrapper class.                                            |
| triggerClass       | Wrapper class.                                            |
| contentClass       | Content(menu) class.                                      |


### Icons

We have used the [Feather Icons](https://feathericons.com/) react component for the icons.
