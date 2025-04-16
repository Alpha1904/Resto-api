import ApiResponse from "../helpers/response.js";

class CategoryController {
    /* 
    * Retrieving all categories with pagination
    */
    static getAllWithPagination() {

    }

    /* 
     * Retrieving all categories
     */
    static getAll() {

    }

    /*
    * Create new category
    */
    static create(req, res, next) {
        const data = req.body;
        try {
            ApiResponse.success(res, "Category created successfully", data, 201);
        } catch (error) {
            ApiResponse.error(res, 'Internal Server Error', error, 500);
            console.log("Error occurs when creating category :",error);
            next(error);
        }
    }

    /*
    *  Category retrieved by Id
    */
    static getById() {

    }

    /*
    * Update category by Id
    */
    static update() {

    }

    /*
    * Delete category by Id
    */
    static delete() {

    }
}

export default CategoryController;