import { test } from './fixtures';
import { HomePage } from '../../page-objects/HomePage';
import { ProductPage } from '../../page-objects/ProductPage';
import { WishlistPage } from '../../page-objects/WishlistPage';

test.describe('E-commerce Test', () => {
    test('Add product to Wishlist', async ({ loggedInPage }) => {
        const homePage = new HomePage(loggedInPage);
        const productPage = new ProductPage(loggedInPage);
        const wishlistPage = new WishlistPage(loggedInPage);

        await homePage.goToWomenCategory();
        await productPage.addToWishlist();
        await wishlistPage.verifyProductInWishlist('Radiant Tee');
    });
});

