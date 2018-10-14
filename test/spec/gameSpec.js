describe("Game Logic", () => {
    it("should run tests", () => {
        expect(1).toBe(1);
    })

    describe("Game Setup", () => {
        describe("Sequence Generator getSequence()", () => {
            it("should return length of 20 if no parameter is passed", () => {
                let sequence = [];
                sequence = generateSequence();
                expect(sequence.length).toBe(20);
            })

            it("should have a length of 5 if the parameter 5 is passed", () => {
                let sequence = [];
                sequence = generateSequence(5);
                expect(sequence.length).toBe(5);
            })

            it("should have a length of 500 if the parameter 500 is passed", () => {
                let sequence = [];
                sequence = generateSequence(500);
                expect(sequence.length).toBe(500);
            })

            it("should return empty array if no number is passed", () => {
                let sequence = [""];
                sequence = generateSequence("test");
                expect(sequence.length).toBe(0);
            })

            it("should return empty array if a negative number is passed", () => {
                let sequence = [""];
                sequence = generateSequence(-1);
                expect(sequence.length).toBe(0);
            })

            it("should return empty array if number is not integer", () => {
                let sequence = [""];
                sequence = generateSequence(3.5);
                expect(sequence.length).toBe(0);
            })
        })

        describe("Color generator getColor()", () => {

            it("should return red if 1 is passed as parameter", () => {
                let expectedColor = "R";
                let sut = getColor(1);
                expect(sut).toBe(expectedColor);
            })

            it("should return green if 2 is passed as parameter", () => {
                let expectedColor = "G";
                let sut = getColor(2);
                expect(sut).toBe(expectedColor);
            })

            it("should return yellow if 3 is passed as parameter", () => {
                let expectedColor = "Y";
                let sut = getColor(3);
                expect(sut).toBe(expectedColor);
            })

            it("should return blue if 4 is passed as parameter", () => {
                let expectedColor = "B";
                let sut = getColor(4);
                expect(sut).toBe(expectedColor);
            })

            it("should return empty if no integer between 1 and 4 is passed", () => {
                let expectedColor = "";
                let sut = getColor(9);
                expect(sut).toBe(expectedColor);
            })

            it("should return empty if no number is passed", () => {
                let expectedColor = "";
                let sut = getColor();
                expect(sut).toBe(expectedColor);
            })
        })
    })
})
