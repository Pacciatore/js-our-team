console.log('JS OK!');

const teamDisplay = document.getElementById('team-display');
console.log(teamDisplay);

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
    const teamMate = teamMembers[i];
    console.log(i + 1 + '.');

    teamDisplay.innerHTML += `<div class="col-12 d-flex justifiy-content-between p-3">
        <div class="col-4"><img src="img/${teamMate.photo}" alt="${teamMate.photo}" class="img-fluid border-radius-2"/></div>
        <div class="col-4 fw-bold text-center">${teamMate.name}</div>
        <div class="col-4 text-center">${teamMate.role}</div>
    </div>`;

    console.log('Nome: ', teamMate.name);
    console.log('Ruolo: ', teamMate.role);
    console.log('Immagine: ', teamMate.photo);
    console.log('--------------------');
}