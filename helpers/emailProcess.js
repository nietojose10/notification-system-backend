//Function which simulates the process of send a sms
const handleEmailProcess = ( messageData ) => {
    
    const emailProcess = new Promise( (resolve, reject) => {

        const num = 50;

        setTimeout(
            () => {
                resolve({ 
                    ok: true,
                    messageData: messageData
                 });
            },
            Math.random() * 2000 + 1000
        );

        //Testing a rejected response
        if ( num === 10 ){
            reject({
                ok: false,
                messageData: messageData
            });
        }

    });

    return emailProcess;
}

module.exports = { handleEmailProcess };