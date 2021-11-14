import avatar from '@salesforce/resourceUrl/avatar';
import SOCIAL from '@salesforce/resourceUrl/SOCIAL';

export const  PROFILE_IMAGE = avatar

export const SOCIAL_LINKS =[
    {
        type:'linkedin',
        label: 'linkedin/alex-marchyk',
        link: 'https://www.linkedin.com/in/alex-marchyk/',
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },

    {
        type:'trailhed',
        label: 'trailhed/alex-marchyk',
        link: 'https://trailblazer.me/id/marchyk',
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    },

]

export const USER_DETAILS ={
    NAME: 'Alex Marchyk',
    ROLE : 'Junior SF Developer | Aquiva Labs ',
    EMAIL: 'alexmarcyk@gmail.com',
    PHONE:'0123 456 78900'
}
export const CAREER_SUMMARY={
    HEADING:"CAREER SUMMARY",
    DESCRIPTION: "SomethingYour Career Summary goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    KEYS_POINTS:[
        "If You want to add summary points it comes here. and its optional",
        "keypoint 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        "keypoint 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "keypoint 4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    ]
}

export const EXPERIENCE_DATA = {
    HEADING: "Work Experience",
    EXPERIENCES: [
        {
            ROLE: "SF Developer",
            COMPANY_NAME: "Aquiva Labs",
            DURATION: "2021 - Present",
            DESCRIPTION:
                "Application development on the SF platform ",
            DESCRIPTION_POINTS: [
                " You description Points 1 goes here. consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                "You description Points 2 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
                "You description Points 3 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
                "You description Points 4 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Javascript",
                    "HTML5",
                    "CSS3",
                    "LWC"
                    
                ]
            },
        },
        {
            ROLE: "SF Developer Trainee",
            COMPANY_NAME: "Success Craft",
            DURATION: "2021 - 2021",
            DESCRIPTION:
                "Your Job description goes hereiusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            DESCRIPTION_POINTS: [
                " You description Points 1 goes here. consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                "You description Points 2 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
                "You description Points 3 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
                "You description Points 4 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "HTML5",
                    "CSS3",
                    "Javascript",
                    "LWC"
                ]
            }
        },
    ]
}

export const EDUCATION_DATA ={
    ICON: SOCIAL + '/SOCIAL/education.svg',
     HEADING: "EDUCATION",
     LIST:[
         {
             NAME: "Industrial engineer",
             UNIVERSITY_NAME: "Baranovichi State University",
             DURATION: "2011 - 2016",
         }    
     ]
}

export const LANGUAGES_DATA={
    HEADING: "Languages",
    LIST: [
        {
            NAME: "English",
            LEVEL: "B1",
        },
        
    ]
}

export const SKILLS_DATA ={
    HEADING: "SKILLS & TOOLS",
    SKILLS:[
        {
            HEADING: "FRONTEND",
            SKILLS_LIST: [
                { NAME: "JavaScript(ES5/ES6/)", LEVEL: "50" },
                { NAME: "HTML5/CSS3/SASS/", LEVEL: "70" },
            ],
        },
        
        {
            HEADING: "CRM/CMS",
            SKILLS_LIST: [
                { NAME: "Salesforce", LEVEL: "30" }
            ],
        }
    ],
}