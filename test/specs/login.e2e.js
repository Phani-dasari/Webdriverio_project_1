describe('Payment Gateway Test - AutomationExercise', () => {
  it('should complete the payment with valid card', async () => {
    // Open website
    await browser.url('https://automationexercise.com');

    // You must already be logged in and have item in cart (you can reuse add-to-cart + login script)

    // Go to cart and proceed to checkout
    const cartBtn = await $('a[href="/view_cart"]');
    await cartBtn.click();

    const checkoutBtn = await $('a.btn.btn-default.check_out');
    await checkoutBtn.click();

    // Fill delivery information and continue (skipped here for simplicity)

    // Now you are on payment form
    const nameOnCard = await $('input[name="name_on_card"]');
    const cardNumber = await $('input[name="card_number"]');
    const cvc = await $('input[name="cvc"]');
    const expiryMonth = await $('input[name="expiry_month"]');
    const expiryYear = await $('input[name="expiry_year"]');

    // Fill payment details
    await nameOnCard.setValue('Phaneendra Kumar');
    await cardNumber.setValue('4111111111111111'); // dummy Visa card
    await cvc.setValue('123');
    await expiryMonth.setValue('12');

    // Click Pay button
    const payBtn = await $('button#submit');
    await payBtn.click();

    // Assert payment success message
    const successMsg = await $('p.alert-success');
    await expect(successMsg).toHaveTextContaining('Your order has been placed successfully!');
  });
});
