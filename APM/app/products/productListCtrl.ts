module app.productList {
    import IProduct = app.domain.IProduct;

    interface IProductListModel {
        title: String;
        showImage: boolean;
        products: IProduct[];

        toggleImage(): void;
    }

    class ProductListCtrl implements IProductListModel {
        title: String;
        showImage: boolean;
        products: IProduct[];

        static $inject = ["dataAccessService"];

        constructor(private dataAccessService: app.common.DataAccessService) {
            this.title = "Product List";
            this.showImage = false;
            this.products = [];

            var productResource = dataAccessService.getProductResource();
            productResource.query((data: IProduct[]) => {this.products = data});
        }

        toggleImage(): void {
            this.showImage = !this.showImage;
        }
    }

    angular
        .module("productManagement")
        .controller("ProductListCtrl",
            ProductListCtrl);
}