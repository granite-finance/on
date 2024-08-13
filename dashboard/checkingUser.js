firebase.auth().onAuthStateChanged((user)=> {
    if (user) {
        setTimeout(function(){
            window.location.replace("/dashboard/dashboard.html");
        }, 1000)
    } 
})