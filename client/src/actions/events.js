import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getEvents = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEvents();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createEvent = (Event) => async (dispatch) => {
  try {
    const { data } = await api.createEvent(Event);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateEvent = (id, Event) => async (dispatch) => {
  try {
    const { data } = await api.updateEvent(id, Event);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteEvent = (id) => async (dispatch) => {
  try {
    await api.deleteEvent(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};