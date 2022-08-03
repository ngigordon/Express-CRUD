
const signin = (e) => {
    e.preventDefault();
    const username = $('#your_name').val();
    const password = $('#your_pass').val();
    if(username.length && password.length){
        console.log("form is completely fill");
        // console.log(`name is ${!!username.length}`);
        // console.log(`Password is ${!!password.length}`);

        fetch('http://localhost:5500/api/login',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                username,
                password
            })
        })
        .then(res => res.json())
        .then(confirmation=>{
          $('#messageRes').text(confirmation.msg)
          loginStatus(confirmation.status)
        }).catch((err) => {
            $('#messageRes').text(err)
        })
    } else{
        console.log("fill all information");
    }
}

$('#signin').on('click',(e) => {
    signin(e) 
} )

const loginStatus = (status) => {
    if(status){
        window.location.href = "htttp://nteclabs.com"
    }
}




//register sectiom of the program
const register = (e) => {
    e.preventDefault();
    const name = $('#name').val();
    const email = $('#email').val();
    const pass = $('#pass').val();
    const rePass = $('#re_pass').val();
    if(name.length&&email.length&&pass.length&&rePass.length){
       if(pass ===rePass && pass.length>7){
         console.log('good to Go');
       }else{
        console.log('make sure confirm password is equal to the password and more than 8 characters');
        $('.strPwd').text('password should have more than 7 characters').css('color','red')
       }
    }else{
        console.log("endeavor to fill values in all the field");
    }
}
//checking the password at runtime
const pwdLgthstrong = () => {
    $('#pass').on('input',() => {
        let cnpwd = $('#pass').val()
        if(cnpwd.length < 7){
            $('.strPwd').text('password is weak').css('color','red')

        }else{            
            $('.strPwd').text('password is strong').css('color','chartreuse')

        }
    }) 
}
pwdLgthstrong()

$('#signup').on('click',(e) => {
    register(e)
})
const sendPostReq = (na,em,pa,repa) => {
    
    // fetch('http://localhost:5500/api/register',{
    //     method:"POST",
    //     headers:{
    //         'content-type':'application/json'
    //     },
    //     body:JSON.stringify({
    //         na,
    //         em,
    //         pa,
    //         repa
    //     })
    // })
    // .then(res => res.json())
    // .then(confirmation=>{
    //   $('#confirmReq').text(confirmation.msg)
    //   loginStatus(confirmation.status)
    // }).catch((err) => {
    //     $('#confirmReq').text(err)
    // })
    
}



