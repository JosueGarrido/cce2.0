<?php

namespace App\Http\Controllers;

use App\CategoryLevel2;
use App\Http\Resources\CategoryLevel2 as CategoryLevel2Resource;
use App\Http\Resources\CategoryLevel2Collection;
use Illuminate\Http\Request;

class CategoryLevel2Controller extends Controller
{
    private static $rules =[
        'name' => 'required|string|max:30',


    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index()
    {
       // $this->authorize('viewAny', CategoryLevel2::class);
        return new CategoryLevel2Collection(CategoryLevel2::paginate (200));
    }
    public function show(CategoryLevel2 $id)
    {
        $this->authorize('view', $id);
        return response()->json( new CategoryLevel2Resource($id), 200);
    }
    public function store(Request $request)
    {
        $this->authorize('create', CategoryLevel2::class);
        $request->validate(self::$rules,self::$messages);
        return CategoryLevel2::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $category2 = CategoryLevel2::findOrFail($id);
        $category2->update($request->all());
        return $category2;
    }
    public function delete(Request $request, $id)
    {
        $category2 = CategoryLevel2::findOrFail($id);
        $category2->delete();
        return 204;
    }
}
