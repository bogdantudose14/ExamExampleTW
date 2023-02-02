# Subject 2 (2.5 pts)
# TOPIC: Javascript

# Given the function `bowdlerize(input, dictionary)` where:
- `input` is a string (e.g. "This is a cat")
- `dictionary` is a vector containing strings.

# Complete the following tasks:
- `input` should be of type `string`. If another type is given an `Error` is thrown with the message `Input should be a string`; (0.5 pts)
- `dictionary` is an array of `string`. If at least an element is not a `string` an `Error` is thrown with the message `Invalid dictionary format`; (0.5 pts)
- If `dictionary` contains words, they will be replaced in `input` with the first letter followed by a series of  `*` characters followed by the last letter. The length of the resulting word will be the same as the original (e.g. 'test' will become 't**t'); (0.5 pts)
- A new string wil be returned, with `input` remaining unmodified; (0.5 pts)
- The function also returns the correct result for words starting with a capital letter. (0.5 pts)