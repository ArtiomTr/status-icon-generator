export const downloadFont = (path: string): Promise<ArrayBuffer> => {
    return new Promise((resolve, reject) => {
        const oReq = new XMLHttpRequest();
        oReq.open('GET', path, true);
        oReq.responseType = 'arraybuffer';

        oReq.onload = () => {
            const arrayBuffer = oReq.response;

            resolve(arrayBuffer);
        };

        oReq.onerror = () => {
            reject();
        };

        oReq.send(null);
    });
};
