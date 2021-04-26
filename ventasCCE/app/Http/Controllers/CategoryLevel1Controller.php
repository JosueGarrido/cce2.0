<?php

namespace App\Http\Controllers;

use App\CategoryLevel1;
use App\Http\Resources\CategoryLevel1 as CategoryLevel1Resource;
use App\Http\Resources\CategoryLevel1Collection;
use Illuminate\Http\Request;

class CategoryLevel1Controller extends Controller
{
    private static $rules =[
        'name' => 'required|string|max:30',

    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index()
    {
     //   $this->authorize('viewAny', CategoryLevel1::class);
        return new CategoryLevel1Collection(CategoryLevel1::paginate (25));
    }
    public function show(CategoryLevel1 $id)
    {
        $this->authorize('view', $id);
        return response()->json( new CategoryLevel1Resource($id), 200);
    }
    public function store(Request $request)
    {
        $this->authorize('create', CategoryLevel1::class);
        $request->validate(self::$rules,self::$messages);
        return CategoryLevel1::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $category1 = CategoryLevel1::findOrFail($id);
        $category1->update($request->all());
        return $category1;
    }
    public function delete(Request $request, $id)
    {
        $category1 = CategoryLevel1::findOrFail($id);
        $category1->delete();
        return 204;
    }
}
