// Function Construtor
var Motorcycle = function(make, model, year, state, economics) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.state = state;
    this.economics = economics;

};

var myBike = {};

// Adding methods to constructor
//Person.prototype.calculateAge = function() {
        //console.log(2016 - this.yearOfBirth);
    //};

// Adding properties to constructor 
//Person.prototype.lastName = 'Smith';

//var carAcuraTLS08 = new Vehicle('Acura', 'TL', 'Type-S', '2008', true, true, true, true);
var yamahaYZFr108 = new Motorcycle('Yamaha', 'YZF R1', 2008, 'current', true)

//john.calculateAge();

var title = document.createElement('h1');
var paragraph = document.createElement('p');
var textNode = document.createTextNode(yamahaYZFr108.make+' '+yamahaYZFr108.model+' '+yamahaYZFr108.year);
var paragraphNode = document.createTextNode(yamahaYZFr108.state+' '+yamahaYZFr108.economics);
title.appendChild(textNode);
paragraph.appendChild(paragraphNode);
document.getElementById('dashboard').appendChild(title);
document.getElementById('dashboard').appendChild(paragraph);
console.log(yamahaYZFr108.make);

var things = Object.create(myBike,
    {
        motorcycle: {
            yamahaYZFr108: {
                make: 'Yamaha',
                model: 'YZF R1',
                year: 2008,
                state: 'current',
                economics: {
                    purchaseDate: '04.08.2017',
                    purchaseAmount: 5500,
                    purchaseRegister: 277
                },
                codes: {
                    info: {
                        vin: 'JYARN20N78A002832',
                    },
                },
                sticker: {
                    info: {
                        2017: {
                            date: 'April',
                            km: 31000
                        },
                    },
                },
                fuel: {
                    info: {
                        measurement: 'liters',
                        total: 18,
                        reserve: 3.2
                    },
                engineOil: {
                    info: {
                        measurement: 'liters',
                        total: 3,
                        type: '15W-40',
                        wrench: '17mm',
                    },
                    service: {
                        June032017: { 
                            oilType: 'Royal Purple',
                            oilPrice: 65.53,
                            oilSupplier: 'Canadian Tire',
                            oilFilterType: 'K&N',
                            oilFilterPrice: 23.99,
                            oilFilterSupplier: 'Voss Cycle',
                            DIY: true,
                            price: 0,
                            servicer: 'DIY'
                            }
                        },
                    },
                },
                tires: {
                    info: {
                        size: {
                            front: '120/70 ZR17',
                            rear: '190/55 ZR17'
                        },
                        pressure: {
                            measurement: 'psi',
                            front: 33,
                            rear: 35
                        },
                    accessories: {
                        valveCaps: {
                            supplier: 'Canadian Tire',
                            price: 3.94
                        },
                    },
                    service: {
                        april242017: {
                            DIY: false,
                            price: 100,
                            servicer: '22 Customs',
                            tireMake: 'Dunlop',
                            tireStyle: 'Sportmax Q3',
                            tirePrice: 352.56,
                            tireSupplier: 'Dynamic Cycle Parts'
                        },
                    }, 
                    },
                },
                chainLune: {
                    june152017: true,
                    feb282018: true
                },
                engineAirFilter: {
                    
                },
                engineCoolant: {
                    
                },
                breaks: {
                    notification: 'replace',
                    comment: 'Replace all around'
                },
                sprocketChain : {
                    notification: 'replace',
                    quote: {
                        april2017: {
                            servicer: '22 Customes',
                            price: 300,
                            comment: 'Parts and installation'
                        },
                    },
                },
                headlights: {
                    notification: 'fix',
                    comment: 'Day time HIDs not working.'
                },
                exhaust: {
                    notification: 'notice',
                    comment: 'heat wrap exhaust to reduce under seat heat'
                },
                suspension: {
                    notification: 'check',
                    comment: 'Check based on factory recommendations'
                },
                throttlePlay: {
                    notification: 'check',
                    comment: 'Check throttle play against facotry recommendations'
                },
                body: {
                    notification: 'none',
                    tankTractionPads: {
                        2017: {
                            supplier: 'Amazon',
                            price: 21.23,
                        },
                    },
                },
            },
        }});

console.log(myBike);