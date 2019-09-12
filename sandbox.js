const form = document.querySelector('form');
const list = document.querySelector('ul');

// adding recipe to DOM

const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate();
    let html = `
    <li data-id="${id}">
    <div>${recipe.title} </div>
    <div style="font-size:small; color:#999;">${time} </div>
    <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `;
    list.innerHTML += html;
}

// fetching recipes
db.collection('recipes').get().then((snapshot) => {
    // when we have the data 
    snapshot.forEach(doc => {
        addRecipe(doc.data(), doc.id);
    })
}).catch(err => {
    console.log(err)
})

// submitting recipe to firestore
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

// deleting recipe
list.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id')
        db.collection('recipes').doc(id).delete().then(() => {
            console.log('recipe deleted');
        });
    }


})