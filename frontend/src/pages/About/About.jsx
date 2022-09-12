import React, { useState, useEffect } from "react";
import './about.css';
import NavBar from '../../components/NavBar/NavBar';
import io from "socket.io-client";
//import {socket} from "../../services.js";

export default function AboutUs(props) {

  useEffect(() => {
    const socket = io('http://localhost:3000');
    socket.on('connect', function() {
        console.log('Connected');
          socket.emit('events', { test: 'test' });
          socket.emit('identity', 0, response =>
            console.log('Identity:', response),
          );
        });
    socket.on('events', function(data) {
          console.log('event', data);
    });
    socket.on('exception', function(data) {
          console.log('event', data);
    });
    socket.on('disconnect', function() {
          console.log('Disconnected');
    });
    }, []);

    return (
      <div className="AboutUs">
        <NavBar fName={props.parentUser}/>
        <div className="AboutUs-container">
          <p>
          </p>
        </div>
      </div>
    );
}
