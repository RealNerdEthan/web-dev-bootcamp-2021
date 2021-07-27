//Async function declaration
async function hello(){

}

//Async arrow function
// const sing = async () => {
//     return 'LA LA LA LA'
// }

// sing()
//     .then(function(data){
//     //The error below shows what happens when the promise is rejected (gives an error)
//     //throw new Error('Opps! Error encountered!')
//     console.log('Promise resolved with:', data)
//     })
//     .catch(function(error){
//         console.log('Promise rejected');
//         console.log(error)
//     })


//New Aysnc function ------------------------------------------------------------------------------

const fakeLogin = async function(username, password){
    if(!username || !password) throw 'Missing Credientals'
    if(password === 'startrek') return 'Logged in!'
    throw 'Invalid Password'
}

fakeLogin('Ethan', 'startrek')
    .then(function(message){
        console.log('Success!', message)
    })
    .catch(function(error){
        console.log('Error:', error)
    })