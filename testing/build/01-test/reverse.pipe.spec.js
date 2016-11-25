"use strict";
var reverse_pipe_1 = require("./reverse.pipe");
////////  SPECS  /////////////
describe('ReversePipe', function () {
    // This pipe is a pure, stateless function so no need for BeforeEach
    it('should reverse "puneet"', function () {
        var pipe = new reverse_pipe_1.ReversePipe();
        expect(pipe.transform('puneet')).toBe('test');
    });
});
//# sourceMappingURL=reverse.pipe.spec.js.map