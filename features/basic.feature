Feature: Business rules
  In order to achieve my goals
  As a persona
  I want set payment just only Credit card, Atam/Bank Transfer, Go-pay, Indomaret, Cimb Click

  Scenario: Active Payment Channels with Custom Select only Credit Card
    Given i will set only Credit Card
    When i click Start
    Then i see Credit card


  Scenario: Active Payment Channels with Custom Select only ATM/Bank Transfer
    Given i will set only ATM or Bank Transfer
    When i click Start
    Then i see Bank transfer

  Scenario: Active Payment Channels with Custom Select only GO-PAY
    Given i will set only GO-PAY
    When i click Start
    Then i see GoPay

  Scenario: Active Payment Channels with Custom Select only Indomaret
    Given i will set only Indomaret
    When i click Start
    Then i see Indomaret

  Scenario: Active Payment Channels with Custom Select only CIMB Clicks
    Given i will set only CIMB Clicks
    When i click Start
    Then i see OCTO Click