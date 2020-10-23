import { TestModelModel, TestModel } from "./test-model"

test("can be created", () => {
  const instance: TestModel = TestModelModel.create({})

  expect(instance).toBeTruthy()
})