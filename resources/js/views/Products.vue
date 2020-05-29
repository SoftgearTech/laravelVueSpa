<template>
    <div class="container-fluid">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/home">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item active">Products</li>
        </ol>

        <div class="card mb-3">
            <div class="card-header d-flex">
                <span>
                    <i class="fas fa-chart-area"></i>
                    Products Management
                </span>
                <button class="btn btn-primary btn-sm ml-auto" v-on:click="showNewProductModal"><span class="fa fa-plus"></span> Create New</button>
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Category</td>
                            <td>Name</td>
                            <td>Image</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in products" :key="index">
                            <td>{{index+1}}</td>
                            <td>{{findCategory(product.category_id)}}</td>
                            <td>{{product.name}}</td>
                            <td>
                                <img :src="`${$store.state.serverPath}/storage/${product.image}`" :alt="product.name" class="table-image" />
                            </td>
                            <td>
                                <button class="btn btn-primary btn-sm" v-on:click="editProduct(product)"><span class="fa fa-edit"></span></button>
                                <button class="btn btn-danger btn-sm" v-on:click="deleteProduct(product)"><span class="fa fa-trash"></span></button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="text-center" v-show="moreExists">
                    <button type="button" class="btn btn-primary btn-sm" v-on:click="loadMore"><span class="fa fa-arrow-down"></span> Load More</button>
                </div>
            </div>
        </div>

        <b-modal ref="newProductModal" hide-footer title="Add New Product">
            <div class="d-block">
                <form v-on:submit.prevent="createProduct">
                    <div class="form-group">
                        <label for="category_id">Category</label>
                        <select v-model="productData.category_id" id="category_id" class="form-control">
                            <option value="">Choose Category</option>
                            <option v-for="(category, index) in categories" :value="category.id" :key="index">{{category.name}}</option>
                        </select>
                        <div class="invalid-feedback" v-if="errors.category_id">{{errors.category_id[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label for="name">Enter Name</label>
                        <input type="text" v-model="productData.name" class="form-control" id="name" placeholder="Enter product name">
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label for="image">Choose an image</label>
                        <div v-if="productData.image.name">
                            <img src="" ref="newProductImageDispaly" class="w-150px" />
                        </div>
                        <input type="file" v-on:change="attachImage" ref="newProductImage" class="form-control" id="image" />
                        <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                    </div>

                    <hr>
                    <div class="text-right">
                        <button type="button" class="btn btn-default" v-on:click="hideNewProductModal">Cancel</button>
                        <button type="submit" class="btn btn-primary"><span class="fa fa-check"></span> Save</button>
                    </div>
                </form>
            </div>
        </b-modal>

        <b-modal ref="editProductModal" hide-footer title="Update Product">
            <div class="d-block">
                <form v-on:submit.prevent="updateProduct">
                    <div class="form-group">
                        <label for="category_id">Category</label>
                        <select v-model="editProductData.category_id" id="category_id" class="form-control">
                            <option value="">Choose Category</option>
                            <option v-for="(category, index) in categories" :value="category.id" :key="index">{{category.name}}</option>
                        </select>
                        <div class="invalid-feedback" v-if="errors.category_id">{{errors.category_id[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label for="name">Enter Name</label>
                        <input type="text" v-model="editProductData.name" class="form-control" id="name" placeholder="Enter product name">
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label for="image">Choose an image</label>
                        <div>
                            <img :src="`${$store.state.serverPath}/storage/${editProductData.image}`" ref="editProductImageDispaly" class="w-150px" />
                        </div>
                        <input type="file" v-on:change="editAttachImage" ref="editProductImage" class="form-control" id="image" />
                        <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                    </div>

                    <hr>
                    <div class="text-right">
                        <button type="button" class="btn btn-default" v-on:click="hideEditProductModal">Cancel</button>
                        <button type="submit" class="btn btn-primary"><span class="fa fa-check"></span> Update</button>
                    </div>
                </form>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import * as productService from '../services/product_service';
    export default {
        name: 'product',
        data() {
            return {
                categories: [],
                products: [],
                productData: {
                    category_id: '',
                    name: '',
                    image: ''
                },
                moreExists: false,
                nextPage: 0,
                editProductData: {},
                errors: {}
            }
        },
        mounted() {
            this.loadCategories();
            this.loadProducts();
        },
        methods: {
            loadCategories: async function() {
                try {
                    const response = await productService.loadCategories();
                    this.categories = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occurred, Please refresh!',
                        time: 5000
                    });
                }
            },
            loadProducts: async function() {
                try {
                    const response = await productService.loadProducts();
                    this.products = response.data.data;

                    if (response.data.current_page < response.data.last_page) {
                        this.moreExists = true;
                        this.nextPage = response.data.current_page + 1;
                    } else {
                        this.moreExists = false;
                    }
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occurred, Please refresh!',
                        time: 5000
                    });
                }
            },
            attachImage() {
                this.productData.image = this.$refs.newProductImage.files[0];
                let reader = new FileReader();
                reader.addEventListener('load', function() {
                    this.$refs.newProductImageDispaly.src = reader.result;
                }.bind(this), false);

                reader.readAsDataURL(this.productData.image);
            },
            hideNewProductModal() {
                this.$refs.newProductModal.hide();
            },
            showNewProductModal() {
                this.$refs.newProductModal.show();
            },
            createProduct: async function() {
                let formData = new FormData();
                formData.append('category_id', this.productData.category_id);
                formData.append('name', this.productData.name);
                formData.append('image', this.productData.image);

                try {
                    const response = await productService.createProduct(formData);
                    this.products.unshift(response.data);
                    this.hideNewProductModal();
                    this.flashMessage.success({
                        message: 'Product stored successfully!',
                        time: 5000
                    });
                    this.productData = {
                        category_id: '',
                        name: '',
                        image: ''
                    };
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        default:
                            this.flashMessage.error({
                                message: 'Some error occurred, Please try again!',
                                time: 5000
                            });
                            break;
                    }
                }
            },
            deleteProduct: async function(product) {
                if (!window.confirm(`Are you sure you want to delete ${product.name}`)) {
                    return;
                }

                try {
                    await productService.deleteProduct(product.id);

                    this.products = this.products.filter(obj => {
                        return obj.id != product.id;
                    });

                    this.flashMessage.success({
                        message: 'Product deleted successfully!',
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                }
            },
            hideEditProductModal() {
                this.$refs.editProductModal.hide();
            },
            showEditProductModal() {
                this.$refs.editProductModal.show();
            },
            editProduct(product) {
                this.editProductData = {...product};
                this.showEditProductModal();
            },
            editAttachImage() {
                this.editProductData.image = this.$refs.editProductImage.files[0];
                let reader = new FileReader();
                reader.addEventListener('load', function() {
                    this.$refs.editProductImageDispaly.src = reader.result;
                }.bind(this), false);

                reader.readAsDataURL(this.editProductData.image);
            },
            updateProduct: async function() {
                try {
                    const formData = new FormData();
                    formData.append('category_id', this.editProductData.category_id);
                    formData.append('name', this.editProductData.name);
                    formData.append('image', this.editProductData.image);
                    formData.append('_method', 'put');

                    const response = await productService.updateProduct(this.editProductData.id, formData);
                    this.products.map(product => {
                        if (product.id == response.data.id) {
                            for (let key in response.data) {
                                product[key] = response.data[key];
                            }
                        }
                    });

                    this.hideEditProductModal();
                    this.flashMessage.success({
                        message: 'Product updated successfully!',
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                }
            },
            loadMore: async function() {
                try {
                    const response = await productService.loadMore(this.nextPage);
                    if (response.data.current_page < response.data.last_page) {
                        this.moreExists = true;
                        this.nextPage = response.data.current_page + 1;
                    } else {
                        this.moreExists = false;
                    }

                    response.data.data.forEach(data => {
                        this.products.push(data);
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occurred during loading more products',
                        time: 5000
                    });
                }
            },
            findCategory(category_id) {
                let category_name = '';
                this.categories.forEach(category => {
                    if (category.id == category_id) {
                        category_name = category.name;
                    }
                });

                return category_name;
            }
        }
    }
</script>
