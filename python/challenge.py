
def checkValidShape(a,b,c):
  
    if(a + b > c) and (a + c > b) and (b + c > a):
        print("Valid")
        return True
    else:
        print("Invalid")
        return False

checkValidShape(2,9,6)