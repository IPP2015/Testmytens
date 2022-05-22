const { I } = inject();
// Add in your custom step files

Given('i will set only Credit Card', () => {
  // TODO: replace with your own step
  I.amOnPage('https://demo.midtrans.com/')
  I.click({ xpath: '//*[@id="container"]/div/div/div[1]/div[2]/div/div/a' })
  I.seeElement({ xpath: '//*[@id="container"]/div/div/div[2]/div[1]/div[1]/span[1]' })
  I.click({ xpath: '//*[@id="container"]/div/div/div[2]/div[2]/div[2]/img' })
  I.seeElement({ xpath: '//*[@id="container"]/div/div/div[2]/div[3]/div[1]/span' })
  I.click({ xpath: '//*[@id="main_setting_div_custom"]' })
  I.click({ xpath: '//*[@id="is_snap_pop_up:false"]' })
  I.scrollTo({ xpath: '//*[@id="main_setting_div_custom"]/div/div/div[5]/div[3]/label' })
  I.click({ xpath: '//*[@id="customselect"]' })
  I.seeCheckboxIsChecked({ xpath: '//*[@id="customselect"]' })
  I.click({ xpath: '//*[@id="enabled_payments:credit_card"]' })
  I.seeCheckboxIsChecked({ xpath: '//*[@id="enabled_payments:credit_card"]' })
});
When('i click Start', () => {
  I.click({ xpath: '//*[@id="container"]/div/div/div[2]/div[3]/div[3]/div[2]/a' })
  I.wait(5)
})
Then('i see Credit card', () => {
  I.waitForText('Credit/debit card')
})

Given('i will set only ATM or Bank Transfer', () => {
  // TODO: replace with your own step
  I.amOnPage('https://demo.midtrans.com/')
  I.click({ xpath: '//*[@id="container"]/div/div/div[1]/div[2]/div/div/a' })
  I.seeElement({ xpath: '//*[@id="container"]/div/div/div[2]/div[1]/div[1]/span[1]' })
  I.click({ xpath: '//*[@id="container"]/div/div/div[2]/div[2]/div[2]/img' })
  I.seeElement({ xpath: '//*[@id="container"]/div/div/div[2]/div[3]/div[1]/span' })
  I.click({ xpath: '//*[@id="main_setting_div_custom"]' })
  I.click({ xpath: '//*[@id="is_snap_pop_up:false"]' })
  I.scrollTo({ xpath: '//*[@id="main_setting_div_custom"]/div/div/div[5]/div[3]/label' })
  I.click({ xpath: '//*[@id="customselect"]' })
  I.seeCheckboxIsChecked({ xpath: '//*[@id="customselect"]' })
  I.click({ xpath: '//*[@id="enabled_payments:bank_transfer"]' })
  I.seeCheckboxIsChecked({ xpath: '//*[@id="enabled_payments:bank_transfer"]' })
});
When('i click Start', () => {
  I.click({ xpath: '//*[@id="container"]/div/div/div[2]/div[3]/div[3]/div[2]/a' })
  I.wait(5)
})
Then('i see Bank transfer', () => {
  I.waitForText('Bank transfer')
})

Given('i will set only GO-PAY', () => {
  // TODO: replace with your own step
  I.amOnPage('https://demo.midtrans.com/')
  I.click({ xpath: '//*[@id="container"]/div/div/div[1]/div[2]/div/div/a' })
  I.seeElement({ xpath: '//*[@id="container"]/div/div/div[2]/div[1]/div[1]/span[1]' })
  I.click({ xpath: '//*[@id="container"]/div/div/div[2]/div[2]/div[2]/img' })
  I.seeElement({ xpath: '//*[@id="container"]/div/div/div[2]/div[3]/div[1]/span' })
  I.click({ xpath: '//*[@id="main_setting_div_custom"]' })
  I.click({ xpath: '//*[@id="is_snap_pop_up:false"]' })
  I.scrollTo({ xpath: '//*[@id="main_setting_div_custom"]/div/div/div[5]/div[3]/label' })
  I.click({ xpath: '//*[@id="customselect"]' })
  I.seeCheckboxIsChecked({ xpath: '//*[@id="customselect"]' })
  I.click({ xpath: '//*[@id="enabled_payments:gopay"]' })
  I.seeCheckboxIsChecked({ xpath: '//*[@id="enabled_payments:gopay"]' })
});
When('i click Start', () => {
  I.click({ xpath: '//*[@id="container"]/div/div/div[2]/div[3]/div[3]/div[2]/a' })
  I.wait(5)
})
Then('i see GoPay', () => {
  I.waitForText('GoPay')
})

Given('i will set only Indomaret', () => {
  // TODO: replace with your own step
  I.amOnPage('https://demo.midtrans.com/')
  I.click({ xpath: '//*[@id="container"]/div/div/div[1]/div[2]/div/div/a' })
  I.seeElement({ xpath: '//*[@id="container"]/div/div/div[2]/div[1]/div[1]/span[1]' })
  I.click({ xpath: '//*[@id="container"]/div/div/div[2]/div[2]/div[2]/img' })
  I.seeElement({ xpath: '//*[@id="container"]/div/div/div[2]/div[3]/div[1]/span' })
  I.click({ xpath: '//*[@id="main_setting_div_custom"]' })
  I.click({ xpath: '//*[@id="is_snap_pop_up:false"]' })
  I.scrollTo({ xpath: '//*[@id="main_setting_div_custom"]/div/div/div[5]/div[3]/label' })
  I.click({ xpath: '//*[@id="customselect"]' })
  I.seeCheckboxIsChecked({ xpath: '//*[@id="customselect"]' })
  I.click({ xpath: '//*[@id="enabled_payments:indomaret"]' })
  I.seeCheckboxIsChecked({ xpath: '//*[@id="enabled_payments:indomaret"]' })
});
When('i click Start', () => {
  I.click({ xpath: '//*[@id="container"]/div/div/div[2]/div[3]/div[3]/div[2]/a' })
  I.wait(5)
})
Then('i see Indomaret', () => {
  I.waitForText('Indomaret')
})

Given('i will set only CIMB Clicks', () => {
  // TODO: replace with your own step
  I.amOnPage('https://demo.midtrans.com/')
  I.click({ xpath: '//*[@id="container"]/div/div/div[1]/div[2]/div/div/a' })
  I.seeElement({ xpath: '//*[@id="container"]/div/div/div[2]/div[1]/div[1]/span[1]' })
  I.click({ xpath: '//*[@id="container"]/div/div/div[2]/div[2]/div[2]/img' })
  I.seeElement({ xpath: '//*[@id="container"]/div/div/div[2]/div[3]/div[1]/span' })
  I.click({ xpath: '//*[@id="main_setting_div_custom"]' })
  I.click({ xpath: '//*[@id="is_snap_pop_up:false"]' })
  I.scrollTo({ xpath: '//*[@id="main_setting_div_custom"]/div/div/div[5]/div[3]/label' })
  I.click({ xpath: '//*[@id="customselect"]' })
  I.seeCheckboxIsChecked({ xpath: '//*[@id="customselect"]' })
  I.click({ xpath: '//*[@id="enabled_payments:cimb_clicks"]' })
  I.seeCheckboxIsChecked({ xpath: '//*[@id="enabled_payments:cimb_clicks"]' })
});
When('i click Start', () => {
  I.click({ xpath: '//*[@id="container"]/div/div/div[2]/div[3]/div[3]/div[2]/a' })
  I.wait(5)
})
Then('i see OCTO Click', () => {
  I.waitForText('OCTO Click')
})