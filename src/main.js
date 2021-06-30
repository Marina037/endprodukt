"use strict"

// Diese Model Variablen an der richtigen Stelle einbinden
/*
ort: '',
connections: []
*/

// Diese Funktionen an der richtigen einbinden.
/*
loadConnections: function() {
    const api = 'https://transport.opendata.ch/v1/stationboard?station=';
    let url = api + this.ort;
    fetch( url )
        .then ( async response => await response.json() )
        .then ( (antwort) => this.ausgabe(antwort))
        .catch( fehler => alert(fehler) )
},

ausgabe: function(antwort) {
    this.ort = antwort.station.name
    this.connections = antwort.stationboard
},

timestamp2time: function(timestamp) {
    let time = new Date(timestamp);
    return time.toLocaleTimeString('de-CH');
}
*/

const StationBoard = {
    data: function() {
        return {
            ort: 'Romanshorn',
            connections: [],
        }
    },

    methods: {
        loadConnections: function () {
            const api = 'https://transport.opendata.ch/v1/stationboard?station=';
            let url = api + this.ort;
            fetch( url )
                .then ( async response => await response.json() )
                .then ( (antwort) => this.ausgabe(antwort))
                .catch( fehler => alert(fehler) )
        },

        ausgabe(antwort) {
            this.ort = antwort.station.name
            this.connections = antwort.stationboard
        },

        timestamp2time(timestamp) {
            let time = new Date(timestamp);
            return time.toLocaleTimeString('de-CH');
        }
    }
}

const app = Vue.createApp(StationBoard);
app.mount("#StationBoard"); 

