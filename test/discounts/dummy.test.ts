import { DummyDiscount } from "../../src/module/dummy/model/discount";
test('check dummy name', () => {
    let dummyDiscount = new DummyDiscount();
    expect(dummyDiscount.checkDiscount().pop().sku).toBe("foo")
    expect(dummyDiscount.checkDiscount().pop().name).toBe("bar")
})