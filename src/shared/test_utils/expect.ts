import { expect } from 'chai'

class Expect {
    obj: any
    constructor(obj: any) {
        this.obj = obj
    }

    toBe(expected: any) {
        expect(this.obj).to.equal(expected)
    }
    
    toBeTruthy() {
        expect(this.obj).to.be.truthy
    }
    
    toBeFalsy() {
        expect(this.obj).to.be.falsy
    }
    
    toBeNull() {
        expect(this.obj).to.be.null
    }
    
    toBeUndefined() {
        expect(this.obj).to.be.undefined
    }
    
    toBeDefined() {
        expect(this.obj).to.be.defined
    }
    
    toBeGreaterThan(expected: number) {
        expect(this.obj).to.be.greaterThan(expected)
    }
    
    toBeLessThan(expected: number) {
        expect(this.obj).to.be.lessThan(expected)
    }
    
    toContain(expected: any) {
        expect(this.obj).to.contain(expected)
    }
    
    toHaveLength(expected: number) {
        expect(this.obj).to.have.length(expected)
    }

    toDeepEqual(expected: any) {
        expect(this.obj).to.deep.equal(expected)
    }
}

export default (obj: any) => {
    return new Expect(obj)
}
