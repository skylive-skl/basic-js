/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this.process(message, key, 1);
  }

  decrypt(message, key) {
    return this.process(message, key, -1);
  }

  process(message, key, direction) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const A = 'A'.charCodeAt(0);
    const upperKey = key.toUpperCase();
    let keyIndex = 0;

    const result = message
      .toUpperCase()
      .split('')
      .map((char) => {
        if (char < 'A' || char > 'Z') return char;

        const shift = upperKey.charCodeAt(keyIndex++ % upperKey.length) - A;
        const code = (char.charCodeAt(0) - A + direction * shift + 26) % 26;
        return String.fromCharCode(A + code);
      });

    return (this.isDirect ? result : result.reverse()).join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
