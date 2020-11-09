// Scan
function scan(){
  //const SERVICE_UUID = 0x180f;
  navigator.bluetooth.requestDevice({
    filters: [{
      name: 'Blank',
    }]
  })
}
