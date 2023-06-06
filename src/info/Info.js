let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
colors = ["white", "black"]

export const info = {
    firstName: "Mo",
    lastName: "Lotfollahi",
    initials: "ML", // the example uses first and last, but feel free to use three or more if you like.
    position: "I work on machine learning and Biology",
    selfPortrait: "self", // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like

        {
            text: 'Wellcome Sanger Institute',
            affiliation: 'Wellcome Sanger Institute',
            link: 'https://www.sanger.ac.uk',
            logo: 'sanger'
        },

         {
            text: 'Helmholtz Munich',
            affiliation: 'Theislab, Helmholtz Munich',
            link: 'https://www.helmholtz-munich.de/en/icb/b',
            logo: 'helmholtz'
        },
        {
            text: "Technical University of Munich",
            affiliation: 'Technical University of Munich',
            link: 'https://www.tum.de',
            logo: 'tum'
        },

    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    // TODO: maybe add a section of starred projects, similar to what is in the tutorial
}