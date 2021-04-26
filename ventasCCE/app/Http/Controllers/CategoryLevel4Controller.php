<?php

namespace App\Http\Controllers;

use App\CategoryLevel4;
use App\Http\Resources\CategoryLevel4 as CategoryLevel4Resource;
use App\Http\Resources\CategoryLevel4Collection;
use Illuminate\Http\Request;

class CategoryLevel4Controller extends Controller
{
    private static $rules =[
        'name' => 'required|string|max:30',

    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index()
    {
       // $this->authorize('viewAny', CategoryLevel4::class);

        return new CategoryLevel4Collection(CategoryLevel4::paginate (25));
    }
    public function show(CategoryLevel4 $id)
    {
        $this->authorize('view', $id);
        return response()->json( new CategoryLevel4Resource($id), 200);
    }
    public function store(Request $request)
    {
        $this->authorize('create', CategoryLevel4::class);
        $request->validate(self::$rules,self::$messages);
        return CategoryLevel4::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $category4 = CategoryLevel4::findOrFail($id);
        $category4->update($request->all());
        return $category4;
    }
    public function delete(Request $request, $id)
    {
        $category4 = CategoryLevel4::findOrFail($id);
        $category4->delete();
        return 204;
    }
}
