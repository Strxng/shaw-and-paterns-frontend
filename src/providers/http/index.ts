/* eslint-disable */

import axios from 'axios';

export const get = async <T = any>(url: string, params?: any) => {
  try {
    const { data } = await axios.get<T>(url, { params: params });
    return data;
  } catch (e) {
    throw new Error('Request failed (GET)');
  }
};
