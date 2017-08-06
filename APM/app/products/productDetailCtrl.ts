module app.productDetail {
    import IProduct = app.domain.IProduct;

    interface IProductDetailModel {
        title: string;
        product: IProduct;
    }

    interface IProductParams extends ng.route.IRouteParamsService {
        productId: number;
    }

    class ProductDetailCtrl implements IProductDetailModel {
        title: string;
        product: IProduct;

        static $inject = ["$routeParams", "dataAccessService"];
        constructor(private $routeParams: IProductParams,
                    private dataAccessService: app.common.DataAccessService) {
            this.title = "Product Detail";

            var productResource = dataAccessService.getProductResource();
            productResource.get({productId: this.$routeParams.productId},
                ((data: IProduct) => {
                    this.product = data;
                }))
        }
    }

    angular
        .module("productManagement")
        .controller("ProductDetailCtrl",
            ProductDetailCtrl);
}