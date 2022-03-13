import request, { Response } from "supertest";
import getServer from "../../src/server";



suite('authentication', (): void => {
  const app = getServer();

  test('successful login', (): void => {
    request(app)
      .post('/api/auth/login')
      .set('Accept', 'application/json')
      .send({
        "username": "t.test",
        "password": "testing"
      })
      .expect(200)
      .end(function(err: Error, res: Response) {
        if (err) throw err;
      });
  });
});