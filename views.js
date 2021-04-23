// views
app.get('/', (req, res) => {
    const { username } = req.session
    console.log(username)

    res.send(`
        <h1>Hello</h1>
        ${username ? `
        <a href = '/home'>Home</a>

        <form method='post' action = '/logout'>
        <button> Logout</button>
        </form>
        ` : `
        <a href = '/login'>Login</a>
        <a href = '/signup'>Signup</a>
        ` }
        
    `)

});
app.get('/login', redirectHome, (req, res) => {
    res.send(`
    <h1> Login </h1>
    <form method='post' action = '/login'>
    <input name = 'username' placeholder= 'Username' required/>
    <input name = 'password' placeholder= 'Password' required/>
    <input type= 'submit'/>
    
    </form>
    <a href = '/signup'>Signup</a>

    `)

});
app.get('/home',redirect, (req, res) => {
    res.send(`
    <h1>Home</h1>
    <a href= '/'> Main </a>
    <ul>
    <li> Username: </li>
    <li> Shapes: </li?
    </ul>

    `)

});
app.get('/logout', (req, res) => {

});
app.get('/signup', redirectHome, (req, res) => {
    res.send(`
    <h1> Signup </h1>
    <form method='post' action = '/signup'>
    <input name = 'username' placeholder= 'Username' required/>
    <input name = 'password' placeholder= 'Password' required/>
    <input type= 'submit'/>
    
    </form>
    <a href = '/login'>Login</a>

    `)

});