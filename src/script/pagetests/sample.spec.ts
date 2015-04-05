///ts:ref=reference.ts
/// <reference path="../../reference.ts"/> ///ts:ref:generated
module protractor.testing {

    enum OperationType {
        ADDITION, DIVISION, MODULO, MULTIPLICATION, SUBTRACTION
    }

    class CalculatorPage {

        open() {
            browser.get("http://juliemr.github.io/protractor-demo/");
        }

        fill(operation:OperationType, first:number, second:number) {
            element(by.model("operator")).$('[value="' + OperationType[operation] + '"]').click();
            element(by.model("first")).sendKeys(first.toString());
            element(by.model("second")).sendKeys(second.toString());
        }

        submit() {
            element(by.id("gobutton")).click();
        }

        verifyResult(expected:number) {
            var resultList = this.findResultList();
            //expect result to be correct
            expect(resultList.first().element(by.binding("result.value")).getText()).toEqual(expected.toString());
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
            calculatorPage.fill(OperationType.ADDITION, 1, 2);
            calculatorPage.submit();
            calculatorPage.verifyResult(3);
            calculatorPage.verifyNumberOfResults(1);
        });

        it("it should subtract 2 operands", () => {
            calculatorPage.fill(OperationType.SUBTRACTION, 2, 2);
            calculatorPage.submit();
            calculatorPage.verifyResult(0);
            calculatorPage.verifyNumberOfResults(1);
        });

        it("it should multiply 2 operands", () => {
            calculatorPage.fill(OperationType.MULTIPLICATION, 2, 2);
            calculatorPage.submit();
            calculatorPage.verifyResult(4);
            calculatorPage.verifyNumberOfResults(1);
        });

        it("it should divide 2 operands", () => {
            calculatorPage.fill(OperationType.DIVISION, 20, 10);
            calculatorPage.submit();
            calculatorPage.verifyResult(2);
            calculatorPage.verifyNumberOfResults(1);
        });

        it("it should modulo 2 operands", () => {
            calculatorPage.fill(OperationType.MODULO, 5, 4);
            calculatorPage.submit();
            calculatorPage.verifyResult(1);
            calculatorPage.verifyNumberOfResults(1);
        });
    });
}
