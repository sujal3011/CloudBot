let auth = firebase.auth();
let db=firebase.firestore();

function register()
{
    console.log("Hello world")
    const email=document.getElementById("email").value
    const name =document.getElementById("name").value
    const password=document.getElementById("password").value

    // if(validate_email(email)==false || validate_password(password)==false){
    //     alert("Invalid email or password")
    //     return
    // }

    // if(validate_field(name)==false){
    //     alert("Name field not valid")
    //     return
    // }

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(async function(){
        let user = firebase.auth().currentUser

        var user_data={
            email:email,
            name:name,
            password:password,
            last_login:Date.now()
        }

        await firebase.firestore().doc("users/"+user.uid).set(user_data)


        alert("Account created successfully");
        window.location.href = "index.html";


    })
    .catch(function(error){
        console.log(error);
    })

    

}


function login()
{

    const email=document.getElementById("login-email").value;
    const password=document.getElementById("login-password").value;


  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential)=> {

    // let user = firebase.auth().currentUser
    let user = userCredential.user;
    console.log(user)
    alert("Signed in successfully");
    // window.location.href = "index.html";

    // document.getElementById("current_user").value=user.name

  })
  .catch((error) => {
    console.log(error);
    window.location.href = "signup.html";
  });


}

function validate_email(email){
    expression=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(expression.test(email)==true){
        return true
    }
    else{
        return false
    }
}

function validate_password(password){
    if(password <6){
        return false
    }
    else{
        return true
    }
}

function validate_field(field){
    if(field==null){
        return false
    }
    if(field.length<=0){
        return false
    }
    else{
        return true
    }
}




