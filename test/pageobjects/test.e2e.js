describe('Bank Transactions Automation Test', () => {
  it('should login and check recent transactions', async () => {
    // 1. Open login page
    await browser.url('https://demo.guru99.com/V4/index.php');
    await browser.pause(2000);

    // 2. Enter username and password
    const userIdInput = await $('input[name="uid"]');
    const passwordInput = await $('input[name="password"]');

    await userIdInput.setValue('mngr123456');     // 🔁 Replace with test username
    await passwordInput.setValue('pass@123');     // 🔁 Replace with test password

    // 3. Click login
    const loginButton = await $('input[name="btnLogin"]');
    await loginButton.click();

    await browser.pause(3000); // Wait for dashboard to load

    // 4. Go to Mini Statement page (transaction history)
    const miniStatementLink = await $('a[href="MiniStatementInput.php"]');
    await miniStatementLink.click();
    await browser.pause(2000);

    // 5. Enter account number and submit
    const accountInput = await $('input[name="accountno"]');
    const submitBtn = await $('input[name="AccSubmit"]');

    await accountInput.setValue('123456');  // 🔁 Replace with test account number
    await submitBtn.click();
    await browser.pause(3000);

    // 6. Read and print transaction table
    const rows = await $$('table tr');

    for (let i = 1; i < rows.length; i++) { // Skip the header (i = 1)
      const columns = await rows[i].$$('td');

      const txnId = await columns[0].getText();
      const date = await columns[1].getText();
      const type = await columns[2].getText();
      const amount = await columns[3].getText();
      const balance = await columns[4].getText();

      console.log(`🔍 ${txnId} | ${date} | ${type} | ₹${amount} | Bal: ₹${balance}`);

      // 7. Check if deposit > ₹5000
      const cleanAmount = parseFloat(amount.replace(/[^0-9.]/g, ''));
      if (type === 'DEPOSIT' && cleanAmount > 5000) {
        console.log(`✅ High deposit found: ₹${cleanAmount}`);
        await browser.pause(5000);
      }
    }
  });
});
