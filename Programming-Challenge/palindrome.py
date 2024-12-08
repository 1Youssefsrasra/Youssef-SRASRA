

def palindrome(ch):
    for i in ch:
        if i in [",","!","?",";",":"]:
            ch=ch.translate({ord(i):None})       
    print(ch)   
    l=ch.split()
    print(l)
    x=l
    n=len(l)     
    x.reverse()
    print(x)
    palindrome=True
    for i in range(n):
        if l[i]!=x[i]:
            palindrome=False
    return palindrome
        
    

x=palindrome("aba, !axxx")
print(x)

