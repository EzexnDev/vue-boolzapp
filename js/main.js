var chatList = [{
        user: "Pippo",
        profileimg: "../img/avatar_2.jpg",
        chat: [{
                text: 'Messaggio di Pippo',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: false,
                isViewd: false,
            },
            {
                text: 'Messaggio Mio',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: true,
                isViewd: false,
            }
        ]
    },
    {
        user: "Mario",
        profileimg: "../img/avatar_3.jpg",
        chat: [{
                text: 'Messaggio di Pippo',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: false,
                isViewd: false,
            },
            {
                text: 'Messaggio Mio',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: true,
                isViewd: false,
            }
        ]
    },
    {
        user: "Pluto",
        profileimg: "../img/avatar_4.jpg",
        chat: [{
                text: 'Messaggio di Pippo',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: false,
                isViewd: false,
            },
            {
                text: 'Messaggio Mio',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: true,
                isViewd: false,
            }
        ]
    },
    {
        user: "Fabio",
        profileimg: "../img/avatar_5.jpg",
        chat: [{
                text: 'Messaggio di Pippo',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: false,
                isViewd: false,
            },
            {
                text: 'Messaggio Mio',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: true,
                isViewd: false,
            }
        ]
    },
    {
        user: "Paperino",
        profileimg: "../img/avatar_6.jpg",
        chat: [{
                text: 'Messaggio di Pippo',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: false,
                isViewd: false,
            },
            {
                text: 'Messaggio Mio',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: true,
                isViewd: false,
            }
        ]
    },
    {
        user: "Paperino",
        profileimg: "../img/avatar_6.jpg",
        chat: [{
                text: 'Messaggio di Pippo',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: false,
                isViewd: false,
            },
            {
                text: 'Messaggio Mio',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: true,
                isViewd: false,
            }
        ]
    },
    {
        user: "Paperino",
        profileimg: "../img/avatar_6.jpg",
        chat: [{
                text: 'Messaggio di Pippo',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: false,
                isViewd: false,
            },
            {
                text: 'Messaggio Mio',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: true,
                isViewd: false,
            }
        ]
    },
    {
        user: "Paperino",
        profileimg: "../img/avatar_6.jpg",
        chat: [{
                text: 'Messaggio di Pippo',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: false,
                isViewd: false,
            },
            {
                text: 'Messaggio Mio',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: true,
                isViewd: false,
            }
        ]
    },
    {
        user: "Paperino",
        profileimg: "../img/avatar_6.jpg",
        chat: [{
                text: 'Messaggio di Pippo',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: false,
                isViewd: false,
            },
            {
                text: 'Messaggio Mio',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: true,
                isViewd: false,
            }
        ]
    },
    {
        user: "Paperino",
        profileimg: "../img/avatar_6.jpg",
        chat: [{
                text: 'Messaggio di Pippo',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: false,
                isViewd: false,
            },
            {
                text: 'Messaggio Mio',
                sendTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                isOwnerMessage: true,
                isViewd: false,
            }
        ]
    },
];


var app = new Vue({

    el: "#app",
    data: {
        chatList: chatList,
        filteredChatList: chatList,
        chatIndex: -1,
        currentInputMessage: string = '',
        filterInput: '',
        currentTime: '',
    },

    methods: {

        getLastMessage(chatArray) {
            return chatArray[chatArray.length - 1].text;
        },
        selectChat(index, chatArray) {
            return chatArray[index];
        },
        setChatIndex(index) {
            this.chatIndex = index;
        },

        sendMessage() {
            if (this.currentInputMessage != '') {
                var now = new Date();
                this.chatList[this.chatIndex].chat.push({
                    text: this.currentInputMessage,
                    sendTime: now.toLocaleDateString() + ' ' + now.toLocaleTimeString(),
                    isOwnerMessage: true,
                    isViewd: false
                });
                this.currentInputMessage = '';
            }
            console.log(this.currentInputMessage);
        },

        truncatePreviewMessage(message) {
            if (message.length >= 20) {
                return message.substring(0, 16) + '...';
            }
            return message;
        },

        filterChatList(filterText) {
            if (filterText == '') {
                this.filteredChatList = chatList;
            }
            this.filteredChatList = chatList.filter((element) => { return element.user.toLowerCase().includes(filterText.toLowerCase()); });
            console.log(this.filteredChatList);
        }
    }
});