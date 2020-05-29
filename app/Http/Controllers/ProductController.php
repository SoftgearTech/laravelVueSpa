<?php

namespace App\Http\Controllers;

use App\Product;
use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Disply a listing of the categories
     *
     * * @return \Illuminate\Http\Response
     */
    public function categories() {
        $categories = Category::all();
        return response()->json($categories, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::orderBy('created_at', 'desc')->paginate(5);
        return response()->json($products, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'category_id' => 'required',
            'name' => 'required|min:3',
            'image' => 'required|image|mimes:jpeg,png,jpg'
        ]);

        $product = new Product();
        $product->category_id = $request->category_id;
        $product->name = $request->name;

        $path = $request->file('image')->store('products_images');

        $product->image = $path;

        if ($product->save()) {
            return response()->json($product, 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, please try agian',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'category_id' => 'required',
            'name' => 'required|min:3',
        ]);

        $product->category_id = $request->category_id;
        $product->name = $request->name;
        $oldPath = $product->image;
        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg',
            ]);

            $path = $request->file('image')->store('products_images');
            $product->image = $path;

            Storage::delete($oldPath);
        }

        if ($product->save()) {
            return response()->json($product, 200);
        } else {
            Storage::delete($path);
            return response()->json([
                'message' => 'Some error occurred, Please try agian!',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        if ($product->delete()) {
            Storage::delete($product->image);

            return response()->json([
                'message' => 'Product deleted successfully!',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, please try again',
                'status_code' => 500
            ], 500);
        }
    }
}
