<?php

namespace App\Http\Controllers;

use App\AudioVideoFormat;
use App\Http\Resources\AudioVideoFormat as AudioVideoFormatResource;
use App\Http\Resources\AudioVideoFormatCollection;
use Illuminate\Http\Request;

class AudioVideoFormatController extends Controller
{
    private static $rules =[
        'name' => 'required|string|max:30',
        'description' => 'required|string|max:30',


    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index()
    {
       // $this->authorize('viewAny', AudioVideoFormat::class);
        return new AudioVideoFormatCollection(AudioVideoFormat::paginate (25));
    }
    public function show(AudioVideoFormat $id)
    {
        $this->authorize('view', $id);
        return response()->json( new AudioVideoFormatResource($id), 200);
    }
    public function store(Request $request)
    {
        $this->authorize('create', AudioVideoFormat::class);
        $request->validate(self::$rules,self::$messages);
        return AudioVideoFormat::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $audioformats = AudioVideoFormat::findOrFail($id);
        $audioformats->update($request->all());
        return $audioformats;
    }
    public function delete(Request $request, $id)
    {
        $audioformats = AudioVideoFormat::findOrFail($id);
        $audioformats->delete();
        return 204;
    }
}

