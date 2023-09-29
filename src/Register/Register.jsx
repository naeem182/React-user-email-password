

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(email, pass)
    }

    return (
        <div className=" border">
            <div className=" mx-auto md:w-1/2">
                <h2 className="text-3xl">Register Now</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-2 py-3 " type="email" id="" name="email" placeholder="write e mail" /><br />
                    <input type="password" name="password" placeholder="type pass" /> <br />


                    <input type="submit" />



                </form>
            </div>
        </div>
    )
}

export default Register
