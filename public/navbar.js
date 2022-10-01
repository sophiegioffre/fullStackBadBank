const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#" onClick="defaultModule()">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" onClick="loadCreateAccount()" id="createAccount">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/" onClick="loadLogin()" id="login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" onClick="loadDeposit()" id="deposit">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" onClick="loadWithdraw()" id="withdraw">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/" onClick="loadBalance()" id="balance">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" onClick="loadAllData()" id="allData">AllData</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}