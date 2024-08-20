
// dashboard
const userName = document.getElementById("userName")
const walletBalance = document.getElementById("walletBalance")
// const walletBalances = document.getElementById('walletBalances')
firebase.auth().onAuthStateChanged((user)=> {
    if (user) {
        const userId = user.uid;
        // Get a reference to the database
        const database = firebase.database();
        const ref = database.ref(`users/${userId}`);

        // Retrieve data once
        ref.once('value')
        .then((snapshot) => {
            const data = snapshot.val();
            console.log(data);
            userName.innerText = 'Hi, ' + data.username
            walletBalance.innerText = '$' + data.amount + '.00'

        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

    } else {
        // window.location.replace("index.html")
    }
})





const logOutBtn = document.getElementById("logOutBtn")
logOutBtn.addEventListener('click', ()=> {
    firebase.auth().signOut()
        .then(() => {
            // Sign-out successful.
            console.log('User signed out');
            window.location.href = "https://granite-finance.github.io/on/login.html";
        })
        .catch((error) => {
            // An error happened.
            console.error('Error signing out:', error);
    });

})






