const timeParse = require('./index')

test('Parse', () => {
    expect(timeParse('05:15')).toBe('5:15am');
    expect(timeParse('0515')).toBe('5:15am');
    expect(timeParse('05.15')).toBe('5:15am');
    expect(timeParse('05 15')).toBe('5.15am');
    expect(timeParse('5:am')).toBe('5am');
    expect(timeParse('5.am')).toBe('5am');
    expect(timeParse('515am')).toBe('5:15am');
    expect(timeParse('515.am')).toBe('5:15am');
    expect(timeParse('515a.m.')).toBe('5:15am');
    expect(timeParse('515a.m')).toBe('5:15am');
    expect(timeParse('515 am')).toBe('5:15am');
    expect(timeParse('5 15am')).toBe('5:15am');
    expect(timeParse('5 15 am')).toBe('5:15am');
    expect(timeParse('5 15')).toBe('5:15am');
    expect(timeParse('5:15')).toBe('5:15am');
    expect(timeParse('0515pm')).toBe('5:15pm');
    expect(timeParse('05:15am')).toBe('5:15am');
    expect(timeParse('05.15am')).toBe('5:15am');
    expect(timeParse('5:00am')).toBe('5:15am');
    expect(timeParse('13')).toBe('1pm');
    expect(timeParse('5')).toBe('5am');
    expect(timeParse('00')).toBe('12am');
    expect(timeParse('05')).toBe('05am');
    expect(timeParse('12')).toBe('12am');
    expect(timeParse('5.')).toBe('5am');
    expect(timeParse('5am')).toBe('5am');
})

test('Not parse', () => {
    expect(timeParse('')).toBe('');
    expect(timeParse()).toBe('');
    expect(timeParse(undefined)).toBe('');
    expect(timeParse('0')).toBe('');
    expect(timeParse('0am')).toBe('');
    expect(timeParse('00am')).toBe('');
    expect(timeParse('9;15am')).toBe('');
    expect(timeParse('17:15am')).toBe('');
    expect(timeParse('1715am')).toBe('');
    expect(timeParse('515a m')).toBe('');
    expect(timeParse('17:15pm')).toBe('');
    expect(timeParse('17pm')).toBe('');
    expect(timeParse('8am-9am')).toBe('');
    expect(timeParse('tbc')).toBe('');
    expect(timeParse('12noon')).toBe('');
})
