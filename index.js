document.addEventListener('DOMContentLoaded', submitData());

function submitData(userName,userEmail) {
    
    let userObj = {
        name: userName,
        email: userEmail
    }

    const userlocation = 'http://localhost:3000/users';

    const postMethod = {
    //method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
     },
    body: JSON.stringify(userObj)
}

    return fetch(userlocation, postMethod)
    .then( res => res.json())
    .then(data =>  document.body.append(data.id))
    .catch(error => document.body.append(error.message))

}








// const destinationURL = 'http://localhost:3000/dogs'

// const formData = {
//     dogName: "Lincoln",
//     dogBreed: "Pembroke Welsh Corgi",
// };


// const configurationObject = {
//   method: "POST",
    // headers: {
    //     "Content-Type": "Application/json",
    //     "Accept": "Application?json",
//     },
//     body: JSON.stringify(formData)
// }
// fetch(destinationURL, configurationObject);