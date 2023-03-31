QUnit.module("add", function () {
  QUnit.test("létezik-e az oldal?", function (assert) {
    assert.ok(masodfokuEgyenletMegoldasa, "Létezik-e az oldal?");
  });
});

QUnit.test("Tényleg fügvény-e?", function (assert) {
  assert.ok(
    typeof masodfokuEgyenletMegoldasa === "function",
    "Tényleg fügvény-e?"
  );
});

QUnit.test("masodfokuEgyenletMegoldasa(1, 4, 4)", function (assert) {
  assert.equal(masodfokuEgyenletMegoldasa(1, 4, 4), {
    X1: -2,
    X2: -2,
  });
});

QUnit.test("masodfokuEgyenletMegoldasa(1, 6, 4)", function (assert) {
  assert.equal(masodfokuEgyenletMegoldasa(1, 6, 4), {
    X1: -1,
    X2: -2,
  });
});

QUnit.test("masodfokuEgyenletMegoldasa(5, 5, 5)", function (assert) {
  assert.equal(masodfokuEgyenletMegoldasa(5, 5, 5), {
    X1: "*komplex",
    X2: "*komplex",
  });
});

QUnit.test("masodfokuEgyenletMegoldasa(0, 2, 2)", function (assert) {
  assert.equal(masodfokuEgyenletMegoldasa(0, 2, 2), {
    X1: NaN,
    X2: -Infinity,
  });
});

QUnit.test("masodfokuEgyenletMegoldasa(0, 0, 0)", function (assert) {
  assert.equal(masodfokuEgyenletMegoldasa(0, 0, 0), {
    X1: NaN,
    X2: NaN,
  });
});

QUnit.test("masodfokuEgyenletMegoldasa(0, 1, 2)", function (assert) {
  assert.equal(masodfokuEgyenletMegoldasa(0, 1, 2), {
    X1: NaN,
    X2: -Infinity,
  });
});

QUnit.test("masodfokuEgyenletMegoldasa(-1, -4, -4)", function (assert) {
  assert.equal(masodfokuEgyenletMegoldasa(-1, -4, -4), {
    X1: -2,
    X2: -2,
  });
});

QUnit.test("masodfokuEgyenletMegoldasa(7, 8, 9)", function (assert) {
  assert.equal(masodfokuEgyenletMegoldasa(7, 8, 9), {
    X1: "*komplex",
    X2: "*komplex",
  });
});

QUnit.test("masodfokuEgyenletMegoldasa(100, 400, 400)", function (assert) {
  assert.equal(masodfokuEgyenletMegoldasa(100, 400, 400), {
    X1: -2,
    X2: -2,
  });
});

QUnit.test("masodfokuEgyenletMegoldasa(500, 400, 400)", function (assert) {
  assert.equal(masodfokuEgyenletMegoldasa(500, 400, 400), {
    X1: "*komplex",
    X2: "*komplex",
  });
});

QUnit.test("masodfokuEgyenletMegoldasa(1.0, 4.0, 4.0)", function (assert) {
  assert.equal(masodfokuEgyenletMegoldasa(1.0, 4.0, 4.0), {
    X1: -2,
    X2: -2,
  });
});
