import axios from 'axios';


const url = 'http://localhost:5000/culturd_api/Em3Wi5va8is15/event';

export const fetchEvents = () => axios.get(url);
export const fetchEvent = (id) => axios.get(`${url}/${id}`);
export const createEvent = (newEvent) => axios.post(url, newEvent);
export const updateEvent = (id, updateEvent) => axios.patch(`${url}/${id}`, updateEvent);
export const deleteEvent = (id) => axios.delete(`${url}/${id}`);


