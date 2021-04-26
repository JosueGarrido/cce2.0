<?php

namespace App\Http\Controllers;


use App\Web_Links;
use App\Http\Resources\Web_Link as Web_LinkResource;
use App\Http\Resources\Web_LinkCollection;
use Illuminate\Http\Request;

class Web_LinksController extends Controller
{
    private static $rules =[
        'link_type' => 'required|string|max:30',
        'link_description' => 'required|string|max:30',

    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index()
    {
       // $this->authorize('viewAny', Web_Links::class);

        return new Web_LinkCollection(Web_Links::paginate (25));
    }
    public function show(Web_Links $id)
    {
        $this->authorize('view', $id);
        return response()->json( new Web_LinkResource($id), 200);
    }
    public function store(Request $request)
    {
        $this->authorize('create', Web_Links::class);
        $request->validate(self::$rules,self::$messages);
        return Web_Links::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $weblinks = Web_Links::findOrFail($id);
        $weblinks->update($request->all());
        return $weblinks;
    }
    public function delete(Request $request, $id)
    {
        $weblinks = Web_Links::findOrFail($id);
        $weblinks->delete();
        return 204;
    }
}
