export const isAuthenticated = async () => {

      let token = localStorage.getItem('token')
      let tokenValidado

    try {
        let retorno = await fetch('http://localhost:5000/users/login/authenticated', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                "token": token,
            })
        })
        let json = retorno.json()
        console.log(json)
        console.log(json.tokenValidado)
        if(json.tokenValidado === true){
            return tokenValidado = true
            
        }
        else if(json.tokenValidado === false || token === null || token === undefined){
            return tokenValidado = false
            
        }

    } catch (error) {
        console.log(error)
    }

}

