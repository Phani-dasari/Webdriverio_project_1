get uploadPicture() { return $('#uploadPicture'); }

async uploadFile(filePath) {
    const remotePath = await browser.uploadFile(filePath);
    await this.uploadPicture.setValue(remotePath);
}
