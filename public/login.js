const Login = () => {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const ctx = React.useContext(UserContext);

  const handleLogin = () => {
    console.log('handleLogin');
  }

  return (
    <BankForm 
      bgcolor="secondary"
      label="Login"
      handle={handleLogin}
      successButton="Login to Another Account"
      hideName={true}
      hidePassword={false}
      hideAmount={true}
    />
  )

  /*
  const CreateMsg = (props) => {
    return (
      <>
        <h5>Login Successful</h5>
        <button type="submit" className="btn btn-light" onClick={() => props.setShow(true)}>Log Out</button>
      </>
    );
  }

  const CreateForm = (props) => {
    const [currentUserEmail, setCurrentUserEmail] = React.useState('');
    const [currentUserPassword, setCurrentUserPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    const handle = () => {
      console.log(currentUserEmail, currentUserPassword);
      props.setShow(false);
    }

    return (
      <>
        Email<br/>
        <input type="input" className="form-control" placeholder="Enter Email" value={currentUserEmail} onChange={e => setCurrentUserEmail(e.currentTarget.value)} /><br/>

        Password<br/>
        <input type="password" className="form-control" placeholder="Enter Password" value={currentUserPassword} onChange={e => setCurrentUserPassword(e.currentTarget.value)} /><br/>

        <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
      </>
    );
  }

  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={show ? <CreateForm setShow={setShow}/> : <CreateMsg setShow={setShow}/>}
    />
  )
  */
}