const sensor = require('node-dht-sensor')
const dht = 11
const pinoDHT = 21
const delay = 3000

const verificaTempUmi = setInterval(() => {
  
    sensor.read(dht, pinoDHT, (err, temperatura, umidade) => {
  
        if(!err){
    
            console.log(`Temperarura: ${temperatura}°C \n Umidade: ${umidade}%`)
    
        }
    
    })

}, delay)