var whatsapp = {
    chat: [{
            user: "Pippo",
            profileimg: "",
            messages: [
                { text: "Hyper text transfer package" },
                { text: "Hyper text transfer protocol" },
                { text: "Hyphenation text test program" },
                { text: "None of the above" }
            ]
        },
        {
            user: "Mario",
            profileimg: "",
            messages: [
                { text: "Hyper text transfer package" },
                { text: "Hyper text transfer protocol" },
                { text: "Hyphenation text test program" },
                { text: "None of the above" }
            ]
        },
        {
            user: "Pluto",
            profileimg: "",
            messages: [
                { text: "Hyper text transfer package" },
                { text: "Hyper text transfer protocol" },
                { text: "Hyphenation text test program" },
                { text: "None of the above" }
            ]
        },
        {
            user: "Fabio",
            profileimg: "",
            messages: [
                { text: "Hyper text transfer package" },
                { text: "Hyper text transfer protocol" },
                { text: "Hyphenation text test program" },
                { text: "None of the above" }
            ]
        },
        {
            user: "Paperino",
            profileimg: "",
            messages: [
                { text: "Hyper text transfer package" },
                { text: "Hyper text transfer protocol" },
                { text: "Hyphenation text test program" },
                { text: "None of the above" }
            ]
        },
    ]
};


var app = new Vue({

    el: "#app",
    data: {
        quiz: quiz,
        questionIndex: 0,
        userResponses: userResponseSkelaton,
        isActive: false
    },

    filters: {
        charIndex: function(i) {
            return String.fromCharCode(97 + i);
        }
    },

    methods: {

    }
});