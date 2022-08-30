const Deposit = () => {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const ctx = React.useContext(UserContext);

  const handleDeposit = () => {
    console.log('handleDeposit');
  }

  return (
    <BankForm 
      bgcolor="warning"
      label="Deposit"
      handle={handleDeposit}
      successButton="Make Another Deposit"
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
        <button type="submit" className="btn btn-light" onClick={() => props.setShow(true)}>Make Another Deposit</button>
      </>
    );
  }

  const CreateForm = (props) => {
    const [currentUserEmail, setCurrentUserEmail] = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    const ctx = React.useContext(UserContext);

    const handle = () => {
      console.log(deposit);
      props.setShow(false);
    }

    return (
      <>
        Email<br/>
        <input type="input" className="form-control" placeholder="Enter Email" value={currentUserEmail} onChange={e => setCurrentUserEmail(e.currentTarget.value)} /><br/>

        Deposit<br/>
        <input type="input" className="form-control" placeholder="Enter Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>

        <button type="submit" className="btn btn-light" onClick={handle}>Deposit</button>
      </>
    );
  }

  return (
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={show ? <CreateForm setShow={setShow}/> : <CreateMsg setShow={setShow}/>}
    />
  )
  */
}