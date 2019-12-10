### [Makers Academy](http://www.makersacademy.com) - Week 5 Pair Programming Side Project

FizzBuzz JavaScript Challenge 
-

[Outline](#Outline) | [Task](#Task) | [Installation Instructions](#Installation) | [User Stories](#Story) | [Objects & Methods](#Methods) | [Feature Tests](#Feature_Tests) |


## <a name="Outline">Outline</a>
 
As a side project in this weeks pair programming exercises, we've been asked to write FizzBuzz in JavaScript. 

## <a name="Task">The Task</a>
As my cohort at Makers transitions from learning Ruby to JavaScript, we're been tasked with building many of the projects we've previously built with Ruby in JavaScript.

## <a name="Installation">Installation Instructions</a>

Clone the repository from github then change directory into it.

```
$ git clone git@github.com:BenSheridanEdwards/Makers_FizzBuzz_JavaScript.git
$ cd Makers_FizzBuzz_JavaScript
```

To run the tests, please download Jasmine, you can download the standalone from [here](https://github.com/jasmine/jasmine/releases), or if you've using a mac with homebrew installed
:

```
brew install jasmine
```

## <a name="Story">User Stories</a>

```
As a user,
So that I can play FizzBuzz,
I'd like to be able to pass a number to the FizzBuzz function.

As a user,
When I pass a multiple of 3 to FizzBuzz,
I'd like to receive Fizz.

As a user,
When I pass a multiple of 5 to FizzBuzz, 
I'd like to receive Buzz. 

As a user,
When I pass a multiple of 3 and 5 to FizzBuzz,
I'd like to receive FizzBuzz.
```

## <a name="Methods">Objects & Methods</a>

### FizzBuzz

| Methods        | Description                                            |
|----------------|--------------------------------------------------------|
| .play(number)  | Returns either Fizz, Buzz, FizzBuzz, or a given number depending on if the number is a multiple of 3, 5, or 3 and 5 respectively. |

## <a name="Feature_Tests">Feature Tests (How it works)</a>
