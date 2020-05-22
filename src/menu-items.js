export default {
    items: [
        {
            id: 'Home',
            title: 'Home',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'Home',
                    title: 'Home',
                    type: 'item',
                    url: '/home',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'Question',
            title: 'Question',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'Question',
                    title: 'Question',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        
                        {
                            id: 'show',
                            title: 'Show All Question',
                            type: 'item',
                            url: '/question/show'
                        }                   
                    ]

                }
            ]
        }
    ]
}