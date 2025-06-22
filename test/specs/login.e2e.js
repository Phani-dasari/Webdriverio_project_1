describe('Add to Cart Functionality - AutomationExercise', () => {
  it('should add a product to the cart successfully', async () => {
    await browser.url('https://automationexercise.com');

    await browser.pause(2000);
    await browser.execute(() => window.scrollBy(0, 600));

    const firstProduct = await $('.product-overlay');
    await firstProduct.waitForDisplayed({ timeout: 5000 });
    await firstProduct.moveTo

    const addToCartBtn = await $('(//a[contains(text(),"Add to cart")])[1]');
    await addToCartBtn.click();

    const modal = await $('#cartModal');
    await modal.waitForDisplayed({ timeout: 5000 });

    const continueBtn = await $('button[data-dismiss="modal"]');
    await continueBtn.click();

    const cartBtn = await $('a[href="/view_cart"]');
    await cartBtn.click();

    const cartProduct = await $('.cart_description');
    await expect(cartProduct).toBeDisplayed();
  });
});
