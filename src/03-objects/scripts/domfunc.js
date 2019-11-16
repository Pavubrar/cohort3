const domfuncs = {

  delete:(currentAccount, leftSide) => {
      idLeftSide.removeChild(currentAccount);
  },
  addNew: (idLeftSide, newAccountType) => {
      let newCard = document.createElement("div");
      newCard.className = "accountCard";
      let newCardHeader = document.createElement("h2");
      newCardHeader.className = "cardHeader";
      newCardHeader.textContent = `${newAccountType}`;
      let inputField = document.createElement("input");
      inputField.className = "inputField";
      inputField.type ="Number";
      inputField.placeholder = "amount to withdraw/deposit";
      let deposit = document.createElement("button");
      deposit.className = "deposit";
      deposit.textContent = `Deposit`;
      let withdraw = document.createElement("button");
      withdraw.className = "withdraw";
      withdraw.textContent = `Withdraw`;
      let newDelete = document.createElement("button");
      newDelete.className = "delete";
      newDelete.textContent = `Delete`;
      let balance = document.createElement("button");
      balance.className = "balance";
      balance.textContent = `Balance`;
      newCard.appendChild(newCardHeader);
      newCard.appendChild(inputField);
      newCard.appendChild(deposit);
      newCard.appendChild(withdraw);
      newCard.appendChild( newDelete);
      newCard.appendChild(balance);
      idLeftSide.appendChild(newCard);

  },
  addExtra: (leftSide) => {
      let highestBalance = document.createElement("button");
      highestBalance.className ="highestBalance";
      highestBalance.textContent = "Highest Balance";
      let lowestBalance = document.createElement("button");
      highestBalance.className ="hlowestBalance";
      highestBalance.textContent = "Lowest Balance";
      let totalBalance = document.createElement("button");
      highestBalance.className ="totalBalance";
      highestBalance.textContent = "Total Balance";
      let extraDiv = document.createElement("div");
      extraDiv.className ="extraDiv";
      extraDiv.appendChild(highestBalance);
      extraDiv.appendChild(lowestBalance);
      extraDiv.appendChild(totalBalance);
      idLeftSide.inertBefore(extraDiv, idLeftSide.children[3])
  },
  deleteExtra: (leftSide) => {
      idLeftSide.removeChild(idLeftSide.children[3]);
  }
};
export default domfuncs;