///ts:ref=reference.ts
/// <reference path="../../reference.ts"/> ///ts:ref:generated
module protractor.testing {

    export class Test {

        public Test() {}

        protractorExample() {
            browser.get("http://juliemr.github.io/protractor-demo/")
            var firstInput = element(by.model("first")).sendKeys("1");
        }
    }

    /**
     * simple jasmine spec
     */
    describe("protractor test", () => {
        it("should open angular js page", () => {
            new Test().protractorExample();
        });
    })
}