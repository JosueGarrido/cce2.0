<?php

namespace App\Http\Controllers;

use App\PhotoFormat;
use App\Http\Resources\PhotoFormat as PhotoFormatResource;
use App\Http\Resources\PhotoFormatCollection;
use Illuminate\Http\Request;

class PhotoFormatController extends Controller
{
    private static $rules =[
        'name' => 'required|string|max:30',
        'description' => 'required|string|max:250',


    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index()
    {
        $this->authorize('viewAny', PhotoFormat::class);

        return new PhotoFormatCollection(PhotoFormat::paginate (25));
    }
    public function show(PhotoFormat $id)
    {
       // $this->authorize('view', $id);
        return response()->json( new PhotoFormatResource($id), 200);
    }
    public function store(Request $request)
    {
        $this->authorize('create', PhotoFormat::class);
        $request->validate(self::$rules,self::$messages);
        return PhotoFormat::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $photoformats = PhotoFormat::findOrFail($id);
        $photoformats->update($request->all());
        return $photoformats;
    }
    public function delete(Request $request, $id)
    {
        $photoformats = PhotoFormat::findOrFail($id);
        $photoformats->delete();
        return 204;
    }
}
