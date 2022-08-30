const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

const Card = (props) => {
  const classes = () => {
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "18rem"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id="createStatus">{props.status}</div>)}
      </div>
    </div>
  );
}


const BankForm = (props) => {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  
  const CreateMsg = (props) => {
    return (
      <>
      {props.label !== "Balance" ?
        <div>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={() => props.setShow(true)}>{props.successButton}</button>
        </div>
        :
        <div>
          <h5>Your Balance is: </h5>
        </div>
      }
      </>
    );
  }

  const CreateForm = (props) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [balance, setBalance] = React.useState(0);
    const [amount, setAmount] = React.useState();
    const [hideName, setHideName] = React.useState(props.hideName);
    const [hidePassword, setHidePassword] = React.useState(props.hidePassword);
    const [hideAmount, setHideAmount] = React.useState(props.hideAmount);
    const ctx = React.useContext(UserContext);

    /*
    const handle = () => {
      console.log(name, email, password, balance);
      ctx.users.push({name, email, password, balance});
      props.setShow(false);
    }
    */

    const handleClick = (props) => {
      props.handle;
      setShow(false);
    }


    return (
      <>
      {hideName ? '' :
        <div>
          Name<br/>
          <input type="input" className="form-control" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
        </div>
      }
        Email<br/>
        <input type="input" className="form-control" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>

      {hidePassword ? '' :
        <div>
          Password<br/>
          <input type="password" className="form-control" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
        </div>
      }

      {hideAmount ? '' : 
        <div>
          Amount<br/>
          <input type="input" className="form-control" placeholder="Enter Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
        </div>
      }

        <button type="submit" className="btn btn-light" onClick={handleClick}>{props.label}</button>
      </>
    );
  }
  return (
    <Card
      bgcolor={props.bgcolor}
      header={props.label}
      status={status}
      body={show ? <CreateForm setShow={setShow} handle={props.handle} label={props.label} hideName={props.hideName} hidePassword={props.hidePassword} hideAmount={props.hideAmount}/> : <CreateMsg setShow={setShow} label={props.label} successButton={props.successButton}/>}
    />
  );
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
const BankForm = () => {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  
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
      ctx.users.push({name, email, password, balance});
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
  );
}
*/