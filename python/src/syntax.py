# /*define attributes / variables
# 1 number
# string
# boolean
# array
# dictionary / objects
# undefined
# sample if / else
# functions
# parameters
# returns
# arrays
# add to the front
# add to the end
# update values
# loops
# for
# for/in
# while
# do while
# forEach (with array and function)
# Objects / Dictionaries
# declare object
# lookup key to retrieve value*/


# variables
x = 15
print(x)
price = 9.99
discount = 0.2
result = price * (1-discount)
print(result)


def kwargs(num, string):
    return f'There are {num} {string}s!'


# string
name = 'Parveen'
print(name)  # you can concatnate two strings

x = 'awesome'
print('Python is ' + x.upper())  # replae, split

# list
x = ['apple', 'banana', 'orange']
print(x)

# Tuple
x = ('apple', 'banana', 'orange', 'mango', 'grapes','lichi')
print(x)
print(x[2:5]) #This will return the items from position 2 to 5.
# tuple methods
x.count('apple')
print(x)
x.index('mango')
print (x)

# range
x = range(1, 6)
print(x)

# Set
x = {'apple', 'banana', 'orange'}
print(x)
x.add('cherry') # {'cherry', apple', 'banana', 'orange'} add one item
x.update(['red', 'green', 'pink']) # adding multiple items in given set.
print(len(x))
x.remove('mango')

# join two sets
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}

set3 = set1.union(set2)
print(set3)

# dictionary
x = {'name': 'Parveen', 'regNo': 5}
print(x)
this_dict = {'brand': "Ford", 'model': "mustang", 'year': 2000}
x = this_dict['model']
#OR
x = this_dict.get('model')
for x in this_dict:
  print(x)    # give all key name
  for x in this_dict:
    print(this_dict[x])      # give the values OR for x in this_dict.values():

    # loop through keys and values
    for x,y in this_dict.items():
     print(x,y)

    # length of dictionary
    print(len(this_dict))

    # adding in dictionaries
    this_dict['color'] = 'red'

    # remove from dict
    this_dict.pop('model')

    this_dict.popitem()   # removes the last inserted item

    del this_dict['year']   # removes the specified key named item
    del this_dict     # completely del the dic and print will give error

    this_dict.clear()    # empty the dict
    this_dict.copy()      # make copy  same with my_dict = dict(this_dict) print(my_dict)

    #nested dictionaries

    child1 = {
  "name" : "Emil",
  "year" : 2004
}
child2 = {
  "name" : "Tobias",
  "year" : 2007
}
child3 = {
  "name" : "Linus",
  "year" : 2011
}

myfamily = {
  "child1" : child1,
  "child2" : child2,
  "child3" : child3
}

print(myfamily)  #{'child1': {'name': 'Emil', 'year': 2004}, 'child2': {'name': 'Tobias', 'year': 2007}, 'child3': {'name': 'Linus', 'year': 2011}}
 # fromKeys method
 x = ('key1', 'key2', 'key3')
y = 0

this_dict = dict.fromkeys(x, y)


print(this_dict)


# check string gives you boolean answer
txt = "The rain in Spain stays mainly in the plain"
x = "ain" in txt  # not in
print(x)

# String format
age = 26
txt = f'My name is Bob and I am {age} year old'
print(txt)

 # boolean
#  bool(False)
# bool(None)
# bool(0)
# bool("")
# bool(())
# bool([])
# bool({}) all values return false.
a = 200
b = 33

if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")

 # if/else
thislist = ["kiwi", "banana", "cherry"]
if "apple" in thislist:
  print("Yes, 'apple' is in the fruits list")
else:
    print('no, apple is missing')

# if else
a = 33
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
  # short hand for if else
a = 33
b = 33
print('B is greater') if a > b else print('a is equal to b')

# define function and passing parameters

def my_func1():
    print('Hello Py from myFunction')


my_func1()


def my_func(fname, lname):
 print(fname + " " + lname)


my_func("parveen", "kaur")

# returns


def add(a, b):
  return a+b


# loops ..while loop
n = 10
sum = 0
i = 1
while i <= n:
    sum = sum + i
    i = i + 2
    print('This sum is', sum)

    # do while
i = 0
while i < 5:
  print(i)
  i = i + 1
  if(i > 4):
    break
     # for in loop
for x in range(2, 30, 2):
  print(x)
 # lambda function
 def my_function(n):
   return lambda a: a * n
   mydouble = my_function(2)
   mytriple = my_function(3)
   print(mydouble(10))
   print(mytriple(30))

   # Arrays / list methods
   fruits = ["apple", "banana", "orange", "grapes", "apple"]
   dry_fruits =["almond", "raisin", "walnut"]
   x = len(fruits) # to get the length of array

    # Adding into array
    friuts.append("mango") # add to the end
    fruits.insert(1, "pineapple")  # add to the front
fruits[1] = "blackcurrant" # replacing the valur at given index value

# Removing from array
fruits.pop(2) # OR
fruits.remove("orange")
fruits.clear()# clear all the elements from an array

fruits.index("pineapple")   #gives the index value of args
fruits.reverse()   # reversing the array
 fruits.extend(dry_fruits)
 print(fruits) # conctenate two arrays
# counting the number of elem with same value
fruits.count("apple")
x = fruits.copy()    # returns a copy of the specified list
 
 # sorting
 fruits.sort() 
 fruits.sort(reverse = True) # sort in descending order

def myFunc(e):
  return e['year']

cars = [
  {'car': 'Ford', 'year': 2005},
  {'car': 'Mitsubishi', 'year': 2000},
  {'car': 'BMW', 'year': 2019},
  {'car': 'VW', 'year': 2011}
]

cars.sort(key=myFunc) # [{'car': 'Mitsubishi', 'year': 2000}, {'car': 'Ford', 'year': 2005}, {'car': 'VW', 'year': 2011}, {'car': 'BMW', 'year': 2019}]

# For in loop
 for x in fruits:
   print(x)

   # range
 for x in range(6):
    print(x)
# range of negative indexes in list
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[-4:-1]) # ['orange', 'kiwi', 'melon']
 
 thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:])  # ['cherry', 'orange', 'kiwi', 'melon', 'mango']

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[:4]) #This will return the items from index 0 to index 4.
