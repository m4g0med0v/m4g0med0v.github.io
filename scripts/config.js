// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'hamid',
	twelveHourFormat: false,
	timeZone: 'Europe/Moscow',

	// Greetings
	greetingMorning: 'Доброе утро!',
	greetingAfternoon: 'Добрый день,',
	greetingEvening: 'Добрый вечер,',
	greetingNight: 'Идти спать!',

	// Weather
	weatherKey: '8b05d62206f459e1d298cbe5844d7d87',
	weatherIcons: 'OneDark',
	weatherUnit: 'C',
	language: 'ru',

	trackLocation: true,
	defaultLatitude: '45.0428',
	defaultLongitude: '41.9733',

    firstLinkBlock: [
        {
            position: 1,
            name: "Vk",
            icon: "vk.png",
            link: "https://vk.com/",
        },
        {
            position: 2,
            name: "Mail",
            icon: "mail.svg",
            link: "https://mail.ru/",
        },
        {
            position: 3,
            name: "YTranslate",
            icon: "translate.ico",
            link: "https://translate.yandex.ru/"
        },
        {
            position: 4,
            name: "Youtube",
            icon: "youtube.png",
            link: "https://www.youtube.com/"
        },
        {
            position: 5,
            name: "Google Drive",
            icon: "google_drive.svg",
            link: "https://drive.google.com/"
        },
        {
            position: 6,
            name: "ChatGPT",
            icon: "chatgpt.webp",
            link: "https://chatgpt.com/"
        },
        {
            position: 7,
            name: "EES",
            icon: "ees.ico",
            link: "https://el.ncfu.ru/"
        },
        {
            position: 8,
            name: "Ecampus",
            icon: "ecampus.png",
            link: "https://ecampus.ncfu.ru/"
        },
        {
            position: 9,
            name: "Kwork",
            icon: "kwork.webp",
            link: "https://kwork.ru/projects"
        },
        {
            position: 10,
            name: "Notion",
            icon: "notion.ico",
            link: "https://www.notion.so/"
        },
        
        
    ],
    secondLinkBlock: [
        {
            position: 3,
            name: "GitHub",
            icon: "github.svg",
            link: "https://github.com/",
        },
        {
            position: 4,
            name: "LeetCode",
            icon: "leetcode.png",
            link: "https://leetcode.com/problemset/",
        },
        {
            position: 5,
            name: "NeedCode",
            icon: "needcode.png",
            link: "https://neetcode.io/",
        },
        {
            position: 6,
            name: "NixOS",
            icon: "nixos.webp",
            link: "https://nixos.wiki/",
        },
        {
            position: 7,
            name: "ArchLinux",
            icon: "archlinux.png",
            link: "https://wiki.archlinux.org/",
        },
        {
            position: 8,
            name: "Monkeytype",
            icon: "monkeytype.png",
            link: "https://monkeytype.com/",
        },
        
        
        
    ],
    thirdLinkBlock: [
        {
            position: 6,
            name: "Programming",
            icon: "programming.png",
            link: "programming/index.html",
        },
    ],
}
