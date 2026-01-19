import type { Context } from "./types.ts";

export const demodata: Context[] = [
		{
			title: "Programmeren Leren",
			chats: [
				{
					title: "Hulp met theorie leren",
					messages: [
                        {
                            sender: "user",
                            type: "text",
                            timestamp: new Date(),
                            content: "Kan je me helpen met leren over loops?"
                        },
                        {
                            sender: "bot",
                            type: "text",
                            timestamp: new Date(),
                            content: "Natuurlijk! Laten we eerst beginnen met wat vragen over while-loops om te zien wat je al weet."
                        },
                        {
                            sender: "bot",
                            type: "multiple-choice",
                            timestamp: new Date(),
                            question: "Wat gebeurt er als je vergeet een teller te verhogen in een while-loop?",
                            options: [
                                "De loop wordt automatisch gestopt", 
                                "Er onstaat een ondeindige loop", 
                                "De loop gaat naar de volgende iteratie", 
                                "De loop wordt één keer uitgevoerd"
                            ],
                            answer: 1
                        },
                        {
                            sender: "bot",
                            type: "multiple-choice",
                            timestamp: new Date(),
                            question: "Wat gebeurt er als je een continue doet in een while-loop?",
                            options: [
                                "De loop wordt automatisch gestopt", 
                                "Er onstaat een ondeindige loop", 
                                "De loop gaat naar de volgende iteratie", 
                                "De loop wordt één keer uitgevoerd"
                            ],
                            answer: 2,
                            wrong_answer: 0,
                        },
                        {
                            sender: "user",
                            type: "text",
                            timestamp: new Date(),
                            content: "Waarom is dat zo?"
                        },
                        {
                            sender: "bot",
                            type: "text",
                            timestamp: new Date(),
                            content: "Een continue statement zorgt ervoor dat de huidige herhaling van een lus wordt overgeslagen. Wanneer de computer een continue tegenkomt in een lus, stopt hij meteen met de code die nog in diezelfde herhaling zou moeten worden uitgevoerd en begint hij direct aan de volgende herhaling van de lus."
                        },
					]
				},
				{
					title: "Hulp met programmeren",
					messages: [
                        {
                            sender: "user",
                            type: "text",
                            timestamp: new Date(),
                            content: `Wat is er mis met deze code?

function doeIets(x) {
    if (x > 10) {
        return "groot";
    } else if (x <= 10 && x > 5) {
        return "medium";
    } else if (x <= 5 && x > 0) {
        return "klein";
    } else if (x <= 0) {
        return "negatief";
    }
}`
                        },
                        {
                            sender: "bot",
                            type: "text",
                            timestamp: new Date(),
                            content: `Op het eerste gezicht lijkt de code te werken voor normale getallen, maar technisch gezien is de code niet efficiënt geschreven en vatbaar voor onverwacht gedrag bij verkeerde input.

Hier zijn de drie belangrijkste punten die "mis" (of voor verbetering vatbaar) zijn:

1. Overbodige logica (Redundantie)

De grootste stilistische fout is dat je condities dubbel checkt. Omdat if/else statements van boven naar beneden worden uitgevoerd, hoef je niet te controleren wat je al hebt uitgesloten.

Voorbeeld: Als de code aankomt bij de regel else if (x <= 10 && x > 5), weten we automatisch al dat x niet groter is dan 10 (anders was de eerste if al afgegaan). Het stukje x <= 10 is dus overbodig.

2. De laatste else if is onnodig

Aan het einde check je else if (x <= 0). Als een getal niet groot, medium of klein is (dus niet > 0), dan is het per definitie 0 of lager. Hier volstaat een simpele else.
3. Geen afhandeling van niet-nummers (Edge cases)

Wat gebeurt er als je doeIets("hallo") of doeIets(NaN) aanroept?

    Alle vergelijkingen falen (resulteren in false).

    De functie slaat alle blokken over.

    De functie returnt impliciet undefined.

Het is beter om aan het einde een vangnet te hebben (de else) of aan het begin te checken of de input wel een getal is.`
}
					]
				}
			]
		},
		{
			title: "Web dev security",
			chats: [
                {
                    title: "Hulp met concepten",
                    messages: [
                        {
                            sender: "user",
                            type: "text",
                            timestamp: new Date(),
                            content: "Kun je me uitleggen wat een XSS aanval is?"
                        },
                        {
                            sender: "bot",
                            type: "text",
                            timestamp: new Date(),
                            content: `XSS is een aanval waarbij een hacker kwaadaardige scripts laat uitvoeren in de browser van andere bezoekers van jouw website, vaak via invoervelden die je website onveilig weergeeft.

Wil je weten hoe je je hiertegen kunt beschermen?`
                        },
                        {
                            sender: "user",
                            type: "text",
                            timestamp: new Date(),
                            content: "Waarom doet Firefox dit niet voor mij?"
                        },
                        {                            
                            sender: "bot",
                            type: "text",
                            timestamp: new Date(),
                            content: `Je browser (Firefox) doet wel iets, maar het kan het probleem niet alleen oplossen. Hier is waarom:

Je browser vertrouwt je website.
Zodra jouw server code naar de browser stuurt, gaat Firefox ervan uit dat die code legitiem is en voert het uit. De browser kan niet weten of een script door jou, de ontwikkelaar, is bedoeld of door een hacker via een reactieveld is binnengeslopen.`
                        }
                    ]
                }
            ]
		}
]