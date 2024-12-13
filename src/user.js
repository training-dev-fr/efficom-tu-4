const auth = async (login,password) => {
    let result = await fetch('http://localhost:3000/connect',{
        method: "POST",
        body: JSON.stringify({
            login: login,
            password: password
        })
    });
    let data = await result.json();
    if(result.ok){
        localStorage.addItem('user',JSON.stringify(data));
    }else{
        console.log(data.message);
    }
}