module protractor.testing {

    declare var browser:any;
    declare var describe:any;
    declare var it:any;

    export class Test {

        public Test() {}

        protractorExample() {
            browser.get("http://www.google.de")
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