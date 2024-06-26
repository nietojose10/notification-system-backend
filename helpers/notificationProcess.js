//Function which simulates the process of send a push notification
const handleNotificationProcess = ( messageData ) => {
    
    const notificationProcess = new Promise( (resolve, reject) => {

        const num = 50;

        setTimeout(
            () => {
                resolve({ 
                    ok: true,
                    messageData: { ...messageData, creationDate: new Date() }
                 });
            },
            Math.random() * 2000 + 1000
        );

        //Testing a rejected response
        if ( num === 10 ){
            reject({
                ok: false,
                messageData: { ...messageData, creationDate: new Date() }
            });
        }

    });

    return notificationProcess;
}

module.exports = { handleNotificationProcess };