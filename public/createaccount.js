const CreateAccount = () => {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const ctx = React.useContext(UserContext);

  const handleCreateAccount = () => {
    console.log('handleCreateAccount');
  }

  return (
    <BankForm 
      bgcolor="primary"
      label="Create Account"
      handle={handleCreateAccount}
      successButton="Create Another Account"
      hideName={false}
      hidePassword={false}
      hideAmount={true}
    />
  )

  /*
  const CreateMsg = (props) => {
    return (
      <>
        <h5>Success</h5>
        <button type="submit" className="btn btn-light" onClick={() => props.setShow(true)}>Add Another Account</button>
      </>
    );
  }

  const CreateForm = (props) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [balance, setBalance] = React.useState(0);
    const ctx = React.useContext(UserContext);

    const handle = () => {
      console.log(name, email, password, balance);
      const url = `/account/create/${name}/${email}/${password}`;
      (async () => {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
      }) ();
      props.setShow(false);
    }

    return (
      <>
        Name<br/>
        <input type="input" className="form-control" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>

        Email<br/>
        <input type="input" className="form-control" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>

        Password<br/>
        <input type="password" className="form-control" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>

        <button type="submit" className="btn btn-light" onClick={handle}>Create Account</button>
      </>
    );
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? <CreateForm setShow={setShow}/> : <CreateMsg setShow={setShow}/>}
    />
  )
  */
}