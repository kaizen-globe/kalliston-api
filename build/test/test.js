"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _chai = _interopRequireDefault(require("chai"));
var _chaiHttp = _interopRequireDefault(require("chai-http"));
var _index = _interopRequireDefault(require("../index"));
_chai["default"].use(_chaiHttp["default"]);
var expect = _chai["default"].expect;
describe('Testing the user endpoints:', function () {
  it('It should create a user', function (done) {
    var user = {
      email: 'test@gmail.com',
      password: 'test123',
      gender: 'male'
    };
    _chai["default"].request(_index["default"]).post('/api/v1/users').set('Accept', 'application/json').send(user).end(function (err, res) {
      expect(res.status).to.equal(201);
      expect(res.body.data).to.include({
        id: 1,
        email: user.email,
        password: user.password,
        gender: user.gender
      });
      done();
    });
  });
  it('It should not create a user with incomplete parameters', function (done) {
    var user = {
      password: 'test123',
      gender: 'male'
    };
    _chai["default"].request(_index["default"]).post('/api/v1/users').set('Accept', 'application/json').send(user).end(function (err, res) {
      expect(res.status).to.equal(400);
      done();
    });
  });
  it('It should get all users', function (done) {
    _chai["default"].request(_index["default"]).get('/api/v1/users').set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data[0].should.have.property('id');
      res.body.data[0].should.have.property('email');
      res.body.data[0].should.have.property('password');
      res.body.data[0].should.have.property('gender');
      done();
    });
  });
  it('It should get a particular user', function (done) {
    var userId = 1;
    _chai["default"].request(_index["default"]).get("/api/v1/users/".concat(userId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('email');
      res.body.data.should.have.property('password');
      res.body.data.should.have.property('gender');
      done();
    });
  });
  it('It should not get a particular user with invalid id', function (done) {
    var userId = 8888;
    _chai["default"].request(_index["default"]).get("/api/v1/users/".concat(userId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Cannot find user with the id ".concat(userId));
      done();
    });
  });
  it('It should not get a particular user with non-numeric id', function (done) {
    var userId = 'aaa';
    _chai["default"].request(_index["default"]).get("/api/v1/users/".concat(userId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please input a valid numeric value');
      done();
    });
  });
  it('It should update a user', function (done) {
    var userId = 1;
    var updateduser = {
      id: userId,
      email: 'test1@gmail.com',
      password: 'test1234',
      gender: 'female'
    };
    _chai["default"].request(_index["default"]).put("/api/v1/users/".concat(userId)).set('Accept', 'application/json').send(updateduser).end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data.id).equal(updateduser.id);
      expect(res.body.data.email).equal(updateduser.email);
      expect(res.body.data.password).equal(updateduser.password);
      expect(res.body.data.gender).equal(updateduser.gender);
      done();
    });
  });
  it('It should not update a user with invalid id', function (done) {
    var userId = '9999';
    var updateduser = {
      id: userId,
      email: 'Updated Awesome user again',
      password: '$11.99',
      gender: 'We have updated the password'
    };
    _chai["default"].request(_index["default"]).put("/api/v1/users/".concat(userId)).set('Accept', 'application/json').send(updateduser).end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Cannot find user with the id: ".concat(userId));
      done();
    });
  });
  it('It should not update a user with non-numeric id value', function (done) {
    var userId = 'ggg';
    var updateduser = {
      id: userId,
      email: 'Updated Awesome user again',
      password: '$11.99',
      gender: 'We have updated the password'
    };
    _chai["default"].request(_index["default"]).put("/api/v1/users/".concat(userId)).set('Accept', 'application/json').send(updateduser).end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please input a valid numeric value');
      done();
    });
  });
  it('It should delete a user', function (done) {
    var userId = 1;
    _chai["default"].request(_index["default"])["delete"]("/api/v1/users/".concat(userId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data).to.include({});
      done();
    });
  });
  it('It should not delete a user with invalid id', function (done) {
    var userId = 777;
    _chai["default"].request(_index["default"])["delete"]("/api/v1/users/".concat(userId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("user with the id ".concat(userId, " cannot be found"));
      done();
    });
  });
  it('It should not delete a user with non-numeric id', function (done) {
    var userId = 'bbb';
    _chai["default"].request(_index["default"])["delete"]("/api/v1/users/".concat(userId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please provide a numeric value');
      done();
    });
  });
});
//# sourceMappingURL=test.js.map