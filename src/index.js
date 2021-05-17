import _ from 'lodash';
import './assets/css/style.css';
import Icon from './assets/img/Icon.png'
import csv from './assets/datas/annual-enterprise-survey-2019-financial-year-provisional-csv.csv';
import xml from './assets/datas/relacionados.xml';
import json1 from './assets/datas/example_1.json';
import json2 from './assets/datas/example_2.json';
import toml from './assets/datas/data.toml';
import yaml from './assets/datas/data.yaml';
import json from './assets/datas/data.json5';

console.log('toml.title: ', toml.title); // output `TOML Example`
console.log('toml.owner.name:', toml.owner.name); // output `Tom Preston-Werner`

console.log('yaml.title: ', yaml.title); // output `YAML Example`
console.log('yaml.owner.name: ', yaml.owner.name); // output `Tom Preston-Werner`

console.log('json5.title: ', json.title); // output `JSON5 Example`
console.log('json5.owner.name: ', json.owner.name); // output `Tom Preston-Werner`

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon)
    console.log('csv: ', csv);
    console.log('xml: ', xml);
    console.log('json1: ', json1);
    console.log('json2: ', json2);
    return element;
}
document.body.appendChild( component() );
