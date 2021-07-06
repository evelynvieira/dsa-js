const DFSArray = require('./array');

describe('array', () => {
  describe('get', () => {
    it('returns an item from array correctly', () => {
      const arr = new DFSArray();
      arr.push('grape');
      arr.push('orange');
      arr.push('lemon');

      expect(arr.get(1)).toBe('orange');
    });
  })

  describe('push', () => {
    it('pushes items in array correctly', () => {
      const arr = new DFSArray();
      arr.push('grape');
      arr.push('orange');
      arr.push('lemon');

      expect(arr.length).toBe(3);
      expect(arr.data[0]).toBe('grape');
      expect(arr.data[1]).toBe('orange');
      expect(arr.data[2]).toBe('lemon');
    });

    it('inserts item in the begining of array', () => {
      const arr = new DFSArray();
      arr.push('grape');
      arr.push('orange');
      arr.push('lemon');
      arr.push('banana', 1);

      expect(arr.length).toBe(4);
      expect(arr.get(0)).toBe('grape');
      expect(arr.get(1)).toBe('banana');
      expect(arr.get(2)).toBe('orange');
      expect(arr.get(3)).toBe('lemon');
    });

    it('throws an exception when tries to insert an item in a place bigger than array', () => {
      const arr = new DFSArray();
      arr.push('grape');
      arr.push('orange');
      arr.push('lemon');

      expect(() => {
        arr.push('banana', 7);
      }).toThrowError(/^index is out of range$/)
      expect(arr.length).toBe(3);
    });
  })

describe('pop', () => {
  it('pops the last item from array', () => {
    const arr = new DFSArray();
    arr.push('grape');
    arr.push('orange');
    arr.push('lemon');

    arr.pop();

    expect(arr.length).toBe(2);
    expect(arr.get(2)).toBeUndefined();
  });
});
});
