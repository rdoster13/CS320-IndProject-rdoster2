import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const TestModelModel = types
  .model("TestModel")
  .props({})
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

  /**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type TestModelType = Instance<typeof TestModelModel>
export interface TestModel extends TestModelType {}
type TestModelSnapshotType = SnapshotOut<typeof TestModelModel>
export interface TestModelSnapshot extends TestModelSnapshotType {}
