var supertest = require("supertest");
//var should = require("should");
let chai = require('chai');
let should = chai.should();

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

describe("SAMPLE unit test",function(){
    
      // #1 should return home page
    
      it("should return home page",function(done){
    
        // calling home page api
        server
        .get("/")
        .expect("Content-type",/json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
          // HTTP status should be 200
          res.status.should.equal(200);
          // Error key should be false.
          res.body.error.should.equal(false);
          done();
        });
      });
    });

describe('Prueba Sumar dos numeros', function(){
    it('Deberia sumar dos numeros', function(done){
        server.post('/add').send({num1:10, num2:20})
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
            res.status.should.equal(200);
            res.body.error.should.equal(false);
            res.body.data.should.equal(30);
            done();
        });
    });
});

describe('Prueba rest personas', ()=>{
    it('Debería retornar personas', (done)=>{
        server.get('/personas')
        //.expect("Content-type",/json/)
        .expect(200)
        .end((err,res)=>{
            console.log("res", res.body);
            res.status.should.equal(200);
            res.body.should.be.a('array');
            /*
            res.body.length.should.be.eql(2);*/
            done();
        });
    });
});

describe('Prueba que genera 404', ()=>{
    it("Deberia retornar 404", ()=>{
        server.get('/random')
        .expect(404)
        .end((err, res)=>{
            res.status.should.equal(404);
            done();
        })
    });
});



