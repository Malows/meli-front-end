import format from '../../utils/numbers'

describe('', () => {
    it('should add the thousand separator', () => {
        const str = format(10000)

        expect(str.length).toBe(6)
        expect(str).toBe('10.000')
    })

    it('should not add the thousand separator', () => {
        const str = format(1000)

        expect(str.length).toBe(4)
        expect(str).toBe('1000')
    })
})
