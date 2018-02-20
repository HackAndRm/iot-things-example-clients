/*
 * Bosch SI Example Code License Version 1.0, January 2016
 *
 * Copyright 2018 Bosch Software Innovations GmbH ('Bosch SI'). All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the
 * following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following
 * disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the
 * following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * BOSCH SI PROVIDES THE PROGRAM 'AS IS' WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE
 * QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL
 * NECESSARY SERVICING, REPAIR OR CORRECTION. THIS SHALL NOT APPLY TO MATERIAL DEFECTS AND DEFECTS OF TITLE WHICH BOSCH
 * SI HAS FRAUDULENTLY CONCEALED. APART FROM THE CASES STIPULATED ABOVE, BOSCH SI SHALL BE LIABLE WITHOUT LIMITATION FOR
 * INTENT OR GROSS NEGLIGENCE, FOR INJURIES TO LIFE, BODY OR HEALTH AND ACCORDING TO THE PROVISIONS OF THE GERMAN
 * PRODUCT LIABILITY ACT (PRODUKTHAFTUNGSGESETZ). THE SCOPE OF A GUARANTEE GRANTED BY BOSCH SI SHALL REMAIN UNAFFECTED
 * BY LIMITATIONS OF LIABILITY. IN ALL OTHER CASES, LIABILITY OF BOSCH SI IS EXCLUDED. THESE LIMITATIONS OF LIABILITY
 * ALSO APPLY IN REGARD TO THE FAULT OF VICARIOUS AGENTS OF BOSCH SI AND THE PERSONAL LIABILITY OF BOSCH SI'S EMPLOYEES,
 * REPRESENTATIVES AND ORGANS.
 */
import {ThingsClient} from "./things-client.js";

const client = new ThingsClient((message) => {
    document.querySelector('#output').innerHTML = prettyPrint(message);
});

document.querySelector('#connect').addEventListener('click', () => {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let apitoken = document.querySelector('#apitoken').value;
    client.connect(username, password, apitoken);
});
document.querySelector('#retrieve').addEventListener('click', () => {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let apitoken = document.querySelector('#apitoken').value;
    let thingid = document.querySelector('#thingid').value;
    client.retrieve(username, password, apitoken, thingid);
});

document.querySelector('#input').addEventListener('change', () => {
    document.querySelector('#input').value = prettyPrint(document.querySelector('#input').value);
});

document.querySelector('#send').addEventListener('click', () => {
    client.send(document.querySelector('#input').value);
});

function prettyPrint(message) {
    try {
        return JSON.stringify(JSON.parse(message), undefined, 2);
    } catch (e) {
        return message;
    }
}
