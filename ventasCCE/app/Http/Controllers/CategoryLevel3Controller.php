<?php

namespace App\Http\Controllers;

use App\CategoryLevel3;
use App\Http\Resources\CategoryLevel3 as CategoryLevel3Resource;
use App\Http\Resources\CategoryLevel3Collection;
use Illuminate\Http\Request;

class CategoryLevel3Controller extends Controller
{
    private static $rules =[
        'name' => 'required|string|max:30',

    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index()
    {
        //$this->authorize('viewAny', CategoryLevel3::class);
        return new CategoryLevel3Collection(CategoryLevel3::paginate (200));
    }
    public function show(CategoryLevel3 $id)
    {
        $this->authorize('view', $id);
        return response()->json( new CategoryLevel3Resource($id), 200);
    }
    public function store(Request $request)
    {
        $this->authorize('create', CategoryLevel3::class);
        $request->validate(self::$rules,self::$messages);
        return CategoryLevel3::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $category3 = CategoryLevel3::findOrFail($id);
        $category3->update($request->all());
        return $category3;
    }
    public function delete(Request $request, $id)
    {
        $category3 = CategoryLevel3::findOrFail($id);
        $category3->delete();
        return 204;
    }
}
