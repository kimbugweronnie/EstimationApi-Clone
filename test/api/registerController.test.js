process.env.NODE_ENV = 'test';

const app = require('../../app') // Link to your server file
const conn = require('../../db/index.js');
const supertest = require('supertest')
const request = supertest(app)

it('gets the test endpoint', async done => {
  const response = await request.get('/')

  expect(response.status).toBe(200)
  expect(response.text).toBe('Welcome')
  done()
})
it('gets the test endpoint', async done => {
  const response = await request.get('/api/name')

  expect(response.status).toBe(200)
  //expect(response.text['status']).toBe('Switch')
  done()
})
it("testing route works", (done) => {
const res= request
    .post("/api/register")
    .type("form")
    .send({
       name: 'NOTE', password: "AAA" ,email:'A@gmail.com',role:'developer'
     })
     .then((res) => {
       const body = res.body;
       expect(body).to.contain.property('name');
       done();

     })
  .catch((err) => done(err));
     //expect(res.status).toBe(200)
});

// it('gets the test endpoint', async done => {
//   const response = await request.get('/api/register')
//
//   expect(response.status).toBe(200)
//   expect(response.text).toBe('Welcome')
//   done()
// })
// test("should respond with a 200 status code", async done => {
//       const response = await request.post("/api/register").send({
//         name: 'NOTE', password: "AAA" ,email:'A@gmail.com',role:'developer'
//       })
//       expect(response.statusCode).toBe(201)
//       done()
//     })
  //   it('should create a new post', async done => {
  //   const res = await request
  //     .post('/api/register')
  //     .send({
  //       name: 'NOTE', password: "AAA" ,email:'A@gmail.com',role:'developer'
  //     })
  //   expect(res.statusCode).toEqual(201)
  //   expect(res.body).toHaveProperty('post')
  //   done()
  // })
// const {MongoClient} = require('mongodb');
//
// describe('insert', () => {
//   let connection;
//   let db;
//
//   beforeAll(async () => {
//     connection = await MongoClient.connect(global.__MONGO_URI__, {
//
//     });
//     db = await connection.db(global.__MONGO_DB_NAME__);
//   });
//
//   afterAll(async () => {
//     await connection.close();
//     await db.close();
//   });
//
//   it('should insert a doc into collection', async () => {
//     const users = db.collection('account');
//
//     const mockUser = {_id: 'some-user-id', name: 'John'};
//     await users.insertOne(mockUser);
//
//     const insertedUser = await users.findOne({_id: 'some-user-id'});
//     expect(insertedUser).toEqual(mockUser);
//   });
// });
