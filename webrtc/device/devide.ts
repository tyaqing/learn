let audioSource: HTMLSelectElement = document.querySelector('select#audioSource')
let audioOutput: HTMLSelectElement = document.querySelector('select#audioOutput')
let videoSource: HTMLSelectElement = document.querySelector('select#videoSource')

if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    console.log('enumerateDevices is not supported!');
} else {
    navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);
}

function gotDevices(devicesInfo) {
    devicesInfo.forEach((deviceInfo) => {
        console.log(deviceInfo);
    })
}

function handleError(err) {
    console.log(err)
}