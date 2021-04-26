<?php

namespace App\Http\Controllers;

use App\Cultural_Projects;
use App\Http\Resources\Cultural_Project;
use App\Http\Resources\Cultural_Project as Cultural_ProjectResource;
use App\Http\Resources\Cultural_ProjectCollection;
use Illuminate\Http\Request;

class Cultural_ProjectsController extends Controller
{
    private static $rules =[
        'project_name' => 'required|string|max:30',
        'project_description' => 'required|string|max:250',
        'project_type' => 'required',
        'project_place' => 'required',

    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index()
    {
      //  $this->authorize('viewAny', Cultural_Project::class);

        return new RecognitionCollection(Recognition::paginate (25));
    }
    public function show(Cultural_Projects $id)
    {
        $this->authorize('view', $id);
        return response()->json( new Cultural_ProjectResource($id), 200);
    }
    public function store(Request $request)
    {
        $this->authorize('create', Cultural_Project::class);
        $request->validate(self::$rules,self::$messages);
        return Cultural_Projects::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $culturalprojects = Cultural_Projects::findOrFail($id);
        $culturalprojects->update($request->all());
        return $culturalprojects;
    }
    public function delete(Request $request, $id)
    {
        $culturalprojects = Cultural_Projects::findOrFail($id);
        $culturalprojects->delete();
        return 204;
    }
}
