# 📸 Is it a valid copy?

In the North Pole **they still use paper photocopiers**. Elves use them to copy the letters that children send to Santa, so they can send them to all the gift departments.

However, **they are very old and do not work very well**. Every time they make a copy, the quality of the copy slightly decreases, a phenomenon known as _generation loss_.

**You need to detect if a letter is a copy of another**. The letters are very long and you can't read them, but you can compare them with an algorithm.

There is a high **probability** that a character will degrade with each copy (it doesn't always happen!). And when it happens, the rule it follows is:

- **The characters from `A` to `Z` degrade from capital letters to lower-case letters (`A-Z` ⇒ `a-z`)**
- **Letters degrade in a series of characters in this order: `a-z` ⇒ `#` ⇒ `+` ⇒ `:` ⇒ `.` ⇒ ` `**
- **Once the letters have degraded into the symbols, they can continue to degrade.**
- **Note that the last one is a blank space, not an empty character.**
- **Characters that are not letters (like digits) do not degrade.**

Knowing this and receiving two letters. The supposed original and the copy. You must determine if the copy is a copy of the other.

```javascript
checkIsValidCopy("Santa Claus is coming", "sa#ta Cl#us i+ comin#"); // true
checkIsValidCopy("s#nta Cla#s is coming", "p#nt: cla#s #s c+min#"); // false (due to the initial p)
checkIsValidCopy("Santa Claus", "s#+:. c:. s"); // true
checkIsValidCopy("Santa Claus", "s#+:.#c:. s"); // false (there is a # where it shouldn't be)
```

To understand how photocopiers and their degradation work, look at this example:

```
original:  'Santa Claus'
1st copy:  'santa cla#s'
2nd copy:  'sa#t# cl#+s'
3rd copy:  'sa+## c#+:s'
4th copy:  's#++. c+:.s'
5th copy:  's#+:. c:. s'
```

Therefore `s#+:. c+:++` is a valid copy of `Santa Claus`. And, as you see, the degradation of the letters does not occur in a specific order, it is random.

_Based on the CodeWars challenge Photocopy decay._
