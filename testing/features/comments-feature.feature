@tag
Feature: Comment box

@tag1
Scenario: When all the comments are available
  When 'comment1' and 'comment2' and 'comment3' are available
  Then html output should be expected
