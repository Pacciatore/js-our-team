console.log('JS OK!');

const teamMembers = [
    {
        name: 'Wayne Barrett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
]

console.log('Team Members array: ', teamMembers)

for (let i = 0; i < teamMembers.length; i++) {
    console.log(i + 1 + '.');
    console.log('Nome: ', teamMembers[i].name);
    console.log('Ruolo: ', teamMembers[i].role);
    console.log('Immagine: ', teamMembers[i].photo);
    console.log('--------------------');
}