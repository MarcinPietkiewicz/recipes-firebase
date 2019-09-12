const form = document.querySelector('form');
const list = document.querySelector('ul');
const button = document.querySelector('.unsubscribe')

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

const removeRecipe = id => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if (recipe.getAttribute('data-id') === id) {
            recipe.remove();
        }
    })
}

// subscribe to database and update recipe list
const unsub = db.collection('recipes').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if (change.type === 'added') {
            addRecipe(doc.data(), doc.id);
        } else if (change.type === 'removed') {
            removeRecipe(doc.id);
        }
    })
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
    }).catch(err => { console.log(err) });

})

// deleting recipe from the list and firebase
list.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id')
        db.collection('recipes').doc(id).delete().then(() => {
        });
    }
})

// unsubscribe from database changes
button.addEventListener('click', e => {
    unsub();
    console.log('unsubscribed from collection changes');
})