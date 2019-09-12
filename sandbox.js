const form = document.querySelector('form');
const list = document.querySelector('ul');

const addRecipe = recipe => {
    let time = recipe.created_at.toDate();
    let html = `
    <li>
    <div>${recipe.title} 
    <div style="font-size:small; color:#999;"> ${time}</div>
</div>
    </li>
    `;
    list.innerHTML += html;
}


db.collection('recipes').get().then((snapshot) => {
    snapshot.forEach(doc => {
        addRecipe(doc.data());
    })
}).catch(err => {
    console.log(err)
})


// add docuemnts

form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();

    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now),

    };

    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added')
    }).catch(err => { console.log(err) });

})