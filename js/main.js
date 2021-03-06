var chatList = [{
        user: "Pippo",
        profileimg: "../img/avatar_2.jpg",
        lastSeen: 'Ultimo accesso oggi alle ' + new Date().toLocaleTimeString(),
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
        lastSeen: 'Ultimo accesso oggi alle ' + new Date().toLocaleTimeString(),
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
        lastSeen: 'Ultimo accesso oggi alle ' + new Date().toLocaleTimeString(),
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
        lastSeen: 'Ultimo accesso oggi alle ' + new Date().toLocaleTimeString(),
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
        user: "Consuelo",
        profileimg: "../img/avatar_7.jpg",
        lastSeen: 'Ultimo accesso oggi alle ' + new Date().toLocaleTimeString(),
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
        user: "Marina",
        profileimg: "../img/avatar_8.jpg",
        lastSeen: 'Ultimo accesso oggi alle ' + new Date().toLocaleTimeString(),
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
        user: "Jean Claud",
        profileimg: "../img/avatar_io.jpg",
        lastSeen: 'Ultimo accesso oggi alle ' + new Date().toLocaleTimeString(),
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
        user: "Grazia",
        profileimg: "../img/avatar_2.jpg",
        lastSeen: 'Ultimo accesso oggi alle ' + new Date().toLocaleTimeString(),
        chat: [{
                text: 'Sono Grazia',
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
        user: "Genoveffa",
        profileimg: "../img/avatar_4.jpg",
        lastSeen: 'Ultimo accesso oggi alle ' + new Date().toLocaleTimeString(),
        chat: [{
                text: 'Sono Genoveffa',
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
        user: "Marco",
        profileimg: "../img/avatar_7.jpg",
        lastSeen: 'Ultimo accesso oggi alle ' + new Date().toLocaleTimeString(),
        chat: [{
                text: 'Cavoletti sono Marco',
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

let emojiList = ["😀", "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😈", "👿", "😉", "😊", "☺️", "😋", "😌", "😍", "😎", "😏", "😐", "😑", "😒", "😓", "😔", "😕", "😖", "😗", "😘", "😙", "😚", "😛", "😜", "😝", "😞", "😟", "😠", "😡", "😢", "😣", "😤", "😥", "😦", "😧", "😨", "😩", "😪", "😫", "😬", "😭", "😮", "😯", "😰", "😱", "😲", "😳", "😴", "😵", "😶", "😷", "😸", "😹", "😺", "😻", "😼", "😽", "😾", "😿", "🙀", "👣", "👤", "👥", "👶", "👶🏻", "👶🏼", "👶🏽", "👶🏾", "👶🏿", "👦", "👦🏻", "👦🏼", "👦🏽", "👦🏾", "👦🏿", "👧", "👧🏻", "👧🏼", "👧🏽", "👧🏾", "👧🏿", "👨", "👨🏻", "👨🏼", "👨🏽", "👨🏾", "👨🏿", "👩", "👩🏻", "👩🏼", "👩🏽", "👩🏾", "👩🏿", "👪", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👫", "👬", "👭", "👯", "👰", "👰🏻", "👰🏼", "👰🏽", "👰🏾", "👰🏿", "👱", "👱🏻", "👱🏼", "👱🏽", "👱🏾", "👱🏿", "👲", "👲🏻", "👲🏼", "👲🏽", "👲🏾", "👲🏿", "👳", "👳🏻", "👳🏼", "👳🏽", "👳🏾", "👳🏿", "👴", "👴🏻", "👴🏼", "👴🏽", "👴🏾", "👴🏿", "👵", "👵🏻", "👵🏼", "👵🏽", "👵🏾", "👵🏿", "👮", "👮🏻", "👮🏼", "👮🏽", "👮🏾", "👮🏿", "👷", "👷🏻", "👷🏼", "👷🏽", "👷🏾", "👷🏿", "👸", "👸🏻", "👸🏼", "👸🏽", "👸🏾", "👸🏿", "💂", "💂🏻", "💂🏼", "💂🏽", "💂🏾", "💂🏿", "👼", "👼🏻", "👼🏼", "👼🏽", "👼🏾", "👼🏿", "🎅", "🎅🏻", "🎅🏼", "🎅🏽", "🎅🏾", "🎅🏿", "👻", "👹", "👺", "💩", "💀", "👽", "👾", "🙇", "🙇🏻", "🙇🏼", "🙇🏽", "🙇🏾", "🙇🏿", "💁", "💁🏻", "💁🏼", "💁🏽", "💁🏾", "💁🏿", "🙅", "🙅🏻", "🙅🏼", "🙅🏽", "🙅🏾", "🙅🏿", "🙆", "🙆🏻", "🙆🏼", "🙆🏽", "🙆🏾", "🙆🏿", "🙋", "🙋🏻", "🙋🏼", "🙋🏽", "🙋🏾", "🙋🏿", "🙎", "🙎🏻", "🙎🏼", "🙎🏽", "🙎🏾", "🙎🏿", "🙍", "🙍🏻", "🙍🏼", "🙍🏽", "🙍🏾", "🙍🏿", "💆", "💆🏻", "💆🏼", "💆🏽", "💆🏾", "💆🏿", "💇", "💇🏻", "💇🏼", "💇🏽", "💇🏾", "💇🏿", "💑", "👩‍❤️‍👩", "👨‍❤️‍👨", "💏", "👩‍❤️‍💋‍👩", "👨‍❤️‍💋‍👨", "🙌", "🙌🏻", "🙌🏼", "🙌🏽", "🙌🏾", "🙌🏿", "👏", "👏🏻", "👏🏼", "👏🏽", "👏🏾", "👏🏿", "👂", "👂🏻", "👂🏼", "👂🏽", "👂🏾", "👂🏿", "👀", "👃", "👃🏻", "👃🏼", "👃🏽", "👃🏾", "👃🏿", "👄", "💋", "👅", "💅", "💅🏻", "💅🏼", "💅🏽", "💅🏾", "💅🏿", "👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿", "👍", "👍🏻", "👍🏼", "👍🏽", "👍🏾", "👍🏿", "👎", "👎🏻", "👎🏼", "👎🏽", "👎🏾", "👎🏿", "☝", "☝🏻", "☝🏼", "☝🏽", "☝🏾", "☝🏿", "👆", "👆🏻", "👆🏼", "👆🏽", "👆🏾", "👆🏿", "👇", "👇🏻", "👇🏼", "👇🏽", "👇🏾", "👇🏿", "👈", "👈🏻", "👈🏼", "👈🏽", "👈🏾", "👈🏿", "👉", "👉🏻", "👉🏼", "👉🏽", "👉🏾", "👉🏿", "👌", "👌🏻", "👌🏼", "👌🏽", "👌🏾", "👌🏿", "✌", "✌🏻", "✌🏼", "✌🏽", "✌🏾", "✌🏿", "👊", "👊🏻", "👊🏼", "👊🏽", "👊🏾", "👊🏿", "✊", "✊🏻", "✊🏼", "✊🏽", "✊🏾", "✊🏿", "✋", "✋🏻", "✋🏼", "✋🏽", "✋🏾", "✋🏿", "💪", "💪🏻", "💪🏼", "💪🏽", "💪🏾", "💪🏿", "👐", "👐🏻", "👐🏼", "👐🏽", "👐🏾", "👐🏿", "🙏", "🙏🏻", "🙏🏼", "🙏🏽", "🙏🏾", "🙏🏿", "🌱", "🌲", "🌳", "🌴", "🌵", "🌷", "🌸", "🌹", "🌺", "🌻", "🌼", "💐", "🌾", "🌿", "🍀", "🍁", "🍂", "🍃", "🍄", "🌰", "🐀", "🐁", "🐭", "🐹", "🐂", "🐃", "🐄", "🐮", "🐅", "🐆", "🐯", "🐇", "🐰", "🐈", "🐱", "🐎", "🐴", "🐏", "🐑", "🐐", "🐓", "🐔", "🐤", "🐣", "🐥", "🐦", "🐧", "🐘", "🐪", "🐫", "🐗", "🐖", "🐷", "🐽", "🐕", "🐩", "🐶", "🐺", "🐻", "🐨", "🐼", "🐵", "🙈", "🙉", "🙊", "🐒", "🐉", "🐲", "🐊", "🐍", "🐢", "🐸", "🐋", "🐳", "🐬", "🐙", "🐟", "🐠", "🐡", "🐚", "🐌", "🐛", "🐜", "🐝", "🐞", "🐾", "⚡️", "🔥", "🌙", "☀️", "⛅️", "☁️", "💧", "💦", "☔️", "💨", "❄️", "🌟", "⭐️", "🌠", "🌄", "🌅", "🌈", "🌊", "🌋", "🌌", "🗻", "🗾", "🌐", "🌍", "🌎", "🌏", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌚", "🌝", "🌛", "🌜", "🌞", "🍅", "🍆", "🌽", "🍠", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🍔", "🍕", "🍖", "🍗", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍞", "🍟", "🍡", "🍢", "🍣", "🍤", "🍥", "🍦", "🍧", "🍨", "🍩", "🍪", "🍫", "🍬", "🍭", "🍮", "🍯", "🍰", "🍱", "🍲", "🍳", "🍴", "🍵", "☕️", "🍶", "🍷", "🍸", "🍹", "🍺", "🍻", "🍼", "🎀", "🎁", "🎂", "🎃", "🎄", "🎋", "🎍", "🎑", "🎆", "🎇", "🎉", "🎊", "🎈", "💫", "✨", "💥", "🎓", "👑", "🎎", "🎏", "🎐", "🎌", "🏮", "💍", "❤️", "💔", "💌", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "💜", "💛", "💚", "💙", "🏃", "🏃🏻", "🏃🏼", "🏃🏽", "🏃🏾", "🏃🏿", "🚶", "🚶🏻", "🚶🏼", "🚶🏽", "🚶🏾", "🚶🏿", "💃", "💃🏻", "💃🏼", "💃🏽", "💃🏾", "💃🏿", "🚣", "🚣🏻", "🚣🏼", "🚣🏽", "🚣🏾", "🚣🏿", "🏊", "🏊🏻", "🏊🏼", "🏊🏽", "🏊🏾", "🏊🏿", "🏄", "🏄🏻", "🏄🏼", "🏄🏽", "🏄🏾", "🏄🏿", "🛀", "🛀🏻", "🛀🏼", "🛀🏽", "🛀🏾", "🛀🏿", "🏂", "🎿", "⛄️", "🚴", "🚴🏻", "🚴🏼", "🚴🏽", "🚴🏾", "🚴🏿", "🚵", "🚵🏻", "🚵🏼", "🚵🏽", "🚵🏾", "🚵🏿", "🏇", "🏇🏻", "🏇🏼", "🏇🏽", "🏇🏾", "🏇🏿", "⛺️", "🎣", "⚽️", "🏀", "🏈", "⚾️", "🎾", "🏉", "⛳️", "🏆", "🎽", "🏁", "🎹", "🎸", "🎻", "🎷", "🎺", "🎵", "🎶", "🎼", "🎧", "🎤", "🎭", "🎫", "🎩", "🎪", "🎬", "🎨", "🎯", "🎱", "🎳", "🎰", "🎲", "🎮", "🎴", "🃏", "🀄️", "🎠", "🎡", "🎢", "🚃", "🚞", "🚂", "🚋", "🚝", "🚄", "🚅", "🚆", "🚇", "🚈", "🚉", "🚊", "🚌", "🚍", "🚎", "🚐", "🚑", "🚒", "🚓", "🚔", "🚨", "🚕", "🚖", "🚗", "🚘", "🚙", "🚚", "🚛", "🚜", "🚲", "🚏", "⛽️", "🚧", "🚦", "🚥", "🚀", "🚁", "✈️", "💺", "⚓️", "🚢", "🚤", "⛵️", "🚡", "🚠", "🚟", "🛂", "🛃", "🛄", "🛅", "💴", "💶", "💷", "💵", "🗽", "🗿", "🌁", "🗼", "⛲️", "🏰", "🏯", "🌇", "🌆", "🌃", "🌉", "🏠", "🏡", "🏢", "🏬", "🏭", "🏣", "🏤", "🏥", "🏦", "🏨", "🏩", "💒", "⛪️", "🏪", "🏫", "🇦🇺", "🇦🇹", "🇧🇪", "🇧🇷", "🇨🇦", "🇨🇱", "🇨🇳", "🇨🇴", "🇩🇰", "🇫🇮", "🇫🇷", "🇩🇪", "🇭🇰", "🇮🇳", "🇮🇩", "🇮🇪", "🇮🇱", "🇮🇹", "🇯🇵", "🇰🇷", "🇲🇴", "🇲🇾", "🇲🇽", "🇳🇱", "🇳🇿", "🇳🇴", "🇵🇭", "🇵🇱", "🇵🇹", "🇵🇷", "🇷🇺", "🇸🇦", "🇸🇬", "🇿🇦", "🇪🇸", "🇸🇪", "🇨🇭", "🇹🇷", "🇬🇧", "🇺🇸", "🇦🇪", "🇻🇳", "⌚️", "📱", "📲", "💻", "⏰", "⏳", "⌛️", "📷", "📹", "🎥", "📺", "📻", "📟", "📞", "☎️", "📠", "💽", "💾", "💿", "📀", "📼", "🔋", "🔌", "💡", "🔦", "📡", "💳", "💸", "💰", "💎", "🌂", "👝", "👛", "👜", "💼", "🎒", "💄", "👓", "👒", "👡", "👠", "👢", "👞", "👟", "👙", "👗", "👘", "👚", "👕", "👔", "👖", "🚪", "🚿", "🛁", "🚽", "💈", "💉", "💊", "🔬", "🔭", "🔮", "🔧", "🔪", "🔩", "🔨", "💣", "🚬", "🔫", "🔖", "📰", "🔑", "✉️", "📩", "📨", "📧", "📥", "📤", "📦", "📯", "📮", "📪", "📫", "📬", "📭", "📄", "📃", "📑", "📈", "📉", "📊", "📅", "📆", "🔅", "🔆", "📜", "📋", "📖", "📓", "📔", "📒", "📕", "📗", "📘", "📙", "📚", "📇", "🔗", "📎", "📌", "✂️", "📐", "📍", "📏", "🚩", "📁", "📂", "✒️", "✏️", "📝", "🔏", "🔐", "🔒", "🔓", "📣", "📢", "🔈", "🔉", "🔊", "🔇", "💤", "🔔", "🔕", "💭", "💬", "🚸", "🔍", "🔎", "🚫", "⛔️", "📛", "🚷", "🚯", "🚳", "🚱", "📵", "🔞", "🉑", "🉐", "💮", "㊙️", "㊗️", "🈴", "🈵", "🈲", "🈶", "🈚️", "🈸", "🈺", "🈷", "🈹", "🈳", "🈂", "🈁", "🈯️", "💹", "❇️", "✳️", "❎", "✅", "✴️", "📳", "📴", "🆚", "🅰", "🅱", "🆎", "🆑", "🅾", "🆘", "🆔", "🅿️", "🚾", "🆒", "🆓", "🆕", "🆖", "🆗", "🆙", "🏧", "♈️", "♉️", "♊️", "♋️", "♌️", "♍️", "♎️", "♏️", "♐️", "♑️", "♒️", "♓️", "🚻", "🚹", "🚺", "🚼", "♿️", "🚰", "🚭", "🚮", "▶️", "◀️", "🔼", "🔽", "⏩", "⏪", "⏫", "⏬", "➡️", "⬅️", "⬆️", "⬇️", "↗️", "↘️", "↙️", "↖️", "↕️", "↔️", "🔄", "↪️", "↩️", "⤴️", "⤵️", "🔀", "🔁", "🔂", "#⃣", "0⃣", "1⃣", "2⃣", "3⃣", "4⃣", "5⃣", "6⃣", "7⃣", "8⃣", "9⃣", "🔟", "🔢", "🔤", "🔡", "🔠", "ℹ️", "📶", "🎦", "🔣", "➕", "➖", "〰", "➗", "✖️", "✔️", "🔃", "™", "©", "®", "💱", "💲", "➰", "➿", "〽️", "❗️", "❓", "❕", "❔", "‼️", "⁉️", "❌", "⭕️", "💯", "🔚", "🔙", "🔛", "🔝", "🔜", "🌀", "Ⓜ️", "⛎", "🔯", "🔰", "🔱", "⚠️", "♨️", "♻️", "💢", "💠", "♠️", "♣️", "♥️", "♦️", "☑️", "⚪️", "⚫️", "🔘", "🔴", "🔵", "🔺", "🔻", "🔸", "🔹", "🔶", "🔷", "▪️", "▫️", "⬛️", "⬜️", "◼️", "◻️", "◾️", "◽️", "🔲", "🔳", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧"]



var app = new Vue({

    el: "#app",
    data: {
        chatList: chatList,
        emojiList: emojiList,
        filteredChatList: chatList,
        chatIndex: -1,
        currentInputMessage: string = '',
        filterInput: '',
        currentTime: '',
        visible: false,
    },

    methods: {

        getLastMessage(chatArray) {
            return chatArray[chatArray.length - 1].text;
        },
        selectChat(index, chatArray) {
            chatArray[index].lastSeen = 'Ultimo accesso oggi alle ' + new Date().toLocaleTimeString();
            return chatArray[index];
        },
        setChatIndex(index) {
            this.chatIndex = index;
        },

        sendMessage() {
            if (this.currentInputMessage != '') {
                var now = new Date();
                this.filteredChatList[this.chatIndex].chat.push({
                    text: this.currentInputMessage,
                    sendTime: now.toLocaleDateString() + ' ' + now.toLocaleTimeString(),
                    isOwnerMessage: true,
                    isViewd: false
                });
                this.currentInputMessage = '';
                this.answerMessage();
            }
            console.log(this.currentInputMessage);
        },

        answerMessage() {
            setTimeout(() => {
                var text = this.chatList[this.chatIndex].chat[this.chatList[this.chatIndex].chat.length - 1].text;
                var now = new Date();
                console.log(this.chatList[this.chatIndex].chat[this.chatList[this.chatIndex].chat.length - 1].text);
                if (text.includes('Ciao') || text.includes('Hey') || text.includes('Yo')) {
                    this.chatList[this.chatIndex].chat.push({
                        text: 'Heyyyyyyyyyyyyyyy',
                        sendTime: now.toLocaleDateString() + ' ' + now.toLocaleTimeString(),
                        isOwnerMessage: false,
                        isViewd: false
                    });
                } else if (text.includes('Come stai?')) {
                    this.chatList[this.chatIndex].chat.push({
                        text: 'Bene e tu?',
                        sendTime: now.toLocaleDateString() + ' ' + now.toLocaleTimeString(),
                        isOwnerMessage: false,
                        isViewd: false
                    });
                } else if (text.includes('Bene') || text.includes('Male') || text.includes('Normale')) {
                    this.chatList[this.chatIndex].chat.push({
                        text: 'Ho capito.. che fai?',
                        sendTime: now.toLocaleDateString() + ' ' + now.toLocaleTimeString(),
                        isOwnerMessage: false,
                        isViewd: false
                    });
                } else if (text.includes('Stavo Programmando')) {
                    this.chatList[this.chatIndex].chat.push({
                        text: 'Js?',
                        sendTime: now.toLocaleDateString() + ' ' + now.toLocaleTimeString(),
                        isOwnerMessage: false,
                        isViewd: false
                    });
                } else if (text.includes('Coddino?')) {
                    this.chatList[this.chatIndex].chat.push({
                        text: 'Warzonataaaaaaaaaaaaaaaaaaa',
                        sendTime: now.toLocaleDateString() + ' ' + now.toLocaleTimeString(),
                        isOwnerMessage: false,
                        isViewd: false
                    });
                } else {
                    this.chatList[this.chatIndex].chat.push({
                        text: 'Non posso ancora risponderti',
                        sendTime: now.toLocaleDateString() + ' ' + now.toLocaleTimeString(),
                        isOwnerMessage: false,
                        isViewd: false
                    });
                }
            }, Math.floor(Math.random() * (10000 - 600)) + 600);
        },

        truncatePreviewMessage(message) {
            if (message.length >= 20) {
                return message.substring(0, 16) + '...';
            }
            return message;
        },

        // filteredChatIndex(index) {

        //     const el = this.filteredChatList[index];
        //     let newChatIndex = 0;
        //     this.chatList.forEach((contact, i) => {
        //         if (contact.name == el.name) {
        //             newChatIndex = i;
        //         }
        //     });

        //     this.chatIndex = newChatIndex;
        //     console.log();

        // },

        filterChatList(filterText) {
            if (filterText == '') {
                this.filteredChatList = chatList;
            }
            this.filteredChatList = chatList.filter((element) => { return element.user.toLowerCase().includes(filterText.toLowerCase()); });
            console.log(this.filteredChatList);
        },
        scrollToEnd() {
            var container = this.$el.querySelector("#container");
            container.scrollTop = container.scrollHeight;
        },
    }
});