<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionsCollection;
use App\Http\Resources\QuestionsCollection as QuestionsResource;
use App\Questions;
use Illuminate\Http\Request;

class QuestionsController extends Controller
{
    private static $rules =[
        'question' => 'required',

    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index()
    {

        return new QuestionsCollection(Questions::paginate (25));
    }
    public function show(Questions $id)
    {
        $this->authorize('view', $id);
        return response()->json( new QuestionsResource($id), 200);
    }
    public function store(Request $request)
    {
        $this->authorize('create', Questions::class);
        $request->validate(self::$rules,self::$messages);
        return Questions::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $questions = Questions::findOrFail($id);
        $questions->update($request->all());
        return $questions;
    }
    public function delete(Request $request, $id)
    {
        $questions = Questions::findOrFail($id);
        $questions->delete();
        return 204;
    }
}
