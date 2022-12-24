import chai from 'chai';
import chatHttp from 'chai-http';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the user endpoints:', () => {
  it('It should create a user', (done) => {
    const user = {
      email: 'test@gmail.com',
      password: 'test123',
      gender: 'male'
    };
    chai.request(app)
      .post('/api/v1/users')
      .set('Accept', 'application/json')
      .send(user)
      .end((err, res) => {
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

  it('It should not create a user with incomplete parameters', (done) => {
    const user = {
      password: 'test123',
      gender: 'male'
    };
    chai.request(app)
      .post('/api/v1/users')
      .set('Accept', 'application/json')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('It should get all users', (done) => {
    chai.request(app)
      .get('/api/v1/users')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('email');
        res.body.data[0].should.have.property('password');
        res.body.data[0].should.have.property('gender');
        done();
      });
  });

  it('It should get a particular user', (done) => {
    const userId = 1;
    chai.request(app)
      .get(`/api/v1/users/${userId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('email');
        res.body.data.should.have.property('password');
        res.body.data.should.have.property('gender');
        done();
      });
  });

  it('It should not get a particular user with invalid id', (done) => {
    const userId = 8888;
    chai.request(app)
      .get(`/api/v1/users/${userId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find user with the id ${userId}`);
        done();
      });
  });

  it('It should not get a particular user with non-numeric id', (done) => {
    const userId = 'aaa';
    chai.request(app)
      .get(`/api/v1/users/${userId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');
        done();
      });
  });

  it('It should update a user', (done) => {
    const userId = 1;
    const updateduser = {
      id: userId,
      email: 'test1@gmail.com',
      password: 'test1234',
      gender: 'female'
    };
    chai.request(app)
      .put(`/api/v1/users/${userId}`)
      .set('Accept', 'application/json')
      .send(updateduser)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.id).equal(updateduser.id);
        expect(res.body.data.email).equal(updateduser.email);
        expect(res.body.data.password).equal(updateduser.password);
        expect(res.body.data.gender).equal(updateduser.gender);
        done();
      });
  });

  it('It should not update a user with invalid id', (done) => {
    const userId = '9999';
    const updateduser = {
      id: userId,
      email: 'Updated Awesome user again',
      password: '$11.99',
      gender: 'We have updated the password'
    };
    chai.request(app)
      .put(`/api/v1/users/${userId}`)
      .set('Accept', 'application/json')
      .send(updateduser)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find user with the id: ${userId}`);
        done();
      });
  });

  it('It should not update a user with non-numeric id value', (done) => {
    const userId = 'ggg';
    const updateduser = {
      id: userId,
      email: 'Updated Awesome user again',
      password: '$11.99',
      gender: 'We have updated the password'
    };
    chai.request(app)
      .put(`/api/v1/users/${userId}`)
      .set('Accept', 'application/json')
      .send(updateduser)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');
        done();
      });
  });


  it('It should delete a user', (done) => {
    const userId = 1;
    chai.request(app)
      .delete(`/api/v1/users/${userId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.include({});
        done();
      });
  });

  it('It should not delete a user with invalid id', (done) => {
    const userId = 777;
    chai.request(app)
      .delete(`/api/v1/users/${userId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`user with the id ${userId} cannot be found`);
        done();
      });
  });

  it('It should not delete a user with non-numeric id', (done) => {
    const userId = 'bbb';
    chai.request(app)
      .delete(`/api/v1/users/${userId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message').eql('Please provide a numeric value');
        done();
      });
  });
});