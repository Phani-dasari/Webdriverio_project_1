class InventoryPage {
    get menuButton() { return $('#react-burger-menu-btn'); }
    get logoutLink() { return $('#logout_sidebar_link'); }
    get productTitles() { return $$('.inventory_item_name'); }  // ✅ new
    get allProducts() { return $$('.inventory_item'); }         // ✅ new

    async logout() {
        await this.menuButton.click();
        await browser.pause(1000); // small wait for animation
        await this.logoutLink.click();
    }

    async getProductNames() {
        const names = [];
        for (const title of await this.productTitles) {
            names.push(await title.getText());
        }
        return names;
    }
}

module.exports = new InventoryPage();
