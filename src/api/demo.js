import request from './interceptor';

export const test =(data)=> {
  return request({
    url: '/js/h/v1/v/user/checkmobile',
    method: 'post',
    data
  });
}