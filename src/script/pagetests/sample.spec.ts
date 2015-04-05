///ts:ref=reference.ts
/// <reference path="../../reference.ts"/> ///ts:ref:generated
module protractor.testing {

    export class Test {

        public Test() {
        }

        protractorExample() {
            //open page
            browser.get("http://juliemr.github.io/protractor-demo/");
            //fill form
            element(by.model("first")).sendKeys("1");
            element(by.model("second")).sendKeys("2");
            element(by.id("gobutton")).click();

            var resultList = element.all(by.repeater("result in memory"));
            //expect 1 result
            expect(resultList.count()).toBe(1);
            //expect result to be correct
            expect(resultList.first().element(by.binding("result.value")).getText()).toBe('3');
        }
    }

    /**
     * simple jasmine spec
     */
    describe("protractor test", () => {
        it("should open angular js page", () => {
            new Test().protractorExample();
        });
    });
}
