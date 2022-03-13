import { assert } from "assertthat";
import request, { Response } from "supertest";
import getServer from "../../src/server";



suite('server', (): void => {
  const app = getServer();

  test('server is running', (): void => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err: Error, res: Response) {
        if (err) throw err;

        assert.that(res.body).is.equalTo({
          'message': 'Hello World!',
          'data': null
        });
      });
  });
});