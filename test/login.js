import axios from 'axios';
import assert from 'assert';
import config from '../sampleConfig';

export default function login() {

  describe('POST /login', function () {

    it('should success', function () {
      return axios.post(`${config.BASEURL}/login`, {
        name: 'tim',
        password: '123',
      }).then((res) => {
        assert.equal(res.data.success, true, 'success should be true');
        assert.notEqual(res.data.token, null, 'token should exist');
      });
    });

    it('should success', function () {
      return axios.post(`${config.BASEURL}/login`, {
        email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
        password: '123',
      }).then((res) => {
        assert.equal(res.data.success, true, 'success should be true');
        assert.notEqual(res.data.token, null, 'token should exist');
      });
    });

    it('should return config.USER_MESSAGE.USER_NOT_FOUND', function () {
      return axios.post(`${config.BASEURL}/login`, {
        name: `tim${Date.now()}`,
        password: '123',
      }).then((res) => {
        throw res;
      }).catch((res) => {
        assert.equal(res.data.message, config.USER_MESSAGE.USER_NOT_FOUND, 'message mismatch');
      });
    });

    it('should return config.USER_MESSAGE.USER_NOT_FOUND', function () {
      return axios.post(`${config.BASEURL}/login`, {
        email: `tim${Date.now()}@qq.com`,
        password: '123',
      }).then((res) => {
        throw res;
      }).catch((res) => {
        assert.equal(res.data.message, config.USER_MESSAGE.USER_NOT_FOUND, 'message mismatch');
      });
    });

    it('should return config.USER_MESSAGE.WRONG_PASSWORD', function () {
      return axios.post(`${config.BASEURL}/login`, {
        name: `tim`,
        password: '1234',
      }).then((res) => {
        throw res;
      }).catch((res) => {
        assert.equal(res.data.message, config.USER_MESSAGE.WRONG_PASSWORD, 'message mismatch');
      });
    });

    it('should return config.USER_MESSAGE.WRONG_PASSWORD', function () {
      return axios.post(`${config.BASEURL}/login`, {
        email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
        password: '1234',
      }).then((res) => {
        throw res;
      }).catch((res) => {
        assert.equal(res.data.message, config.USER_MESSAGE.WRONG_PASSWORD, 'message mismatch');
      });
    });
  });
}