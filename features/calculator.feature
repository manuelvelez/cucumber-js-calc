Feature: Calculator screen
  As an user
  I want to operate the calculator
  So that I can get the result of an operation

Scenario Outline: perform an operation
	Given the calculator
	When I write a <number1>
	And I click on a <operation>
	And I Write a <number2>
	And I click on equal button
	Then <result> is shown in the screen

Examples:
	| number1 | operation | number2 | result |
	|   1     |    plus   |    2    |    3   |
	|   2     |    plus   |    3    |    5   |
	|   3     |    plus   |    1    |    4   |
	|   4     |    plus   |    0    |    4   |
	|   5     |    plus   |    9    |   14   |
	|   1     |    minus  |    2    |   -1   |
	|   2     |    minus  |    3    |   -1   |
	|   3     |    minus  |    1    |    2   |
	|   4     |    minus  |    0    |    4   |
	|   5     |    minus  |    9    |   -4   |
	|   3     |    times  |    4    |   12   |
	|   10    |    div    |    5    |    1   |
