function reverseWords(s: string): string {
     let result=s.replace(/\s+/g, ' ').trim().split(" ")
 s=result.reverse().join(' ')
 return s
};