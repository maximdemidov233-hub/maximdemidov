import { validateIp } from "./helpers";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from '../images/icon-location.svg';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const isp = document.querySelector('#isp');

const mapZone = document.querySelector('.map');
const map = L.map(mapZone).setView([51.505, -0.09], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const iconMark = L.icon({
    iconUrl: icon,
    shadowUrl: 'leaf-shadow.png',
    iconSize: [28, 40], // size of the icon
})

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {
    if (validateIp(ipInput.value)) {
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_EgVjMhStWjsK0nSuueGQJdplpX0Ik&ipAddress=${ipInput.value}`)
            .then(resp => resp.json())
            .then(setInfo)

        ipInput.value = '';
    }
}

function handleKey(e) {
    if (e.key === 'Enter') {
        getData();
        this.value = '';
    }
};

function setInfo(data) {
    console.log(data.location.timezone)
    const { lat, lng, country, city, timezone } = data.location;
    ipInfo.textContent = data.ip;
    locationInfo.textContent = country + ' ' + city;
    timezoneInfo.textContent = timezone;
    isp.textContent = data.isp;

    map.setView([lat, lng])
    L.marker([lat, lng], { icon: iconMark }).addTo(map);
}