///ts:ref=reference.ts
/// <reference path="../../reference.ts"/> ///ts:ref:generated
module protractor.testing {

    class CalculatorPage {

        open() {
            browser.get("http://juliemr.github.io/protractor-demo/");
        }

        fill(first:number, second:number) {
            element(by.model("first")).sendKeys(first.toString());
            element(by.model("second")).sendKeys(second.toString());
        }

        submit() {
            element(by.id("gobutton")).click();
        }

        verifyResult(expected:number) {
            var resultList = this.findResultList();
            //expect result to be correct
            expect(resultList.first().element(by.binding("result.value")).getText()).toEqual(expected.toString);
        }

        verifyNumberOfResults(numberOfResults:number) {
            var resultList = element.all(by.repeater("result in memory"));
            //expect 1 result
            expect(resultList.count()).toBe(numberOfResults);
        }

        private findResultList() {
            return element.all(by.repeater("result in memory"));
        }

    }

    /**
     * simple jasmine spec
     */
    describe("Calculator", () => {

        var calculatorPage = new CalculatorPage();

        beforeEach(calculatorPage.open);

        it("it should add 2 operands", () => {
            calculatorPage.fill(1, 2);
            calculatorPage.submit();
            calculatorPage.verifyResult(3);
            calculatorPage.verifyNumberOfResults(1);
        });
    });
}
