<?php

namespace App\Http\Controllers;


use App\Product;
use App\Sale;
use App\User;
use App\Http\Resources\Sale as SaleResource;
use App\Http\Resources\SaleCollection;
use Illuminate\Http\Request;


class SaleController extends Controller
{
    private static $rules =[
        'user_id' => 'required',

    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function indexsales(Product $product)
    {

        return response()->json(SaleResource::collection($product->sale->sortByDesc('created_at')), 200);

    }
    public function index()
    {
       // $this->authorize('viewAny', Sale::class);

        return new SaleCollection(Sale::paginate (25));
    }
    public function show(Sale $id)
    {
        $this->authorize('view', $id);
        return response()->json( new SaleResource($id), 200);
    }
    public function store(Request $request, Product $product)
    {
        //$this->authorize('create', Sale::class);
        $request->validate([]);
        //return Sale::create($request->all());

        $sale = $product->sale()->save(new Sale($request->all()));

        return response()->json(new SaleResource($sale), 201);
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $sales = Sale::findOrFail($id);
        $sales->update($request->all());
        return $sales;
    }
    public function delete(Request $request, $id)
    {
        $sales = Sale::findOrFail($id);
        $sales->delete();
        return 204;
    }
}
