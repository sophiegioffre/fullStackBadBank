const Withdraw = () => {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const ctx = React.useContext(UserContext);

  const handleWithdraw = () => {
    console.log('handleWithdraw');
  }

  return (
    <BankForm 
      bgcolor="info"
      label="Withdraw"
      handle={handleWithdraw}
      successButton="Make Another Withdraw"
      hideName={true}
      hidePassword={true}
      hideAmount={false}
    />
  )

  /*
  const CreateMsg = (props) => {
    return (
      <>
        <h5></h5>
        <button type="submit" className="btn btn-light" onClick={() => props.setShow(true)}>Make Another Withdraw</button>
      </>
    );
  }

  const CreateForm = (props) => {
    const [currentUserEmail, setCurrentUserEmail] = React.useState('');
    const [withdraw, setWithdraw] = React.useState('');
    const ctx = React.useContext(UserContext);

    const handle = () => {
      console.log(withdraw);
      props.setShow(false);
    }

    return (
      <>
        Email<br/>
        <input type="input" className="form-control" placeholder="Enter Email" value={currentUserEmail} onChange={e => setCurrentUserEmail(e.currentTarget.value)} /><br/>

        Withdraw<br/>
        <input type="input" className="form-control" placeholder="Enter Withdraw Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br/>

        <button type="submit" className="btn btn-light" onClick={handle}>Withdraw</button>
      </>
    );
  }

  return (
    <Card
      bgcolor="info"
      header="Withdraw"
      status={status}
      body={show ? <CreateForm setShow={setShow}/> : <CreateMsg setShow={setShow}/>}
    />
  )
  */
}