const Balance = () => {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const ctx = React.useContext(UserContext);

  const handleBalance = () => {
    console.log('handleBalance');
  }

  return (
    <BankForm 
      bgcolor="success"
      label="Balance"
      handle={handleBalance}
      hideName={true}
      hidePassword={true}
      hideAmount={true}
    />
  )

  /*
  const CreateMsg = (props) => {
    return (
      <>
        <h5></h5>
        <button type="submit" className="btn btn-light" onClick={() => props.setShow(true)}>Your balance is: {balance}</button>
      </>
    );
  }

  const CreateForm = (props) => {
    const [currentUserEmail, setCurrentUserEmail] = React.useState('');
    const [balance, setBalance] = React.useState(100);
    const ctx = React.useContext(UserContext);

    const handle = () => {
      console.log(balance);
      props.setShow(false);
    }

    return (
      <>
        Email<br/>
        <input type="input" className="form-control" placeholder="Enter Email" value={currentUserEmail} onChange={e => setCurrentUserEmail(e.currentTarget.value)} /><br/>

        <button type="submit" className="btn btn-light" onClick={handle}>Check Balance</button>
      </>
    );
  }

  return (
    <Card
      bgcolor="success"
      header="Balance"
      status={status}
      body={show ? <CreateForm setShow={setShow}/> : <CreateMsg setShow={setShow}/>}
    />
  )
  */
}