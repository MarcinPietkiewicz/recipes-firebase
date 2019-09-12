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
        console.log(doc.data());
        addRecipe(doc.data());
    })
}).catch(err => {
    console.log(err)
})